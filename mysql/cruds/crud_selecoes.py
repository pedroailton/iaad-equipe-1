import mysql.connector
from mysql.connector import Error
from conexao import conectar

# CREATE
def inserir_selecao(nome_selecao, continente, tecnico, titulos):
    """Insere uma nova seleção. O ID é gerado automaticamente (AUTO_INCREMENT)."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """INSERT INTO selecoes (nome_selecao, continente, tecnico, titulos) 
                 VALUES (%s, %s, %s, %s)"""
        cursor.execute(sql, (nome_selecao, continente, tecnico, titulos))
        conexao.commit()

        return True, f'Seleção "{nome_selecao}" adicionada com sucesso!'

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, "Já existe uma seleção com este nome cadastrada."
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
def listar_selecoes():
    """Retorna todas as seleções cadastradas como lista de dicionários."""
    conexao = None
    try:
        print("chamando conexão")
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("SELECT * FROM selecoes ORDER BY id_selecao")
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
def atualizar_selecao(id_selecao, **campos_atualizar):
    """Atualiza campos de uma seleção. Campos válidos: nome_selecao, continente, tecnico, titulos."""
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para atualização."

    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        colunas_validas = ["nome_selecao", "continente", "tecnico", "titulos"]
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)

        if not partes_set:
            return False, "Campos enviados não pertencem à tabela 'selecoes'."

        sql = f"UPDATE selecoes SET {', '.join(partes_set)} WHERE id_selecao = %s"
        valores.append(id_selecao)

        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhuma seleção encontrada com o ID {id_selecao}."

        return True, "Seleção atualizada com sucesso!"

    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# DELETE
def deletar_selecao(id_selecao):
    """Remove uma seleção pelo ID. Jogadores e partidas vinculados serão removidos em cascata."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("DELETE FROM selecoes WHERE id_selecao = %s", (id_selecao,))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhuma seleção encontrada com o ID {id_selecao}."

        return True, f"Seleção de ID {id_selecao} deletada com sucesso!"

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1451:
            return False, "Esta seleção não pode ser excluída pois possui registros dependentes."
        return False, f"Erro de integridade: {erro}"
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()
