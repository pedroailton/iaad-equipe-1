import streamlit as st
import pandas as pd
import datetime
import db

TABLE_HEIGHT = 300  # ~50vh em pixels

def render_jogadores_page():
    st.markdown('<div class="custom-card"><h3>🏃 Gestão de Jogadores</h3><p>Controle o elenco de cada seleção.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    df = db.get_jogadores()
    if not df.empty:
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            height=TABLE_HEIGHT,
            column_config={
                "id_jogador":      st.column_config.NumberColumn("ID",         format="%d"),
                "nome_jogador":    st.column_config.TextColumn("Nome do Jogador"),
                "posicao":         st.column_config.TextColumn("Posição"),
                "numero_camisa":   st.column_config.NumberColumn("Camisa",     format="%d"),
                "data_nascimento": st.column_config.DateColumn("Nascimento",   format="DD/MM/YYYY"),
                "id_selecao":      st.column_config.NumberColumn("ID Seleção", format="%d"),
            }
        )
        st.caption(f"Total: {len(df)} jogador(es) | Posições válidas: {', '.join(db.POSICOES)}")
    else:
        st.info("Nenhum jogador cadastrado.")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_jogador", clear_on_submit=True):
            col1, col2 = st.columns(2)
            nome_jog = col1.text_input("Nome do Jogador *")
            id_sel   = col2.number_input("ID Seleção (FK) *", min_value=1, step=1,
                                         help="ID da seleção à qual o jogador pertence")

            col3, col4, col5 = st.columns(3)
            posicao   = col3.selectbox("Posição *", db.POSICOES)
            camisa    = col4.number_input("Número da Camisa", min_value=1, max_value=99, step=1)
            data_nasc = col5.date_input("Data de Nascimento", min_value=datetime.date(1970, 1, 1))

            submit = st.form_submit_button("Cadastrar Jogador", type="primary")
            if submit:
                if not nome_jog:
                    st.error("O nome do jogador é obrigatório.")
                else:
                    db.insert_jogador(None, nome_jog, posicao, int(camisa), data_nasc, int(id_sel))

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_jogador"):
            st.info("Deixe campos em branco para não alterá-los. Para data de nascimento, marque a opção abaixo.")
            id_jog = st.number_input("ID do Jogador a atualizar *", min_value=1, step=1, key="upd_jog_id")

            col1, col2 = st.columns(2)
            nome_jog = col1.text_input("Novo Nome",       key="upd_jog_nome")
            posicao  = col2.selectbox("Nova Posição", ["(Manter atual)"] + db.POSICOES, key="upd_jog_pos")
            posicao_val = None if posicao == "(Manter atual)" else posicao

            col3, col4 = st.columns(2)
            camisa = col3.number_input("Novo Nº da Camisa (0 = manter)", min_value=0, max_value=99, step=1, key="upd_jog_cam")
            id_sel = col4.number_input("Novo ID Seleção (0 = manter)",   min_value=0, step=1,        key="upd_jog_sel")

            alterar_data = st.checkbox("Alterar data de nascimento?", key="upd_jog_dt_chk")
            data_nasc = st.date_input("Nova Data de Nascimento", key="upd_jog_dt") if alterar_data else None

            submit = st.form_submit_button("Atualizar Jogador", type="primary")
            if submit:
                db.update_jogador(
                    int(id_jog),
                    nome_jog or None,
                    posicao_val,
                    int(camisa) if camisa > 0 else None,
                    data_nasc,
                    int(id_sel) if id_sel > 0 else None
                )

    # REMOVER
    with tab_delete:
        id_jog = st.number_input("ID do Jogador para Remover", min_value=1, step=1, key="del_jog_id")
        if st.button("Remover Jogador", type="primary"):
            db.delete_jogador(int(id_jog))