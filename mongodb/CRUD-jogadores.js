use copa_do_mundo_2026;

// 1. CREATE (Adicionar um novo jogador a uma seleção existente)
// Insere o objeto do jogador Neymar Jr no final do array 'jogadores' do Brasil usando o operador $push.
db.selecoes.updateOne(
  { nome_selecao: "Brasil" },
  { 
    $push: { 
      jogadores: { 
        nome_jogador: "Neymar Jr", 
        posicao: "Atacante", 
        numero_camisa: 10, 
        data_nascimento: "1992-02-05" 
      } 
    } 
  }
);

// 2. READ (Consultar e Filtrar Jogadores)
// Desconstrói o array de jogadores com o $unwind e filtra usando o $match para listar todos os camisas 10 de todas as seleções.
db.selecoes.aggregate([
  { $unwind: "$jogadores" },
  { $match: { "jogadores.numero_camisa": 10 } },
  {
    $project: {
      _id: 0,
      selecao: "$nome_selecao",
      jogador: "$jogadores.nome_jogador",
      posicao: "$jogadores.posicao",
      camisa: "$jogadores.numero_camisa"
    }
  },
  { $sort: { selecao: 1 } }
]).pretty();

// 3. UPDATE (Atualizar os dados de um jogador específico dentro de uma seleção)
// Localiza o jogador Endrick Felipe no Brasil e usa o operador posicional $ junto com o $set para alterar sua camisa para 11.
db.selecoes.updateOne(
  { nome_selecao: "Brasil", "jogadores.nome_jogador": "Endrick Felipe" },
  { 
    $set: { "jogadores.$.numero_camisa": 11 } 
  }
);

// 4. DELETE (Remover um jogador do array de uma seleção)
// Utiliza o operador $pull para remover especificamente o objeto do jogador Neymar Jr do array de jogadores do Brasil.
db.selecoes.updateOne(
  { nome_selecao: "Brasil" },
  { 
    $pull: { jogadores: { nome_jogador: "Neymar Jr" } } 
  }
);