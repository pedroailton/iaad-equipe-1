import streamlit as st
import pandas as pd

import crud_selecoes

TABLE_HEIGHT = 300

def render_selecoes_page():
    st.markdown('<div class="custom-card"><h3>Gestão de Seleções</h3><p>Administre as seleções participantes da Copa do Mundo 2026.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    table_placeholder = st.empty()

    def atualizar_tabela():
        sucesso, dados = crud_selecoes.listar_selecoes()
        with table_placeholder.container():
            if sucesso and dados:
                df = pd.DataFrame(dados)
                st.dataframe(
                    df,
                    use_container_width=True,
                    hide_index=True,
                    height=TABLE_HEIGHT,
                    column_config={
                        "id_selecao":   st.column_config.NumberColumn("ID",               format="%d"),
                        "nome_selecao": st.column_config.TextColumn("Seleção"),
                        "continente":   st.column_config.TextColumn("Continente"),
                        "tecnico":      st.column_config.TextColumn("Técnico"),
                        "titulos":      st.column_config.NumberColumn("Títulos Mundiais", format="%d"),
                    }
                )
                st.caption(f"Total: {len(df)} seleção(ões)")
            elif sucesso and not dados:
                st.info("Nenhuma seleção cadastrada.")
            else:
                st.error(f"❌ {dados}")

    atualizar_tabela()

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_selecao", clear_on_submit=True):
            nome_sel  = st.text_input("Nome da Seleção *")

            col1, col2, col3 = st.columns(3)
            continente = col1.text_input("Continente *")
            tecnico    = col2.text_input("Técnico *")
            titulos    = col3.number_input("Títulos Mundiais", min_value=0, step=1)

            submit = st.form_submit_button("Cadastrar Seleção", type="primary")
            if submit:
                if not nome_sel or not continente or not tecnico:
                    st.error("Preencha todos os campos obrigatórios (*).")
                else:
                    ok, msg = crud_selecoes.inserir_selecao(nome_sel, continente, tecnico, int(titulos))
                    if ok:
                        st.success(f"✅ {msg}")
                        atualizar_tabela()
                    else:
                        st.error(f"❌ {msg}")

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_selecao"):
            st.info("Deixe os campos em branco para não alterá-los.")
            id_sel = st.number_input("ID da Seleção a atualizar *", min_value=1, step=1, key="upd_sel_id")

            col1, col2 = st.columns(2)
            nome_sel   = col1.text_input("Novo Nome",       key="upd_sel_nome")
            continente = col2.text_input("Novo Continente", key="upd_sel_cont")

            col3, col4 = st.columns(2)
            tecnico = col3.text_input("Novo Técnico", key="upd_sel_tec")
            titulos = col4.number_input("Novos Títulos", min_value=0, step=1, key="upd_sel_tit")
            alterar_titulos = st.checkbox("Alterar número de títulos?", key="upd_sel_tit_chk")

            submit = st.form_submit_button("Atualizar Seleção", type="primary")
            if submit:
                campos = {}
                if nome_sel:    campos["nome_selecao"] = nome_sel
                if continente:  campos["continente"] = continente
                if tecnico:     campos["tecnico"] = tecnico
                if alterar_titulos: campos["titulos"] = int(titulos)

                if not campos:
                    st.warning("Preencha ao menos um campo para atualizar.")
                else:
                    ok, msg = crud_selecoes.atualizar_selecao(int(id_sel), **campos)
                    if ok:
                        st.success(f"✅ {msg}")
                        atualizar_tabela()
                    else:
                        st.error(f"❌ {msg}")

    # REMOVER
    with tab_delete:
        st.warning("⚠️ Ao remover uma seleção, jogadores e partidas vinculados serão removidos em cascata.")
        id_sel = st.number_input("ID da Seleção para Remover", min_value=1, step=1, key="del_sel_id")
        if st.button("Remover Seleção", type="primary"):
            ok, msg = crud_selecoes.deletar_selecao(int(id_sel))
            if ok:
                st.success(f"✅ {msg}")
                atualizar_tabela()
            else:
                st.error(f"❌ {msg}")