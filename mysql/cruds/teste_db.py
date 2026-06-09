import mysql.connector
from mysql.connector import Error

print("1. O arquivo está rodando!")

try:
    conexao = mysql.connector.connect(
        port=3306,
        host="localhost",
        user="root",
        password="80ai089d", # Senha direta para testar
        database="Copa do Mundo de Futebol"
    )
    print("2. CONEXÃO BEM SUCEDIDA!")
    conexao.close()
except Error as erro:
    print(f"2. ERRO: {erro}")