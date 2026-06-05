import mysql.connector
from mysql.connector import Error

# Conexão com o banco de dados
def conectar():
    '''Cria e retorna uma conexão com o banco de dados MySQL'''
    return mysql.connector.connect(host="localhost", 
                                   user="root", 
                                   password="senha do localhost", 
                                   database="Copa do Mundo de Futebol")

# CREATE - inserir seleção
def inserir_selecao(id_selecao, nome_selecao, continente, tecnico, titulos):
    """
    Insere uma nova seleção na tabela 'selecoes'.

    Parâmetros:
        id_selecao   (int): Identificador único da seleção.
        nome_selecao (str): Nome da seleção (ex.: 'Brasil').
        continente   (str): Continente ao qual pertence (ex.: 'América do Sul').
        tecnico      (str): Nome do técnico responsável.
        titulos      (int): Quantidade de títulos mundiais conquistados.
    
    """

    # inicializado como None para que o finally não falhe caso conectar() lance uma exceção antes de criar a variável
    conexao = None

    try:
        conexao = conectar()
        cursor = conexao.cursor()

        sql = """
        INSERT INTO selecoes (id_selecao, nome_selecao, continente, tecnico, titulos) 
        VALUES (%s, %s, %s, %s, %s)
        """

        valores = (id_selecao, nome_selecao, continente, tecnico, titulos)

        cursor.execute(sql, valores)
        conexao.commit()

        return True, f'Seleção "{nome_selecao}" adicionada com sucesso!'
    
    # tratamento de erro de integridade: chave duplicada (errno 1062) ou violação de FK
    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1062:
            return False, f'Erro: já existe uma seleção com o ID {id_selecao} cadastrada.'
        else:
            return False, f'Erro de integridade no banco: {erro}'
    
    # erros comuns
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}" 

    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# READ - Listar todas as seleções
def listar_selecoes():
    """
    Exibe todas as seleções cadastradas no banco.
    """
    
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        sql = "SELECT * FROM selecoes"
        cursor.execute(sql)

        resultado = cursor.fetchall()

        print("\nLista de Seleções: ")
        for selecao in resultado:
            print(
                f"ID: {selecao[0]} | "
                f"Nome: {selecao[1]} | "
                f"Continente: {selecao[2]} | "
                f"Técnico: {selecao[3]} | "
                f"N° de títulos: {selecao[4]}"
            )
        
        return True, "Listagem conluída com sucesso!"
    
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    
    finally:
        if conexao is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# Update - Atualizar seleção
def atualizar_selecao(id_selecao, **campos_atualizar):
    """
    Atualiza um ou mais campos de uma seleção existente

    Parâmetros:
        id_selecao       (int): ID da seleção a ser atualizada.
        **campos_atualizar    : Campos a alterar no formato coluna=valor.
                                Colunas válidas: nome_selecao, continente, tecnico, titulos.
    
    """

    if not campos_atualizar:
        return False, "Nenhum campo foi enviado para a atualização."
    
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        # monta dinamicamente as clausulas SET aceitas
        # ex: {'nome_selecao': 'Brasil', 'tecnico': 'Dorival Jr'}
        # partes_set = ["nome_selecao = %s", "tecnico = %s"]
        # valores    = ['Brasil', 'Dorival Jr']
        colunas_validas = ['nome_selecao', 'continente', 'tecnico', 'titulos']
        partes_set = []
        valores = []

        for coluna, valor in campos_atualizar.items():
            if coluna in colunas_validas:
                partes_set.append(f"{coluna} = %s")
                valores.append(valor)
        
        if not partes_set:
            return False, "Campos enviados não fazem parte da tabela 'selecoes'."
        
        # junção das partes: "nome_selecao = %s, tecnico = %s"
        sql_set = ", ".join(partes_set)
        sql = f"UPDATE selecoes SET {sql_set} WHERE id_selecao = %s"

        # o ID vai pro final da lisata, pois é o último placeholder do WHERE
        valores.append(id_selecao)

        # execução no banco de dados
        cursor.execute(sql, tuple(valores))
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: nenhuma seleção foi encontrada no ID {id_selecao}."

        return True, "Seleção atualizada com sucesso!"
    
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    
    finally:
        if 'conexao' is not None and conexao.is_connected():
            cursor.close()
            conexao.close()

# DELETE - deletar seleção
def deletar_selecao(id_selecao):
    """
    Remove uma seleção do banco de dados pelo ID

    Parâmetros:
        id_selecao (int): ID da seleção a ser removida.
    """
    conexao = None
    try:
        conexao = conectar()
        cursor = conexao.cursor()

        sql = "DELETE FROM selecoes WHERE id_selecao = %s"
        valores = (id_selecao,)

        cursor.execute(sql, valores)
        conexao.commit()

        if cursor.rowcount == 0:
            return False, f"Aviso: nenhuma seleção foi encontrada no ID {id_selecao}"
        
        return True, f"Seleção de ID {id_selecao} deletada com sucesso!"
    
    except mysql.connector.IntegrityError as erro:
        if erro.errno == 1451:
            return False, "Erro: esta seleção não pode ser excluída por que possui jogadores ou partidas vinculadas a ela. Remova os registros dependentes primeiro."
        else: 
            return False, f"Erro de integridade no banco: {erro}"
        
    except Error as erro:
        return False, f"Erro no banco de dados: {erro}"
    
    finally: 
        if 'conexao' is not None and conexao.is_connected():
            cursor.close()
            conexao.close()