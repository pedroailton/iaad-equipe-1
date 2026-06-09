# ⚽ Copa do Mundo de Futebol — Sistema de Gestão

> **Disciplina**: Introdução ao Armazenamento e Análise de Dados (IAAD)  
> **Curso**: Bacharelado em Sistemas de Informação — 3º Período  
> **Instituição**: Universidade Federal Rural de Pernambuco (UFRPE)  
> **Professora**: Roberta Gouveia  
> **Avaliação**: 2ª VA

---

## 👥 Equipe 1

| Nome |
|------|
| Pedro Ailton Alves da Cunha |
| Clara Helena Souza da Silva |
| Igor Dias Vieira |
| Gabryel Gomes Silva Souza |
| Felipe Cavalcante Santos |
| Maria Eduarda Alves dos Santos |

---

## 📋 Objetivo

Sistema de gestão para a Copa do Mundo de Futebol 2026, permitindo operações CRUD (Create, Read, Update, Delete) sobre as seguintes entidades do banco de dados MySQL:

- **Seleções** — cadastro das 48 seleções participantes
- **Jogadores** — elenco de cada seleção (com FK para seleções)
- **Estádios** — 16 arenas sede nos EUA, México e Canadá
- **Partidas** — tabela de jogos com placar e resultado (com FKs para estádios e seleções)

A interface web foi desenvolvida com **Streamlit** e se conecta diretamente ao **MySQL** local via `mysql-connector-python`.

---

## 📁 Estrutura do Projeto

```
iaad-equipe-1/
├── .streamlit/
│   └── config.toml              # Configuração visual do Streamlit
├── mysql/
│   ├── cruds/                   # Funções utilitárias de CRUD (Python)
│   │   ├── conexao.py           # Módulo de conexão com o MySQL
│   │   ├── crud_selecoes.py     # CRUD da tabela selecoes
│   │   ├── crud_jogadores.py    # CRUD da tabela jogadores
│   │   ├── crud_estadios.py     # CRUD da tabela estadios
│   │   ├── crud_partidas.py     # CRUD da tabela partidas
│   │   └── __init__.py
│   ├── interface/               # Interface web com Streamlit
│   │   ├── app.py               # Arquivo principal da aplicação
│   │   ├── assets/
│   │   │   └── styles.css       # Estilização customizada
│   │   └── views/               # Páginas de cada entidade
│   │       ├── selecoes.py
│   │       ├── jogadores.py
│   │       ├── estadios.py
│   │       └── partidas.py
│   ├── scripts/                 # Scripts SQL do banco
│   │   ├── script-criacao-banco.sql    # DDL — criação do schema e tabelas
│   │   └── script-populacao-banco.sql  # DML — inserção dos dados iniciais
│   └── extras/                  # Scripts auxiliares (consultas extras)
├── mongodb/                     # Módulo MongoDB (outra parte do projeto)
├── requirements.txt             # Dependências Python
└── README.md
```

---

## ⚙️ Pré-requisitos

- **Python** 3.10 ou superior
- **MySQL Server** 8.0+ instalado e rodando localmente
- **MySQL Workbench** (opcional, para executar os scripts SQL)
- **pip** (gerenciador de pacotes Python)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/pedroailton/iaad-equipe-1.git
cd iaad-equipe-1
```

### 2. Crie o banco de dados no MySQL

Abra o **MySQL Workbench** (ou outro cliente MySQL) e execute os scripts na seguinte ordem:

```
mysql/scripts/script-criacao-banco.sql    → Cria o schema e as tabelas
mysql/scripts/script-populacao-banco.sql  → Popula o banco com os dados da Copa 2026
```

> **Dica**: Você pode executar via linha de comando:
> ```bash
> mysql -u root -p < mysql/scripts/script-criacao-banco.sql
> mysql -u root -p < mysql/scripts/script-populacao-banco.sql
> ```

### 3. Configure a senha do MySQL

Abra o arquivo `mysql/cruds/conexao.py` e altere a variável `MYSQL_PASSWORD` para a **senha do seu MySQL local**:

```python
# Altere para a sua senha do MySQL
MYSQL_PASSWORD = "sua_senha_aqui"
```

> ⚠️ **Importante**: Cada membro da equipe deve configurar esta variável com a senha do seu próprio MySQL local. Não commite sua senha no repositório.

### 4. Instale as dependências Python

```bash
pip install -r requirements.txt
```

### 5. Execute a aplicação

```bash
python -m streamlit run mysql/interface/app.py
```

A aplicação abrirá automaticamente no navegador em `http://localhost:8501`.

---

## 🗄️ Banco de Dados

### Diagrama Entidade-Relacionamento

O banco **"Copa do Mundo de Futebol"** possui 4 tabelas:

| Tabela | Descrição | PK | FKs |
|--------|-----------|-----|-----|
| `selecoes` | 48 seleções participantes | `id_selecao` (AUTO_INCREMENT) | — |
| `jogadores` | Elenco de cada seleção (26 por seleção) | `id_jogador` (AUTO_INCREMENT) | `id_selecao` → selecoes |
| `estadios` | 16 estádios sede | `id_estadio` (AUTO_INCREMENT) | — |
| `partidas` | Tabela de jogos e resultados | `id_partida` (AUTO_INCREMENT) | `id_estadio` → estadios, `id_selecao_1/2` → selecoes, `vencedor` → selecoes |

- Todas as PKs utilizam **AUTO_INCREMENT**
- FKs configuradas com **ON DELETE CASCADE**
- O campo `vencedor` em `partidas` é **nullable** (empate = NULL)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|-----------|
| Python | 3.10+ | Linguagem principal |
| Streamlit | 1.58.0 | Interface web |
| MySQL | 8.0+ | Banco de dados relacional |
| mysql-connector-python | — | Driver de conexão Python ↔ MySQL |
| pandas | 3.0.3 | Manipulação de dados para exibição |
| streamlit-option-menu | 0.4.0 | Navbar horizontal na interface |

---

## 📝 Licença

Este projeto é um trabalho acadêmico desenvolvido para fins educacionais.