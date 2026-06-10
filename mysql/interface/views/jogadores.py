import streamlit as st
import pandas as pd
import datetime

import crud_jogadores

TABLE_HEIGHT = 300

def render_jogadores_page():
    st.markdown('<div class="custom-card"><h3>🏃 Gestão de Jogadores</h3><p>Controle o elenco de cada seleção.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    sucesso, dados = crud_jogadores.listar_jogadores()
    if sucesso and dados:
        df = pd.DataFrame(dados)
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            height=TABLE_HEIGHT,
            column_config={
                "id_jogador":      st.column_config.NumberColumn("ID",              format="%d"),
                "nome_jogador":    st.column_config.TextColumn("Nome do Jogador"),
                "posicao":         st.column_config.TextColumn("Posição"),
                "numero_camisa":   st.column_config.NumberColumn("Camisa",          format="%d"),
                "data_nascimento": st.column_config.DateColumn("Nascimento",        format="DD/MM/YYYY"),
                "id_selecao":      st.column_config.NumberColumn("ID Seleção",      format="%d"),
                "nome_selecao":    st.column_config.TextColumn("Seleção"),
            }
        )
        st.caption(f"Total: {len(df)} jogador(es) | Posições válidas: {', '.join(crud_jogadores.POSICOES_VALIDAS)}")
    elif sucesso and not dados:
        st.info("Nenhum jogador cadastrado.")
    else:
        st.error(f"❌ {dados}")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_jogador", clear_on_submit=True):
            col1, col2 = st.columns(2)
            nome_jog = col1.text_input("Nome do Jogador *")
            id_sel   = col2.number_input("ID Seleção (FK) *", min_value=1, step=1,
                                         help="ID da seleção à qual o jogador pertence")

            col3, col4, col5 = st.columns(3)
            posicao   = col3.selectbox("Posição *", crud_jogadores.POSICOES_VALIDAS)
            camisa    = col4.number_input("Número da Camisa *", min_value=1, max_value=99, step=1)
            data_nasc = col5.date_input("Data de Nascimento *", min_value=datetime.date(1970, 1, 1))

            submit = st.form_submit_button("Cadastrar Jogador", type="primary")
            if submit:
                if not nome_jog:
                    st.error("O nome do jogador é obrigatório.")
                else:
                    ok, msg = crud_jogadores.inserir_jogador(nome_jog, posicao, int(camisa), data_nasc, int(id_sel))
                    if ok:
                        st.success(f"✅ {msg}")
                    else:
                        st.error(f"❌ {msg}")

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_jogador"):
            st.info("Deixe campos em branco para não alterá-los.")
            id_jog = st.number_input("ID do Jogador a atualizar *", min_value=1, step=1, key="upd_jog_id")

            col1, col2 = st.columns(2)
            nome_jog = col1.text_input("Novo Nome",       key="upd_jog_nome")
            posicao  = col2.selectbox("Nova Posição", ["(Manter atual)"] + crud_jogadores.POSICOES_VALIDAS, key="upd_jog_pos")

            col3, col4 = st.columns(2)
            camisa = col3.number_input("Novo Nº da Camisa (0 = manter)", min_value=0, max_value=99, step=1, key="upd_jog_cam")
            id_sel = col4.number_input("Novo ID Seleção (0 = manter)",   min_value=0, step=1,        key="upd_jog_sel")

            alterar_data = st.checkbox("Alterar data de nascimento?", key="upd_jog_dt_chk")
            data_nasc = st.date_input("Nova Data de Nascimento", key="upd_jog_dt") if alterar_data else None

            submit = st.form_submit_button("Atualizar Jogador", type="primary")
            if submit:
                campos = {}
                if nome_jog:                                     campos["nome_jogador"] = nome_jog
                if posicao != "(Manter atual)":                  campos["posicao"] = posicao
                if camisa > 0:                                   campos["numero_camisa"] = int(camisa)
                if data_nasc:                                    campos["data_nascimento"] = data_nasc
                if id_sel > 0:                                   campos["id_selecao"] = int(id_sel)

                if not campos:
                    st.warning("Preencha ao menos um campo para atualizar.")
                else:
                    ok, msg = crud_jogadores.atualizar_jogador(int(id_jog), **campos)
                    if ok:
                        st.success(f"✅ {msg}")
                    else:
                        st.error(f"❌ {msg}")

    # REMOVER
    with tab_delete:
        id_jog = st.number_input("ID do Jogador para Remover", min_value=1, step=1, key="del_jog_id")
        if st.button("Remover Jogador", type="primary"):
            ok, msg = crud_jogadores.deletar_jogador(int(id_jog))
            if ok:
                st.success(f"✅ {msg}")
            else:
                st.error(f"❌ {msg}")