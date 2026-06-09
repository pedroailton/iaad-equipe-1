import streamlit as st
import pandas as pd
import datetime

import crud_partidas

TABLE_HEIGHT = 300

def render_partidas_page():
    st.markdown('<div class="custom-card"><h3>📅 Gestão de Partidas</h3><p>Controle a tabela de jogos e resultados da Copa do Mundo 2026.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    sucesso, dados = crud_partidas.listar_partidas()
    if sucesso and dados:
        df = pd.DataFrame(dados)
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            height=TABLE_HEIGHT,
            column_config={
                "id_partida":                st.column_config.NumberColumn("ID",           format="%d"),
                "data_partida":              st.column_config.DateColumn("Data",           format="DD/MM/YYYY"),
                "nome_estadio":              st.column_config.TextColumn("Estádio"),
                "selecao_1":                 st.column_config.TextColumn("Seleção 1"),
                "selecao_2":                 st.column_config.TextColumn("Seleção 2"),
                "quantidade_gols_selecao_1": st.column_config.NumberColumn("Gols 1",       format="%d"),
                "quantidade_gols_selecao_2": st.column_config.NumberColumn("Gols 2",       format="%d"),
                "vencedor":                  st.column_config.TextColumn("Vencedor"),
            }
        )
        st.caption(f"Total: {len(df)} partida(s) | Vencedor vazio = empate")
    elif sucesso and not dados:
        st.info("Nenhuma partida cadastrada.")
    else:
        st.error(f"❌ {dados}")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_partida", clear_on_submit=True):
            col1, col2, col3 = st.columns(3)
            data_partida = col1.date_input("Data da Partida *", min_value=datetime.date(2026, 1, 1))
            id_estadio   = col2.number_input("ID do Estádio (FK) *", min_value=1, step=1,
                                             help="ID do estádio onde a partida será realizada")
            resultado    = col3.selectbox("Resultado Final", ["Seleção 1 Venceu", "Seleção 2 Venceu", "Empate (sem vencedor)"])

            col4, col5 = st.columns(2)
            id_sel1 = col4.number_input("ID Seleção 1 (FK) *", min_value=1, step=1,
                                        help="ID da seleção mandante / listada primeiro")
            id_sel2 = col5.number_input("ID Seleção 2 (FK) *", min_value=1, step=1,
                                        help="ID da seleção visitante / listada segundo")

            col6, col7 = st.columns(2)
            gols1 = col6.number_input("Gols Seleção 1 *", min_value=0, step=1)
            gols2 = col7.number_input("Gols Seleção 2 *", min_value=0, step=1)

            submit = st.form_submit_button("Cadastrar Partida", type="primary")
            if submit:
                if resultado == "Seleção 1 Venceu":
                    vencedor = int(id_sel1)
                elif resultado == "Seleção 2 Venceu":
                    vencedor = int(id_sel2)
                else:
                    vencedor = None

                ok, msg = crud_partidas.inserir_partida(
                    data_partida, int(id_estadio), int(id_sel1), int(id_sel2),
                    int(gols1), int(gols2), vencedor
                )
                if ok:
                    st.success(f"✅ {msg}")
                else:
                    st.error(f"❌ {msg}")

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_partida"):
            st.info("Deixe os campos em branco para não alterá-los.")
            id_partida = st.number_input("ID da Partida a atualizar *", min_value=1, step=1, key="upd_part_id")

            col1, col2 = st.columns(2)
            alterar_data = col1.checkbox("Alterar Data?", key="upd_part_dt_chk")
            data_partida = col1.date_input("Nova Data", min_value=datetime.date(2026, 1, 1), key="upd_part_dt") if alterar_data else None
            id_estadio = col2.number_input("Novo ID Estádio (0 = manter)", min_value=0, step=1, key="upd_part_est")

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
                campos = {}
                if data_partida:      campos["data_partida"] = data_partida
                if id_estadio > 0:    campos["id_estadio"] = int(id_estadio)
                if id_sel1 > 0:       campos["id_selecao_1"] = int(id_sel1)
                if id_sel2 > 0:       campos["id_selecao_2"] = int(id_sel2)
                if gols1 >= 0:        campos["quantidade_gols_selecao_1"] = int(gols1)
                if gols2 >= 0:        campos["quantidade_gols_selecao_2"] = int(gols2)

                if resultado == "Seleção 1 Venceu":
                    campos["vencedor"] = int(id_sel1) if id_sel1 > 0 else None
                elif resultado == "Seleção 2 Venceu":
                    campos["vencedor"] = int(id_sel2) if id_sel2 > 0 else None
                elif resultado == "Empate":
                    campos["vencedor"] = None

                if not campos:
                    st.warning("Preencha ao menos um campo para atualizar.")
                else:
                    ok, msg = crud_partidas.atualizar_partida(int(id_partida), **campos)
                    if ok:
                        st.success(f"✅ {msg}")
                    else:
                        st.error(f"❌ {msg}")

    # REMOVER
    with tab_delete:
        id_partida = st.number_input("ID da Partida para Remover", min_value=1, step=1, key="del_part_id")
        if st.button("Remover Partida", type="primary"):
            ok, msg = crud_partidas.deletar_partida(int(id_partida))
            if ok:
                st.success(f"✅ {msg}")
            else:
                st.error(f"❌ {msg}")
