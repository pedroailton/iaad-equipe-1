import mysql.connector
from mysql.connector import Error
from conexao import conectar


# CREATE
def inserir_partida(data_partida, id_estadio, id_selecao_1, id_selecao_2,
                    quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor):
    """Insere uma nova partida. O ID é gerado automaticamente (AUTO_INCREMENT). O campo vencedor pode ser None (empate)."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """INSERT INTO partidas (data_partida, id_estadio, id_selecao_1, id_selecao_2,
                                       quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor) 
                 VALUES (%s, %s, %s, %s, %s, %s, %s)"""
        cursor.execute(sql, (data_partida, id_estadio, id_selecao_1, id_selecao_2,
                             quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor))
        conexao.commit()

        return True, "Partida cadastrada com sucesso!"

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1452:
            return False, "Referência inválida: verifique se o estádio e as seleções informadas existem."
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
def listar_partidas():
    """Retorna todas as partidas com nomes de estádios e seleções (JOIN)."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """
            SELECT p.id_partida, p.data_partida, 
                   e.nome_estadio,
                   s1.nome_selecao AS selecao_1,
                   s2.nome_selecao AS selecao_2,
                   p.quantidade_gols_selecao_1,
                   p.quantidade_gols_selecao_2,
                   sv.nome_selecao AS vencedor
            FROM partidas p
            INNER JOIN estadios e ON p.id_estadio = e.id_estadio
            INNER JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
            INNER JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao
            LEFT JOIN selecoes sv ON p.vencedor = sv.id_selecao
            ORDER BY p.data_partida, p.id_partida
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
def atualizar_partida(id_partida, **campos_atualizar):
    """Atualiza campos de uma partida. Campos válidos: data_partida, id_estadio, id_selecao_1, id_selecao_2, quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor."""
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para atualização."

    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        colunas_validas = ["data_partida", "id_estadio", "id_selecao_1", "id_selecao_2",
                           "quantidade_gols_selecao_1", "quantidade_gols_selecao_2", "vencedor"]
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)

        if not partes_set:
            return False, "Campos enviados não pertencem à tabela 'partidas'."

        sql = f"UPDATE partidas SET {', '.join(partes_set)} WHERE id_partida = %s"
        valores.append(id_partida)

        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhuma partida encontrada com o ID {id_partida}."

        return True, "Partida atualizada com sucesso!"

    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1452:
            return False, "Referência inválida: verifique se o estádio e as seleções informadas existem."
        return False, f"Erro de integridade: {erro}"
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()


# DELETE
def deletar_partida(id_partida):
    """Remove uma partida pelo ID."""
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("DELETE FROM partidas WHERE id_partida = %s", (id_partida,))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Nenhuma partida encontrada com o ID {id_partida}."

        return True, f"Partida de ID {id_partida} deletada com sucesso!"

    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    except Exception as erro:
        return False, f"Erro de conexão: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()
