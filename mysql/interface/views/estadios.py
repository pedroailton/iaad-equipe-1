import streamlit as st
import pandas as pd
import db

TABLE_HEIGHT = 300  # ~50vh em pixels

def render_estadios_page():
    st.markdown('<div class="custom-card"><h3>🏟️ Gestão de Estádios</h3><p>Administre as 16 arenas sede da Copa do Mundo 2026 (EUA, México e Canadá).</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    df = db.get_estadios()
    if not df.empty:
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            height=TABLE_HEIGHT,
            column_config={
                "id_estadio":   st.column_config.NumberColumn("ID",        format="%d"),
                "nome_estadio": st.column_config.TextColumn("Estádio"),
                "cidade":       st.column_config.TextColumn("Cidade"),
                "pais":         st.column_config.TextColumn("País"),
                "capacidade":   st.column_config.NumberColumn("Capacidade",format="%d"),
            }
        )
        st.caption(f"Total: {len(df)} estádio(s) | O banco comporta 16 estádios sede da Copa 2026")
    else:
        st.info("Nenhum estádio cadastrado.")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_estadio", clear_on_submit=True):
            col1, col2 = st.columns(2)
            nome_est = col1.text_input("Nome do Estádio *")
            cidade   = col2.text_input("Cidade")

            col3, col4 = st.columns(2)
            pais       = col3.selectbox("País Sede", ["Estados Unidos", "México", "Canadá", "Outro"])
            capacidade = col4.number_input("Capacidade", min_value=0, step=1000)

            submit = st.form_submit_button("Cadastrar Estádio", type="primary")
            if submit:
                if not nome_est:
                    st.error("O nome do estádio é obrigatório.")
                else:
                    db.insert_estadio(None, nome_est, cidade, pais, int(capacidade))

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
                db.update_estadio(
                    int(id_est),
                    nome_est or None,
                    cidade or None,
                    pais or None,
                    int(capacidade) if capacidade > 0 else None
                )

    # REMOVER
    with tab_delete:
        st.warning("⚠️ Não é possível remover um estádio com partidas cadastradas nele.")
        id_est = st.number_input("ID do Estádio para Remover", min_value=1, step=1, key="del_est_id")
        if st.button("Remover Estádio", type="primary"):
            db.delete_estadio(int(id_est))