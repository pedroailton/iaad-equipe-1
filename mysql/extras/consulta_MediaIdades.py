import streamlit as st
import pandas as pd
import mysql.connector

def conectar():
    return mysql.connector.connect(host="localhost", user="root", password="senha_LocalHost", database="Copa do Mundo de Futebol")

@st.cache_data # streamlit memoriza o resultado da tabela e não sobrecarrega o banco de dados caso os parametros sejam os mesmos
def carregar_dados_idade():
    conexao = conectar()
    
    # consulta SQL
    query_sql = """
    SELECT nome_selecao, continente, FLOOR(AVG(timestampdiff(YEAR, data_nascimento, CURDATE()))) as mediaIdade
    FROM selecoes S LEFT JOIN jogadores J ON J.id_selecao = S.id_selecao
    GROUP BY nome_selecao, continente
    ORDER BY mediaIdade ASC
    """
    
    # retorna a tabela formatada
    df = pd.read_sql(query_sql, conexao)
    
    conexao.close()
    return df

# seçao streamlit basica, apenas um texto, o carregamento dos dados e a exibiçao da tabela
st.write("Análise da média de idade das seleções convocadas.")
# carrega os dados do banco
dados_selecoes = carregar_dados_idade()
# tabela com a consulta
st.dataframe(dados_selecoes)
