import mysql.connector
from mysql.connector import Error

# =====================================================================
# CONFIGURAÇÃO DE CONEXÃO COM O BANCO DE DADOS
# Altere a variável MYSQL_PASSWORD para a senha do seu MySQL local.
# =====================================================================
MYSQL_PASSWORD = "80ai089d"


def conectar():
    """Cria e retorna uma conexão com o banco de dados MySQL local."""
    try:
        print(f"-> TENTANDO CONECTAR NO MYSQL (senha: '80ai089d')")
        conexao = mysql.connector.connect(
            port=3306,
            host="localhost",
            user="root",
            password="80ai089d",
            database="Copa do Mundo de Futebol",
            use_pure=True
        )
        print("-> CONEXÃO BEM SUCEDIDA!")
        return conexao
    except Error as erro:
        print(f"-> FALHA NA CONEXÃO: {erro}")
        raise Exception(f"DEBUG: Falha na conexão MySQL: {erro}")
