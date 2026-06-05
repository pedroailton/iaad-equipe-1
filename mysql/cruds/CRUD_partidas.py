import mysql.connector
from mysql.connector import Error

# Conexão com o banco de dados
def conectar():
    return mysql.connector.connect(
        host="localhost", 
        user="root", 
        password="", # senha do Workbench
        database="Copa do Mundo de Futebol"
    )

#============================================================
# 1. CREATE - Inserir partida
#============================================================
def inserir_partida(id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, gols_1=0, gols_2=0, vencedor=None):
    if id_selecao_1 == id_selecao_2:
        return False, "Erro: Uma seleção não pode jogar contra ela mesma."

    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        sql = """
        INSERT INTO partidas (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """
        valores = (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, gols_1, gols_2, vencedor)

        cursor.execute(sql, valores)
        conexao.commit()

        return True, f"Partida {id_partida} registrada com sucesso!"
    
    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, f"Erro: Já existe uma partida com o ID {id_partida}."
        else:
            return False, f"Erro de integridade no banco: {erro}"
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}" 
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

#============================================================
# 2. READ - Listar partidas
#============================================================
def listar_partidas():
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        # Consulta avançada trazendo os nomes reais ao invés de apenas IDs
        sql = """
        SELECT p.id_partida, p.data_partida, e.nome_estadio, 
               s1.nome_selecao AS mandante, p.quantidade_gols_selecao_1, 
               p.quantidade_gols_selecao_2, s2.nome_selecao AS visitante
        FROM partidas p
        LEFT JOIN estadios e ON p.id_estadio = e.id_estadio
        LEFT JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
        LEFT JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao
        ORDER BY p.data_partida
        """
        cursor.execute(sql)
        resultados = cursor.fetchall()
        
        return True, resultados
    
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# Listar apenas os amistosos
def listar_amistosos():
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """
        SELECT p.data_partida, s1.nome_selecao AS mandante, s2.nome_selecao AS visitante
        FROM partidas p
        INNER JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
        INNER JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao
        WHERE p.data_partida < '2026-06-11'
        ORDER BY p.data_partida
        """
        cursor.execute(sql)
        return True, cursor.fetchall()
        
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# Relatório de desempenho dos estádios
def relatorio_estadios():
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """
        SELECT 
            e.nome_estadio, e.cidade,
            COUNT(p.id_partida) AS total_partidas_realizadas,
            SUM(p.quantidade_gols_selecao_1 + p.quantidade_gols_selecao_2) AS total_gols_marcados,
            ROUND(AVG(p.quantidade_gols_selecao_1 + p.quantidade_gols_selecao_2), 2) AS media_gols_por_jogo
        FROM estadios e
        LEFT JOIN partidas p ON e.id_estadio = p.id_estadio
        GROUP BY e.nome_estadio, e.cidade
        ORDER BY total_gols_marcados DESC
        """
        cursor.execute(sql)
        return True, cursor.fetchall()
        
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# Contagem regressiva para os próximos jogos
def contagem_regressiva_jogos():
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor(dictionary=True)

        sql = """
        SELECT 
            s1.nome_selecao AS mandante,
            s2.nome_selecao AS visitante,
            p.data_partida,
            DATEDIFF(p.data_partida, CURDATE()) AS dias_para_o_jogo
        FROM partidas p
        INNER JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
        INNER JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao
        WHERE p.data_partida >= CURDATE()
        ORDER BY p.data_partida ASC
        """
        cursor.execute(sql)
        return True, cursor.fetchall()
        
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

#============================================================
# 3. UPDATE - Atualizar partida
#============================================================
def atualizar_partida(id_partida, **campos_atualizar):
    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para atualização."
    
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        colunas_validas = ['data_partida', 'id_estadio', 'id_selecao_1', 'id_selecao_2', 'quantidade_gols_selecao_1', 'quantidade_gols_selecao_2', 'vencedor']
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)
        
        if not partes_set:
            return False, "Campos enviados são inválidos."
        
        sql_set = ", ".join(partes_set)
        sql = f"UPDATE partidas SET {sql_set} WHERE id_partida = %s"
        valores.append(id_partida)

        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: Nenhuma partida encontrada com o ID {id_partida}."

        return True, "Partida atualizada com sucesso!"
    
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

#============================================================
# 4. DELETE - Deletar partida
#============================================================
def deletar_partida(id_partida):
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        sql = "DELETE FROM partidas WHERE id_partida = %s"
        cursor.execute(sql, (id_partida,))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: Nenhuma partida encontrada com o ID {id_partida}."
        
        return True, f"Partida {id_partida} deletada com sucesso!"
        
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    finally: 
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()