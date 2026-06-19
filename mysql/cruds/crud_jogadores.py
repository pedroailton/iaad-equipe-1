import mysql.connector
from mysql.connector import Error
from conexao import conectar

# Posições válidas conforme o banco de dados
POSICOES_VALIDAS = ["Goleiro", "Defensor", "Meio-campo", "Atacante"]


# CREATE
def inserir_jogador(nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao):
    """Insere um novo jogador. O ID é gerado automaticamente (AUTO_INCREMENT)."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """INSERT INTO jogadores (nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao) 
                 VALUES (%s, %s, %s, %s, %s)"""
        cursor.execute(sql, (nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao))
        conexao.commit()

        return True, f'Jogador "{nome_jogador}" cadastrado com sucesso!'

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, "Já existe um jogador com este ID cadastrado."
        elif erro.errno == 1452:
            return False, "A seleção informada não existe no banco de dados."
        return False, f"Erro de integridade: {erro}"
    except Error as erro:
        if erro.sqlstate == '45000':
            return False, erro.msg
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# READ
def listar_jogadores():
    """Retorna todos os jogadores com o nome da seleção (JOIN)."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """
            SELECT j.id_jogador, j.nome_jogador, j.posicao, j.numero_camisa, 
                   j.data_nascimento, j.id_selecao, s.nome_selecao
            FROM jogadores j
            LEFT JOIN selecoes s ON j.id_selecao = s.id_selecao
            ORDER BY j.id_selecao, j.id_jogador
        """
        cursor.execute(sql)
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
def atualizar_jogador(id_jogador, **campos_atualizar):
    """Atualiza campos de um jogador. Campos válidos: nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao."""
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para atualização."

    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        colunas_validas = ["nome_jogador", "posicao", "numero_camisa", "data_nascimento", "id_selecao"]
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)

        if not partes_set:
            return False, "Campos enviados não pertencem à tabela 'jogadores'."

        sql = f"UPDATE jogadores SET {', '.join(partes_set)} WHERE id_jogador = %s"
        valores.append(id_jogador)

        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhum jogador encontrado com o ID {id_jogador}."

        return True, "Jogador atualizado com sucesso!"

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1452:
            return False, "A seleção informada não existe no banco de dados."
        return False, f"Erro de integridade: {erro}"
    except Error as erro:
        if erro.sqlstate == '45000':
            return False, erro.msg
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# DELETE
def deletar_jogador(id_jogador):
    """Remove um jogador pelo ID."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("DELETE FROM jogadores WHERE id_jogador = %s", (id_jogador,))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhum jogador encontrado com o ID {id_jogador}."

        return True, f"Jogador de ID {id_jogador} deletado com sucesso!"

    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()