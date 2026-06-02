import streamlit as st
import mysql.connector
import pandas as pd
from datetime import datetime

# configuração e conexão com o banco de dados
st.set_page_config(page_title="Gestão de Jogadores - Copa do Mundo", page_icon="⚽", layout="wide")

@st.cache_resource
def conectar_banco():
    conexao = mysql.connector.connect(
        host="localhost",
        user="root",              # nome de usuário do workbench
        password="",      # senha do workbench
        database="Copa do Mundo de Futebol" # nome exato com espaços do script
    )
    return conexao

conexao = conectar_banco()
cursor = conexao.cursor(dictionary=True)

# funções auxiliares (buscar chaves estrangeiras)
def buscar_selecoes():
    cursor.execute("SELECT id_selecao, nome_selecao FROM selecoes")
    return cursor.fetchall()

# interface e lógica do crud
st.title("Jogadores")
st.sidebar.header("Navegação")
menu = st.sidebar.radio("Escolha a operação:", ["Visualizar", "Cadastrar", "Atualizar", "Deletar"])

# padronização global das posições aceitas na interface
OPCOES_POSICOES = ["Goleiro", "Zagueiro", "Lateral", "Meio-Campista", "Atacante"]

# read - visualizar jogadores
if menu == "Visualizar":
    st.subheader("Lista de Jogadores Cadastrados")
    
    query = """
        SELECT j.id_jogador, j.nome_jogador, j.posicao, j.numero_camisa, j.data_nascimento, s.nome_selecao 
        FROM jogadores j
        LEFT JOIN selecoes s ON j.id_selecao = s.id_selecao
    """
    cursor.execute(query)
    jogadores = cursor.fetchall()
    
    if jogadores:
        df = pd.DataFrame(jogadores)
        df.columns = ["ID", "Nome do Jogador", "Posição", "Camisa", "Data de Nascimento", "Seleção"]
        # formata a data para o padrão brasileiro na exibição da tabela
        df["Data de Nascimento"] = pd.to_datetime(df["Data de Nascimento"]).dt.strftime('%d/%m/%Y')
        st.dataframe(df, use_container_width=True)
    else:
        st.info("Nenhum jogador cadastrado ainda.")

# create - cadastrar novo jogador
elif menu == "Cadastrar":
    st.subheader("Cadastrar Novo Jogador")
    
    lista_selecoes = buscar_selecoes()
    opcoes_selecoes = {s['nome_selecao']: s['id_selecao'] for s in lista_selecoes}
    
    with st.form(key="form_cadastro"):
        id_jogador = st.number_input("ID do Jogador (Chave Primária)", min_value=1, step=1)
        nome_jogador = st.text_input("Nome do Jogador")
        posicao = st.selectbox("Posição", OPCOES_POSICOES)
        numero_camisa = st.number_input("Número da Camisa", min_value=1, max_value=99, step=1)
        data_nasc = st.date_input("Data de Nascimento", min_value=datetime(1980, 1, 1))
        selecao_escolhida = st.selectbox("Seleção", list(opcoes_selecoes.keys()))
        
        submit_button = st.form_submit_button(label="Salvar Jogador")
        
        if submit_button:
            id_selecao = opcoes_selecoes[selecao_escolhida]
            sql = """INSERT INTO jogadores (id_jogador, nome_jogador, posicao, numero_camisa, data_nascimento, id_selecao) 
                     VALUES (%s, %s, %s, %s, %s, %s)"""
            valores = (id_jogador, nome_jogador, posicao, numero_camisa, data_nasc, id_selecao)
            
            try:
                cursor.execute(sql, valores)
                conexao.commit()
                st.success(f"Jogador {nome_jogador} cadastrado com sucesso!")
            except mysql.connector.Error as err:
                st.error(f"Erro do MySQL: {err}")

# update - atualizar jogador existente
elif menu == "Atualizar":
    st.subheader("Atualizar Dados do Jogador")
    
    cursor.execute("SELECT id_jogador, nome_jogador FROM jogadores")
    jogadores = cursor.fetchall()
    
    if jogadores:
        opcoes_jogadores = {f"{j['id_jogador']} - {j['nome_jogador']}": j['id_jogador'] for j in jogadores}
        jogador_escolhido = st.selectbox("Selecione o Jogador para alterar:", list(opcoes_jogadores.keys()))
        id_jogador = opcoes_jogadores[jogador_escolhido]
        
        cursor.execute("SELECT * FROM jogadores WHERE id_jogador = %s", (id_jogador,))
        dados_atuais = cursor.fetchone()
        
        lista_selecoes = buscar_selecoes()
        opcoes_selecoes = {s['nome_selecao']: s['id_selecao'] for s in lista_selecoes}
        
        nome_selecao_atual = next((nome for nome, id_sel in opcoes_selecoes.items() if id_sel == dados_atuais['id_selecao']), list(opcoes_selecoes.keys())[0])
        indice_selecao = list(opcoes_selecoes.keys()).index(nome_selecao_atual)
        
        # box de tratamento da posição do banco
        posicao_banco = str(dados_atuais['posicao']).strip().capitalize()
        
        if posicao_banco == "Meio-campo":
            posicao_banco = "Meio-Campista"
            
        if posicao_banco in OPCOES_POSICOES:
            indice_posicao = OPCOES_POSICOES.index(posicao_banco)
        else:
            indice_posicao = 0
        
        with st.form(key="form_atualizacao"):
            novo_nome = st.text_input("Nome do Jogador", value=dados_atuais['nome_jogador'])
            nova_posicao = st.selectbox("Posição", OPCOES_POSICOES, index=indice_posicao)
            nova_camisa = st.number_input("Número da Camisa", min_value=1, max_value=99, value=int(dados_atuais['numero_camisa']))
            nova_data = st.date_input("Data de Nascimento", value=dados_atuais['data_nascimento'])
            nova_selecao = st.selectbox("Seleção", list(opcoes_selecoes.keys()), index=indice_selecao)
            
            btn_atualizar = st.form_submit_button(label="Atualizar Dados")
            
            if btn_atualizar:
                novo_id_selecao = opcoes_selecoes[nova_selecao]
                sql = """UPDATE jogadores 
                         SET nome_jogador = %s, posicao = %s, numero_camisa = %s, data_nascimento = %s, id_selecao = %s 
                         WHERE id_jogador = %s"""
                valores = (novo_nome, nova_posicao, nova_camisa, nova_data, novo_id_selecao, id_jogador)
                
                try:
                    cursor.execute(sql, valores)
                    conexao.commit()

                    # usando st.success igual ao cadastrar
                    st.success(f"Dados de {novo_nome} atualizados com sucesso!")
                except mysql.connector.Error as err:
                    st.error(f"Erro do MySQL: {err}")
    else:
        st.warning("Nenhum jogador cadastrado para atualizar.")

# delete - deletar jogador
elif menu == "Deletar":
    st.subheader("Deletar Jogador")
    
    cursor.execute("SELECT id_jogador, nome_jogador FROM jogadores")
    jogadores = cursor.fetchall()
    
    if jogadores:
        opcoes_jogadores = {f"{j['id_jogador']} - {j['nome_jogador']}": j['id_jogador'] for j in jogadores}
        jogador_escolhido = st.selectbox("Selecione o Jogador para remover:", list(opcoes_jogadores.keys()))
        
        if st.button("Confirmar Exclusão"):
            id_jogador = opcoes_jogadores[jogador_escolhido]
            sql = "DELETE FROM jogadores WHERE id_jogador = %s"
            
            try:
                cursor.execute(sql, (id_jogador,))
                conexao.commit()
                
                # usando st.success igual ao cadastrar
                st.success("Jogador excluído com sucesso!")
            except mysql.connector.Error as err:
                st.error(f"Erro do MySQL: {err}")
    else:
        st.warning("Nenhum jogador cadastrado para deletar.")