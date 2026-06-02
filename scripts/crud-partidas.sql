-- ============================================================================
-- 1. CREATE (CRIAR): Inserindo uma nova partida extra
-- ============================================================================

-- Como as 104 partidas oficiais da Copa já estão populadas, 
-- vamos demonstrar a operação CREATE registrando um Amistoso Preparatório.
-- Exemplo: Amistoso entre Brasil (ID 8) e Argentina (ID 7) agendado para antes da Copa.
INSERT INTO partidas 
(id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor)
VALUES 
(105, '2026-05-20', 1, 8, 7, 0, 0, NULL);

-- ============================================================================
-- 2. READ (LÊR / CONSULTAR): Buscando os jogos no banco
-- ============================================================================

-- Consulta 1: Traz os IDs crus de todas as partidas
SELECT * FROM partidas;

-- Consulta 2: Usa JOIN para trocar os IDs pelos nomes reais
SELECT 
    p.id_partida,
    p.data_partida,
    e.nome_estadio,
    s1.nome_selecao AS mandante,
    s2.nome_selecao AS visitante,
    p.quantidade_gols_selecao_1 AS gols_mandante,
    p.quantidade_gols_selecao_2 AS gols_visitante
FROM 
    partidas p
INNER JOIN estadios e ON p.id_estadio = e.id_estadio
INNER JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
INNER JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao;

-- Consulta 3: Apenas Amistosos
-- Filtramos usando a data. Tudo que for antes de 11/06/2026 (início da Copa) é amistoso!
SELECT 
    p.data_partida,
    s1.nome_selecao AS mandante,
    s2.nome_selecao AS visitante
FROM 
    partidas p
INNER JOIN selecoes s1 ON p.id_selecao_1 = s1.id_selecao
INNER JOIN selecoes s2 ON p.id_selecao_2 = s2.id_selecao
WHERE 
    p.data_partida < '2026-06-11';

-- CONSULTA 4: Relatório de Desempenho dos Estádios: Total de jogos e estatísticas de gols
SELECT 
    e.nome_estadio,
    e.cidade,
    COUNT(p.id_partida) AS total_partidas_realizadas,
    SUM(p.quantidade_gols_selecao_1 + p.quantidade_gols_selecao_2) AS total_gols_marcados,
    ROUND(AVG(p.quantidade_gols_selecao_1 + p.quantidade_gols_selecao_2), 2) AS media_gols_por_jogo
FROM 
    estadios e
LEFT JOIN 
    partidas p ON e.id_estadio = p.id_estadio
GROUP BY 
    e.nome_estadio, 
    e.cidade
ORDER BY 
    total_gols_marcados DESC;

-- CONSULTA 5: Painel de Contagem Regressiva: Quantos dias faltam para os próximos jogos?
SELECT 
    s1.nome_selecao AS mandante,
    s2.nome_selecao AS visitante,
    p.data_partida,
    DATEDIFF(p.data_partida, CURDATE()) AS dias_para_o_jogo
FROM 
    partidas p
INNER JOIN 
    selecoes s1 ON p.id_selecao_1 = s1.id_selecao
INNER JOIN 
    selecoes s2 ON p.id_selecao_2 = s2.id_selecao
WHERE 
    p.data_partida >= CURDATE()
ORDER BY 
    p.data_partida ASC;
    
-- ============================================================================
-- 3. UPDATE (ATUALIZAR / EDITAR): Modificando registros existentes
-- ============================================================================

-- Cenário A: Remarcando a data de um jogo
-- Exemplo: O amistoso preparatório (ID 105) precisou ser adiado por motivos de logística.
-- Vamos alterar a data de '2026-05-20' para '2026-05-25'.
UPDATE partidas
SET data_partida = '2026-05-25'
WHERE id_partida = 105;


-- Cenário B: Alimentando o placar após o jogo
-- Exemplo: O amistoso aconteceu e o Brasil (ID 8) venceu a Argentina (ID 7) por 3x1.
-- Vamos atualizar os gols das duas seleções e definir quem foi o vencedor.
UPDATE partidas
SET 
    quantidade_gols_selecao_1 = 3,
    quantidade_gols_selecao_2 = 1,
    vencedor = 8
WHERE id_partida = 105;

-- ============================================================================
-- 4. DELETE (DELETAR / REMOVER): Excluindo registros do banco
-- ============================================================================

-- Preparação rápida para o teste: Inserindo duas partidas extras para servirem de alvo.
-- (Canadá vs México)
INSERT INTO partidas (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor) 
VALUES (106, '2026-05-22', 3, 1, 2, 0, 0, NULL); -- O jogo original
INSERT INTO partidas (id_partida, data_partida, id_estadio, id_selecao_1, id_selecao_2, quantidade_gols_selecao_1, quantidade_gols_selecao_2, vencedor) 
VALUES (107, '2026-05-22', 3, 1, 2, 0, 0, NULL); -- O clone duplicado sem querer

-- Cenário A: Corrigindo um erro humano (Cadastro Duplicado)
-- Exemplo: O administrador do sistema se distraiu e inseriu a partida duas vezes. 
-- Vamos deletar o registro duplicado (ID 107) para limpar a base.
DELETE FROM partidas
WHERE id_partida = 107;

-- Cenário B: Cancelamento de evento por força maior
-- Exemplo: O amistoso ID 106 precisou ser cancelado definitivamente porque uma forte tempestade alagou o gramado do estádio.
DELETE FROM partidas
WHERE id_partida = 106;

    
    