// Operações CRUD para a coleção estadios no MongoDB

// CREATE - Inserindo um novo estádio na Copa do Mundo
// nao precisa passar o id, já que o MongoDB gera um ObjectId automaticamente para cada documento
db.estadios.insertOne({
  nome_estadio: 'Maracanã Teste',
  cidade: 'Rio de Janeiro',
  pais: 'Brasil',
  capacidade: 78838
});

// READ - Buscando estádios no México com capacidade maior que 50.000 lugares
db.estadios.find({ pais: 'México', capacidade: { $gt: 50000 } });

// UPDATE - Atualizando a capacidade de um estadio
// primeiro passamos um filtro pra achar o estadio que queremos mudar e depois usamos o set pra introduzir a alteracao
db.estadios.updateOne(
  { nome_estadio: 'Miami Stadium' },
  { $set: { capacidade: 80000 } }
);

// UPDATE em toda coleção, aumentando a capacidade de todos os estádios em 10% usando o operador $mul
// chave vazia porque estamos selecionando toda a coleção e depois passamos a operação que vamos fazer em todos.
// mul é a operaçao de multiplicacao que usamos pra aumentar a capacidade dos estadios em 10%
db.estadios.updateMany(
  {},
  { $mul: { capacidade: 1.1 } }
);

// DELETE - Removendo o estádio da coleção
db.estadios.deleteOne({ nome_estadio: 'Miami Stadium' });