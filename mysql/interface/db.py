import streamlit as st
import pandas as pd

# Importação condicional do conector MySQL
try:
    import mysql.connector
    from mysql.connector import Error
    MYSQL_AVAILABLE = True
except ImportError:
    MYSQL_AVAILABLE = False


def conectar_banco():
    """Tenta conectar ao banco de dados local com as senhas padrão da equipe."""
    if not MYSQL_AVAILABLE:
        raise Exception("Biblioteca mysql-connector-python não instalada.")
    senhas = ["", "senha do localhost", "senha do local host"]
    for senha in senhas:
        try:
            conexao = mysql.connector.connect(
                host="localhost",
                user="root",
                password=senha,
                database="Copa do Mundo de Futebol"
            )
            if conexao.is_connected():
                return conexao
        except Exception:
            continue
    raise Exception("Não foi possível conectar ao banco de dados MySQL no localhost.")


def reset_view():
    """Limpa o cache para forçar re-consulta ao banco."""
    st.cache_data.clear()


# =====================================================================
# DADOS MOCK BASEADOS NOS SCRIPTS REAIS DO PROJETO
# (Apenas os primeiros registros de cada tabela, representativos)
# =====================================================================
MOCK_SELECOES = [
    {"id_selecao": 1,  "nome_selecao": "Canadá",              "continente": "América do Norte",  "tecnico": "Jesse Marsch",         "titulos": 0},
    {"id_selecao": 2,  "nome_selecao": "México",              "continente": "América do Norte",  "tecnico": "Jaime Lozano",         "titulos": 0},
    {"id_selecao": 3,  "nome_selecao": "Estados Unidos",      "continente": "América do Norte",  "tecnico": "Mauricio Pochettino",  "titulos": 0},
    {"id_selecao": 7,  "nome_selecao": "Argentina",           "continente": "América do Sul",    "tecnico": "Lionel Scaloni",       "titulos": 3},
    {"id_selecao": 8,  "nome_selecao": "Brasil",              "continente": "América do Sul",    "tecnico": "Dorival Júnior",       "titulos": 5},
    {"id_selecao": 9,  "nome_selecao": "Colômbia",            "continente": "América do Sul",    "tecnico": "Néstor Lorenzo",       "titulos": 0},
    {"id_selecao": 12, "nome_selecao": "Uruguai",             "continente": "América do Sul",    "tecnico": "Marcelo Bielsa",       "titulos": 2},
    {"id_selecao": 33, "nome_selecao": "Inglaterra",          "continente": "Europa",            "tecnico": "Gareth Southgate",     "titulos": 1},
    {"id_selecao": 34, "nome_selecao": "França",              "continente": "Europa",            "tecnico": "Didier Deschamps",     "titulos": 2},
    {"id_selecao": 37, "nome_selecao": "Espanha",             "continente": "Europa",            "tecnico": "Luis de la Fuente",    "titulos": 1},
    {"id_selecao": 38, "nome_selecao": "Alemanha",            "continente": "Europa",            "tecnico": "Julian Nagelsmann",    "titulos": 4},
    {"id_selecao": 39, "nome_selecao": "Holanda",             "continente": "Europa",            "tecnico": "Ronald Koeman",        "titulos": 0},
    {"id_selecao": 23, "nome_selecao": "Marrocos",            "continente": "África",            "tecnico": "Walid Regragui",       "titulos": 0},
    {"id_selecao": 30, "nome_selecao": "Senegal",             "continente": "África",            "tecnico": "Aliou Cissé",          "titulos": 0},
]

MOCK_ESTADIOS = [
    {"id_estadio": 1,  "nome_estadio": "Dallas Stadium",              "cidade": "Arlington",        "pais": "Estados Unidos", "capacidade": 94000},
    {"id_estadio": 2,  "nome_estadio": "New York New Jersey Stadium", "cidade": "East Rutherford",  "pais": "Estados Unidos", "capacidade": 82500},
    {"id_estadio": 3,  "nome_estadio": "Atlanta Stadium",             "cidade": "Atlanta",          "pais": "Estados Unidos", "capacidade": 75000},
    {"id_estadio": 4,  "nome_estadio": "Kansas City Stadium",         "cidade": "Kansas City",      "pais": "Estados Unidos", "capacidade": 73000},
    {"id_estadio": 5,  "nome_estadio": "Houston Stadium",             "cidade": "Houston",          "pais": "Estados Unidos", "capacidade": 72000},
    {"id_estadio": 6,  "nome_estadio": "San Francisco Bay Area Stadium","cidade": "Santa Clara",    "pais": "Estados Unidos", "capacidade": 71000},
    {"id_estadio": 7,  "nome_estadio": "Los Angeles Stadium",         "cidade": "Inglewood",        "pais": "Estados Unidos", "capacidade": 70000},
    {"id_estadio": 8,  "nome_estadio": "Seattle Stadium",             "cidade": "Seattle",          "pais": "Estados Unidos", "capacidade": 69000},
    {"id_estadio": 12, "nome_estadio": "Mexico City Stadium",         "cidade": "Cidade do México", "pais": "México",         "capacidade": 83000},
    {"id_estadio": 15, "nome_estadio": "BC Place Vancouver",          "cidade": "Vancouver",        "pais": "Canadá",         "capacidade": 54000},
    {"id_estadio": 16, "nome_estadio": "Toronto Stadium",             "cidade": "Toronto",          "pais": "Canadá",         "capacidade": 45000},
]

MOCK_JOGADORES = [
    {"id_jogador": 209, "nome_jogador": "Alisson Becker",    "posicao": "Goleiro",    "numero_camisa": 1,  "data_nascimento": "1992-10-02", "id_selecao": 8},
    {"id_jogador": 214, "nome_jogador": "Marquinhos",        "posicao": "Defensor",   "numero_camisa": 4,  "data_nascimento": "1994-05-14", "id_selecao": 8},
    {"id_jogador": 220, "nome_jogador": "Bruno Guimarães",   "posicao": "Meio-campo", "numero_camisa": 5,  "data_nascimento": "1997-11-16", "id_selecao": 8},
    {"id_jogador": 226, "nome_jogador": "Vinícius Júnior",   "posicao": "Atacante",   "numero_camisa": 7,  "data_nascimento": "2000-07-12", "id_selecao": 8},
    {"id_jogador": 227, "nome_jogador": "Rodrygo Goes",      "posicao": "Atacante",   "numero_camisa": 10, "data_nascimento": "2001-01-09", "id_selecao": 8},
    {"id_jogador": 417, "nome_jogador": "Manuel Neuer",      "posicao": "Goleiro",    "numero_camisa": 1,  "data_nascimento": "1986-03-27", "id_selecao": 38},
    {"id_jogador": 434, "nome_jogador": "Jamal Musiala",     "posicao": "Meio-campo", "numero_camisa": 10, "data_nascimento": "2003-02-26", "id_selecao": 38},
    {"id_jogador": 438, "nome_jogador": "Kai Havertz",       "posicao": "Atacante",   "numero_camisa": 7,  "data_nascimento": "1999-06-11", "id_selecao": 38},
    {"id_jogador": 1,   "nome_jogador": "Guillermo Ochoa",   "posicao": "Goleiro",    "numero_camisa": 1,  "data_nascimento": "1985-07-13", "id_selecao": 2},
    {"id_jogador": 18,  "nome_jogador": "Hirving Lozano",    "posicao": "Atacante",   "numero_camisa": 22, "data_nascimento": "1995-07-30", "id_selecao": 2},
]

MOCK_PARTIDAS = [
    {"id_partida": 1,   "data_partida": "2026-06-12", "id_estadio": 1,  "id_selecao_1": 2,  "id_selecao_2": 29, "quantidade_gols_selecao_1": 2, "quantidade_gols_selecao_2": 0, "vencedor": 2},
    {"id_partida": 75,  "data_partida": "2026-06-29", "id_estadio": 1,  "id_selecao_1": 8,  "id_selecao_2": 43, "quantidade_gols_selecao_1": 3, "quantidade_gols_selecao_2": 0, "vencedor": 8},
    {"id_partida": 89,  "data_partida": "2026-07-06", "id_estadio": 1,  "id_selecao_1": 2,  "id_selecao_2": 8,  "quantidade_gols_selecao_1": 1, "quantidade_gols_selecao_2": 2, "vencedor": 8},
    {"id_partida": 97,  "data_partida": "2026-07-11", "id_estadio": 11, "id_selecao_1": 8,  "id_selecao_2": 37, "quantidade_gols_selecao_1": 2, "quantidade_gols_selecao_2": 1, "vencedor": 8},
    {"id_partida": 101, "data_partida": "2026-07-14", "id_estadio": 1,  "id_selecao_1": 8,  "id_selecao_2": 34, "quantidade_gols_selecao_1": 2, "quantidade_gols_selecao_2": 1, "vencedor": 8},
    {"id_partida": 104, "data_partida": "2026-07-19", "id_estadio": 2,  "id_selecao_1": 8,  "id_selecao_2": 38, "quantidade_gols_selecao_1": 2, "quantidade_gols_selecao_2": 0, "vencedor": 8},
]


def inicializar_mocks():
    """Inicializa os dados mock baseados nos dados reais do projeto no session_state."""
    if "mock_selecoes" not in st.session_state:
        st.session_state.mock_selecoes = pd.DataFrame(MOCK_SELECOES)
    if "mock_estadios" not in st.session_state:
        st.session_state.mock_estadios = pd.DataFrame(MOCK_ESTADIOS)
    if "mock_jogadores" not in st.session_state:
        st.session_state.mock_jogadores = pd.DataFrame(MOCK_JOGADORES)
    if "mock_partidas" not in st.session_state:
        st.session_state.mock_partidas = pd.DataFrame(MOCK_PARTIDAS)


# =====================================================================
# ENTIDADE: SELEÇÕES
# O banco NÃO usa AUTO_INCREMENT: id_selecao é inserido manualmente.
# =====================================================================
def get_selecoes():
    inicializar_mocks()
    try:
        conn = conectar_banco()
        df = pd.read_sql("SELECT * FROM selecoes ORDER BY id_selecao", conn)
        conn.close()
        return df
    except Exception:
        return st.session_state.mock_selecoes.sort_values("id_selecao").reset_index(drop=True)


def insert_selecao(id_selecao, nome_selecao, continente, tecnico, titulos):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = "INSERT INTO selecoes (id_selecao, nome_selecao, continente, tecnico, titulos) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(sql, (id_selecao, nome_selecao, continente, tecnico, titulos))
        conn.commit()
        conn.close()
        st.success(f"✅ Seleção '{nome_selecao}' (ID {id_selecao}) cadastrada no Banco de Dados!")
    except Exception as e:
        inicializar_mocks()
        df = st.session_state.mock_selecoes
        if id_selecao in df["id_selecao"].values:
            st.error(f"❌ Já existe uma seleção com ID {id_selecao}.")
            return
        new_row = {"id_selecao": id_selecao, "nome_selecao": nome_selecao, "continente": continente, "tecnico": tecnico, "titulos": titulos}
        st.session_state.mock_selecoes = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        st.success(f"✅ Seleção '{nome_selecao}' cadastrada! (Banco offline — dados em memória)")


def update_selecao(id_selecao, nome_selecao, continente, tecnico, titulos):
    fields, vals = [], []
    if nome_selecao: fields.append("nome_selecao = %s"); vals.append(nome_selecao)
    if continente:   fields.append("continente = %s");   vals.append(continente)
    if tecnico:      fields.append("tecnico = %s");      vals.append(tecnico)
    if titulos is not None: fields.append("titulos = %s"); vals.append(titulos)
    if not fields:
        st.warning("Preencha ao menos um campo para atualizar.")
        return
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = f"UPDATE selecoes SET {', '.join(fields)} WHERE id_selecao = %s"
        vals.append(id_selecao)
        cursor.execute(sql, tuple(vals))
        conn.commit()
        conn.close()
        st.success(f"✅ Seleção ID {id_selecao} atualizada no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_selecoes
        idx = df[df["id_selecao"] == id_selecao].index
        if len(idx) == 0:
            st.error(f"❌ Seleção ID {id_selecao} não encontrada.")
            return
        if nome_selecao: df.at[idx[0], "nome_selecao"] = nome_selecao
        if continente:   df.at[idx[0], "continente"]   = continente
        if tecnico:      df.at[idx[0], "tecnico"]       = tecnico
        if titulos is not None: df.at[idx[0], "titulos"] = titulos
        st.session_state.mock_selecoes = df
        st.success(f"✅ Seleção ID {id_selecao} atualizada! (Banco offline — dados em memória)")


def delete_selecao(id_selecao):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM selecoes WHERE id_selecao = %s", (id_selecao,))
        conn.commit()
        conn.close()
        st.warning(f"⚠️ Seleção ID {id_selecao} removida do Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_selecoes
        if id_selecao not in df["id_selecao"].values:
            st.error(f"❌ Seleção ID {id_selecao} não encontrada.")
            return
        st.session_state.mock_selecoes = df[df["id_selecao"] != id_selecao].reset_index(drop=True)
        st.warning(f"⚠️ Seleção ID {id_selecao} removida! (Banco offline — dados em memória)")


# =====================================================================
# ENTIDADE: ESTÁDIOS
# O banco NÃO usa AUTO_INCREMENT: id_estadio é inserido manualmente.
# =====================================================================
def get_estadios():
    inicializar_mocks()
    try:
        conn = conectar_banco()
        df = pd.read_sql("SELECT * FROM estadios ORDER BY id_estadio", conn)
        conn.close()
        return df
    except Exception:
        return st.session_state.mock_estadios.sort_values("id_estadio").reset_index(drop=True)


def insert_estadio(id_estadio, nome_estadio, cidade, pais, capacidade):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = "INSERT INTO estadios (id_estadio, nome_estadio, cidade, pais, capacidade) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(sql, (id_estadio, nome_estadio, cidade, pais, capacidade))
        conn.commit()
        conn.close()
        st.success(f"✅ Estádio '{nome_estadio}' (ID {id_estadio}) cadastrado no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_estadios
        if id_estadio in df["id_estadio"].values:
            st.error(f"❌ Já existe um estádio com ID {id_estadio}.")
            return
        new_row = {"id_estadio": id_estadio, "nome_estadio": nome_estadio, "cidade": cidade, "pais": pais, "capacidade": capacidade}
        st.session_state.mock_estadios = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        st.success(f"✅ Estádio '{nome_estadio}' cadastrado! (Banco offline — dados em memória)")


def update_estadio(id_estadio, nome_estadio, cidade, pais, capacidade):
    fields, vals = [], []
    if nome_estadio: fields.append("nome_estadio = %s"); vals.append(nome_estadio)
    if cidade:       fields.append("cidade = %s");       vals.append(cidade)
    if pais:         fields.append("pais = %s");         vals.append(pais)
    if capacidade is not None: fields.append("capacidade = %s"); vals.append(capacidade)
    if not fields:
        st.warning("Preencha ao menos um campo para atualizar.")
        return
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = f"UPDATE estadios SET {', '.join(fields)} WHERE id_estadio = %s"
        vals.append(id_estadio)
        cursor.execute(sql, tuple(vals))
        conn.commit()
        conn.close()
        st.success(f"✅ Estádio ID {id_estadio} atualizado no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_estadios
        idx = df[df["id_estadio"] == id_estadio].index
        if len(idx) == 0:
            st.error(f"❌ Estádio ID {id_estadio} não encontrado.")
            return
        if nome_estadio: df.at[idx[0], "nome_estadio"] = nome_estadio
        if cidade:       df.at[idx[0], "cidade"]        = cidade
        if pais:         df.at[idx[0], "pais"]          = pais
        if capacidade is not None: df.at[idx[0], "capacidade"] = capacidade
        st.session_state.mock_estadios = df
        st.success(f"✅ Estádio ID {id_estadio} atualizado! (Banco offline — dados em memória)")


def delete_estadio(id_estadio):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM estadios WHERE id_estadio = %s", (id_estadio,))
        conn.commit()
        conn.close()
        st.warning(f"⚠️ Estádio ID {id_estadio} removido do Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_estadios
        if id_estadio not in df["id_estadio"].values:
            st.error(f"❌ Estádio ID {id_estadio} não encontrado.")
            return
        st.session_state.mock_estadios = df[df["id_estadio"] != id_estadio].reset_index(drop=True)
        st.warning(f"⚠️ Estádio ID {id_estadio} removido! (Banco offline — dados em memória)")


# =====================================================================
# ENTIDADE: JOGADORES
# O banco NÃO usa AUTO_INCREMENT: id_jogador é inserido manualmente.
# Posições válidas no banco: Goleiro, Defensor, Meio-campo, Atacante
# =====================================================================
POSICOES = ["Goleiro", "Defensor", "Meio-campo", "Atacante"]


def get_jogadores():
    inicializar_mocks()
    try:
        conn = conectar_banco()
        df = pd.read_sql("SELECT * FROM jogadores ORDER BY id_selecao, id_jogador", conn)
        conn.close()
        return df
    except Exception:
        return st.session_state.mock_jogadores.sort_values(["id_selecao", "id_jogador"]).reset_index(drop=True)


def insert_jogador(id_jogador, nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = "INSERT INTO jogadores (id_jogador, nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (id_jogador, nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao))
        conn.commit()
        conn.close()
        st.success(f"✅ Jogador '{nome_jogador}' (ID {id_jogador}) cadastrado no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_jogadores
        if id_jogador in df["id_jogador"].values:
            st.error(f"❌ Já existe um jogador com ID {id_jogador}.")
            return
        new_row = {
            "id_jogador": id_jogador, "nome_jogador": nome_jogador, "posicao": posicao,
            "numero_camisa": numero_camisa, "data_nascimento": str(data_nascimento), "id_selecao": id_selecao
        }
        st.session_state.mock_jogadores = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        st.success(f"✅ Jogador '{nome_jogador}' cadastrado! (Banco offline — dados em memória)")


def update_jogador(id_jogador, nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao):
    fields, vals = [], []
    if nome_jogador: fields.append("nome_jogador = %s"); vals.append(nome_jogador)
    if posicao:      fields.append("posicao = %s");      vals.append(posicao)
    if numero_camisa is not None: fields.append("numero_camisa = %s"); vals.append(numero_camisa)
    if data_nascimento:           fields.append("data_nascimento = %s"); vals.append(data_nascimento)
    if id_selecao is not None:    fields.append("id_selecao = %s"); vals.append(id_selecao)
    if not fields:
        st.warning("Preencha ao menos um campo para atualizar.")
        return
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = f"UPDATE jogadores SET {', '.join(fields)} WHERE id_jogador = %s"
        vals.append(id_jogador)
        cursor.execute(sql, tuple(vals))
        conn.commit()
        conn.close()
        st.success(f"✅ Jogador ID {id_jogador} atualizado no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_jogadores
        idx = df[df["id_jogador"] == id_jogador].index
        if len(idx) == 0:
            st.error(f"❌ Jogador ID {id_jogador} não encontrado.")
            return
        if nome_jogador:          df.at[idx[0], "nome_jogador"]    = nome_jogador
        if posicao:               df.at[idx[0], "posicao"]         = posicao
        if numero_camisa is not None: df.at[idx[0], "numero_camisa"] = numero_camisa
        if data_nascimento:       df.at[idx[0], "data_nascimento"] = str(data_nascimento)
        if id_selecao is not None: df.at[idx[0], "id_selecao"]     = id_selecao
        st.session_state.mock_jogadores = df
        st.success(f"✅ Jogador ID {id_jogador} atualizado! (Banco offline — dados em memória)")


def delete_jogador(id_jogador):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM jogadores WHERE id_jogador = %s", (id_jogador,))
        conn.commit()
        conn.close()
        st.warning(f"⚠️ Jogador ID {id_jogador} removido do Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_jogadores
        if id_jogador not in df["id_jogador"].values:
            st.error(f"❌ Jogador ID {id_jogador} não encontrado.")
            return
        st.session_state.mock_jogadores = df[df["id_jogador"] != id_jogador].reset_index(drop=True)
        st.warning(f"⚠️ Jogador ID {id_jogador} removido! (Banco offline — dados em memória)")


# =====================================================================
# ENTIDADE: PARTIDAS
# O banco NÃO usa AUTO_INCREMENT: id_partida é inserido manualmente.
# =====================================================================
def get_partidas():
    inicializar_mocks()
    try:
        conn = conectar_banco()
        df = pd.read_sql("SELECT * FROM partidas ORDER BY data_partida, id_partida", conn)
        conn.close()
        return df
    except Exception:
        return st.session_state.mock_partidas.sort_values(["data_partida", "id_partida"]).reset_index(drop=True)


def insert_partida(id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2,
                   quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = """INSERT INTO partidas (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2,
                                       quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor)
                 VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"""
        cursor.execute(sql, (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2,
                             quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor))
        conn.commit()
        conn.close()
        st.success(f"✅ Partida ID {id_partida} cadastrada no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_partidas
        if id_partida in df["id_partida"].values:
            st.error(f"❌ Já existe uma partida com ID {id_partida}.")
            return
        new_row = {
            "id_partida": id_partida, "data_partida": str(data_partida), "id_estadio": id_estadio,
            "id_selecao_1": id_selecao_1, "id_selecao_2": id_selecao_2,
            "quantidade_gols_selecao_1": quantidade_gols_selecao_1,
            "quantidade_gols_selecao_2": quantidade_gols_selecao_2, "vencedor": vencedor
        }
        st.session_state.mock_partidas = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        st.success(f"✅ Partida ID {id_partida} cadastrada! (Banco offline — dados em memória)")


def update_partida(id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2,
                   quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor):
    fields, vals = [], []
    if data_partida:                    fields.append("data_partida = %s");                    vals.append(data_partida)
    if id_estadio is not None:          fields.append("id_estadio = %s");                      vals.append(id_estadio)
    if id_selecao_1 is not None:        fields.append("id_selecao_1 = %s");                    vals.append(id_selecao_1)
    if id_selecao_2 is not None:        fields.append("id_selecao_2 = %s");                    vals.append(id_selecao_2)
    if quantidade_gols_selecao_1 is not None: fields.append("quantidade_gols_selecao_1 = %s"); vals.append(quantidade_gols_selecao_1)
    if quantidade_gols_selecao_2 is not None: fields.append("quantidade_gols_selecao_2 = %s"); vals.append(quantidade_gols_selecao_2)
    # vencedor pode ser None (empate) explicitamente
    if "vencedor" in [f.split()[0] for f in fields] or vencedor != "SKIP":
        if vencedor != "SKIP":
            fields.append("vencedor = %s")
            vals.append(None if vencedor == "EMPATE" else vencedor)
    if not fields:
        st.warning("Preencha ao menos um campo para atualizar.")
        return
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        sql = f"UPDATE partidas SET {', '.join(fields)} WHERE id_partida = %s"
        vals.append(id_partida)
        cursor.execute(sql, tuple(vals))
        conn.commit()
        conn.close()
        st.success(f"✅ Partida ID {id_partida} atualizada no Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_partidas
        idx = df[df["id_partida"] == id_partida].index
        if len(idx) == 0:
            st.error(f"❌ Partida ID {id_partida} não encontrada.")
            return
        if data_partida:                    df.at[idx[0], "data_partida"]                    = str(data_partida)
        if id_estadio is not None:          df.at[idx[0], "id_estadio"]                      = id_estadio
        if id_selecao_1 is not None:        df.at[idx[0], "id_selecao_1"]                    = id_selecao_1
        if id_selecao_2 is not None:        df.at[idx[0], "id_selecao_2"]                    = id_selecao_2
        if quantidade_gols_selecao_1 is not None: df.at[idx[0], "quantidade_gols_selecao_1"] = quantidade_gols_selecao_1
        if quantidade_gols_selecao_2 is not None: df.at[idx[0], "quantidade_gols_selecao_2"] = quantidade_gols_selecao_2
        if vencedor != "SKIP":
            df.at[idx[0], "vencedor"] = None if vencedor == "EMPATE" else vencedor
        st.session_state.mock_partidas = df
        st.success(f"✅ Partida ID {id_partida} atualizada! (Banco offline — dados em memória)")


def delete_partida(id_partida):
    try:
        conn = conectar_banco()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM partidas WHERE id_partida = %s", (id_partida,))
        conn.commit()
        conn.close()
        st.warning(f"⚠️ Partida ID {id_partida} removida do Banco de Dados!")
    except Exception:
        inicializar_mocks()
        df = st.session_state.mock_partidas
        if id_partida not in df["id_partida"].values:
            st.error(f"❌ Partida ID {id_partida} não encontrada.")
            return
        st.session_state.mock_partidas = df[df["id_partida"] != id_partida].reset_index(drop=True)
        st.warning(f"⚠️ Partida ID {id_partida} removida! (Banco offline — dados em memória)")
