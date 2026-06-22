// ============================================================================
// CRUD DE PARTIDAS - MONGODB (COPA DO MUNDO 2026)
// ============================================================================

// ----------------------------------------------------------------------------
// 1. CREATE (Inserindo o Amistoso como agendado / 0x0)
// ----------------------------------------------------------------------------
db.partidas.insertOne({
  data_partida: "2026-05-20",
  id_estadio: ObjectId("6a26d05156224c45e7ba8a5b"),
  id_selecao_1: ObjectId("6a26d05156224c45e7ba8a69"), // Brasil
  id_selecao_2: ObjectId("6a26d05156224c45e7ba8a68"), // Argentina
  quantidade_gols_selecao_1: 0, // Começa 0x0
  quantidade_gols_selecao_2: 0,
  vencedor: null, // Ainda não tem vencedor
});

// ----------------------------------------------------------------------------
// 2. READ Simples (Buscar todas as partidas que estão 0x0)
// ----------------------------------------------------------------------------
db.partidas
  .find({
    quantidade_gols_selecao_1: 0,
    quantidade_gols_selecao_2: 0,
  })
  .pretty();

// ----------------------------------------------------------------------------
// 3. UPDATE (Fim de jogo! Atualizando o placar e o vencedor)
// ----------------------------------------------------------------------------
// Brasil faz 3x2 na Argentina
db.partidas.updateOne(
  { data_partida: "2026-05-20" },
  {
    $set: {
      quantidade_gols_selecao_1: 3,
      quantidade_gols_selecao_2: 2,
      vencedor: ObjectId("6a26d05156224c45e7ba8a69"), // Define o Brasil como vencedor
    },
  },
);

// ----------------------------------------------------------------------------
// 4. READ AVANÇADO (Mostrando o resultado final consolidado)
// ----------------------------------------------------------------------------
db.partidas.aggregate([
  {
    $lookup: {
      from: "selecoes",
      localField: "id_selecao_1",
      foreignField: "_id",
      as: "dados_mandante",
    },
  },
  {
    $lookup: {
      from: "selecoes",
      localField: "id_selecao_2",
      foreignField: "_id",
      as: "dados_visitante",
    },
  },
  {
    $match: { data_partida: "2026-05-20" },
  },
  {
    $project: {
      data_partida: 1,
      mandante: { $arrayElemAt: ["$dados_mandante.nome_selecao", 0] },
      gols_mandante: "$quantidade_gols_selecao_1",
      visitante: { $arrayElemAt: ["$dados_visitante.nome_selecao", 0] },
      gols_visitante: "$quantidade_gols_selecao_2",
    },
  },
]);

// ----------------------------------------------------------------------------
// 5. DELETE (Limpando o banco)
// ----------------------------------------------------------------------------
db.partidas.deleteOne({ data_partida: "2026-05-20" });
