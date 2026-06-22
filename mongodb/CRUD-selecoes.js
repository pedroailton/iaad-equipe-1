// Operações CRUD para a coleção selecoes no MongoDB

// CREATE - Inserindo uma nova seleção na Copa do Mundo
// nao precisa passar o id, já que o MongoDB gera um ObjectId automaticamente para cada documento
db.selecoes.insertOne({
  nome_selecao: 'Itália',
  continente: 'Europa',
  tecnico: 'Roberto Mancini',
  titulos: 4
});

// READ - Buscando seleções da Europa com mais de 2 títulos
db.selecoes.find({ continente: 'Europa', titulos: { $gt: 2 } });

// READ - Buscando seleções com mais de 3 títulos
// usamos o operador $gt (greater than) pra filtrar só os documentos onde o campo titulos é maior que 3
db.selecoes.find({ titulos: { $gt: 3 } });

// UPDATE - Atualizando o técnico de uma seleção
// primeiro passamos um filtro pra achar a seleção que queremos mudar e depois usamos o set pra introduzir a alteracao
db.selecoes.updateOne(
  { nome_selecao: 'Brasil' },
  { $set: { tecnico: 'Carlo Ancelotti' } }
);

// DELETE - Removendo a seleção da coleção
db.selecoes.deleteOne({ nome_selecao: 'Argentina' });