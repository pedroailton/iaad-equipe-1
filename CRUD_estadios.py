import mysql.connector
from mysql.connector import Error

# connector mysql <--> python
def conectar():
    return mysql.connector.connect(host="localhost", user="root", password="senha do local host", database="Copa do Mundo de Futebol")


# create
def inserir_estadio(id_estadio, nome, cidade, pais, capacidade):
    try:
        conexao = conectar()
        cursor = conexao.cursor()
        
        sql = "INSERT INTO estadios (id_estadio, nome_estadio, cidade, pais, capacidade) VALUES (%s, %s, %s, %s, %s)"
        
        valores = (id_estadio, nome, cidade, pais, capacidade)
        
        cursor.execute(sql, valores)
        conexao.commit()
        
        return True, f"Estádio '{nome}' inserido"
    
    # tratamento do erro de integridade
    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, f"Erro: Já existe um estádio com o ID {id_estadio} cadastrado."
        else:
            return False, f"Erro de integridade no banco: {erro}"
    # erros genericos
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"

    finally:
        if 'conexao' in locals() and conexao.is_connected():
            cursor.close()
            conexao.close()


# read
def listar_estadios():
    conexao = conectar()
    cursor = conexao.cursor()
    
    sql = "SELECT * FROM estadios"
    cursor.execute(sql)
    
    resultados = cursor.fetchall()
    
    print("\nLista de Estádios ")
    for estadio in resultados:
        print(f"ID: {estadio[0]} | Nome: {estadio[1]} | Local: {estadio[2]} - {estadio[3]} | Capacidade: {estadio[4]}")
        
    cursor.close()
    conexao.close()



# update
def atualizar_estadio(id_estadio, **campos_atualizar):
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para a atualização"
    
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        # montagem do SQL, transformar {'cidade': 'Nova York', 'capacidade': 90000} 
        # em ["cidade = %s", "capacidade = %s" 
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            colunas_validas = ['nome_estadio', 'cidade', 'pais', 'capacidade']
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)

        if not partes_set:
            return False, "Campos enviados não fazem parte da tabela Estadio"
        
        # junção das partes: "cidade = %s, capacidade = %s"
        sql_set = ", ".join(partes_set)
        sql = f"UPDATE estadios SET {sql_set} WHERE id_estadio = %s"

        # coloca o id no final da lista de valores
        valores.append(id_estadio)

        # execução no banco
        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: nenhum estadio foi encontrado com este ID {id_estadio}"
        
        return True, "Estadio atualizado"
    
    except Error as err:
        return False, f"Erro no banco de dados: {err}"
    finally:
        if 'conexao' in locals() and conexao.is_connected():
            cursor.close()
            conexao.close()



# delete
def deletar_estadio(id_estadio):
    try:
        conexao = conectar()
        cursor = conexao.cursor()
        
        sql = "DELETE FROM estadios WHERE id_estadio = %s"
        valores = (id_estadio,)
        
        cursor.execute(sql, valores)
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: Nenhum estadio foi encontrado com este ID {id_estadio}"
        
        return True, f"Estádio ID {id_estadio} deletado"
    
    # tratamento do erro de integridade referencial
    except mysql.connector.IntegrityError as err:
        if err.errno == 1451:
            return False, "Erro: Este estádio não pode ser excluído porque existem partidas cadastradas nele. Exclua as partidas primeiro."
        else:
            return False, f"Erro de integridade: {err}"
        
    except Error as err:
        return False, f"Erro: {err}"
    
    finally:
        if 'conexao' in locals() and conexao.is_connected(): 
            cursor.close()
            conexao.close()


