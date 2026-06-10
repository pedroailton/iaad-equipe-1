import sys
import streamlit as st
from pathlib import Path
from streamlit_option_menu import option_menu

# Resolvemos o diretório pai "mysql" e inserimos "cruds" e "interface" no path
# Isso evita usar "from mysql..." e conflitar com o driver mysql-connector
mysql_dir = Path(__file__).resolve().parent.parent
cruds_dir = str(mysql_dir / "cruds")
interface_dir = str(mysql_dir / "interface")
raiz_dir = str(mysql_dir)

if cruds_dir not in sys.path:
    sys.path.insert(0, cruds_dir)
if interface_dir not in sys.path:
    sys.path.insert(0, interface_dir)
if raiz_dir not in sys.path:
    sys.path.insert(0, raiz_dir)

import conexao
st.error(f"O ARQUIVO CONEXAO QUE ESTOU RODANDO É: {conexao.__file__}")

# Adiciona o diretório dos CRUDs ao path para importação
from views.estadios import render_estadios_page
from views.jogadores import render_jogadores_page
from views.partidas import render_partidas_page
from views.selecoes import render_selecoes_page
from extras.consulta_media_idades import carregar_dados_idade

# ==========================================
# 1. CONFIGURAÇÕES INICIAIS E UI/UX (CSS)
# ==========================================
st.set_page_config(page_title="Sistema Copa do Mundo", page_icon="⚽", layout="wide")

def load_css(file_name):
    """
    Abre o arquivo CSS externo, lê todo o conteúdo textual 
    e o injeta diretamente na árvore DOM do Streamlit.
    """
    try:
        with open(file_name, "r", encoding="utf-8") as f:
            st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
    except FileNotFoundError:
        st.error(f"Erro: O arquivo de estilização '{file_name}' não foi encontrado.")


# ==========================================
# 2. MODAL FLUTUANTE DE ANÁLISE
# ==========================================
@st.dialog("Análise de Idades", width="large")
def modal_analise_idades():
    st.write("Confira a média de idade dos jogadores convocados por cada seleção.")
    
    df_idades = carregar_dados_idade()
    
    if df_idades is not None and not df_idades.empty:
        # Exibe o dataframe
        st.table(df_idades)
    else:
        st.warning("Não foi possível carregar os dados no momento.")


def main():
    base_dir = Path(__file__).resolve().parent
    load_css(base_dir / "assets" / "styles.css")

    # Cabeçalho com título e nome da equipe
    st.markdown(
        """
        <div style="text-align: center; padding: 0.5rem 0 0.2rem 0;">
            <h1 style="margin: 0; font-size: 2rem;">⚽ Copa do Mundo de Futebol</h1>
            <p style="margin: 0; font-size: 0.75rem; color: #888;">Desenvolvido para a 2ª VA de IAAD</p>
        </div>
        """,
        unsafe_allow_html=True,
    )

    # Botão consulta media das idades
    if st.button("Ver Média de Idades das Seleções", use_container_width=False, type="primary"):
        modal_analise_idades()
    
    st.write("") # quebra de linha
    # -----------------------------------------------------------------

    # Navbar horizontal moderna usando streamlit-option-menu
    selected = option_menu(
        menu_title=None,
        options=["Seleções", "Jogadores", "Estádios", "Partidas"],
        icons=["trophy", "people", "map", "calendar"],
        menu_icon="cast",
        default_index=0,
        orientation="horizontal",
        styles={
            "container": {
                "padding": "0!important",
                "background-color": "transparent",
                "border-bottom": "1px solid rgba(22, 21, 16, 0.15)",
                "margin-bottom": "1rem",
            },
            "icon": {"color": "var(--green-grass)", "font-size": "16px"},
            "nav-link": {
                "font-size": "15px",
                "text-align": "center",
                "margin": "0 4px",
                "--hover-color": "#D4D5CD",
                "color": "inherit",
                "border-radius": "6px",
            },
            "nav-link-selected": {
                "background-color": "var(--green-grass)",
                "color": "var(--primary-dark)",
                "font-weight": "bold",
                "border-radius": "6px",
            },
        },
    )

    # Renderização da página baseada na seleção da navbar
    if selected == "Seleções":
        render_selecoes_page()
    elif selected == "Jogadores":
        render_jogadores_page()
    elif selected == "Estádios":
        render_estadios_page()
    elif selected == "Partidas":
        render_partidas_page()

if __name__ == "__main__":
    main()