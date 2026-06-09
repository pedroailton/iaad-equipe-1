import streamlit as st
import pandas as pd
from cruds.conexao import conectar


@st.cache_data(ttl=600) # Atualiza o cache
def carregar_dados_idade():
    conexao = conectar()
    if not conexao:
        return None
    
    # consulta SQL
    query_sql = """
    SELECT nome_selecao, continente, FLOOR(AVG(timestampdiff(YEAR, data_nascimento, CURDATE()))) as mediaIdade
    FROM selecoes S LEFT JOIN jogadores J ON J.id_selecao = S.id_selecao
    GROUP BY nome_selecao, continente
    ORDER BY mediaIdade ASC
    """
    
    # retorna a tabela formatada
    df = pd.read_sql(query_sql, conexao)
    df['mediaIdade'] = df['mediaIdade'].astype('Int64') #conversao para inteiros, apenas para a parte visual do site, pois no workbench é normalizado isto
    conexao.close()
    return df

