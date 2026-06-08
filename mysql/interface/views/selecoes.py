import streamlit as st
import pandas as pd
import db

TABLE_HEIGHT = 300

def render_selecoes_page():
    st.markdown('<div class="custom-card"><h3>Gestão de Seleções</h3><p>Administre as seleções participantes da Copa do Mundo 2026.</p></div>', unsafe_allow_html=True)

    # Visualização sempre visível no topo
    df = db.get_selecoes()
    if not df.empty:
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
        st.caption(f"Total: {len(df)} seleção(ões) | O banco comporta até 48 seleções (Copa 2026)")
    else:
        st.info("Nenhuma seleção cadastrada.")

    tab_create, tab_update, tab_delete = st.tabs(["➕ Cadastrar", "✏️ Atualizar", "🗑️ Remover"])

    # CADASTRAR
    with tab_create:
        with st.form("form_create_selecao", clear_on_submit=True):
            nome_sel  = st.text_input("Nome da Seleção *")

            col1, col2, col3 = st.columns(3)
            continente = col1.text_input("Continente")
            tecnico    = col2.text_input("Técnico")
            titulos    = col3.number_input("Títulos Mundiais", min_value=0, step=1)

            submit = st.form_submit_button("Cadastrar Seleção", type="primary")
            if submit:
                if not nome_sel:
                    st.error("O nome da seleção é obrigatório.")
                else:
                    db.insert_selecao(None, nome_sel, continente, tecnico, int(titulos))

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
            titulos = col4.number_input("Novos Títulos (use 0 para manter se não alterado)", min_value=0, step=1, key="upd_sel_tit")
            alterar_titulos = st.checkbox("Alterar número de títulos?", key="upd_sel_tit_chk")

            submit = st.form_submit_button("Atualizar Seleção", type="primary")
            if submit:
                db.update_selecao(int(id_sel), nome_sel or None, continente or None, tecnico or None,
                                  int(titulos) if alterar_titulos else None)

    # REMOVER
    with tab_delete:
        st.warning("⚠️ Não é possível remover uma seleção com jogadores ou partidas vinculadas.")
        id_sel = st.number_input("ID da Seleção para Remover", min_value=1, step=1, key="del_sel_id")
        if st.button("Remover Seleção", type="primary"):
            db.delete_selecao(int(id_sel))