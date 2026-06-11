import streamlit as st
import pandas as pd

import crud_estadios

TABLE_HEIGHT = 300

def render_estadios_page():
    st.markdown('<div class="custom-card"><h3>🏟️ Gestão de Estádios</h3><p>Administre as arenas sede da Copa do Mundo 2026 (EUA, México e Canadá).</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    table_placeholder = st.empty()

    def atualizar_tabela():
        sucesso, dados = crud_estadios.listar_estadios()
        with table_placeholder.container():
            if sucesso and dados:
                df = pd.DataFrame(dados)
                st.dataframe(
                    df,
                    use_container_width=True,
                    hide_index=True,
                    height=TABLE_HEIGHT,
                    column_config={
                        "id_estadio":   st.column_config.NumberColumn("ID",         format="%d"),
                        "nome_estadio": st.column_config.TextColumn("Estádio"),
                        "cidade":       st.column_config.TextColumn("Cidade"),
                        "pais":         st.column_config.TextColumn("País"),
                        "capacidade":   st.column_config.NumberColumn("Capacidade", format="%d"),
                    }
                )
                st.caption(f"Total: {len(df)} estádio(s)")
            elif sucesso and not dados:
                st.info("Nenhum estádio cadastrado.")
            else:
                st.error(f"❌ {dados}")

    atualizar_tabela()

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_estadio", clear_on_submit=True):
            col1, col2 = st.columns(2)
            nome_est = col1.text_input("Nome do Estádio *")
            cidade   = col2.text_input("Cidade *")

            col3, col4 = st.columns(2)
            pais       = col3.selectbox("País Sede", ["Estados Unidos", "México", "Canadá", "Outro"])
            capacidade = col4.number_input("Capacidade *", min_value=1, step=1000)

            submit = st.form_submit_button("Cadastrar Estádio", type="primary")
            if submit:
                if not nome_est or not cidade:
                    st.error("Preencha todos os campos obrigatórios (*).")
                else:
                    ok, msg = crud_estadios.inserir_estadio(nome_est, cidade, pais, int(capacidade))
                    if ok:
                        st.success(f"✅ {msg}")
                        atualizar_tabela()
                    else:
                        st.error(f"❌ {msg}")

    # ATUALIZAR
    with tab_update:
        with st.form("form_update_estadio"):
            st.info("Deixe os campos em branco para não alterá-los.")
            id_est = st.number_input("ID do Estádio a atualizar *", min_value=1, step=1, key="upd_est_id")

            col1, col2 = st.columns(2)
            nome_est = col1.text_input("Novo Nome",   key="upd_est_nome")
            cidade   = col2.text_input("Nova Cidade", key="upd_est_cid")

            col3, col4 = st.columns(2)
            pais = col3.text_input("Novo País", key="upd_est_pais")
            capacidade = col4.number_input("Nova Capacidade (0 = manter)", min_value=0, step=1000, key="upd_est_cap")

            submit = st.form_submit_button("Atualizar Estádio", type="primary")
            if submit:
                campos = {}
                if nome_est:       campos["nome_estadio"] = nome_est
                if cidade:         campos["cidade"] = cidade
                if pais:           campos["pais"] = pais
                if capacidade > 0: campos["capacidade"] = int(capacidade)

                if not campos:
                    st.warning("Preencha ao menos um campo para atualizar.")
                else:
                    ok, msg = crud_estadios.atualizar_estadio(int(id_est), **campos)
                    if ok:
                        st.success(f"✅ {msg}")
                        atualizar_tabela()
                    else:
                        st.error(f"❌ {msg}")

    # REMOVER
    with tab_delete:
        st.warning("⚠️ Ao remover um estádio, partidas vinculadas serão removidas em cascata.")
        id_est = st.number_input("ID do Estádio para Remover", min_value=1, step=1, key="del_est_id")
        if st.button("Remover Estádio", type="primary"):
            ok, msg = crud_estadios.deletar_estadio(int(id_est))
            if ok:
                st.success(f"✅ {msg}")
                atualizar_tabela()
            else:
                st.error(f"❌ {msg}")