import streamlit as st
import pandas as pd
import datetime
import db

TABLE_HEIGHT = 300  # ~50vh em pixels

def render_partidas_page():
    st.markdown('<div class="custom-card"><h3>📅 Gestão de Partidas</h3><p>Controle a tabela de jogos e resultados da Copa do Mundo 2026.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    df = db.get_partidas()
    if not df.empty:
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            height=TABLE_HEIGHT,
            column_config={
                "id_partida":                   st.column_config.NumberColumn("ID",           format="%d"),
                "data_partida":                 st.column_config.DateColumn("Data",           format="DD/MM/YYYY"),
                "id_estadio":                   st.column_config.NumberColumn("Estádio",      format="%d"),
                "id_selecao_1":                 st.column_config.NumberColumn("Seleção 1",    format="%d"),
                "id_selecao_2":                 st.column_config.NumberColumn("Seleção 2",    format="%d"),
                "quantidade_gols_selecao_1":    st.column_config.NumberColumn("Gols 1",       format="%d"),
                "quantidade_gols_selecao_2":    st.column_config.NumberColumn("Gols 2",       format="%d"),
                "vencedor":                     st.column_config.NumberColumn("Vencedor (ID)",format="%d"),
            }
        )
        st.caption(f"Total: {len(df)} partida(s) | Vencedor = NULL indica empate")
    else:
        st.info("Nenhuma partida cadastrada.")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_partida", clear_on_submit=True):
            col1, col2, col3 = st.columns(3)
            data_partida = col1.date_input("Data da Partida",        min_value=datetime.date(2026, 6, 1))
            id_estadio   = col2.number_input("ID do Estádio (FK) *", min_value=1, max_value=16, step=1,
                                             help="IDs de 1 a 16 conforme os 16 estádios sede")
            resultado    = col3.selectbox("Resultado Final", ["Seleção 1 Venceu", "Seleção 2 Venceu", "Empate (sem vencedor)"])

            col4, col5 = st.columns(2)
            id_sel1 = col4.number_input("ID Seleção 1 (FK) *", min_value=1, step=1,
                                        help="ID da seleção que joga em casa / listada primeiro")
            id_sel2 = col5.number_input("ID Seleção 2 (FK) *", min_value=1, step=1,
                                        help="ID da seleção visitante / listada segundo")

            col6, col7 = st.columns(2)
            gols1 = col6.number_input("Gols Seleção 1", min_value=0, step=1)
            gols2 = col7.number_input("Gols Seleção 2", min_value=0, step=1)

            submit = st.form_submit_button("Cadastrar Partida", type="primary")
            if submit:
                if resultado == "Seleção 1 Venceu":
                    vencedor = int(id_sel1)
                elif resultado == "Seleção 2 Venceu":
                    vencedor = int(id_sel2)
                else:
                    vencedor = None
                db.insert_partida(None, data_partida, int(id_estadio),
                                  int(id_sel1), int(id_sel2), int(gols1), int(gols2), vencedor)

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_partida"):
            st.info("Deixe os campos em branco para não alterá-los.")
            id_partida = st.number_input("ID da Partida a atualizar *", min_value=1, step=1, key="upd_part_id")

            col1, col2 = st.columns(2)
            alterar_data = col1.checkbox("Alterar Data?", key="upd_part_dt_chk")
            data_partida = col1.date_input("Nova Data", min_value=datetime.date(2026, 6, 1), key="upd_part_dt") if alterar_data else None

            id_estadio = col2.number_input("Novo ID Estádio (0 = manter)", min_value=0, max_value=16, step=1, key="upd_part_est")

            col3, col4 = st.columns(2)
            id_sel1 = col3.number_input("Novo ID Seleção 1 (0 = manter)", min_value=0, step=1, key="upd_part_s1")
            id_sel2 = col4.number_input("Novo ID Seleção 2 (0 = manter)", min_value=0, step=1, key="upd_part_s2")

            col5, col6 = st.columns(2)
            gols1 = col5.number_input("Novos Gols Seleção 1 (-1 = manter)", min_value=-1, step=1, key="upd_part_g1")
            gols2 = col6.number_input("Novos Gols Seleção 2 (-1 = manter)", min_value=-1, step=1, key="upd_part_g2")

            resultado = st.selectbox("Novo Resultado",
                                     ["(Manter atual)", "Seleção 1 Venceu", "Seleção 2 Venceu", "Empate"],
                                     key="upd_part_res")

            submit = st.form_submit_button("Atualizar Partida", type="primary")
            if submit:
                # Resolve vencedor
                if resultado == "(Manter atual)":
                    vencedor = "SKIP"
                elif resultado == "Empate":
                    vencedor = "EMPATE"
                elif resultado == "Seleção 1 Venceu":
                    vencedor = int(id_sel1) if id_sel1 > 0 else "SKIP"
                else:
                    vencedor = int(id_sel2) if id_sel2 > 0 else "SKIP"

                db.update_partida(
                    int(id_partida),
                    data_partida,
                    int(id_estadio) if id_estadio > 0 else None,
                    int(id_sel1)    if id_sel1 > 0    else None,
                    int(id_sel2)    if id_sel2 > 0    else None,
                    int(gols1)      if gols1 >= 0     else None,
                    int(gols2)      if gols2 >= 0     else None,
                    vencedor
                )

    # REMOVER
    with tab_delete:
        id_partida = st.number_input("ID da Partida para Remover", min_value=1, step=1, key="del_part_id")
        if st.button("Remover Partida", type="primary"):
            db.delete_partida(int(id_partida))
