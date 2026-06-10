import mysql.connector
from mysql.connector import Error
from conexao import conectar


# CREATE
def inserir_estadio(nome_estadio, cidade, pais, capacidade):
    """Insere um novo estádio. O ID é gerado automaticamente (AUTO_INCREMENT)."""
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """INSERT INTO estadios (nome_estadio, cidade, pais, capacidade) 
                 VALUES (%s, %s, %s, %s)"""
        cursor.execute(sql, (nome_estadio, cidade, pais, capacidade))
        conexao.commit()

        return True, f'Estádio "{nome_estadio}" cadastrado com sucesso!'

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, "Já existe um estádio com este ID cadastrado."
        return False, f"Erro de integridade: {erro}"
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# READ
def listar_estadios():
    """Retorna todos os estádios cadastrados como lista de dicionários."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("SELECT * FROM estadios ORDER BY id_estadio")
        resultado = cursor.fetchall()

        return True, resultado

    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# UPDATE
def atualizar_estadio(id_estadio, **campos_atualizar):
    """Atualiza campos de um estádio. Campos válidos: nome_estadio, cidade, pais, capacidade."""
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para atualização."

    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        colunas_validas = ["nome_estadio", "cidade", "pais", "capacidade"]
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)

        if not partes_set:
            return False, "Campos enviados não pertencem à tabela 'estadios'."

        sql = f"UPDATE estadios SET {', '.join(partes_set)} WHERE id_estadio = %s"
        valores.append(id_estadio)

        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhum estádio encontrado com o ID {id_estadio}."

        return True, "Estádio atualizado com sucesso!"

    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# DELETE
def deletar_estadio(id_estadio):
    """Remove um estádio pelo ID. Partidas vinculadas serão removidas em cascata."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("DELETE FROM estadios WHERE id_estadio = %s", (id_estadio,))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhum estádio encontrado com o ID {id_estadio}."

        return True, f"Estádio de ID {id_estadio} deletado com sucesso!"

    
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()
