// =============================================================================
// PARTE 1: INICIALIZAÇÃO DO AMBIENTE, ESTÁDIOS E SELEÇÕES (1 A 8)
// =============================================================================

// Limpeza prévia das coleções para garantir idempotência
db.estadios.drop();
db.selecoes.drop();
db.partidas.drop();

// Mapas globais de memória para tradução dinâmica de chaves relacionais para ObjectId
var mapaEstadios = {};
var mapaSelecoes = {};

print("-> Coleções resetadas. Carregando os 16 estádios oficiais...");

const dadosEstadios = [
  { id_estadio: 1, nome_estadio: "Dallas Stadium", cidade: "Arlington", pais: "Estados Unidos", capacidade: 94000 },
  { id_estadio: 2, nome_estadio: "New York New Jersey Stadium", cidade: "East Rutherford", pais: "Estados Unidos", capacidade: 82500 },
  { id_estadio: 3, nome_estadio: "Atlanta Stadium", cidade: "Atlanta", pais: "Estados Unidos", capacidade: 75000 },
  { id_estadio: 4, nome_estadio: "Kansas City Stadium", cidade: "Kansas City", pais: "Estados Unidos", capacidade: 73000 },
  { id_estadio: 5, nome_estadio: "Houston Stadium", cidade: "Houston", pais: "Estados Unidos", capacidade: 72000 },
  { id_estadio: 6, nome_estadio: "San Francisco Bay Area Stadium", cidade: "Santa Clara", pais: "Estados Unidos", capacidade: 71000 },
  { id_estadio: 7, nome_estadio: "Los Angeles Stadium", cidade: "Inglewood", pais: "Estados Unidos", capacidade: 70000 },
  { id_estadio: 8, nome_estadio: "Seattle Stadium", cidade: "Seattle", pais: "Estados Unidos", capacidade: 69000 },
  { id_estadio: 9, nome_estadio: "Philadelphia Stadium", cidade: "Philadelphia", pais: "Estados Unidos", capacidade: 69000 },
  { id_estadio: 10, nome_estadio: "Miami Stadium", cidade: "Miami", pais: "Estados Unidos", capacidade: 65000 },
  { id_estadio: 11, nome_estadio: "Boston Stadium", cidade: "Foxborough", pais: "Estados Unidos", capacidade: 65000 },
  { id_estadio: 12, nome_estadio: "Mexico City Stadium", cidade: "Cidade do México", pais: "México", capacidade: 83000 },
  { id_estadio: 13, nome_estadio: "Estadio Monterrey", cidade: "Guadalupe", pais: "México", capacidade: 53500 },
  { id_estadio: 14, nome_estadio: "Estadio Guadalajara", cidade: "Zapopan", pais: "México", capacidade: 48000 },
  { id_estadio: 15, nome_estadio: "BC Place Vancouver", cidade: "Vancouver", pais: "Canadá", capacidade: 54000 },
  { id_estadio: 16, nome_estadio: "Toronto Stadium", cidade: "Toronto", pais: "Canadá", capacidade: 45000 }
];

dadosEstadios.forEach(estadio => {
  const resultado = db.estadios.insertOne({
    nome_estadio: estadio.nome_estadio,
    cidade: estadio.cidade,
    pais: estadio.pais,
    capacidade: estadio.capacidade
  });
  mapaEstadios[estadio.id_estadio] = resultado.insertedId;
});

print("-> Estádios carregados. Iniciando a inserção do primeiro bloco de seleções...");

const selecoesBloco1 = [
  {
    id_selecao: 1, nome_selecao: "Canadá", continente: "América do Norte", tecnico: "Jesse Marsch", titulos: 0,
    jogadores: [
      { nome_jogador: "Maxime Crépeau", posicao: "Goleiro", numero_camisa: 16, data_nascimento: "1994-04-11" },
      { nome_jogador: "Dayne St. Clair", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1997-05-09" },
      { nome_jogador: "Tom McGill", posicao: "Goleiro", numero_camisa: 18, data_nascimento: "2000-03-25" },
      { nome_jogador: "Alphonso Davies", posicao: "Defensor", numero_camisa: 19, data_nascimento: "2000-11-02" },
      { nome_jogador: "Alistair Johnston", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1998-10-08" },
      { nome_jogador: "Kamal Miller", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-05-16" },
      { nome_jogador: "Derek Cornelius", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1997-11-25" },
      { nome_jogador: "Moïse Bombito", posicao: "Defensor", numero_camisa: 15, data_nascimento: "2000-03-30" },
      { nome_jogador: "Richie Laryea", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1995-01-07" },
      { nome_jogador: "Luc de Fougerolles", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2005-10-12" },
      { nome_jogador: "Kyle Hiebert", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1997-07-30" },
      { nome_jogador: "Stephen Eustáquio", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1996-12-21" },
      { nome_jogador: "Ismaël Koné", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2002-06-16" },
      { nome_jogador: "Jonathan Osorio", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1992-06-12" },
      { nome_jogador: "Mathieu Choinière", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1999-02-07" },
      { nome_jogador: "Samuel Piette", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1994-11-12" },
      { nome_jogador: "Ali Ahmed", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2000-10-10" },
      { nome_jogador: "Jonathan David", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2000-01-14" },
      { nome_jogador: "Cyle Larin", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1995-04-17" },
      { nome_jogador: "Tajon Buchanan", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1999-02-08" },
      { nome_jogador: "Liam Millar", posicao: "Atacante", numero_camisa: 23, data_nascimento: "1999-09-27" },
      { nome_jogador: "Jacob Shaffelburg", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1999-11-26" },
      { nome_jogador: "Iké Ugbo", posicao: "Atacante", numero_camisa: 12, data_nascimento: "1998-09-21" },
      { nome_jogador: "Tani Oluwaseyi", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2000-05-15" },
      { nome_jogador: "Charles-Andreas Brym", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1998-08-08" },
      { nome_jogador: "Theo Bair", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1999-08-27" }
    ]
  },
  {
    id_selecao: 2, nome_selecao: "México", continente: "América do Norte", tecnico: "Jaime Lozano", titulos: 0,
    jogadores: [
      { nome_jogador: "Guillermo Ochoa", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1985-07-13" },
      { nome_jogador: "Luis Malagón", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1997-03-02" },
      { nome_jogador: "Julio González", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1991-04-23" },
      { nome_jogador: "Edson Álvarez", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1997-10-24" },
      { nome_jogador: "Johan Vásquez", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1998-10-22" },
      { nome_jogador: "César Montes", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1997-02-24" },
      { nome_jogador: "Jorge Sánchez", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1997-12-10" },
      { nome_jogador: "Gerardo Arteaga", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1998-09-07" },
      { nome_jogador: "Jesús Gallardo", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1994-08-15" },
      { nome_jogador: "Julián Araujo", posicao: "Defensor", numero_camisa: 26, data_nascimento: "2001-08-13" },
      { nome_jogador: "Víctor Guzmán", posicao: "Defensor", numero_camisa: 14, data_nascimento: "2002-03-07" },
      { nome_jogador: "Luis Romo", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1995-06-05" },
      { nome_jogador: "Carlos Rodríguez", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1997-01-03" },
      { nome_jogador: "Érick Sánchez", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1999-09-27" },
      { nome_jogador: "Orbelín Pineda", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1996-03-24" },
      { nome_jogador: "Sebastián Córdova", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1997-06-12" },
      { nome_jogador: "Marcel Ruiz", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2000-10-26" },
      { nome_jogador: "Hirving Lozano", posicao: "Atacante", numero_camisa: 22, data_nascimento: "1995-07-30" },
      { nome_jogador: "Santiago Giménez", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2001-04-18" },
      { nome_jogador: "Raúl Jiménez", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-05-05" },
      { nome_jogador: "Uriel Antuna", posicao: "Atacante", numero_camisa: 15, data_nascimento: "1997-08-21" },
      { nome_jogador: "Julián Quiñones", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1997-03-24" },
      { nome_jogador: "Henry Martín", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1992-11-18" },
      { nome_jogador: "César Huerta", posicao: "Atacante", numero_camisa: 18, data_nascimento: "2000-12-03" },
      { nome_jogador: "Roberto Alvarado", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1998-09-07" },
      { nome_jogador: "Diego Lainez", posicao: "Atacante", numero_camisa: 13, data_nascimento: "2000-06-09" }
    ]
  },
  {
    id_selecao: 3, nome_selecao: "Estados Unidos", continente: "América do Norte", tecnico: "Mauricio Pochettino", titulos: 0,
    jogadores: [
      { nome_jogador: "Matt Turner", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-06-24" },
      { nome_jogador: "Ethan Horvath", posicao: "Goleiro", numero_camisa: 18, data_nascimento: "1995-06-09" },
      { nome_jogador: "Sean Johnson", posicao: "Goleiro", numero_camisa: 25, data_nascimento: "1989-05-31" },
      { nome_jogador: "Sergiño Dest", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2000-11-03" },
      { nome_jogador: "Chris Richards", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2000-03-28" },
      { nome_jogador: "Antonee Robinson", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1997-08-08" },
      { nome_jogador: "Tim Ream", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1987-10-05" },
      { nome_jogador: "Cameron Carter-Vickers", posicao: "Defensor", numero_camisa: 20, data_nascimento: "1997-12-31" },
      { nome_jogador: "Joe Scally", posicao: "Defensor", numero_camisa: 22, data_nascimento: "2002-12-31" },
      { nome_jogador: "Miles Robinson", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1997-03-14" },
      { nome_jogador: "Kristoffer Lund", posicao: "Defensor", numero_camisa: 23, data_nascimento: "2002-05-14" },
      { nome_jogador: "Mark McKenzie", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1999-02-25" },
      { nome_jogador: "Tyler Adams", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1999-02-14" },
      { nome_jogador: "Yunus Musah", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "2002-11-29" },
      { nome_jogador: "Weston McKennie", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-08-28" },
      { nome_jogador: "Gio Reyna", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "2002-11-13" },
      { nome_jogador: "Luca de la Torre", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1998-05-23" },
      { nome_jogador: "Johnny Cardoso", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "2001-09-20" },
      { nome_jogador: "Malik Tillman", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "2002-05-28" },
      { nome_jogador: "Timothy Tillman", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1999-01-04" },
      { nome_jogador: "Christian Pulisic", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1998-09-18" },
      { nome_jogador: "Ricardo Pepi", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2003-01-09" },
      { nome_jogador: "Folarin Balogun", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2001-07-03" },
      { nome_jogador: "Timothy Weah", posicao: "Atacante", numero_camisa: 21, data_nascimento: "2000-02-22" },
      { nome_jogador: "Brenden Aaronson", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2000-10-22" },
      { nome_jogador: "Haji Wright", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1998-03-27" },
      { nome_jogador: "Josh Sargent", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2000-02-20" }
    ]
  },
  {
    id_selecao: 4, nome_selecao: "Panamá", continente: "América Central", tecnico: "Thomas Christiansen", titulos: 0,
    jogadores: [
      { nome_jogador: "Orlando Mosquera", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-12-25" },
      { nome_jogador: "Luis Mejía", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1991-03-16" },
      { nome_jogador: "César Samudio", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1994-03-26" },
      { nome_jogador: "Fidel Escobar", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1995-01-09" },
      { nome_jogador: "Andrés Andrade", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1998-10-16" },
      { nome_jogador: "José Córdoba", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2001-06-03" },
      { nome_jogador: "Michael Amir Murillo", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1996-02-11" },
      { nome_jogador: "Eric Davis", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1991-03-31" },
      { nome_jogador: "César Blackman", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1998-04-02" },
      { nome_jogador: "Roderick Miller", posicao: "Defensor", numero_camisa: 25, data_nascimento: "1992-04-03" },
      { nome_jogador: "Iván Anderson", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1997-11-24" },
      { nome_jogador: "Adalberto Carrasquilla", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-11-28" },
      { nome_jogador: "Aníbal Godoy", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1990-02-10" },
      { nome_jogador: "Édgars Bárcenas", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1993-10-23" },
      { nome_jogador: "Cristian Martínez", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1997-02-06" },
      { nome_jogador: "Jovani Welch", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1999-12-07" },
      { nome_jogador: "César Yanis", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1996-01-28" },
      { nome_jogador: "Alberto Quintero", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1987-12-18" },
      { nome_jogador: "Ismael Díaz", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1997-05-12" },
      { nome_jogador: "José Fajardo", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1993-08-18" },
      { nome_jogador: "Cecilio Waterman", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1991-04-13" },
      { nome_jogador: "Eduardo Guerrero", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-02-21" },
      { nome_jogador: "Rolando Blackburn", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1990-01-09" },
      { nome_jogador: "Freddy Góndola", posicao: "Atacante", numero_camisa: 13, data_nascimento: "1995-09-18" },
      { nome_jogador: "Kahiser Lenis", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2000-07-23" },
      { nome_jogador: "Tomás Rodríguez", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1999-03-09" }
    ]
  },
  {
    id_selecao: 5, nome_selecao: "Haiti", continente: "América Central", tecnico: "Sébastien Migné", titulos: 0,
    jogadores: [
      { nome_jogador: "Johny Placide", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1988-01-29" },
      { nome_jogador: "Garissone Innocent", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2000-04-16" },
      { nome_jogador: "Alexandre Pierre", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "2001-02-25" },
      { nome_jogador: "Ricardo Adé", 'posicao': "Defensor", numero_camisa: 4, data_nascimento: "1990-05-21" },
      { nome_jogador: "Carlens Arcus", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1996-06-28" },
      { nome_jogador: "Garven Metusala", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1999-12-31" },
      { nome_jogador: "Alex Christian", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1993-12-05" },
      { nome_jogador: "Duke Lacroix", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1993-10-14" },
      { nome_jogador: "Francois Dulysse", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1999-04-13" },
      { nome_jogador: "Martin Experience", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1999-03-09" },
      { nome_jogador: "Jean-Kevin Duverne", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1997-07-12" },
      { nome_jogador: "Bryan Alceus", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1996-02-01" },
      { nome_jogador: "Carl-Fredrik Sainte", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "2002-08-09" },
      { nome_jogador: "Leverton Pierre", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-03-09" },
      { nome_jogador: "Danley Jean Jacques", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "2000-05-20" },
      { nome_jogador: "Derrick Etienne Jr.", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1996-11-25" },
      { nome_jogador: "Fabien Simon", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2001-11-15" },
      { nome_jogador: "Steeven Saba", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1993-02-24" },
      { nome_jogador: "Frantzdy Pierrot", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1995-03-29" },
      { nome_jogador: "Duckens Nazon", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1994-04-07" },
      { nome_jogador: "Carnejy Antoine", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1991-07-27" },
      { nome_jogador: "Mondy Prunier", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1999-12-22" },
      { nome_jogador: "Louicius Don Deedson", posicao: "Atacante", numero_camisa: 13, data_nascimento: "2001-02-11" },
      { nome_jogador: "Fafa Picault", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1991-02-23" },
      { nome_jogador: "Dany Jean", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2002-11-28" },
      { nome_jogador: "Jonel Désiré", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1997-02-12" }
    ]
  },
  {
    id_selecao: 6, nome_selecao: "Curaçao", continente: "América Central", tecnico: "Dick Advocaat", titulos: 0,
    jogadores: [
      { nome_jogador: "Eloy Room", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1989-02-06" },
      { nome_jogador: "Tyrick Bodak", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "2002-05-15" },
      { nome_jogador: "Trevor Doornbusch", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1999-07-06" },
      { nome_jogador: "Cuco Martina", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1989-09-25" },
      { nome_jogador: "Jurien Gaari", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1993-12-23" },
      { nome_jogador: "Roshon van Eijma", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1998-06-09" },
      { nome_jogador: "Sherel Floranus", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1998-08-23" },
      { nome_jogador: "Shanon Carmelia", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1989-03-20" },
      { nome_jogador: "Justin Ogenia", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1999-02-05" },
      { nome_jogador: "Nathangelo Markelo", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1999-01-07" },
      { nome_jogador: "Bradley Martis", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1998-07-13" },
      { nome_jogador: "Kevin Felida", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1999-11-11" },
      { nome_jogador: "Godfried Roemeratoe", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1999-08-19" },
      { nome_jogador: "Juninho Bacuna", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1997-08-07" },
      { nome_jogador: "Leandro Bacuna", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1991-08-21" },
      { nome_jogador: "Vurnon Anita", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1989-04-04" },
      { nome_jogador: "Roly Bonevacia", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1991-10-08" },
      { nome_jogador: "Nathan Markelo", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "1999-01-07" },
      { nome_jogador: "Jearl Margaritha", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2000-04-10" },
      { nome_jogador: "Rangelo Janga", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1992-04-16" },
      { nome_jogador: "Brandley Kuwas", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1992-09-19" },
      { nome_jogador: "Kenji Gorré", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1994-09-29" },
      { nome_jogador: "Elson Hooi", posicao: "Atacante", numero_camisa: 16, data_nascimento: "1991-10-01" },
      { nome_jogador: "Richairo Zivkovic", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1996-09-05" },
      { nome_jogador: "Jürgen Locadia", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1993-11-07" },
      { nome_jogador: "Ar'jany Martha", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2003-09-04" }
    ]
  },
  {
    id_selecao: 7, nome_selecao: "Argentina", continente: "América do Sul", tecnico: "Lionel Scaloni", titulos: 3,
    jogadores: [
      { nome_jogador: "Emiliano Martínez", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-09-02" },
      { nome_jogador: "Franco Armani", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1986-10-16" },
      { nome_jogador: "Gerónimo Rulli", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1992-05-20" },
      { nome_jogador: "Cristian Romero", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1998-04-27" },
      { nome_jogador: "Nicolás Otamendi", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1988-02-12" },
      { nome_jogador: "Lisandro Martínez", posicao: "Defensor", numero_camisa: 25, data_nascimento: "1998-01-18" },
      { nome_jogador: "Germán Pezzella", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1991-06-27" },
      { nome_jogador: "Nahuel Molina", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1998-04-06" },
      { nome_jogador: "Gonzalo Montiel", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-01-01" },
      { nome_jogador: "Nicolás Tagliafico", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1992-08-31" },
      { nome_jogador: "Marcos Acuña", posicao: "Defensor", numero_camisa: 8, data_nascimento: "1991-10-28" },
      { nome_jogador: "Rodrigo De Paul", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1994-05-24" },
      { nome_jogador: "Enzo Fernández", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2001-01-17" },
      { nome_jogador: "Alexis Mac Allister", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1998-12-24" },
      { nome_jogador: "Leandro Paredes", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1994-06-29" },
      { nome_jogador: "Giovani Lo Celso", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1996-04-09" },
      { nome_jogador: "Exequiel Palacios", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1998-10-05" },
      { nome_jogador: "Guido Rodríguez", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1994-04-12" },
      { nome_jogador: "Lionel Messi", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1987-06-24" },
      { nome_jogador: "Julián Álvarez", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-01-31" },
      { nome_jogador: "Lautaro Martínez", posicao: "Atacante", numero_camisa: 22, data_nascimento: "1997-08-22" },
      { nome_jogador: "Nicolás González", posicao: "Atacante", numero_camisa: 15, data_nascimento: "1998-04-06" },
      { nome_jogador: "Alejandro Garnacho", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2004-07-01" },
      { nome_jogador: "Paulo Dybala", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1993-11-15" },
      { nome_jogador: "Facundo Buonanotte", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "2004-12-23" },
      { nome_jogador: "Valentín Barco", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2004-07-23" }
    ]
  },
  {
    id_selecao: 8, nome_selecao: "Brasil", continente: "América do Sul", tecnico: "Dorival Júnior", titulos: 5,
    jogadores: [
      { nome_jogador: "Alisson Becker", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-10-02" },
      { nome_jogador: "Ederson Moraes", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1993-08-17" },
      { nome_jogador: "Bento Krepski", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1999-06-10" },
      { nome_jogador: "Danilo Luiz", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1991-07-15" },
      { nome_jogador: "Yan Couto", posicao: "Defensor", numero_camisa: 13, data_nascimento: "2002-06-03" },
      { nome_jogador: "Marquinhos", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1994-05-14" },
      { nome_jogador: "Gabriel Magalhães", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1997-12-19" },
      { nome_jogador: "Lucas Beraldo", posicao: "Defensor", numero_camisa: 17, data_nascimento: "2003-11-24" },
      { nome_jogador: "Gleison Bremer", posicao: "Defensor", numero_camisa: 25, data_nascimento: "1997-03-18" },
      { nome_jogador: "Wendell", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1993-07-20" },
      { nome_jogador: "Guilherme Arana", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1997-04-14" },
      { nome_jogador: "Bruno Guimarães", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1997-11-16" },
      { nome_jogador: "João Gomes", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "2001-02-12" },
      { nome_jogador: "Douglas Luiz", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1998-05-09" },
      { nome_jogador: "Lucas Paquetá", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1997-08-27" },
      { nome_jogador: "Andreas Pereira", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1996-01-01" },
      { nome_jogador: "Éderson dos Santos", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1999-07-07" },
      { nome_jogador: "Vinícius Júnior", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2000-07-12" },
      { nome_jogador: "Rodrygo Goes", posicao: "Atacante", numero_camisa: 10, data_nascimento: "2001-01-09" },
      { nome_jogador: "Raphinha", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1996-12-14" },
      { nome_jogador: "Endrick Felipe", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2006-07-21" },
      { nome_jogador: "Gabriel Martinelli", posicao: "Atacante", numero_camisa: 22, data_nascimento: "2001-06-18" },
      { nome_jogador: "Sávio (Savinho)", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2004-04-10" },
      { nome_jogador: "Evanilson", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1999-10-06" },
      { nome_jogador: "Richarlison", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1997-05-10" },
      { nome_jogador: "Pedro Guilherme", posicao: "Atacante", numero_camisa: 3, data_nascimento: "1997-06-20" }
    ]
  }
];

selecoesBloco1.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 1 de Seleções (1 a 8) inserido com sucesso.");

// =============================================================================
// PARTE 2: SELEÇÕES E ELENCOS (9 A 16)
// =============================================================================

print("-> Iniciando a inserção do segundo bloco de seleções (9 a 16)...");

const selecoesBloco2 = [
  {
    id_selecao: 9, nome_selecao: "Colômbia", continente: "América do Sul", tecnico: "Néstor Lorenzo", titulos: 0,
    jogadores: [
      { nome_jogador: "Camilo Vargas", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1989-03-09" },
      { nome_jogador: "David Ospina", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1988-08-31" },
      { nome_jogador: "Álvaro Montero", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1995-03-29" },
      { nome_jogador: "Davinson Sánchez", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1996-06-12" },
      { nome_jogador: "Yerry Mina", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1994-09-23" },
      { nome_jogador: "Carlos Cuesta", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1999-03-09" },
      { nome_jogador: "Jhon Lucumí", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1998-06-26" },
      { nome_jogador: "Daniel Muñoz", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1996-05-26" },
      { nome_jogador: "Santiago Arias", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1992-01-13" },
      { nome_jogador: "Johan Mojica", posicao: "Defensor", numero_camisa: 17, data_nascimento: "1992-08-21" },
      { nome_jogador: "Deiver Machado", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1993-09-02" },
      { nome_jogador: "Jefferson Lerma", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1994-10-25" },
      { nome_jogador: "Richard Ríos", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "2000-06-02" },
      { nome_jogador: "Kevin Castaño", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "2000-09-29" },
      { nome_jogador: "Mateus Uribe", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1991-03-21" },
      { nome_jogador: "James Rodríguez", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1991-07-12" },
      { nome_jogador: "Juan Fernando Quintero", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1993-01-18" },
      { nome_jogador: "Jorge Carrascal", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-05-25" },
      { nome_jogador: "Jhon Arias", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1997-09-21" },
      { nome_jogador: "Yaser Asprilla", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "2003-11-19" },
      { nome_jogador: "Luis Díaz", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1997-01-13" },
      { nome_jogador: "Rafael Santos Borré", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1995-09-15" },
      { nome_jogador: "Jhon Durán", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2003-12-13" },
      { nome_jogador: "Miguel Borja", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1993-01-26" },
      { nome_jogador: "Luis Sinisterra", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1999-06-17" },
      { nome_jogador: "Jhon Córdoba", posicao: "Atacante", numero_camisa: 24, data_nascimento: "1993-05-11" }
    ]
  },
  {
    id_selecao: 10, nome_selecao: "Equador", continente: "América do Sul", tecnico: "Félix Sánchez", titulos: 0,
    jogadores: [
      { nome_jogador: "Hernán Galíndez", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1987-03-30" },
      { nome_jogador: "Alexander Domínguez", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1987-06-05" },
      { nome_jogador: "Moisés Ramírez", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2000-09-09" },
      { nome_jogador: "Félix Torres", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1997-01-11" },
      { nome_jogador: "Piero Hincapié", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2002-01-09" },
      { nome_jogador: "Joel Ordóñez", posicao: "Defensor", numero_camisa: 4, data_nascimento: "2004-04-21" },
      { nome_jogador: "Willian Pacho", posicao: "Defensor", numero_camisa: 6, data_nascimento: "2001-10-16" },
      { nome_jogador: "Layan Loor", posicao: "Defensor", numero_camisa: 7, data_nascimento: "2001-05-23" },
      { nome_jogador: "Angelo Preciado", posicao: "Defensor", numero_camisa: 17, data_nascimento: "1998-02-18" },
      { nome_jogador: "José Hurtado", posicao: "Defensor", numero_camisa: 24, data_nascimento: "2001-12-23" },
      { nome_jogador: "Jackson Porozo", posicao: "Defensor", numero_camisa: 25, data_nascimento: "2000-08-04" },
      { nome_jogador: "Andrés Micolta", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1999-07-06" },
      { nome_jogador: "José Cifuentes", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1999-03-12" },
      { nome_jogador: "Carlos Gruezo", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1995-04-19" },
      { nome_jogador: "Kendry Páez", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "2007-05-04" },
      { nome_jogador: "Joao Ortiz", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1996-05-01" },
      { nome_jogador: "Alan Franco", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1998-08-21" },
      { nome_jogador: "Moisés Caicedo", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "2001-11-02" },
      { nome_jogador: "John Yeboah", posicao: "Meio-campo", numero_camisa: 9, data_nascimento: "2000-06-23" },
      { nome_jogador: "Ángel Mena", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1988-01-21" },
      { nome_jogador: "Jeremy Sarmiento", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "2002-06-16" },
      { nome_jogador: "Kevin Rodríguez", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2000-03-04" },
      { nome_jogador: "Enner Valencia", posicao: "Atacante", numero_camisa: 13, data_nascimento: "1999-11-04" },
      { nome_jogador: "Alan Minda", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2003-05-14" },
      { nome_jogador: "Jordy Caicedo", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1997-11-18" },
      { nome_jogador: "Janner Corozo", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1995-09-08" }
    ]
  },
  {
    id_selecao: 11, nome_selecao: "Paraguai", continente: "América do Sul", tecnico: "Daniel Garnero", titulos: 0,
    jogadores: [
      { nome_jogador: "Carlos Coronel", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1996-12-29" },
      { nome_jogador: "Alfredo Aguilar", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1988-07-18" },
      { nome_jogador: "Rodrigo Morínigo", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1998-10-07" },
      { nome_jogador: "Gustavo Gómez", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1993-05-06" },
      { nome_jogador: "Júnior Alonso", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1993-02-09" },
      { nome_jogador: "Fabián Balbuena", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1991-08-23" },
      { nome_jogador: "Omar Alderete", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1997-12-26" },
      { nome_jogador: "Matías Espinoza", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-09-19" },
      { nome_jogador: "Iván Ramírez", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1994-12-08" },
      { nome_jogador: "Néstor Giménez", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1997-07-24" },
      { nome_jogador: "Gustavo Velázquez", posicao: "Defensor", numero_camisa: 25, data_nascimento: "1991-04-17" },
      { nome_jogador: "Mathías Villasanti", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1997-01-24" },
      { nome_jogador: "Andrés Cubas", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1996-05-22" },
      { nome_jogador: "Richard Sánchez", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1996-03-29" },
      { nome_jogador: "Diego Gómez", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2003-03-27" },
      { nome_jogador: "Damián Bobadilla", posicao: "Meio-campo", numero_camisa: 26, data_nascimento: "2001-07-11" },
      { nome_jogador: "Hernesto Caballero", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1991-04-09" },
      { nome_jogador: "Matías Rojas", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1995-11-03" },
      { nome_jogador: "Kaku Romero Gamarra", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1995-01-11" },
      { nome_jogador: "Miguel Almirón", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1994-02-10" },
      { nome_jogador: "Julio Enciso", posicao: "Atacante", numero_camisa: 19, data_nascimento: "2004-01-23" },
      { nome_jogador: "Adam Bareiro", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1996-07-26" },
      { nome_jogador: "Ramón Sosa", posicao: "Atacante", numero_camisa: 24, data_nascimento: "1999-08-31" },
      { nome_jogador: "Ángel Romero", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1992-07-04" },
      { nome_jogador: "Derlis González", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1994-03-20" },
      { nome_jogador: "Alex Arce", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1995-06-16" }
    ]
  },
  {
    id_selecao: 12, nome_selecao: "Uruguai", continente: "América do Sul", tecnico: "Marcelo Bielsa", titulos: 2,
    jogadores: [
      { nome_jogador: "Sergio Rochet", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1993-03-23" },
      { nome_jogador: "Santiago Mele", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1997-09-06" },
      { nome_jogador: "Franco Israel", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2000-04-22" },
      { nome_jogador: "Ronald Araújo", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1999-03-07" },
      { nome_jogador: "José María Giménez", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1995-01-20" },
      { nome_jogador: "Mathías Olivera", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1997-10-31" },
      { nome_jogador: "Matías Viña", posicao: "Defensor", numero_camisa: 17, data_nascimento: "1997-11-09" },
      { nome_jogador: "Nahitan Nández", posicao: "Defensor", numero_camisa: 8, data_nascimento: "1995-12-28" },
      { nome_jogador: "Guillermo Varela", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1993-03-24" },
      { nome_jogador: "Nicolás Marichal", posicao: "Defensor", numero_camisa: 22, data_nascimento: "2001-03-17" },
      { nome_jogador: "Lucas Olaza", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1994-07-21" },
      { nome_jogador: "Sebastián Cáceres", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1999-08-18" },
      { nome_jogador: "Federico Valverde", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1998-07-22" },
      { nome_jogador: "Manuel Ugarte", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "2001-04-11" },
      { nome_jogador: "Rodrigo Bentancur", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1997-06-25" },
      { nome_jogador: "Nicolás de la Cruz", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1997-06-01" },
      { nome_jogador: "Giorgian de Arrascaeta", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1994-06-01" },
      { nome_jogador: "Emiliano Martínez", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1999-08-17" },
      { nome_jogador: "Darwin Núñez", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1999-06-24" },
      { nome_jogador: "Luis Suárez", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1987-01-24" },
      { nome_jogador: "Facundo Pellistri", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2001-12-20" },
      { nome_jogador: "Maximiliano Araújo", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2000-02-15" },
      { nome_jogador: "Brian Rodríguez", posicao: "Atacante", numero_camisa: 18, data_nascimento: "2000-05-20" },
      { nome_jogador: "Cristian Olivera", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2002-04-17" },
      { nome_jogador: "Agustín Canobbio", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1998-10-01" },
      { nome_jogador: "Brian Ocampo", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1999-06-25" }
    ]
  },
  {
    id_selecao: 13, nome_selecao: "Japão", continente: "Ásia", tecnico: "Hajime Moriyasu", titulos: 0,
    jogadores: [
      { nome_jogador: "Zion Suzuki", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "2002-08-21" },
      { nome_jogador: "Daiya Maekawa", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-09-08" },
      { nome_jogador: "Keisuke Osako", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1999-07-28" },
      { nome_jogador: "Takehiro Tomiyasu", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1998-11-05" },
      { nome_jogador: "Ko Itakura", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-01-27" },
      { nome_jogador: "Yukinari Sugawara", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2000-06-28" },
      { nome_jogador: "Hiroki Ito", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1999-05-12" },
      { nome_jogador: "Koki Machida", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1997-08-25" },
      { nome_jogador: "Seiya Maikuma", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1997-10-16" },
      { nome_jogador: "Yuta Nakayama", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1997-02-16" },
      { nome_jogador: "Tsuyoshi Watanabe", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1997-02-05" },
      { nome_jogador: "Wataru Endo", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1993-02-09" },
      { nome_jogador: "Hidemasa Morita", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1995-05-10" },
      { nome_jogador: "Takumi Minamino", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1995-01-16" },
      { nome_jogador: "Daichi Kamada", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1996-08-05" },
      { nome_jogador: "Reo Hatate", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1997-11-21" },
      { nome_jogador: "Takefusa Kubo", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2001-06-04" },
      { nome_jogador: "Ritsu Doan", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1998-06-16" },
      { nome_jogador: "Keito Nakamura", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "2000-07-28" },
      { nome_jogador: "Kaoru Mitoma", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1997-05-20" },
      { nome_jogador: "Ayase Ueda", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1998-08-28" },
      { nome_jogador: "Takuma Asano", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1994-11-10" },
      { nome_jogador: "Daizen Maeda", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1997-10-20" },
      { nome_jogador: "Mao Hosoya", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2001-09-07" },
      { nome_jogador: "Koki Ogawa", posicao: "Atacante", numero_camisa: 22, data_nascimento: "1997-08-08" },
      { nome_jogador: "Junya Ito", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1993-03-09" }
    ]
  },
  {
    id_selecao: 14, nome_selecao: "Irã", continente: "Ásia", tecnico: "Amir Ghalenoei", titulos: 0,
    jogadores: [
      { nome_jogador: "Alireza Beiranvand", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-09-21" },
      { nome_jogador: "Payam Niazmand", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1995-04-06" },
      { nome_jogador: "Hossein Hosseini", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1992-06-30" },
      { nome_jogador: "Ehsan Hajsafi", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1990-02-25" },
      { nome_jogador: "Ramin Rezaeian", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1990-03-21" },
      { nome_jogador: "Milad Mohammadi", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1993-09-29" },
      { nome_jogador: "Hossein Kanaani", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1994-03-23" },
      { nome_jogador: "Shojae Khalilzadeh", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1989-05-14" },
      { nome_jogador: "Majid Hosseini", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1996-06-20" },
      { nome_jogador: "Saleh Hardani", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1998-09-14" },
      { nome_jogador: "Abolfazl Jalali", posicao: "Defensor", numero_camisa: 25, data_nascimento: "1998-06-26" },
      { nome_jogador: "Saeid Ezatolahi", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1996-10-01" },
      { nome_jogador: "Saman Ghoddos", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1993-09-06" },
      { nome_jogador: "Rouzbeh Cheshmi", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1993-07-24" },
      { nome_jogador: "Omid Ebrahimi", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1987-09-15" },
      { nome_jogador: "Mohammad Mohebi", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1998-12-20" },
      { nome_jogador: "Mehdi Torabi", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1994-09-10" },
      { nome_jogador: "Ali Gholizadeh", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1996-03-10" },
      { nome_jogador: "Aria Yousefi", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2002-04-22" },
      { nome_jogador: "Mehdi Taremi", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1992-07-18" },
      { nome_jogador: "Sardar Azmoun", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1995-01-01" },
      { nome_jogador: "Alireza Jahanbakhsh", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1993-08-11" },
      { nome_jogador: "Karim Ansarifard", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1990-04-03" },
      { nome_jogador: "Mehdi Ghayedi", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1998-12-05" },
      { nome_jogador: "Reza Asadi", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1996-01-17" },
      { nome_jogador: "Shahriyar Moghanlou", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1994-12-21" }
    ]
  },
  {
    id_selecao: 15, nome_selecao: "Uzbequistão", continente: "Ásia", tecnico: "Srečko Katanec", titulos: 0,
    jogadores: [
      { nome_jogador: "Utkir Yusupov", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1991-01-04" },
      { nome_jogador: "Abduvohid Nematov", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2001-03-20" },
      { nome_jogador: "Botirali Ergashev", posicao: "Goleiro", numero_camisa: 21, data_nascimento: "1995-06-23" },
      { nome_jogador: "Abdukodir Khusanov", posicao: "Defensor", numero_camisa: 25, data_nascimento: "2004-02-29" },
      { nome_jogador: "Rustam Ashurmatov", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1996-07-07" },
      { nome_jogador: "Umar Eshmurodov", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1992-11-30" },
      { nome_jogador: "Husniddin Aliqulov", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1999-04-04" },
      { nome_jogador: "Farrukh Sayfiev", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1991-01-17" },
      { nome_jogador: "Khojiakbar Alijonov", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1997-04-19" },
      { nome_jogador: "Sherzod Nasrullaev", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1998-07-23" },
      { nome_jogador: "Zafarmurod Abdurakhmatov", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2003-04-28" },
      { nome_jogador: "Otabek Shukurov", posicao: "Meio-campo", numero_camisa: 9, data_nascimento: "1996-06-22" },
      { nome_jogador: "Odiljon Hamrobekov", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1996-02-13" },
      { nome_jogador: "Jaloliddin Masharipov", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1993-09-01" },
      { nome_jogador: "Oston Urunov", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "2000-12-19" },
      { nome_jogador: "Abbosbek Fayzullaev", posicao: "Meio-campo", numero_camisa: 22, data_nascimento: "2003-10-03" },
      { nome_jogador: "Jamshid Iskanderov", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1993-10-16" },
      { nome_jogador: "Jamshid Boltaboev", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1996-10-03" },
      { nome_jogador: "Diyor Kholmatov", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2002-07-22" },
      { nome_jogador: "Azizbek Turgunboev", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1994-10-01" },
      { nome_jogador: "Eldor Shomurodov", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1995-06-29" },
      { nome_jogador: "Igor Sergeev", posicao: "Atacante", numero_camisa: 23, data_nascimento: "1993-04-30" },
      { nome_jogador: "Bobur Abdikholikov", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1997-04-23" },
      { nome_jogador: "Azizbek Amonov", posicao: "Atacante", numero_camisa: 24, data_nascimento: "2000-10-30" },
      { nome_jogador: "Shokhboz Umarov", posicao: "Atacante", numero_camisa: 16, data_nascimento: "1999-03-09" },
      { nome_jogador: "Jasurbek Yakhshiboev", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1997-06-24" }
    ]
  },
  {
    id_selecao: 16, nome_selecao: "Coreia do Sul", continente: "Ásia", tecnico: "Hwang Sun-hong", titulos: 0,
    jogadores: [
      { nome_jogador: "Kim Seung-gyu", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1990-09-30" },
      { nome_jogador: "Jo Hyeon-woo", posicao: "Goleiro", numero_camisa: 21, data_nascimento: "1991-09-25" },
      { nome_jogador: "Song Bum-keun", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1997-10-15" },
      { nome_jogador: "Kim Min-jae", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1996-11-15" },
      { nome_jogador: "Kim Young-gwon", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1990-02-27" },
      { nome_jogador: "Jung Seung-hyun", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1994-04-03" },
      { nome_jogador: "Seol Young-woo", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1998-12-05" },
      { nome_jogador: "Kim Tae-hwan", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1989-07-24" },
      { nome_jogador: "Lee Ki-je", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1991-07-09" },
      { nome_jogador: "Kim Jin-su", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1992-06-13" },
      { nome_jogador: "Kim Ju-sung", posicao: "Defensor", numero_camisa: 24, data_nascimento: "2000-12-12" },
      { nome_jogador: "Hwang In-beom", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1996-09-20" },
      { nome_jogador: "Park Yong-woo", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1993-09-10" },
      { nome_jogador: "Lee Kang-in", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "2001-02-19" },
      { nome_jogador: "Lee Jae-sung", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1992-08-10" },
      { nome_jogador: "Hong Hyun-seok", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1999-06-16" },
      { nome_jogador: "Jeong Woo-yeong", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1999-09-20" },
      { nome_jogador: "Park Jin-seop", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1995-10-23" },
      { nome_jogador: "Lee Soon-min", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "1994-05-22" },
      { nome_jogador: "Son Heung-min", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1992-07-08" },
      { nome_jogador: "Hwang Hee-chan", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1996-01-26" },
      { nome_jogador: "Cho Gue-sung", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1998-01-25" },
      { nome_jogador: "Oh Hyeon-gyu", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2001-04-12" },
      { nome_jogador: "Moon Seon-min", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1992-06-09" },
      { nome_jogador: "Yang Hyun-jun", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2002-05-25" },
      { nome_jogador: "Joo Min-kyu", posicao: "Atacante", numero_camisa: 16, data_nascimento: "1990-04-13" }
    ]
  }
];

selecoesBloco2.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 2 de Seleções (9 a 16) inserido com sucesso.");

// =============================================================================
// PARTE 3: SELEÇÕES E ELENCOS (17 A 24)
// =============================================================================

print("-> Iniciando a inserção do terceiro bloco de seleções (17 a 24)...");

const selecoesBloco3 = [
  {
    id_selecao: 17, nome_selecao: "Jordânia", continente: "Ásia", tecnico: "Hussein Ammouta", titulos: 0,
    jogadores: [
      { nome_jogador: "Yazeed Abulaila", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1993-01-08" },
      { nome_jogador: "Abdallah Al-Fakhouri", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "2000-01-22" },
      { nome_jogador: "Ahmad Al-Juaidi", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2001-04-09" },
      { nome_jogador: "Yazan Al-Arab", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1996-01-31" },
      { nome_jogador: "Abdallah Nasib", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1994-02-25" },
      { nome_jogador: "Salem Al-Ajalin", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1988-02-18" },
      { nome_jogador: "Ihsan Haddad", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1994-02-05" },
      { nome_jogador: "Bara' Marei", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1994-04-15" },
      { nome_jogador: "Mohammad Abu Hasheesh", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1995-05-09" },
      { nome_jogador: "Feras Shelbaieh", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1993-11-27" },
      { nome_jogador: "Saed Al-Rosan", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1997-02-01" },
      { nome_jogador: "Noor Al-Rawabdeh", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1997-02-24" },
      { nome_jogador: "Nizar Al-Rashdan", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1999-03-23" },
      { nome_jogador: "Rajaee Ayed", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1993-07-25" },
      { nome_jogador: "Mahmoud Al-Mardi", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1993-10-06" },
      { nome_jogador: "Saleh Ratib", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1994-12-18" },
      { nome_jogador: "Ibrahim Sadeh", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2000-04-27" },
      { nome_jogador: "Fadi Awad", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "1993-03-26" },
      { nome_jogador: "Anas Al-Awadat", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1998-05-29" },
      { nome_jogador: "Youssef Abu Jalbosh", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1998-06-15" },
      { nome_jogador: "Mousa Al-Tamari", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1997-06-10" },
      { nome_jogador: "Yazan Al-Naimat", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1999-06-04" },
      { nome_jogador: "Ali Olwan", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-03-26" },
      { nome_jogador: "Hamza Al-Dardour", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1991-05-12" },
      { nome_jogador: "Aref Al-Haj", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2001-05-28" },
      { nome_jogador: "Abu Taha", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2001-11-03" }
    ]
  },
  {
    id_selecao: 18, nome_selecao: "Austrália", continente: "Ásia", tecnico: "Graham Arnold", titulos: 0,
    jogadores: [
      { nome_jogador: "Mathew Ryan", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-04-08" },
      { nome_jogador: "Joe Gauci", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "2000-07-04" },
      { nome_jogador: "Paul Izzo", posicao: "Goleiro", numero_camisa: 18, data_nascimento: "1995-01-06" },
      { nome_jogador: "Harry Souttar", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1998-10-22" },
      { nome_jogador: "Kye Rowles", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1998-06-24" },
      { nome_jogador: "Aziz Behich", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1990-12-16" },
      { nome_jogador: "Gethin Jones", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1995-10-13" },
      { nome_jogador: "Cameron Burgess", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1995-10-21" },
      { nome_jogador: "Jordan Bos", posicao: "Defensor", numero_camisa: 5, data_nascimento: "2002-10-29" },
      { nome_jogador: "Alessandro Circati", posicao: "Defensor", numero_camisa: 13, data_nascimento: "2003-10-10" },
      { nome_jogador: "Thomas Deng", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1997-03-20" },
      { nome_jogador: "Jackson Irvine", posicao: "Meio-campo", numero_camisa: 22, data_nascimento: "1993-03-07" },
      { nome_jogador: "Connor Metcalfe", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1999-11-05" },
      { nome_jogador: "Keanu Baccus", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1998-06-07" },
      { nome_jogador: "Riley McGree", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1998-11-02" },
      { nome_jogador: "Aiden O'Neill", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1998-07-04" },
      { nome_jogador: "Massimo Luongo", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1992-09-25" },
      { nome_jogador: "Denis Genreau", posicao: "Meio-campo", numero_camisa: 26, data_nascimento: "1999-05-21" },
      { nome_jogador: "Cameron Devlin", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1998-06-07" },
      { nome_jogador: "Ajdin Hrustic", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1996-07-05" },
      { nome_jogador: "Craig Goodwin", posicao: "Atacante", numero_camisa: 23, data_nascimento: "191-12-16" },
      { nome_jogador: "Mitchell Duke", posicao: "Atacante", numero_camisa: 15, data_nascimento: "1991-01-18" },
      { nome_jogador: "Martin Boyle", posicao: "Atacante", numero_camisa: 6, data_nascimento: "1993-04-25" },
      { nome_jogador: "Kusini Yengi", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1999-01-15" },
      { nome_jogador: "Sam Silvera", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2000-10-25" },
      { nome_jogador: "Bruno Fornaroli", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1987-09-07" }
    ]
  },
  {
    id_selecao: 19, nome_selecao: "Catar", continente: "Ásia", tecnico: "Tintín Márquez", titulos: 0,
    jogadores: [
      { nome_jogador: "Meshaal Barsham", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1998-02-14" },
      { nome_jogador: "Saad Al-Sheeb", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1990-02-19" },
      { nome_jogador: "Salah Zakaria", posicao: "Goleiro", numero_camisa: 21, data_nascimento: "1999-04-24" },
      { nome_jogador: "Boualem Khoukhi", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1990-09-07" },
      { nome_jogador: "Pedro Miguel (Ró-Ró)", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1990-08-06" },
      { nome_jogador: "Tarek Salman", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1997-12-05" },
      { nome_jogador: "Lucas Mendes", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1990-07-03" },
      { nome_jogador: "Almahdi Ali Mukhtar", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1992-03-02" },
      { nome_jogador: "Homam Ahmed", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1999-08-25" },
      { nome_jogador: "Bassam Al-Rawi", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1997-12-16" },
      { nome_jogador: "Sultan Al-Brake", posicao: "Defensor", numero_camisa: 18, data_nascimento: "1996-04-07" },
      { nome_jogador: "Abdulaziz Hatem", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1990-01-01" },
      { nome_jogador: "Hassan Al-Haydos", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1990-12-11" },
      { nome_jogador: "Ali Assadalla", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1993-01-19" },
      { nome_jogador: "Mohammed Waad", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1999-09-18" },
      { nome_jogador: "Mostafa Meshaal", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2001-03-28" },
      { nome_jogador: "Jassem Gaber", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2002-02-20" },
      { nome_jogador: "Ahmed Fatehi", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1993-01-25" },
      { nome_jogador: "Akram Afif", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1996-11-18" },
      { nome_jogador: "Almoez Ali", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1996-08-19" },
      { nome_jogador: "Yusuf Abdurisag", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1999-08-06" },
      { nome_jogador: "Ahmed Alaaeldin", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1993-01-31" },
      { nome_jogador: "Ismaeel Mohammad", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1990-04-05" },
      { nome_jogador: "Khalid Muneer", posicao: "Atacante", numero_camisa: 13, data_nascimento: "1998-02-24" },
      { nome_jogador: "Tameem Al-Abdullah", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2002-10-05" },
      { nome_jogador: "Ahmed Al-Rawi", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2004-05-30" }
    ]
  },
  {
    id_selecao: 20, nome_selecao: "Arábia Saudita", continente: "Ásia", tecnico: "Roberto Mancini", titulos: 0,
    jogadores: [
      { nome_jogador: "Mohammed Al-Owais", posicao: "Goleiro", numero_camisa: 21, data_nascimento: "1991-10-10" },
      { nome_jogador: "Nawaf Al-Aqidi", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "2000-05-10" },
      { nome_jogador: "Raghed Al-Najjar", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1996-09-20" },
      { nome_jogador: "Ali Al-Bulaihi", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1989-11-21" },
      { nome_jogador: "Hassan Tambakti", posicao: "Defensor", numero_camisa: 17, data_nascimento: "1999-02-09" },
      { nome_jogador: "Saud Abdulhamid", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1999-07-18" },
      { nome_jogador: "Yasser Al-Shahrani", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1992-05-25" },
      { nome_jogador: "Abdulelah Al-Amri", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-01-15" },
      { nome_jogador: "Ali Lajami", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1996-04-24" },
      { nome_jogador: "Fawaz Al-Sqoor", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1996-04-23" },
      { nome_jogador: "Awn Al-Saluli", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1998-09-02" },
      { nome_jogador: "Mohamed Kanno", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1994-09-22" },
      { nome_jogador: "Mukhtar Ali", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1997-10-30" },
      { nome_jogador: "Abdulellah Al-Malki", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1994-10-11" },
      { nome_jogador: "Abdullah Al-Khaibari", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1996-08-16" },
      { nome_jogador: "Sami Al-Najei", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1997-02-07" },
      { nome_jogador: "Nasser Al-Dawsari", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1998-12-19" },
      { nome_jogador: "Faisal Al-Ghamdi", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "2001-08-13" },
      { nome_jogador: "Salem Al-Dawsari", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1991-08-19" },
      { nome_jogador: "Saleh Al-Shehri", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1993-11-01" },
      { nome_jogador: "Firas Al-Buraikan", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-05-14" },
      { nome_jogador: "Abdulrahman Ghareeb", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1997-03-31" },
      { nome_jogador: "Ayman Yahya", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2001-05-14" },
      { nome_jogador: "Abdullah Radif", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2003-01-20" },
      { nome_jogador: "Talal Haji", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2007-09-16" },
      { nome_jogador: "Mohammed Maran", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2001-02-15" }
    ]
  },
  {
    id_selecao: 21, nome_selecao: "Iraque", continente: "Ásia", tecnico: "Jesús Casas", titulos: 0,
    jogadores: [
      { nome_jogador: "Jalal Hassan", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1991-05-18" },
      { nome_jogador: "Fahad Talib", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1994-10-21" },
      { nome_jogador: "Ahmed Basil", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1996-08-19" },
      { nome_jogador: "Ali Adnan", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1993-12-19" },
      { nome_jogador: "Saad Natiq", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1994-03-19" },
      { nome_jogador: "Rebin Sulaka", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1992-04-12" },
      { nome_jogador: "Frans Putros", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1993-07-14" },
      { nome_jogador: "Merchas Doski", posicao: "Defensor", numero_camisa: 23, data_nascimento: "1999-12-07" },
      { nome_jogador: "Hussein Ali", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2002-03-01" },
      { nome_jogador: "Zaid Tahseen", posicao: "Defensor", numero_camisa: 24, data_nascimento: "2001-01-29" },
      { nome_jogador: "Ahmed Yahya", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1997-05-27" },
      { nome_jogador: "Amjad Attwan", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1997-03-12" },
      { nome_jogador: "Osama Rashid", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1992-01-17" },
      { nome_jogador: "Amir Al-Ammari", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1997-07-27" },
      { nome_jogador: "Ibrahim Bayesh", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2000-05-01" },
      { nome_jogador: "Bashar Resan", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1996-12-22" },
      { nome_jogador: "Zidane Iqbal", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "2003-04-27" },
      { nome_jogador: "Safaa Hadi", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1998-10-14" },
      { nome_jogador: "Ahmad Allee", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1996-04-29" },
      { nome_jogador: "Youssef Amyn", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2003-08-21" },
      { nome_jogador: "Ali Jasim", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2004-01-20" },
      { nome_jogador: "Montader Madjed", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2005-04-24" },
      { nome_jogador: "Aymen Hussein", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1996-03-22" },
      { nome_jogador: "Mohanad Ali", posicao: "Atacante", numero_camisa: 10, data_nascimento: "2000-06-20" },
      { nome_jogador: "Ali Al-Hamadi", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2002-03-01" },
      { nome_jogador: "Danilo Al-Saed", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1999-02-24" }
    ]
  },
  {
    id_selecao: 22, nome_selecao: "Nova Zelândia", continente: "Oceania", tecnico: "Darren Bazeley", titulos: 0,
    jogadores: [
      { nome_jogador: "Oliver Sail", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-01-13" },
      { nome_jogador: "Max Crocombe", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1993-08-12" },
      { nome_jogador: "Alex Paulsen", posicao: "Goleiro", numero_camisa: 21, data_nascimento: "2002-07-04" },
      { nome_jogador: "Liberato Cacace", posicao: "Defensor", numero_camisa: 13, data_nascimento: "2000-09-27" },
      { nome_jogador: "Michael Boxall", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1988-08-18" },
      { nome_jogador: "Bill Tuiloma", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1995-03-27" },
      { nome_jogador: "Tommy Smith", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1990-03-31" },
      { nome_jogador: "Tyler Bindon", posicao: "Defensor", numero_camisa: 14, data_nascimento: "2005-01-27" },
      { nome_jogador: "Tim Payne", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1994-01-10" },
      { nome_jogador: "Nando Pijnaker", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1999-02-25" },
      { nome_jogador: "Finn Surman", posicao: "Defensor", numero_camisa: 15, data_nascimento: "2003-09-23" },
      { nome_jogador: "Joe Bell", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1999-04-27" },
      { nome_jogador: "Marko Stamenic", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "2002-02-19" },
      { nome_jogador: "Matthew Garbett", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "2002-04-13" },
      { nome_jogador: "Sarpreet Singh", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1999-02-20" },
      { nome_jogador: "Alex Rufer", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1996-06-12" },
      { nome_jogador: "Cam Howieson", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1994-12-22" },
      { nome_jogador: "Elijah Just", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "2000-05-01" },
      { nome_jogador: "Clayton Lewis", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1997-02-12" },
      { nome_jogador: "Chris Wood", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-12-07" },
      { nome_jogador: "Ben Waine", posicao: "Atacante", numero_camisa: 19, data_nascimento: "2001-06-11" },
      { nome_jogador: "Kosta Barbarouses", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1990-02-19" },
      { nome_jogador: "Callum McCowatt", posicao: "Atacante", numero_camisa: 22, data_nascimento: "1999-04-30" },
      { nome_jogador: "Max Mata", posicao: "Atacante", numero_camisa: 24, data_nascimento: "2000-07-10" },
      { nome_jogador: "Alex Greive", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1999-05-13" },
      { nome_jogador: "Ben Old", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2002-08-13" }
    ]
  },
  {
    id_selecao: 23, nome_selecao: "Marrocos", continente: "África", tecnico: "Walid Regragui", titulos: 0,
    jogadores: [
      { nome_jogador: "Yassine Bounou", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1991-04-05" },
      { nome_jogador: "Munir Mohamedi", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1989-05-10" },
      { nome_jogador: "Mehdi Benabid", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1998-01-24" },
      { nome_jogador: "Achraf Hakimi", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1998-11-04" },
      { nome_jogador: "Noussair Mazraoui", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1997-11-14" },
      { nome_jogador: "Nayef Aguerd", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1996-03-30" },
      { nome_jogador: "Romain Saïss", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1990-03-26" },
      { nome_jogador: "Chadi Riad", posicao: "Defensor", numero_camisa: 25, data_nascimento: "2003-06-17" },
      { nome_jogador: "Yahia Attiyat Allah", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1995-03-02" },
      { nome_jogador: "Abdel Abqar", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1999-03-10" },
      { nome_jogador: "Yunis Abdelhamid", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1987-09-28" },
      { nome_jogador: "Sofyan Amrabat", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1996-08-21" },
      { nome_jogador: "Azzedine Ounahi", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2000-04-19" },
      { nome_jogador: "Ismael Saibari", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "2001-01-28" },
      { nome_jogador: "Bilal El Khannouss", Meio_campo: "Meio-campo", numero_camisa: 23, data_nascimento: "2004-05-10" },
      { nome_jogador: "Amir Richardson", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2002-01-24" },
      { nome_jogador: "Oussama El Azzouzi", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "2001-05-29" },
      { nome_jogador: "Amine Harit", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1997-06-18" },
      { nome_jogador: "Hakim Ziyech", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1993-03-19" },
      { nome_jogador: "Brahim Díaz", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1999-08-03" },
      { nome_jogador: "Youssef En-Nesyri", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1997-06-01" },
      { nome_jogador: "Amine Adli", posicao: "Atacante", numero_camisa: 21, data_nascimento: "2000-05-10" },
      { nome_jogador: "Ayoub El Kaabi", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2003-06-25" },
      { nome_jogador: "Soufiane Rahimi", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1996-06-02" },
      { nome_jogador: "Ilias Akhomach", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2004-04-16" },
      { nome_jogador: "Abde Ezzalzouli", posicao: "Atacante", numero_camisa: 16, data_nascimento: "2001-12-17" }
    ]
  },
  {
    id_selecao: 24, nome_selecao: "Tunísia", continente: "África", tecnico: "Jalel Kadri", titulos: 0,
    jogadores: [
      { nome_jogador: "Aymen Dahmen", posicao: "Goleiro", numero_camisa: 16, data_nascimento: "1997-01-28" },
      { nome_jogador: "Bechir Ben Said", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1992-11-29" },
      { nome_jogador: "Mouez Hassen", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1995-03-05" },
      { nome_jogador: "Montassar Talbi", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1998-05-26" },
      { nome_jogador: "Yassine Meriah", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1993-07-02" },
      { nome_jogador: "Ali Maâloul", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1990-01-01" },
      { nome_jogador: "Wajdi Kechrida", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1995-11-05" },
      { nome_jogador: "Ali Abdi", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1993-12-20" },
      { nome_jogador: "Dylan Bronn", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1995-06-19" },
      { nome_jogador: "Yan Valery", posicao: "Defensor", numero_camisa: 20, data_nascimento: "1999-02-22" },
      { nome_jogador: "Oussama Haddadi", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1992-01-28" },
      { nome_jogador: "Ellyes Skhiri", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1995-05-10" },
      { nome_jogador: "Aïssa Laïdouni", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1996-12-13" },
      { nome_jogador: "Mohamed Ali Ben Romdhane", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1999-09-06" },
      { nome_jogador: "Hannibal Mejbri", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2003-01-21" },
      { nome_jogador: "Hamza Rafia", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1999-04-22" },
      { nome_jogador: "Anis Ben Slimane", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "2001-03-16" },
      { nome_jogador: "Ferjani Sassi", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1992-03-18" },
      { nome_jogador: "Ghailene Chaalali", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1994-02-28" },
      { nome_jogador: "Youssef Msakni", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1990-10-28" },
      { nome_jogador: "Elias Achouri", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1999-02-10" },
      { nome_jogador: "Seifeddine Jaziri", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1993-02-11" },
      { nome_jogador: "Naïm Sliti", posicao: "Atacante", numero_camisa: 23, data_nascimento: "1992-07-27" },
      { nome_jogador: "Haythem Jouini", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1993-05-07" },
      { nome_jogador: "Sayfallah Ltaief", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2000-04-22" },
      { nome_jogador: "Firas Ben Larbi", posicao: "Atacante", numero_camisa: 24, data_nascimento: "1996-05-27" }
    ]
  }
];

selecoesBloco3.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 3 de Seleções (17 a 24) inserido com sucesso.");

// =============================================================================
// PARTE 4: SELEÇÕES E ELENCOS (25 A 32)
// =============================================================================

print("-> Iniciando a inserção do quarto bloco de seleções (25 a 32)...");

const selecoesBloco4 = [
  {
    id_selecao: 25, nome_selecao: "Egito", continente: "África", tecnico: "Hossam Hassan", titulos: 0,
    jogadores: [
      { nome_jogador: "Mohamed El Shenawy", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1988-12-18" },
      { nome_jogador: "Mohamed Abou Gabal", posicao: "Goleiro", numero_camisa: 16, data_nascimento: "1989-01-29" },
      { nome_jogador: "Mohamed Sobhy", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1999-07-15" },
      { nome_jogador: "Ahmed Hegazi", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1991-01-25" },
      { nome_jogador: "Mohamed Abdelmonem", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1999-02-01" },
      { nome_jogador: "Mohamed Hany", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1996-01-25" },
      { nome_jogador: "Ahmed Fotouh", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1998-03-22" },
      { nome_jogador: "Mohamed Elneny", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "1992-07-11" },
      { nome_jogador: "Emam Ashour", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-02-20" },
      { nome_jogador: "Mohamed Salah", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1992-06-15" },
      { nome_jogador: "Trézéguet", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1994-10-01" },
      { nome_jogador: "Omar Marmoush", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1999-02-07" },
      { nome_jogador: "Mostafa Mohamed", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1997-11-28" }
    ]
  },
  {
    id_selecao: 26, nome_selecao: "Argélia", continente: "África", tecnico: "Vladimir Petković", titulos: 0,
    jogadores: [
      { nome_jogador: "Anthony Mandrea", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-12-25" },
      { nome_jogador: "Ramy Bensebaini", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1995-04-16" },
      { nome_jogador: "Aïssa Mandi", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1991-10-22" },
      { nome_jogador: "Rayan Aït-Nouri", posicao: "Defensor", numero_camisa: 15, data_nascimento: "2001-06-06" },
      { nome_jogador: "Ismaël Bennacer", posicao: "Meio-campo", numero_camisa: 22, data_nascimento: "1997-12-01" },
      { nome_jogador: "Nabil Bentaleb", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1994-11-24" },
      { nome_jogador: "Houssem Aouar", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1998-06-30" },
      { nome_jogador: "Riyad Mahrez", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1991-02-21" },
      { nome_jogador: "Islam Slimani", posicao: "Atacante", numero_camisa: 13, data_nascimento: "1988-06-18" },
      { nome_jogador: "Baghdad Bounedjah", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-11-24" }
    ]
  },
  {
    id_selecao: 27, nome_selecao: "Gana", continente: "África", tecnico: "Otto Addo", titulos: 0,
    jogadores: [
      { nome_jogador: "Lawrence Ati-Zigi", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-11-29" },
      { nome_jogador: "Mohammed Salisu", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1999-04-17" },
      { nome_jogador: "Daniel Amartey", posicao: "Defensor", numero_camisa: 18, data_nascimento: "1994-12-21" },
      { nome_jogador: "Thomas Partey", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1993-06-13" },
      { nome_jogador: "Mohammed Kudus", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2000-08-02" },
      { nome_jogador: "Jordan Ayew", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-09-11" },
      { nome_jogador: "André Ayew", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1989-12-17" },
      { nome_jogador: "Iñaki Williams", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1994-06-15" }
    ]
  },
  {
    id_selecao: 28, nome_selecao: "Cabo Verde", continente: "África", tecnico: "Bubista", titulos: 0,
    jogadores: [
      { nome_jogador: "Vozinha", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1986-06-03" },
      { nome_jogador: "Roberto Lopes", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1992-06-17" },
      { nome_jogador: "Logan Costa", posicao: "Defensor", numero_camisa: 5, data_nascimento: "2001-04-01" },
      { nome_jogador: "Kevin Pina", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1997-01-27" },
      { nome_jogador: "Deroy Duarte", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1999-07-04" },
      { nome_jogador: "Jamiro Monteiro", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1993-11-23" },
      { nome_jogador: "Ryan Mendes", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1990-01-08" },
      { nome_jogador: "Garry Rodrigues", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1990-11-27" },
      { nome_jogador: "Bebé", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1990-07-12" }
    ]
  },
  {
    id_selecao: 29, nome_selecao: "África do Sul", continente: "África", tecnico: "Hugo Broos", titulos: 0,
    jogadores: [
      { nome_jogador: "Ronwen Williams", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-01-21" },
      { nome_jogador: "Mothobi Mvala", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1994-06-14" },
      { nome_jogador: "Grant Kekana", posicao: "Defensor", numero_camisa: 20, data_nascimento: "1992-10-31" },
      { nome_jogador: "Teboho Mokoena", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1997-01-24" },
      { nome_jogador: "Sphephelo Sithole", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1999-03-03" },
      { nome_jogador: "Themba Zwane", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1989-08-03" },
      { nome_jogador: "Percy Tau", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1994-05-13" },
      { nome_jogador: "Zakhele Lepasa", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1997-01-03" },
      { nome_jogador: "Lyle Foster", posicao: "Atacante", numero_camisa: 12, data_nascimento: "2000-09-03" }
    ]
  },
  {
    id_selecao: 30, nome_selecao: "Senegal", continente: "África", tecnico: "Aliou Cissé", titulos: 0,
    jogadores: [
      { nome_jogador: "Édouard Mendy", posicao: "Goleiro", numero_camisa: 16, data_nascimento: "1992-03-01" },
      { nome_jogador: "Kalidou Koulibaly", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1991-06-20" },
      { nome_jogador: "Abdou Diallo", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1996-05-04" },
      { nome_jogador: "Idrissa Gueye", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1989-09-26" },
      { nome_jogador: "Pape Matar Sarr", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "2002-09-14" },
      { nome_jogador: "Sadio Mané", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1992-04-10" },
      { nome_jogador: "Ismaïla Sarr", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1998-02-25" },
      { nome_jogador: "Nicolas Jackson", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2001-06-20" }
    ]
  },
  {
    id_selecao: 31, nome_selecao: "Costa do Marfim", continente: "África", tecnico: "Emerse Faé", titulos: 0,
    jogadores: [
      { nome_jogador: "Yahia Fofana", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "2000-08-21" },
      { nome_jogador: "Ousmane Diomande", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2003-12-04" },
      { nome_jogador: "Evan Ndicka", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1999-08-20" },
      { nome_jogador: "Seko Fofana", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1995-05-07" },
      { nome_jogador: "Franck Kessié", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1996-12-19" },
      { nome_jogador: "Ibrahim Sangaré", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1997-12-02" },
      { nome_jogador: "Max Gradel", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1987-11-30" },
      { nome_jogador: "Simon Adingra", posicao: "Atacante", numero_camisa: 21, data_nascimento: "2002-01-01" },
      { nome_jogador: "Sébastien Haller", posicao: "Atacante", numero_camisa: 22, data_nascimento: "1994-06-22" }
    ]
  },
  {
    id_selecao: 32, nome_selecao: "RD Congo", continente: "África", tecnico: "Sébastien Desabre", titulos: 0,
    jogadores: [
      { nome_jogador: "Lionel Mpasi", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-08-01" },
      { nome_jogador: "Chancel Mbemba", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1994-08-08" },
      { nome_jogador: "Arthur Masuaku", posicao: "Defensor", numero_camisa: 26, data_nascimento: "1993-11-07" },
      { nome_jogador: "Samuel Moutoussamy", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1996-08-12" },
      { nome_jogador: "Charles Pickel", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1997-05-15" },
      { nome_jogador: "Théo Bongonda", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1995-11-20" },
      { nome_jogador: "Cédric Bakambu", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1991-04-11" },
      { nome_jogador: "Yoane Wissa", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1996-09-03" }
    ]
  }
];

selecoesBloco4.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 4 de Seleções (25 a 32) inserido com sucesso.");

// =============================================================================
// PARTE 5: SELEÇÕES E ELENCOS (33 A 40)
// =============================================================================

print("-> Iniciando a inserção do quinto bloco de seleções (33 a 40)...");

const selecoesBloco5 = [
  {
    id_selecao: 33, nome_selecao: "Inglaterra", continente: "Europa", tecnico: "Gareth Southgate", titulos: 1,
    jogadores: [
      { nome_jogador: "Jordan Pickford", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-03-07" },
      { nome_jogador: "Aaron Ramsdale", posicao: "Goleiro", numero_camisa: 13, data_nascimento: "1998-05-14" },
      { nome_jogador: "Nick Pope", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1992-04-19" },
      { nome_jogador: "Kyle Walker", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1990-05-28" },
      { nome_jogador: "John Stones", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1994-05-28" },
      { nome_jogador: "Harry Maguire", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1993-03-05" },
      { nome_jogador: "Kieran Trippier", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1990-09-19" },
      { nome_jogador: "Luke Shaw", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1995-07-12" },
      { nome_jogador: "Trent Alexander-Arnold", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1998-10-07" },
      { nome_jogador: "Marc Guéhi", posicao: "Defensor", numero_camisa: 15, data_nascimento: "2000-07-13" },
      { nome_jogador: "Ben Chilwell", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1996-12-21" },
      { nome_jogador: "Declan Rice", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1999-01-14" },
      { nome_jogador: "Jude Bellingham", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "2003-06-29" },
      { nome_jogador: "Jordan Henderson", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1990-06-17" },
      { nome_jogador: "Conor Gallagher", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "2000-02-06" },
      { nome_jogador: "Mason Mount", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1999-01-10" },
      { nome_jogador: "James Maddison", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1996-11-23" },
      { nome_jogador: "Phil Foden", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "2000-05-28" },
      { nome_jogador: "Bukayo Saka", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2001-09-05" },
      { nome_jogador: "Harry Kane", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1993-07-28" },
      { nome_jogador: "Marcus Rashford", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1997-10-31" },
      { nome_jogador: "Jack Grealish", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1995-09-10" },
      { nome_jogador: "Ollie Watkins", posicao: "Atacante", numero_camisa: 24, data_nascimento: "1995-12-30" },
      { nome_jogador: "Callum Wilson", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1992-02-27" },
      { nome_jogador: "Raheem Sterling", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1994-12-08" },
      { nome_jogador: "Jarrod Bowen", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1996-12-20" }
    ]
  },
  {
    id_selecao: 34, nome_selecao: "França", continente: "Europa", tecnico: "Didier Deschamps", titulos: 2,
    jogadores: [
      { nome_jogador: "Mike Maignan", posicao: "Goleiro", numero_camisa: 16, data_nascimento: "1995-07-03" },
      { nome_jogador: "Alphonse Areola", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1993-02-27" },
      { nome_jogador: "Brice Samba", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1994-04-25" },
      { nome_jogador: "Benjamin Pavard", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1996-03-28" },
      { nome_jogador: "Jules Koundé", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1998-11-12" },
      { nome_jogador: "Dayot Upamecano", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1998-10-27" },
      { nome_jogador: "William Saliba", posicao: "Defensor", numero_camisa: 17, data_nascimento: "2001-03-24" },
      { nome_jogador: "Ibrahima Konaté", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1999-05-25" },
      { nome_jogador: "Theo Hernández", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1997-10-06" },
      { nome_jogador: "Ferland Mendy", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1995-06-08" },
      { nome_jogador: "Jonathan Clauss", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1992-09-25" },
      { nome_jogador: "N'Golo Kanté", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1991-03-29" },
      { nome_jogador: "Aurélien Tchouaméni", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2000-01-27" },
      { nome_jogador: "Adrien Rabiot", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1995-04-03" },
      { nome_jogador: "Eduardo Camavinga", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "2002-11-10" },
      { nome_jogador: "Warren Zaïre-Emery", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "2006-03-08" },
      { nome_jogador: "Youssouf Fofana", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1999-01-10" },
      { nome_jogador: "Antoine Griezmann", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1991-03-21" },
      { nome_jogador: "Kylian Mbappé", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1998-12-20" },
      { nome_jogador: "Ousmane Dembélé", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1997-05-15" },
      { nome_jogador: "Olivier Giroud", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1986-09-30" },
      { nome_jogador: "Marcus Thuram", posicao: "Atacante", numero_camisa: 15, data_nascimento: "1997-08-06" },
      { nome_jogador: "Randal Kolo Muani", posicao: "Atacante", numero_camisa: 12, data_nascimento: "1998-12-05" },
      { nome_jogador: "Kingsley Coman", posicao: "Atacante", numero_camisa: 20, data_nascimento: "1996-06-13" },
      { nome_jogador: "Bradley Barcola", posicao: "Atacante", numero_camisa: 25, data_nascimento: "2002-09-02" },
      { nome_jogador: "Moussa Diaby", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1999-07-07" }
    ]
  },
  {
    id_selecao: 35, nome_selecao: "Croácia", continente: "Europa", tecnico: "Zlatko Dalić", titulos: 0,
    jogadores: [
      { nome_jogador: "Dominik Livaković", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1995-01-09" },
      { nome_jogador: "Ivica Ivušić", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1995-02-01" },
      { nome_jogador: "Nediljko Labrović", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1999-10-10" },
      { nome_jogador: "Joško Gvardiol", posicao: "Defensor", numero_camisa: 20, data_nascimento: "2002-01-23" },
      { nome_jogador: "Josip Šutalo", posicao: "Defensor", numero_camisa: 6, data_nascimento: "2000-02-28" },
      { nome_jogador: "Borna Sosa", posicao: "Defensor", numero_camisa: 19, data_nascimento: "1998-01-21" },
      { nome_jogador: "Josip Juranović", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1995-08-16" },
      { nome_jogador: "Domagoj Vida", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1989-04-29" },
      { nome_jogador: "Martin Erlić", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1998-01-24" },
      { nome_jogador: "Josip Stanišić", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2000-04-02" },
      { nome_jogador: "Borna Barišić", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1992-11-10" },
      { nome_jogador: "Luka Modrić", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1985-09-09" },
      { nome_jogador: "Mateo Kovačić", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1994-05-06" },
      { nome_jogador: "Marcelo Brozović", posicao: "Meio-campo", numero_camisa: 11, data_nascimento: "1992-11-16" },
      { nome_jogador: "Lovro Majer", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1998-01-17" },
      { nome_jogador: "Mario Pašalić", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1995-02-09" },
      { nome_jogador: "Nikola Vlašić", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1997-10-04" },
      { nome_jogador: "Luka Ivanušec", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1998-11-26" },
      { nome_jogador: "Martin Baturina", posicao: "Meio-campo", numero_camisa: 26, data_nascimento: "2003-02-16" },
      { nome_jogador: "Andrej Kramarić", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-06-19" },
      { nome_jogador: "Ivan Perišić", posicao: "Atacante", numero_camisa: 14, data_nascimento: "1989-02-02" },
      { nome_jogador: "Bruno Petković", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1994-09-16" },
      { nome_jogador: "Marko Livaja", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1993-08-26" },
      { nome_jogador: "Ante Budimir", posicao: "Atacante", numero_camisa: 24, data_nascimento: "1991-07-22" },
      { nome_jogador: "Mislav Oršić", posicao: "Atacante", numero_camisa: 25, data_nascimento: "1992-12-29" },
      { nome_jogador: "Matija Frigan", posicao: "Atacante", numero_camisa: 4, data_nascimento: "2003-02-11" }
    ]
  },
  {
    id_selecao: 36, nome_selecao: "Portugal", continente: "Europa", tecnico: "Roberto Martínez", titulos: 0,
    jogadores: [
      { nome_jogador: "Diogo Costa", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1999-09-19" },
      { nome_jogador: "Rui Patrício", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1988-02-15" },
      { nome_jogador: "José Sá", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1993-01-17" },
      { nome_jogador: "Rúben Dias", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1997-05-14" },
      { nome_jogador: "Pepe", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1983-02-26" },
      { nome_jogador: "Gonçalo Inácio", posicao: "Defensor", numero_camisa: 14, data_nascimento: "2001-08-25" },
      { nome_jogador: "António Silva", posicao: "Defensor", numero_camisa: 24, data_nascimento: "2003-10-30" },
      { nome_jogador: "João Cancelo", posicao: "Defensor", numero_camisa: 20, data_nascimento: "1994-05-27" },
      { nome_jogador: "Diogo Dalot", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1999-03-18" },
      { nome_jogador: "Nuno Mendes", posicao: "Defensor", numero_camisa: 19, data_nascimento: "2002-06-19" },
      { nome_jogador: "Nélson Semedo", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1993-11-16" },
      { nome_jogador: "Danilo Pereira", posicao: "Defensor", numero_camisa: 13, data_nascimento: "1991-09-09" },
      { nome_jogador: "Bruno Fernandes", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1994-09-08" },
      { nome_jogador: "Bernardo Silva", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1994-08-10" },
      { nome_jogador: "João Palhinha", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1995-07-09" },
      { nome_jogador: "Vitinha", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "2000-02-13" },
      { nome_jogador: "Rúben Neves", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1997-03-13" },
      { nome_jogador: "Matheus Nunes", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "1998-08-27" },
      { nome_jogador: "João Neves", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "2004-09-27" },
      { nome_jogador: "Otávio", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "1995-02-09" },
      { nome_jogador: "Cristiano Ronaldo", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1985-02-05" },
      { nome_jogador: "Rafael Leão", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1999-06-10" },
      { nome_jogador: "João Félix", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1999-11-10" },
      { nome_jogador: "Diogo Jota", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1996-12-04" },
      { nome_jogador: "Gonçalo Ramos", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2001-06-20" },
      { nome_jogador: "Pedro Neto", posicao: "Atacante", numero_camisa: 26, data_nascimento: "2000-03-09" }
    ]
  },
  {
    id_selecao: 37, nome_selecao: "Espanha", continente: "Europa", tecnico: "Luis de la Fuente", titulos: 1,
    jogadores: [
      { nome_jogador: "Unai Simón", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1997-06-11" },
      { nome_jogador: "David Raya", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1995-09-15" },
      { nome_jogador: "Álex Remiro", posicao: "Goleiro", numero_camisa: 13, data_nascimento: "1995-03-24" },
      { nome_jogador: "Dani Carvajal", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1992-01-11" },
      { nome_jogador: "Jesús Navas", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1985-11-21" },
      { nome_jogador: "Aymeric Laporte", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1994-05-27" },
      { nome_jogador: "Robin Le Normand", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1996-11-11" },
      { nome_jogador: "Nacho Fernández", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1990-01-18" },
      { nome_jogador: "Dani Vivian", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1999-07-05" },
      { nome_jogador: "Alejandro Grimaldo", posicao: "Defensor", numero_camisa: 12, data_nascimento: "1995-09-20" },
      { nome_jogador: "Marc Cucurella", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1998-07-22" },
      { nome_jogador: "Rodri", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1996-06-22" },
      { nome_jogador: "Martín Zubimendi", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1999-02-02" },
      { nome_jogador: "Fabián Ruiz", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1996-04-03" },
      { nome_jogador: "Mikel Merino", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1996-06-22" },
      { nome_jogador: "Pedri", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "2002-11-25" },
      { nome_jogador: "Fermín López", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "2003-05-11" },
      { nome_jogador: "Álex Baena", posicao: "Meio-campo", numero_camisa: 15, data_nascimento: "2001-07-20" },
      { nome_jogador: "Lamine Yamal", posicao: "Atacante", numero_camisa: 19, data_nascimento: "2007-07-13" },
      { nome_jogador: "Ferran Torres", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2000-02-29" },
      { nome_jogador: "Dani Olmo", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1998-05-07" },
      { nome_jogador: "Nico Williams", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2002-07-12" },
      { nome_jogador: "Álvaro Morata", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1992-10-23" },
      { nome_jogador: "Joselu", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1990-03-27" },
      { nome_jogador: "Mikel Oyarzabal", posicao: "Atacante", numero_camisa: 21, data_nascimento: "1997-04-21" },
      { nome_jogador: "Ayoze Pérez", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1993-07-23" }
    ]
  },
  {
    id_selecao: 38, nome_selecao: "Alemanha", continente: "Europa", tecnico: "Julian Nagelsmann", titulos: 4,
    jogadores: [
      { nome_jogador: "Manuel Neuer", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1986-03-27" },
      { nome_jogador: "Marc-André ter Stegen", posicao: "Goleiro", numero_camisa: 22, data_nascimento: "1992-04-30" },
      { nome_jogador: "Oliver Baumann", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1990-06-02" },
      { nome_jogador: "Antonio Rüdiger", posicao: "Defensor", numero_camisa: 2, data_nascimento: "1993-03-03" },
      { nome_jogador: "Jonathan Tah", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1996-02-11" },
      { nome_jogador: "Nico Schlotterbeck", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1999-12-01" },
      { nome_jogador: "Waldemar Anton", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1996-07-20" },
      { nome_jogador: "Robin Koch", posicao: "Defensor", numero_camisa: 24, data_nascimento: "1996-07-17" },
      { nome_jogador: "Maximilian Mittelstädt", posicao: "Defensor", numero_camisa: 18, data_nascimento: "1997-03-18" },
      { nome_jogador: "David Raum", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1998-04-22" },
      { nome_jogador: "Benjamin Henrichs", posicao: "Defensor", numero_camisa: 20, data_nascimento: "1997-02-23" },
      { nome_jogador: "Joshua Kimmich", posicao: "Meio-campo", numero_camisa: 6, data_nascimento: "1995-02-08" },
      { nome_jogador: "Toni Kroos", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1990-01-04" },
      { nome_jogador: "İlkay Gündoğan", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1990-10-24" },
      { nome_jogador: "Robert Andrich", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1994-09-22" },
      { nome_jogador: "Pascal Groß", posicao: "Meio-campo", numero_camisa: 5, data_nascimento: "1991-06-15" },
      { nome_jogador: "Emre Can", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "1994-01-12" },
      { nome_jogador: "Jamal Musiala", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "2003-02-26" },
      { nome_jogador: "Florian Wirtz", posicao: "Meio-campo", numero_camisa: 17, data_nascimento: "2003-05-03" },
      { nome_jogador: "Chris Führich", Meio_campo: "Meio-campo", numero_camisa: 11, data_nascimento: "1998-01-09" },
      { nome_jogador: "Leroy Sané", posicao: "Atacante", numero_camisa: 19, data_nascimento: "1996-01-11" },
      { nome_jogador: "Kai Havertz", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1999-06-11" },
      { nome_jogador: "Niclas Füllkrug", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1993-02-09" },
      { nome_jogador: "Thomas Müller", posicao: "Atacante", numero_camisa: 13, data_nascimento: "1989-09-13" },
      { nome_jogador: "Maximilian Beier", posicao: "Atacante", numero_camisa: 14, data_nascimento: "2002-10-17" },
      { nome_jogador: "Deniz Undav", posicao: "Atacante", numero_camisa: 26, data_nascimento: "1996-07-19" }
    ]
  },
  {
    id_selecao: 39, nome_selecao: "Holanda", continente: "Europa", tecnico: "Ronald Koeman", titulos: 0,
    jogadores: [
      { nome_jogador: "Bart Verbruggen", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "2002-08-18" },
      { nome_jogador: "Mark Flekken", posicao: "Goleiro", numero_camisa: 13, data_nascimento: "1993-06-13" },
      { nome_jogador: "Justin Bijlow", posicao: "Goleiro", numero_camisa: 23, data_nascimento: "1998-01-22" },
      { nome_jogador: "Virgil van Dijk", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1991-07-08" },
      { nome_jogador: "Nathan Aké", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1995-02-18" },
      { nome_jogador: "Matthijs de Ligt", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1999-08-12" },
      { nome_jogador: "Stefan de Vrij", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1992-02-05" },
      { nome_jogador: "Denzel Dumfries", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1996-04-18" },
      { nome_jogador: "Jeremie Frimpong", posicao: "Defensor", numero_camisa: 12, data_nascimento: "2000-12-10" },
      { nome_jogador: "Lutsharel Geertruida", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2000-07-18" },
      { nome_jogador: "Micky van de Ven", posicao: "Defensor", numero_camisa: 15, data_nascimento: "2001-04-19" },
      { nome_jogador: "Daley Blind", posicao: "Defensor", numero_camisa: 17, data_nascimento: "1990-03-09" },
      { nome_jogador: "Frenkie de Jong", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "1997-05-12" },
      { nome_jogador: "Teun Koopmeiners", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1998-02-28" },
      { nome_jogador: "Tijjani Reijnders", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1998-07-29" },
      { nome_jogador: "Joey Veerman", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "1998-11-19" },
      { nome_jogador: "Jerdy Schouten", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "1997-01-12" },
      { nome_jogador: "Georginio Wijnaldum", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1990-11-11" },
      { nome_jogador: "Ryan Gravenberch", posicao: "Meio-campo", numero_camisa: 26, data_nascimento: "2002-05-16" },
      { nome_jogador: "Ian Maatsen", posicao: "Meio-campo", numero_camisa: 25, data_nascimento: "2002-03-10" },
      { nome_jogador: "Memphis Depay", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1994-02-13" },
      { nome_jogador: "Cody Gakpo", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1999-05-07" },
      { nome_jogador: "Xavi Simons", posicao: "Atacante", numero_camisa: 7, data_nascimento: "2003-04-21" },
      { nome_jogador: "Donyell Malen", posicao: "Atacante", numero_camisa: 18, data_nascimento: "1999-01-19" },
      { nome_jogador: "Wout Weghorst", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1992-08-07" },
      { nome_jogador: "Brian Brobbey", posicao: "Atacante", numero_camisa: 19, data_nascimento: "2002-02-01" }
    ]
  },
  {
    id_selecao: 40, nome_selecao: "Bélgica", continente: "Europa", tecnico: "Domenico Tedesco", titulos: 0,
    jogadores: [
      { nome_jogador: "Koen Casteels", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1992-06-25" },
      { nome_jogador: "Matz Sels", posicao: "Goleiro", numero_camisa: 12, data_nascimento: "1992-02-26" },
      { nome_jogador: "Thomas Kaminski", posicao: "Goleiro", numero_camisa: 13, data_nascimento: "1992-10-23" },
      { nome_jogador: "Jan Vertonghen", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1987-04-24" },
      { nome_jogador: "Wout Faes", posicao: "Defensor", numero_camisa: 4, data_nascimento: "1998-04-03" },
      { nome_jogador: "Arthur Theate", posicao: "Defensor", numero_camisa: 3, data_nascimento: "2000-05-25" },
      { nome_jogador: "Timothy Castagne", posicao: "Defensor", numero_camisa: 21, data_nascimento: "1995-12-05" },
      { nome_jogador: "Thomas Meunier", posicao: "Defensor", numero_camisa: 15, data_nascimento: "1991-09-12" },
      { nome_jogador: "Zeno Debast", posicao: "Defensor", numero_camisa: 2, data_nascimento: "2003-10-24" },
      { nome_jogador: "Maxim De Cuyper", posicao: "Defensor", numero_camisa: 25, data_nascimento: "2000-12-22" },
      { nome_jogador: "Sebastiaan Bornauw", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1999-03-22" },
      { nome_jogador: "Kevin De Bruyne", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1991-06-28" },
      { nome_jogador: "Amadou Onana", posicao: "Meio-campo", numero_camisa: 24, data_nascimento: "2001-08-16" },
      { nome_jogador: "Youri Tielemans", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1997-05-07" },
      { nome_jogador: "Orel Mangala", posicao: "Meio-campo", numero_camisa: 18, data_nascimento: "1998-03-18" },
      { nome_jogador: "Aster Vranckx", posicao: "Meio-campo", numero_camisa: 16, data_nascimento: "2002-10-04" },
      { nome_jogador: "Arthur Vermeeren", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "2005-02-07" },
      { nome_jogador: "Alexis Saelemaekers", posicao: "Meio-campo", numero_camisa: 26, data_nascimento: "1999-06-27" },
      { nome_jogador: "Charles De Ketelaere", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "2001-03-10" },
      { nome_jogador: "Romelu Lukaku", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1993-05-13" },
      { nome_jogador: "Jérémy Doku", posicao: "Atacante", numero_camisa: 20, data_nascimento: "2002-05-27" },
      { nome_jogador: "Leandro Trossard", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1994-12-04" },
      { nome_jogador: "Loïs Openda", posicao: "Atacante", numero_camisa: 17, data_nascimento: "2000-02-16" },
      { nome_jogador: "Johan Bakayoko", posicao: "Atacante", numero_camisa: 19, data_nascimento: "2003-04-20" },
      { nome_jogador: "Dodi Lukebakio", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1997-09-24" },
      { nome_jogador: "Yannick Carrasco", posicao: "Atacante", numero_camisa: 6, data_nascimento: "1993-09-04" }
    ]
  }
];

selecoesBloco5.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 5 de Seleções (33 a 40) inserido com sucesso.");

// =============================================================================
// PARTE 6: SELEÇÕES E ELENCOS (41 A 48)
// =============================================================================

print("-> Iniciando a inserção do sexto bloco de seleções (41 a 48)...");

const selecoesBloco6 = [
  {
    id_selecao: 41, nome_selecao: "Suécia", continente: "Europa", tecnico: "Jon Dahl Tomasson", titulos: 0,
    jogadores: [
      { nome_jogador: "Robin Olsen", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1990-01-08" },
      { nome_jogador: "Victor Lindelöf", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1994-07-17" },
      { nome_jogador: "Dejan Kulusevski", posicao: "Meio-campo", numero_camisa: 21, data_nascimento: "2000-04-25" },
      { nome_jogador: "Emil Forsberg", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1991-10-23" },
      { nome_jogador: "Alexander Isak", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1999-09-21" },
      { nome_jogador: "Viktor Gyökeres", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1998-06-04" },
      { nome_jogador: "Anthony Elanga", posicao: "Atacante", numero_camisa: 11, data_nascimento: "2002-04-27" }
    ]
  },
  {
    id_selecao: 42, nome_selecao: "Suíça", continente: "Europa", tecnico: "Murat Yakin", titulos: 0,
    jogadores: [
      { nome_jogador: "Yann Sommer", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1988-12-17" },
      { nome_jogador: "Manuel Akanji", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1995-07-19" },
      { nome_jogador: "Fabian Schär", posicao: "Defensor", numero_camisa: 22, data_nascimento: "1991-12-20" },
      { nome_jogador: "Granit Xhaka", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1992-09-27" },
      { nome_jogador: "Xherdan Shaqiri", posicao: "Meio-campo", numero_camisa: 23, data_nascimento: "1991-10-10" },
      { nome_jogador: "Breel Embolo", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1997-02-14" },
      { nome_jogador: "Noah Okafor", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-05-24" }
    ]
  },
  {
    id_selecao: 43, nome_selecao: "Escócia", continente: "Europa", tecnico: "Steve Clarke", titulos: 0,
    jogadores: [
      { nome_jogador: "Angus Gunn", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-01-22" },
      { nome_jogador: "Andrew Robertson", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1994-03-11" },
      { nome_jogador: "Kieran Tierney", posicao: "Defensor", numero_camisa: 6, data_nascimento: "1997-06-05" },
      { nome_jogador: "John McGinn", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1994-10-18" },
      { nome_jogador: "Scott McTominay", posicao: "Meio-campo", numero_camisa: 4, data_nascimento: "1996-12-08" },
      { nome_jogador: "Billy Gilmour", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "2001-06-11" },
      { nome_jogador: "Che Adams", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1996-07-13" }
    ]
  },
  {
    id_selecao: 44, nome_selecao: "Áustria", continente: "Europa", tecnico: "Ralf Rangnick", titulos: 0,
    jogadores: [
      { nome_jogador: "Alexander Schlager", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-02-01" },
      { nome_jogador: "David Alaba", posicao: "Defensor", numero_camisa: 8, data_nascimento: "1992-06-24" },
      { nome_jogador: "Marcel Sabitzer", posicao: "Meio-campo", numero_camisa: 9, data_nascimento: "1994-03-17" },
      { nome_jogador: "Konrad Laimer", posicao: "Meio-campo", numero_camisa: 20, data_nascimento: "1997-05-27" },
      { nome_jogador: "Christoph Baumgartner", posicao: "Meio-campo", numero_camisa: 19, data_nascimento: "1999-08-01" },
      { nome_jogador: "Marko Arnautovic", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1989-04-19" },
      { nome_jogador: "Sasa Kalajdzic", posicao: "Atacante", numero_camisa: 17, data_nascimento: "1997-07-07" }
    ]
  },
  {
    id_selecao: 45, nome_selecao: "Noruega", continente: "Europa", tecnico: "Ståle Solbakken", titulos: 0,
    jogadores: [
      { nome_jogador: "Ørjan Nyland", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1990-09-10" },
      { nome_jogador: "Julian Ryerson", posicao: "Defensor", numero_camisa: 14, data_nascimento: "1997-11-17" },
      { nome_jogador: "Martin Ødegaard", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1998-12-17" },
      { nome_jogador: "Sander Berge", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1998-02-14" },
      { nome_jogador: "Oscar Bobb", posicao: "Atacante", numero_camisa: 22, data_nascimento: "2003-07-12" },
      { nome_jogador: "Erling Haaland", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2000-07-21" },
      { nome_jogador: "Alexander Sørloth", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1995-12-05" }
    ]
  },
  {
    id_selecao: 46, nome_selecao: "República Tcheca", continente: "Europa", tecnico: "Ivan Hašek", titulos: 0,
    jogadores: [
      { nome_jogador: "Jindřich Staněk", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1996-04-27" },
      { nome_jogador: "Vladimír Coufal", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1992-08-22" },
      { nome_jogador: "Tomáš Souček", posicao: "Meio-campo", numero_camisa: 22, data_nascimento: "1995-02-27" },
      { nome_jogador: "Antonín Barák", posicao: "Meio-campo", numero_camisa: 7, data_nascimento: "1994-12-03" },
      { nome_jogador: "Lukáš Provod", posicao: "Meio-campo", numero_camisa: 14, data_nascimento: "1996-10-23" },
      { nome_jogador: "Patrik Schick", posicao: "Atacante", numero_camisa: 10, data_nascimento: "1996-01-24" },
      { nome_jogador: "Adam Hložek", posicao: "Atacante", numero_camisa: 9, data_nascimento: "2002-07-25" }
    ]
  },
  {
    id_selecao: 47, nome_selecao: "Turquia", continente: "Europa", tecnico: "Vincenzo Montella", titulos: 0,
    jogadores: [
      { nome_jogador: "Mert Günok", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1989-03-01" },
      { nome_jogador: "Merih Demiral", posicao: "Defensor", numero_camisa: 3, data_nascimento: "1998-03-05" },
      { nome_jogador: "Hakan Çalhanoğlu", posicao: "Meio-campo", numero_camisa: 10, data_nascimento: "1994-02-08" },
      { nome_jogador: "Arda Güler", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "2005-02-25" },
      { nome_jogador: "Kerem Aktürkoğlu", posicao: "Atacante", numero_camisa: 7, data_nascimento: "1998-10-21" },
      { nome_jogador: "Barış Alper Yılmaz", posicao: "Atacante", numero_camisa: 21, data_nascimento: "2000-05-23" },
      { nome_jogador: "Cenk Tosun", posicao: "Atacante", numero_camisa: 9, data_nascimento: "1991-06-07" }
    ]
  },
  {
    id_selecao: 48, nome_selecao: "Bósnia e Herzegovina", continente: "Europa", tecnico: "Savo Milošević", titulos: 0,
    jogadores: [
      { nome_jogador: "Nikola Vasilj", posicao: "Goleiro", numero_camisa: 1, data_nascimento: "1995-12-02" },
      { nome_jogador: "Sead Kolašinac", posicao: "Defensor", numero_camisa: 5, data_nascimento: "1993-06-20" },
      { nome_jogador: "Anel Ahmedhodžić", posicao: "Defensor", numero_camisa: 16, data_nascimento: "1999-03-26" },
      { nome_jogador: "Miralem Pjanić", posicao: "Meio-campo", numero_camisa: 8, data_nascimento: "1990-04-02" },
      { nome_jogador: "Rade Krunić", posicao: "Meio-campo", numero_camisa: 13, data_nascimento: "1993-10-07" },
      { nome_jogador: "Edin Džeko", posicao: "Atacante", numero_camisa: 11, data_nascimento: "1986-03-17" },
      { nome_jogador: "Ermedin Demirović", posicao: "Atacante", numero_camisa: 23, data_nascimento: "1998-03-25" }
    ]
  }
];

selecoesBloco6.forEach(selecao => {
  const resultado = db.selecoes.insertOne({
    nome_selecao: selecao.nome_selecao,
    continente: selecao.continente,
    tecnico: selecao.tecnico,
    titulos: selecao.titulos,
    jogadores: selecao.jogadores
  });
  mapaSelecoes[selecao.id_selecao] = resultado.insertedId;
});

print("-> Bloco 6 de Seleções (41 a 48) inserido com sucesso. Carga de países concluída!");

// =============================================================================
// PARTE 7: CARGA COMPLETA DAS 104 PARTIDAS (MAPEAMENTO NATIVO VIA OBJECTID)
// =============================================================================

print("-> Iniciando a inserção definitiva das 104 partidas com chaves nativas...");

const dadosPartidas = [
  // FASE DE GRUPOS - GRUPO A
  { data_partida: "2026-06-11", id_estadio: 12, id_selecao_1: 2, id_selecao_2: 29, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 2 },
  { data_partida: "2026-06-11", id_estadio: 13, id_selecao_1: 16, id_selecao_2: 46, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 16 },
  { data_partida: "2026-06-16", id_estadio: 12, id_selecao_1: 2, id_selecao_2: 16, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 2 },
  { data_partida: "2026-06-16", id_estadio: 14, id_selecao_1: 29, id_selecao_2: 46, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 29 },
  { data_partida: "2026-06-21", id_estadio: 12, id_selecao_1: 2, id_selecao_2: 46, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 2 },
  { data_partida: "2026-06-21", id_estadio: 13, id_selecao_1: 29, id_selecao_2: 16, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 29 },

  // FASE DE GRUPOS - GRUPO B
  { data_partida: "2026-06-12", id_estadio: 16, id_selecao_1: 1, id_selecao_2: 48, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-12", id_estadio: 15, id_selecao_1: 19, id_selecao_2: 42, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 2, vencedor: 42 },
  { data_partida: "2026-06-17", id_estadio: 16, id_selecao_1: 1, id_selecao_2: 19, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 1 },
  { data_partida: "2026-06-17", id_estadio: 15, id_selecao_1: 48, id_selecao_2: 42, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 48 },
  { data_partida: "2026-06-22", id_estadio: 16, id_selecao_1: 1, id_selecao_2: 42, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 1 },
  { data_partida: "2026-06-22", id_estadio: 15, id_selecao_1: 48, id_selecao_2: 19, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 48 },

  // FASE DE GRUPOS - GRUPO C
  { data_partida: "2026-06-13", id_estadio: 2, id_selecao_1: 8, id_selecao_2: 23, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 8 },
  { data_partida: "2026-06-13", id_estadio: 9, id_selecao_1: 5, id_selecao_2: 43, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 1, vencedor: 43 },
  { data_partida: "2026-06-19", id_estadio: 9, id_selecao_1: 8, id_selecao_2: 5, quantidade_gols_selecao_1: 4, quantidade_gols_selecao_2: 0, vencedor: 8 },
  { data_partida: "2026-06-19", id_estadio: 10, id_selecao_1: 23, id_selecao_2: 43, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-24", id_estadio: 10, id_selecao_1: 43, id_selecao_2: 8, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 3, vencedor: 8 },
  { data_partida: "2026-06-24", id_estadio: 3, id_selecao_1: 23, id_selecao_2: 5, Pioneer_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 23 },

  // FASE DE GRUPOS - GRUPO D
  { data_partida: "2026-06-12", id_estadio: 7, id_selecao_1: 3, id_selecao_2: 11, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 3 },
  { data_partida: "2026-06-13", id_estadio: 8, id_selecao_1: 18, id_selecao_2: 47, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 1, vencedor: 47 },
  { data_partida: "2026-06-18", id_estadio: 7, id_selecao_1: 3, id_selecao_2: 18, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 3 },
  { data_partida: "2026-06-18", id_estadio: 6, id_selecao_1: 11, id_selecao_2: 47, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 2, vencedor: 47 },
  { data_partida: "2026-06-23", id_estadio: 7, id_selecao_1: 3, id_selecao_2: 47, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-23", id_estadio: 8, id_selecao_1: 11, id_selecao_2: 18, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 0, vencedor: null },

  // FASE DE GRUPOS - GRUPO E
  { data_partida: "2026-06-14", id_estadio: 1, id_selecao_1: 38, id_selecao_2: 6, quantidade_gols_selecao_1: 5, quantidade_gols_selecao_2: 0, vencedor: 38 },
  { data_partida: "2026-06-14", id_estadio: 4, id_selecao_1: 31, id_selecao_2: 10, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-19", id_estadio: 1, id_selecao_1: 38, id_selecao_2: 31, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 38 },
  { data_partida: "2026-06-19", id_estadio: 5, id_selecao_1: 6, id_selecao_2: 10, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 3, vencedor: 10 },
  { data_partida: "2026-06-24", id_estadio: 1, id_selecao_1: 38, id_selecao_2: 10, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 38 },
  { data_partida: "2026-06-24", id_estadio: 4, id_selecao_1: 6, id_selecao_2: 31, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 4, vencedor: 31 },

  // FASE DE GRUPOS - GRUPO F
  { data_partida: "2026-06-14", id_estadio: 3, id_selecao_1: 39, id_selecao_2: 13, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 39 },
  { data_partida: "2026-06-15", id_estadio: 5, id_selecao_1: 41, id_selecao_2: 24, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 41 },
  { data_partida: "2026-06-20", id_estadio: 3, id_selecao_1: 39, id_selecao_2: 41, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 39 },
  { data_partida: "2026-06-20", id_estadio: 10, id_selecao_1: 13, id_selecao_2: 24, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 13 },
  { data_partida: "2026-06-25", id_estadio: 3, id_selecao_1: 39, id_selecao_2: 24, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 39 },
  { data_partida: "2026-06-25", id_estadio: 5, id_selecao_1: 13, id_selecao_2: 41, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },

  // FASE DE GRUPOS - GRUPO G
  { data_partida: "2026-06-15", id_estadio: 2, id_selecao_1: 40, id_selecao_2: 25, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 40 },
  { data_partida: "2026-06-15", id_estadio: 9, id_selecao_1: 14, id_selecao_2: 22, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 0, vencedor: null },
  { data_partida: "2026-06-20", id_estadio: 2, id_selecao_1: 40, id_selecao_2: 14, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 40 },
  { data_partida: "2026-06-21", id_estadio: 11, id_selecao_1: 25, id_selecao_2: 22, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 25 },
  { data_partida: "2026-06-25", id_estadio: 2, id_selecao_1: 40, id_selecao_2: 22, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 40 },
  { data_partida: "2026-06-26", id_estadio: 9, id_selecao_1: 25, id_selecao_2: 14, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 25 },

  // FASE DE GRUPOS - GRUPO H
  { data_partida: "2026-06-15", id_estadio: 7, id_selecao_1: 37, id_selecao_2: 28, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 37 },
  { data_partida: "2026-06-16", id_estadio: 6, id_selecao_1: 20, id_selecao_2: 12, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 2, vencedor: 12 },
  { data_partida: "2026-06-21", id_estadio: 7, id_selecao_1: 37, id_selecao_2: 20, quantidade_gols_selecao_1: 4, quantidade_gols_selecao_2: 0, vencedor: 37 },
  { data_partida: "2026-06-21", id_estadio: 8, id_selecao_1: 28, id_selecao_2: 12, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 3, vencedor: 12 },
  { data_partida: "2026-06-26", id_estadio: 7, id_selecao_1: 37, id_selecao_2: 12, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-26", id_estadio: 6, id_selecao_1: 28, id_selecao_2: 20, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 0, vencedor: null },

  // FASE DE GRUPOS - GRUPO I
  { data_partida: "2026-06-16", id_estadio: 1, id_selecao_1: 34, id_selecao_2: 30, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 34 },
  { data_partida: "2026-06-17", id_estadio: 4, id_selecao_1: 21, id_selecao_2: 45, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 2, vencedor: 45 },
  { data_partida: "2026-06-22", id_estadio: 1, id_selecao_1: 34, id_selecao_2: 21, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 34 },
  { data_partida: "2026-06-22", id_estadio: 5, id_selecao_1: 30, id_selecao_2: 45, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 30 },
  { data_partida: "2026-06-27", id_estadio: 1, id_selecao_1: 34, id_selecao_2: 45, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 34 },
  { data_partida: "2026-06-27", id_estadio: 4, id_selecao_1: 30, id_selecao_2: 21, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 30 },

  // FASE DE GRUPOS - GRUPO J
  { data_partida: "2026-06-17", id_estadio: 3, id_selecao_1: 7, id_selecao_2: 26, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 7 },
  { data_partida: "2026-06-17", id_estadio: 10, id_selecao_1: 44, id_selecao_2: 17, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 44 },
  { data_partida: "2026-06-22", id_estadio: 3, id_selecao_1: 7, id_selecao_2: 44, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 7 },
  { data_partida: "2026-06-23", id_estadio: 11, id_selecao_1: 26, id_selecao_2: 17, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 26 },
  { data_partida: "2026-06-27", id_estadio: 3, id_selecao_1: 7, id_selecao_2: 17, quantidade_gols_selecao_1: 4, quantidade_gols_selecao_2: 0, vencedor: 7 },
  { data_partida: "2026-06-27", id_estadio: 10, id_selecao_1: 26, id_selecao_2: 44, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },

  // FASE DE GRUPOS - GRUPO K
  { data_partida: "2026-06-18", id_estadio: 2, id_selecao_1: 36, id_selecao_2: 32, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 36 },
  { data_partida: "2026-06-18", id_estadio: 9, id_selecao_1: 15, id_selecao_2: 9, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 3, vencedor: 9 },
  { data_partida: "2026-06-23", id_estadio: 2, id_selecao_1: 36, id_selecao_2: 15, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 36 },
  { data_partida: "2026-06-23", id_estadio: 11, id_selecao_1: 32, id_selecao_2: 9, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 2, vencedor: 9 },
  { data_partida: "2026-06-27", id_estadio: 2, id_selecao_1: 36, id_selecao_2: 9, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },
  { data_partida: "2026-06-27", id_estadio: 9, id_selecao_1: 32, id_selecao_2: 15, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 0, vencedor: null },

  // FASE DE GRUPOS - GRUPO L
  { data_partida: "2026-06-18", id_estadio: 7, id_selecao_1: 33, id_selecao_2: 35, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 33 },
  { data_partida: "2026-06-19", id_estadio: 6, id_selecao_1: 27, id_selecao_2: 4, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 27 },
  { data_partida: "2026-06-24", id_estadio: 7, id_selecao_1: 33, id_selecao_2: 27, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 33 },
  { data_partida: "2026-06-24", id_estadio: 8, id_selecao_1: 35, id_selecao_2: 4, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 35 },
  { data_partida: "2026-06-27", id_estadio: 7, id_selecao_1: 33, id_selecao_2: 4, quantidade_gols_selecao_1: 4, quantidade_gols_selecao_2: 0, vencedor: 33 },
  { data_partida: "2026-06-27", id_estadio: 6, id_selecao_1: 35, id_selecao_2: 27, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: null },

  // ELIMINATÓRIAS - 16-AVOS DE FINAL
  { data_partida: "2026-06-28", id_estadio: 7, id_selecao_1: 2, id_selecao_2: 48, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 2 },
  { data_partida: "2026-06-28", id_estadio: 8, id_selecao_1: 42, id_selecao_2: 29, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 42 },
  { data_partida: "2026-06-29", id_estadio: 1, id_selecao_1: 8, id_selecao_2: 43, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 8 },
  { data_partida: "2026-06-29", id_estadio: 2, id_selecao_1: 3, id_selecao_2: 31, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 3 },
  { data_partida: "2026-06-30", id_estadio: 3, id_selecao_1: 38, id_selecao_2: 41, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 38 },
  { data_partida: "2026-06-30", id_estadio: 4, id_selecao_1: 39, id_selecao_2: 45, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 1, vencedor: 39 },
  { data_partida: "2026-07-01", id_estadio: 5, id_selecao_1: 40, id_selecao_2: 26, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 40 },
  { data_partida: "2026-07-01", id_estadio: 6, id_selecao_1: 37, id_selecao_2: 27, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 37 },
  { data_partida: "2026-07-02", id_estadio: 9, id_selecao_1: 34, id_selecao_2: 16, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 34 },
  { data_partida: "2026-07-02", id_estadio: 10, id_selecao_1: 7, id_selecao_2: 1, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 0, vencedor: 7 },
  { data_partida: "2026-07-03", id_estadio: 11, id_selecao_1: 36, id_selecao_2: 23, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 36 },
  { data_partida: "2026-07-03", id_estadio: 12, id_selecao_1: 33, id_selecao_2: 47, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 33 },
  { data_partida: "2026-07-04", id_estadio: 13, id_selecao_1: 12, id_selecao_2: 10, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 12 },
  { data_partida: "2026-07-04", id_estadio: 14, id_selecao_1: 9, id_selecao_2: 13, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 9 },
  { data_partida: "2026-07-05", id_estadio: 15, id_selecao_1: 35, id_selecao_2: 30, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 1, vencedor: 35 },
  { data_partida: "2026-07-05", id_estadio: 16, id_selecao_1: 44, id_selecao_2: 25, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 44 },

  // OITAVAS DE FINAL
  { data_partida: "2026-07-06", id_estadio: 1, id_selecao_1: 2, id_selecao_2: 8, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 2, vencedor: 8 },
  { data_partida: "2026-07-06", id_estadio: 2, id_selecao_1: 42, id_selecao_2: 3, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 1, vencedor: 3 },
  { data_partida: "2026-07-07", id_estadio: 3, id_selecao_1: 38, id_selecao_2: 40, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 38 },
  { data_partida: "2026-07-07", id_estadio: 4, id_selecao_1: 39, id_selecao_2: 37, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 1, vencedor: 37 },
  { data_partida: "2026-07-08", id_estadio: 7, id_selecao_1: 34, id_selecao_2: 36, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 34 },
  { data_partida: "2026-07-08", id_estadio: 8, id_selecao_1: 7, id_selecao_2: 33, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 7 },
  { data_partida: "2026-07-09", id_estadio: 9, id_selecao_1: 12, id_selecao_2: 35, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 12 },
  { data_partida: "2026-07-09", id_estadio: 10, id_selecao_1: 9, id_selecao_2: 44, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 9 },

  // QUARTAS DE FINAL
  { data_partida: "2026-07-11", id_estadio: 11, id_selecao_1: 8, id_selecao_2: 37, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 8 },
  { data_partida: "2026-07-11", id_estadio: 6, id_selecao_1: 3, id_selecao_2: 38, quantidade_gols_selecao_1: 0, quantidade_gols_selecao_2: 3, vencedor: 38 },
  { data_partida: "2026-07-12", id_estadio: 7, id_selecao_1: 34, id_selecao_2: 12, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 34 },
  { data_partida: "2026-07-12", id_estadio: 1, id_selecao_1: 7, id_selecao_2: 9, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 7 },

  // SEMIFINAIS
  { data_partida: "2026-07-14", id_estadio: 1, id_selecao_1: 8, id_selecao_2: 34, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 1, vencedor: 8 },
  { data_partida: "2026-07-15", id_estadio: 3, id_selecao_1: 38, id_selecao_2: 7, quantidade_gols_selecao_1: 1, quantidade_gols_selecao_2: 0, vencedor: 38 },

  // DISPUTA DE TERCEIRO LUGAR
  { data_partida: "2026-07-18", id_estadio: 10, id_selecao_1: 34, id_selecao_2: 7, quantidade_gols_selecao_1: 3, quantidade_gols_selecao_2: 2, vencedor: 34 },

  // GRANDE FINAL
  { data_partida: "2026-07-19", id_estadio: 2, id_selecao_1: 8, id_selecao_2: 38, quantidade_gols_selecao_1: 2, quantidade_gols_selecao_2: 0, vencedor: 8 }
];

dadosPartidas.forEach(partida => {
  db.partidas.insertOne({
    data_partida: partida.data_partida,
    // Atribuição nativa traduzindo chaves relacionais para ObjectIds legítimos via mapas de memória
    id_estadio: mapaEstadios[partida.id_estadio],
    id_selecao_1: mapaSelecoes[partida.id_selecao_1],
    id_selecao_2: mapaSelecoes[partida.id_selecao_2],
    quantidade_gols_selecao_1: partida.quantidade_gols_selecao_1,
    quantidade_gols_selecao_2: partida.quantidade_gols_selecao_2,
    // Validação lógica explícita para empates, conforme acordado conceitualmente
    vencedor: partida.vencedor ? mapaSelecoes[partida.vencedor] : null
  });
});

print("=== BANCO DE DADOS DA COPA DO MUNDO 2026 POPULADO INTEGRALMENTE COM SUCESSO ===");

