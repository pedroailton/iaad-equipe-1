import streamlit as st
import mysql.connector
from mysql.connector import Error

st.title("Teste Isolado do Streamlit")
st.write("1. O arquivo está rodando no Streamlit!")

try:
    conexao = mysql.connector.connect(
        port=3306,
        host="localhost",
        user="root",
        password="80ai089d",
        database="Copa do Mundo de Futebol"
    )
    st.success("2. CONEXÃO BEM SUCEDIDA!")
    conexao.close()
except Error as erro:
    st.error(f"2. ERRO MYSQL: {erro}")
except Exception as erro:
    st.error(f"2. ERRO GENÉRICO: {erro}")
