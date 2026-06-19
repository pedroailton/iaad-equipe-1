USE `Copa do Mundo de Futebol`;

-- -----------------------------------------------------
-- 1. Inserindo as 48 Seleções (Copa do Mundo 2026)
-- -----------------------------------------------------
INSERT INTO `selecoes` (`id_selecao`, `nome_selecao`, `continente`, `tecnico`, `titulos`) VALUES
-- Américas do Norte e Central (CONCACAF)
(1, 'Canadá', 'América do Norte', 'Jesse Marsch', 0),
(2, 'México', 'América do Norte', 'Jaime Lozano', 0),
(3, 'Estados Unidos', 'América do Norte', 'Mauricio Pochettino', 0),
(4, 'Panamá', 'América Central', 'Thomas Christiansen', 0),
(5, 'Haiti', 'América Central', 'Sébastien Migné', 0),
(6, 'Curaçao', 'América Central', 'Dick Advocaat', 0),

-- América do Sul (CONMEBOL)
(7, 'Argentina', 'América do Sul', 'Lionel Scaloni', 3),
(8, 'Brasil', 'América do Sul', 'Dorival Júnior', 5),
(9, 'Colômbia', 'América do Sul', 'Néstor Lorenzo', 0),
(10, 'Equador', 'América do Sul', 'Félix Sánchez', 0),
(11, 'Paraguai', 'América do Sul', 'Daniel Garnero', 0),
(12, 'Uruguai', 'América do Sul', 'Marcelo Bielsa', 2),

-- Ásia (AFC)
(13, 'Japão', 'Ásia', 'Hajime Moriyasu', 0),
(14, 'Irã', 'Ásia', 'Amir Ghalenoei', 0),
(15, 'Uzbequistão', 'Ásia', 'Srečko Katanec', 0),
(16, 'Coreia do Sul', 'Ásia', 'Hwang Sun-hong', 0),
(17, 'Jordânia', 'Ásia', 'Hussein Ammouta', 0),
(18, 'Austrália', 'Ásia', 'Graham Arnold', 0),
(19, 'Catar', 'Ásia', 'Tintín Márquez', 0),
(20, 'Arábia Saudita', 'Ásia', 'Roberto Mancini', 0),
(21, 'Iraque', 'Ásia', 'Jesús Casas', 0),

-- Oceania (OFC)
(22, 'Nova Zelândia', 'Oceania', 'Darren Bazeley', 0),

-- África (CAF)
(23, 'Marrocos', 'África', 'Walid Regragui', 0),
(24, 'Tunísia', 'África', 'Jalel Kadri', 0),
(25, 'Egito', 'África', 'Hossam Hassan', 0),
(26, 'Argélia', 'África', 'Vladimir Petković', 0),
(27, 'Gana', 'África', 'Otto Addo', 0),
(28, 'Cabo Verde', 'África', 'Bubista', 0),
(29, 'África do Sul', 'África', 'Hugo Broos', 0),
(30, 'Senegal', 'África', 'Aliou Cissé', 0),
(31, 'Costa do Marfim', 'África', 'Emerse Faé', 0),
(32, 'RD Congo', 'África', 'Sébastien Desabre', 0),

-- Europa (UEFA)
(33, 'Inglaterra', 'Europa', 'Gareth Southgate', 1),
(34, 'França', 'Europa', 'Didier Deschamps', 2),
(35, 'Croácia', 'Europa', 'Zlatko Dalić', 0),
(36, 'Portugal', 'Europa', 'Roberto Martínez', 0),
(37, 'Espanha', 'Europa', 'Luis de la Fuente', 1),
(38, 'Alemanha', 'Europa', 'Julian Nagelsmann', 4),
(39, 'Holanda', 'Europa', 'Ronald Koeman', 0),
(40, 'Bélgica', 'Europa', 'Domenico Tedesco', 0),
(41, 'Suécia', 'Europa', 'Jon Dahl Tomasson', 0),
(42, 'Suíça', 'Europa', 'Murat Yakin', 0),
(43, 'Escócia', 'Europa', 'Steve Clarke', 0),
(44, 'Áustria', 'Europa', 'Ralf Rangnick', 0),
(45, 'Noruega', 'Europa', 'Ståle Solbakken', 0),
(46, 'República Tcheca', 'Europa', 'Ivan Hašek', 0),
(47, 'Turquia', 'Europa', 'Vincenzo Montella', 0),
(48, 'Bósnia e Herzegovina', 'Europa', 'Savo Milošević', 0);

-- -----------------------------------------------------
-- 2. Inserindo os 16 Estádios
-- -----------------------------------------------------
INSERT INTO `estadios` (`id_estadio`, `nome_estadio`, `cidade`, `pais`, `capacidade`) VALUES
-- Estados Unidos
(1, 'Dallas Stadium', 'Arlington', 'Estados Unidos', 94000),
(2, 'New York New Jersey Stadium', 'East Rutherford', 'Estados Unidos', 82500),
(3, 'Atlanta Stadium', 'Atlanta', 'Estados Unidos', 75000),
(4, 'Kansas City Stadium', 'Kansas City', 'Estados Unidos', 73000),
(5, 'Houston Stadium', 'Houston', 'Estados Unidos', 72000),
(6, 'San Francisco Bay Area Stadium', 'Santa Clara', 'Estados Unidos', 71000),
(7, 'Los Angeles Stadium', 'Inglewood', 'Estados Unidos', 70000),
(8, 'Seattle Stadium', 'Seattle', 'Estados Unidos', 69000),
(9, 'Philadelphia Stadium', 'Philadelphia', 'Estados Unidos', 69000),
(10, 'Miami Stadium', 'Miami', 'Estados Unidos', 65000),
(11, 'Boston Stadium', 'Foxborough', 'Estados Unidos', 65000),

-- México
(12, 'Mexico City Stadium', 'Cidade do México', 'México', 83000),
(13, 'Estadio Monterrey', 'Guadalupe', 'México', 53500),
(14, 'Estadio Guadalajara', 'Zapopan', 'México', 48000),

-- Canadá
(15, 'BC Place Vancouver', 'Vancouver', 'Canadá', 54000),
(16, 'Toronto Stadium', 'Toronto', 'Canadá', 45000);

-- -----------------------------------------------------
-- 3. Inserindo Jogadores
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO A (104 atletas)
-- -----------------------------------------------------

-- MÉXICO (ID 2)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1, 'Guillermo Ochoa', 'Goleiro', 1, '1985-07-13', 2),
(2, 'Luis Malagón', 'Goleiro', 12, '1997-03-02', 2),
(3, 'Julio González', 'Goleiro', 23, '1991-04-23', 2),
(4, 'Edson Álvarez', 'Meio-campo', 4, '1997-10-24', 2),
(5, 'Johan Vásquez', 'Defensor', 5, '1998-10-22', 2),
(6, 'César Montes', 'Defensor', 3, '1997-02-24', 2),
(7, 'Jorge Sánchez', 'Defensor', 19, '1997-12-10', 2),
(8, 'Gerardo Arteaga', 'Defensor', 6, '1998-09-07', 2),
(9, 'Jesús Gallardo', 'Defensor', 2, '1994-08-15', 2),
(10, 'Julián Araujo', 'Defensor', 26, '2001-08-13', 2),
(11, 'Víctor Guzmán', 'Defensor', 14, '2002-03-07', 2),
(12, 'Luis Romo', 'Meio-campo', 7, '1995-06-05', 2),
(13, 'Carlos Rodríguez', 'Meio-campo', 8, '1997-01-03', 2),
(14, 'Érick Sánchez', 'Meio-campo', 10, '1999-09-27', 2),
(15, 'Orbelín Pineda', 'Meio-campo', 17, '1996-03-24', 2),
(16, 'Sebastián Córdova', 'Meio-campo', 16, '1997-06-12', 2),
(17, 'Marcel Ruiz', 'Meio-campo', 24, '2000-10-26', 2),
(18, 'Hirving Lozano', 'Atacante', 22, '1995-07-30', 2),
(19, 'Santiago Giménez', 'Atacante', 11, '2001-04-18', 2),
(20, 'Raúl Jiménez', 'Atacante', 9, '1991-05-05', 2),
(21, 'Uriel Antuna', 'Atacante', 15, '1997-08-21', 2),
(22, 'Julián Quiñones', 'Atacante', 21, '1997-03-24', 2),
(23, 'Henry Martín', 'Atacante', 20, '1992-11-18', 2),
(24, 'César Huerta', 'Atacante', 18, '2000-12-03', 2),
(25, 'Roberto Alvarado', 'Atacante', 25, '1998-09-07', 2),
(26, 'Diego Lainez', 'Atacante', 13, '2000-06-09', 2);

-- ÁFRICA DO SUL (ID 29)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(27, 'Ronwen Williams', 'Goleiro', 1, '1992-01-21', 29),
(28, 'Veli Mothwa', 'Goleiro', 22, '1991-02-12', 29),
(29, 'Ricardo Goss', 'Goleiro', 16, '1994-04-02', 29),
(30, 'Mothobi Mvala', 'Defensor', 14, '1994-06-14', 29),
(31, 'Grant Kekana', 'Defensor', 20, '1992-10-31', 29),
(32, 'Aubrey Modiba', 'Defensor', 17, '1995-07-16', 29),
(33, 'Khuliso Mudau', 'Defensor', 2, '1995-04-26', 29),
(34, 'Siyanda Xulu', 'Defensor', 5, '1991-12-30', 29),
(35, 'Thapelo Morena', 'Defensor', 21, '1993-08-06', 29),
(36, 'Nkosinathi Sibisi', 'Defensor', 3, '1995-09-22', 29),
(37, 'Terrence Mashego', 'Defensor', 4, '1998-06-23', 29),
(38, 'Teboho Mokoena', 'Meio-campo', 8, '1997-01-24', 29),
(39, 'Sphephelo Sithole', 'Meio-campo', 13, '1999-03-03', 29),
(40, 'Themba Zwane', 'Meio-campo', 11, '1989-08-03', 29),
(41, 'Jayden Adams', 'Meio-campo', 23, '2001-05-05', 29),
(42, 'Thabang Monare', 'Meio-campo', 6, '1989-09-16', 29),
(43, 'Grant Margeman', 'Meio-campo', 15, '1998-06-03', 29),
(44, 'Sibongiseni Mthethwa', 'Meio-campo', 24, '1994-09-20', 29),
(45, 'Percy Tau', 'Atacante', 10, '1994-05-13', 29),
(46, 'Zakhele Lepasa', 'Atacante', 9, '1997-01-03', 29),
(47, 'Evidence Makgopa', 'Atacante', 19, '2000-06-05', 29),
(48, 'Lyle Foster', 'Atacante', 12, '2000-09-03', 29),
(49, 'Mihlali Mayambela', 'Atacante', 18, '1996-08-25', 29),
(50, 'Oswin Appollis', 'Atacante', 7, '2001-08-25', 29),
(51, 'Elias Mokwana', 'Atacante', 25, '1999-09-08', 29),
(52, 'Iqraam Rayners', 'Atacante', 26, '1995-12-19', 29);

-- COREIA DO SUL (ID 16)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(53, 'Kim Seung-gyu', 'Goleiro', 1, '1990-09-30', 16),
(54, 'Jo Hyeon-woo', 'Goleiro', 21, '1991-09-25', 16),
(55, 'Song Bum-keun', 'Goleiro', 12, '1997-10-15', 16),
(56, 'Kim Min-jae', 'Defensor', 4, '1996-11-15', 16),
(57, 'Kim Young-gwon', 'Defensor', 19, '1990-02-27', 16),
(58, 'Jung Seung-hyun', 'Defensor', 15, '1994-04-03', 16),
(59, 'Seol Young-woo', 'Defensor', 22, '1998-12-05', 16),
(60, 'Kim Tae-hwan', 'Defensor', 23, '1989-07-24', 16),
(61, 'Lee Ki-je', 'Defensor', 2, '1991-07-09', 16),
(62, 'Kim Jin-su', 'Defensor', 3, '1992-06-13', 16),
(63, 'Kim Ju-sung', 'Defensor', 24, '2000-12-12', 16),
(64, 'Hwang In-beom', 'Meio-campo', 6, '1996-09-20', 16),
(65, 'Park Yong-woo', 'Meio-campo', 5, '1993-09-10', 16),
(66, 'Lee Kang-in', 'Meio-campo', 18, '2001-02-19', 16),
(67, 'Lee Jae-sung', 'Meio-campo', 10, '1992-08-10', 16),
(68, 'Hong Hyun-seok', 'Meio-campo', 8, '1999-06-16', 16),
(69, 'Jeong Woo-yeong', 'Meio-campo', 17, '1999-09-20', 16),
(70, 'Park Jin-seop', 'Meio-campo', 13, '1995-10-23', 16),
(71, 'Lee Soon-min', 'Meio-campo', 25, '1994-05-22', 16),
(72, 'Son Heung-min', 'Atacante', 7, '1992-07-08', 16),
(73, 'Hwang Hee-chan', 'Atacante', 11, '1996-01-26', 16),
(74, 'Cho Gue-sung', 'Atacante', 9, '1998-01-25', 16),
(75, 'Oh Hyeon-gyu', 'Atacante', 20, '2001-04-12', 16),
(76, 'Moon Seon-min', 'Atacante', 26, '1992-06-09', 16),
(77, 'Yang Hyun-jun', 'Atacante', 14, '2002-05-25', 16),
(78, 'Joo Min-kyu', 'Atacante', 16, '1990-04-13', 16);

-- REPÚBLICA TCHECA (ID 46)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(79, 'Jindřich Staněk', 'Goleiro', 1, '1996-04-27', 46),
(80, 'Matěj Kovář', 'Goleiro', 16, '2000-05-17', 46),
(81, 'Vítězslav Jaroš', 'Goleiro', 23, '2001-07-23', 46),
(82, 'Tomáš Holeš', 'Defensor', 3, '1993-03-31', 46),
(83, 'Robin Hranáč', 'Defensor', 4, '2000-01-29', 46),
(84, 'Ladislav Krejčí', 'Defensor', 18, '1999-04-20', 46),
(85, 'Vladimír Coufal', 'Defensor', 5, '1992-08-22', 46),
(86, 'David Douděra', 'Defensor', 21, '1998-05-31', 46),
(87, 'David Jurásek', 'Defensor', 15, '2000-08-07', 46),
(88, 'Tomáš Vlček', 'Defensor', 24, '2001-02-28', 46),
(89, 'David Zima', 'Defensor', 6, '2000-11-08', 46),
(90, 'Tomáš Souček', 'Meio-campo', 22, '1995-02-27', 46),
(91, 'Antonín Barák', 'Meio-campo', 7, '1994-12-03', 46),
(92, 'Michal Sadílek', 'Meio-campo', 8, '1999-05-31', 46),
(93, 'Lukáš Provod', 'Meio-campo', 14, '1996-10-23', 46),
(94, 'Pavel Šulc', 'Meio-campo', 25, '2000-12-29', 46),
(95, 'Ondřej Lingr', 'Meio-campo', 20, '1998-10-07', 46),
(96, 'Matěj Jurásek', 'Meio-campo', 26, '2003-08-30', 46),
(97, 'Lukáš Červ', 'Meio-campo', 12, '2001-04-10', 46),
(98, 'Patrik Schick', 'Atacante', 10, '1996-01-24', 46),
(99, 'Adam Hložek', 'Atacante', 9, '2002-07-25', 46),
(100, 'Mojmír Chytil', 'Atacante', 13, '1999-04-29', 46),
(101, 'Jan Kuchta', 'Atacante', 11, '1997-01-08', 46),
(102, 'Václav Černý', 'Atacante', 17, '1997-10-17', 46),
(103, 'Tomáš Chorý', 'Atacante', 19, '1995-01-26', 46),
(104, 'Adam Karabec', 'Atacante', 2, '2003-07-02', 46);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO B (104 atletas)
-- -----------------------------------------------------

-- CANADÁ (ID 1)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(105, 'Maxime Crépeau', 'Goleiro', 16, '1994-04-11', 1),
(106, 'Dayne St. Clair', 'Goleiro', 1, '1997-05-09', 1),
(107, 'Tom McGill', 'Goleiro', 18, '2000-03-25', 1),
(108, 'Alphonso Davies', 'Defensor', 19, '2000-11-02', 1),
(109, 'Alistair Johnston', 'Defensor', 2, '1998-10-08', 1),
(110, 'Kamal Miller', 'Defensor', 4, '1997-05-16', 1),
(111, 'Derek Cornelius', 'Defensor', 13, '1997-11-25', 1),
(112, 'Moïse Bombito', 'Defensor', 15, '2000-03-30', 1),
(113, 'Richie Laryea', 'Defensor', 22, '1995-01-07', 1),
(114, 'Luc de Fougerolles', 'Defensor', 3, '2005-10-12', 1),
(115, 'Kyle Hiebert', 'Defensor', 5, '1997-07-30', 1),
(116, 'Stephen Eustáquio', 'Meio-campo', 7, '1996-12-21', 1),
(117, 'Ismaël Koné', 'Meio-campo', 8, '2002-06-16', 1),
(118, 'Jonathan Osorio', 'Meio-campo', 21, '1992-06-12', 1),
(119, 'Mathieu Choinière', 'Meio-campo', 24, '1999-02-07', 1),
(120, 'Samuel Piette', 'Meio-campo', 6, '1994-11-12', 1),
(121, 'Ali Ahmed', 'Meio-campo', 20, '2000-10-10', 1),
(122, 'Jonathan David', 'Atacante', 98, '2000-01-14', 1),
(123, 'Cyle Larin', 'Atacante', 9, '1995-04-17', 1),
(124, 'Tajon Buchanan', 'Atacante', 17, '1999-02-08', 1),
(125, 'Liam Millar', 'Atacante', 23, '1999-09-27', 1),
(126, 'Jacob Shaffelburg', 'Atacante', 14, '1999-11-26', 1),
(127, 'Iké Ugbo', 'Atacante', 12, '1998-09-21', 1),
(128, 'Tani Oluwaseyi', 'Atacante', 25, '2000-05-15', 1),
(129, 'Charles-Andreas Brym', 'Atacante', 11, '1998-08-08', 1),
(130, 'Theo Bair', 'Atacante', 26, '1999-08-27', 1);

-- BÓSNIA E HERZEGOVINA (ID 48)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(131, 'Nikola Vasilj', 'Goleiro', 1, '1995-12-02', 48),
(132, 'Kenan Pirić', 'Goleiro', 12, '1994-07-07', 48),
(133, 'Osman Hadžikić', 'Goleiro', 22, '1996-03-12', 48),
(134, 'Sead Kolašinac', 'Defensor', 5, '1993-06-20', 48),
(135, 'Anel Ahmedhodžić', 'Defensor', 16, '1999-03-26', 48),
(136, 'Dennis Hadžikadunić', 'Defensor', 3, '1998-07-09', 48),
(137, 'Amar Dedić', 'Defensor', 21, '2002-08-18', 48),
(138, 'Jusuf Gazibegović', 'Defensor', 2, '2000-03-11', 48),
(139, 'Renato Gojković', 'Defensor', 4, '1995-09-10', 48),
(140, 'Adrian Leon Barišić', 'Defensor', 6, '2001-07-19', 48),
(141, 'Nihad Mujakić', 'Defensor', 18, '1998-04-15', 48),
(142, 'Miralem Pjanić', 'Meio-campo', 8, '1990-04-02', 48),
(143, 'Rade Krunić', 'Meio-campo', 13, '1993-10-07', 48),
(144, 'Amir Hadžiahmetović', 'Meio-campo', 10, '1997-03-08', 48),
(145, 'Gojko Cimirot', 'Meio-campo', 14, '1992-12-19', 48),
(146, 'Benjamin Tahirović', 'Meio-campo', 15, '2003-03-03', 48),
(147, 'Ivan Bašić', 'Meio-campo', 20, '2002-04-30', 48),
(148, 'Haris Hajradinović', 'Meio-campo', 25, '1994-02-18', 48),
(149, 'Denis Huseinbašić', 'Meio-campo', 26, '2001-07-03', 48),
(150, 'Edin Džeko', 'Atacante', 11, '1986-03-17', 48),
(151, 'Ermedin Demirović', 'Atacante', 23, '1998-03-25', 48),
(152, 'Smail Prevljak', 'Atacante', 9, '1995-05-10', 48),
(153, 'Haris Tabaković', 'Atacante', 17, '1994-06-20', 48),
(154, 'Nemanja Bilbija', 'Atacante', 7, '1990-11-02', 48),
(155, 'Said Hamulić', 'Atacante', 19, '2000-11-12', 48),
(156, 'Dal Varešanović', 'Atacante', 24, '2001-05-23', 48);

-- CATAR (ID 19)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(157, 'Meshaal Barsham', 'Goleiro', 22, '1998-02-14', 19),
(158, 'Saad Al-Sheeb', 'Goleiro', 1, '1990-02-19', 19),
(159, 'Salah Zakaria', 'Goleiro', 21, '1999-04-24', 19),
(160, 'Boualem Khoukhi', 'Defensor', 16, '1990-09-07', 19),
(161, 'Pedro Miguel (Ró-Ró)', 'Defensor', 2, '1990-08-06', 19),
(162, 'Tarek Salman', 'Defensor', 5, '1997-12-05', 19),
(163, 'Lucas Mendes', 'Defensor', 12, '1990-07-03', 19),
(164, 'Almahdi Ali Mukhtar', 'Defensor', 3, '1992-03-02', 19),
(165, 'Homam Ahmed', 'Defensor', 14, '1999-08-25', 19),
(166, 'Bassam Al-Rawi', 'Defensor', 15, '1997-12-16', 19),
(167, 'Sultan Al-Brake', 'Defensor', 18, '1996-04-07', 19),
(168, 'Abdulaziz Hatem', 'Meio-campo', 6, '1990-01-01', 19),
(169, 'Hassan Al-Haydos', 'Meio-campo', 10, '1990-12-11', 19),
(170, 'Ali Assadalla', 'Meio-campo', 8, '1993-01-19', 19),
(171, 'Mohammed Waad', 'Meio-campo', 4, '1999-09-18', 19),
(172, 'Mostafa Meshaal', 'Meio-campo', 20, '2001-03-28', 19),
(173, 'Jassem Gaber', 'Meio-campo', 24, '2002-02-20', 19),
(174, 'Ahmed Fatehi', 'Meio-campo', 23, '1993-01-25', 19),
(175, 'Akram Afif', 'Atacante', 11, '1996-11-18', 19),
(176, 'Almoez Ali', 'Atacante', 19, '1996-08-19', 19),
(177, 'Yusuf Abdurisag', 'Atacante', 9, '1999-08-06', 19),
(178, 'Ahmed Alaaeldin', 'Atacante', 7, '1993-01-31', 19),
(179, 'Ismaeel Mohammad', 'Atacante', 17, '1990-04-05', 19),
(180, 'Khalid Muneer', 'Atacante', 13, '1998-02-24', 19),
(181, 'Tameem Al-Abdullah', 'Atacante', 25, '2002-10-05', 19),
(182, 'Ahmed Al-Rawi', 'Atacante', 26, '2004-05-30', 19);

-- SUÍÇA (ID 42)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(183, 'Yann Sommer', 'Goleiro', 1, '1988-12-17', 42),
(184, 'Gregor Kobel', 'Goleiro', 21, '1997-12-06', 42),
(185, 'Yvon Mvogo', 'Goleiro', 12, '1994-06-06', 42),
(186, 'Manuel Akanji', 'Defensor', 5, '1995-07-19', 42),
(187, 'Fabian Schär', 'Defensor', 22, '1991-12-20', 42),
(188, 'Ricardo Rodríguez', 'Defensor', 13, '1992-08-25', 42),
(189, 'Nico Elvedi', 'Defensor', 4, '1996-09-30', 42),
(190, 'Silvan Widmer', 'Defensor', 3, '1993-03-05', 42),
(191, 'Cédric Zesiger', 'Defensor', 15, '1998-06-24', 42),
(192, 'Leonidas Stergiou', 'Defensor', 2, '2002-03-03', 42),
(193, 'Ulisses Garcia', 'Defensor', 18, '1996-01-11', 42),
(194, 'Granit Xhaka', 'Meio-campo', 10, '1992-09-27', 42),
(195, 'Remo Freuler', 'Meio-campo', 8, '1992-04-15', 42),
(196, 'Denis Zakaria', 'Meio-campo', 6, '1996-11-20', 42),
(197, 'Michel Aebischer', 'Meio-campo', 20, '1997-01-06', 42),
(198, 'Xherdan Shaqiri', 'Meio-campo', 23, '1991-10-10', 42),
(199, 'Vincent Sierro', 'Meio-campo', 16, '1995-10-08', 42),
(200, 'Fabian Rieder', 'Meio-campo', 26, '2002-02-16', 42),
(201, 'Ardon Jashari', 'Meio-campo', 24, '2002-07-30', 42),
(202, 'Breel Embolo', 'Atacante', 7, '1997-02-14', 42),
(203, 'Zeki Amdouni', 'Atacante', 25, '2000-12-04', 42),
(204, 'Dan Ndoye', 'Atacante', 19, '2000-10-25', 42),
(205, 'Ruben Vargas', 'Atacante', 17, '1998-08-05', 42),
(206, 'Noah Okafor', 'Atacante', 9, '2000-05-24', 42),
(207, 'Renato Steffen', 'Atacante', 11, '1991-11-03', 42),
(208, 'Kwadwo Duah', 'Atacante', 14, '1997-02-24', 42);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO C (104 atletas)
-- -----------------------------------------------------

-- BRASIL (ID 8)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(209, 'Alisson Becker', 'Goleiro', 1, '1992-10-02', 8),
(210, 'Ederson Moraes', 'Goleiro', 23, '1993-08-17', 8),
(211, 'Bento Krepski', 'Goleiro', 12, '1999-06-10', 8),
(212, 'Danilo Luiz', 'Defensor', 2, '1991-07-15', 8),
(213, 'Yan Couto', 'Defensor', 13, '2002-06-03', 8),
(214, 'Marquinhos', 'Defensor', 4, '1994-05-14', 8),
(215, 'Gabriel Magalhães', 'Defensor', 14, '1997-12-19', 8),
(216, 'Lucas Beraldo', 'Defensor', 17, '2003-11-24', 8),
(217, 'Gleison Bremer', 'Defensor', 25, '1997-03-18', 8),
(218, 'Wendell', 'Defensor', 6, '1993-07-20', 8),
(219, 'Guilherme Arana', 'Defensor', 16, '1997-04-14', 8),
(220, 'Bruno Guimarães', 'Meio-campo', 5, '1997-11-16', 8),
(221, 'João Gomes', 'Meio-campo', 15, '2001-02-12', 8),
(222, 'Douglas Luiz', 'Meio-campo', 18, '1998-05-09', 8),
(223, 'Lucas Paquetá', 'Meio-campo', 8, '1997-08-27', 8),
(224, 'Andreas Pereira', 'Meio-campo', 19, '1996-01-01', 8),
(225, 'Éderson dos Santos', 'Meio-campo', 24, '1999-07-07', 8),
(226, 'Vinícius Júnior', 'Atacante', 7, '2000-07-12', 8),
(227, 'Rodrygo Goes', 'Atacante', 10, '2001-01-09', 8),
(228, 'Raphinha', 'Atacante', 11, '1996-12-14', 8),
(229, 'Endrick Felipe', 'Atacante', 9, '2006-07-21', 8),
(230, 'Gabriel Martinelli', 'Atacante', 22, '2001-06-18', 8),
(231, 'Sávio (Savinho)', 'Atacante', 20, '2004-04-10', 8),
(232, 'Evanilson', 'Atacante', 21, '1999-10-06', 8),
(233, 'Richarlison', 'Atacante', 26, '1997-05-10', 8),
(234, 'Pedro Guilherme', 'Atacante', 3, '1997-06-20', 8);

-- MARROCOS (ID 23)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(235, 'Yassine Bounou', 'Goleiro', 1, '1991-04-05', 23),
(236, 'Munir Mohamedi', 'Goleiro', 12, '1989-05-10', 23),
(237, 'Mehdi Benabid', 'Goleiro', 22, '1998-01-24', 23),
(238, 'Achraf Hakimi', 'Defensor', 2, '1998-11-04', 23),
(239, 'Noussair Mazraoui', 'Defensor', 3, '1997-11-14', 23),
(240, 'Nayef Aguerd', 'Defensor', 6, '1996-03-30', 23),
(241, 'Romain Saïss', 'Defensor', 13, '1990-03-26', 23),
(242, 'Chadi Riad', 'Defensor', 25, '2003-06-17', 23),
(243, 'Yahia Attiyat Allah', 'Defensor', 14, '1995-03-02', 23),
(244, 'Abdel Abqar', 'Defensor', 5, '1999-03-10', 23),
(245, 'Yunis Abdelhamid', 'Defensor', 26, '1987-09-28', 23),
(246, 'Sofyan Amrabat', 'Meio-campo', 4, '1996-08-21', 23),
(247, 'Azzedine Ounahi', 'Meio-campo', 8, '2000-04-19', 23),
(248, 'Ismael Saibari', 'Meio-campo', 18, '2001-01-28', 23),
(249, 'Bilal El Khannouss', 'Meio-campo', 23, '2004-05-10', 23),
(250, 'Amir Richardson', 'Meio-campo', 24, '2002-01-24', 23),
(251, 'Oussama El Azzouzi', 'Meio-campo', 15, '2001-05-29', 23),
(252, 'Amine Harit', 'Meio-campo', 11, '1997-06-18', 23),
(253, 'Hakim Ziyech', 'Atacante', 7, '1993-03-19', 23),
(254, 'Brahim Díaz', 'Atacante', 10, '1999-08-03', 23),
(255, 'Youssef En-Nesyri', 'Atacante', 19, '1997-06-01', 23),
(256, 'Amine Adli', 'Atacante', 21, '2000-05-10', 23),
(257, 'Ayoub El Kaabi', 'Atacante', 20, '1993-06-25', 23),
(258, 'Soufiane Rahimi', 'Atacante', 9, '1996-06-02', 23),
(259, 'Ilias Akhomach', 'Atacante', 17, '2004-04-16', 23),
(260, 'Abde Ezzalzouli', 'Atacante', 16, '2001-12-17', 23);

-- HAITI (ID 5)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(261, 'Johny Placide', 'Goleiro', 1, '1988-01-29', 5),
(262, 'Garissone Innocent', 'Goleiro', 12, '2000-04-16', 5),
(263, 'Alexandre Pierre', 'Goleiro', 23, '2001-02-25', 5),
(264, 'Ricardo Adé', 'Defensor', 4, '1990-05-21', 5),
(265, 'Carlens Arcus', 'Defensor', 2, '1996-06-28', 5),
(266, 'Garven Metusala', 'Defensor', 6, '1999-12-31', 5),
(267, 'Alex Christian', 'Defensor', 22, '1993-12-05', 5),
(268, 'Duke Lacroix', 'Defensor', 3, '1993-10-14', 5),
(269, 'Francois Dulysse', 'Defensor', 5, '1999-04-13', 5),
(270, 'Martin Experience', 'Defensor', 15, '1999-03-09', 5),
(271, 'Jean-Kevin Duverne', 'Defensor', 19, '1997-07-12', 5),
(272, 'Bryan Alceus', 'Meio-campo', 21, '1996-02-01', 5),
(273, 'Carl-Fredrik Sainte', 'Meio-campo', 17, '2002-08-09', 5),
(274, 'Leverton Pierre', 'Meio-campo', 8, '1998-03-09', 5),
(275, 'Danley Jean Jacques', 'Meio-campo', 18, '2000-05-20', 5),
(276, 'Derrick Etienne Jr.', 'Meio-campo', 10, '1996-11-25', 5),
(277, 'Fabien Simon', 'Meio-campo', 24, '2001-11-15', 5),
(278, 'Steeven Saba', 'Meio-campo', 16, '1993-02-24', 5),
(279, 'Frantzdy Pierrot', 'Atacante', 20, '1995-03-29', 5),
(280, 'Duckens Nazon', 'Atacante', 9, '1994-04-07', 5),
(281, 'Carnejy Antoine', 'Atacante', 7, '1991-07-27', 5),
(282, 'Mondy Prunier', 'Atacante', 11, '1999-12-22', 5),
(283, 'Louicius Don Deedson', 'Atacante', 13, '2001-02-11', 5),
(284, 'Fafa Picault', 'Atacante', 14, '1991-02-23', 5),
(285, 'Dany Jean', 'Atacante', 25, '2002-11-28', 5),
(286, 'Jonel Désiré', 'Atacante', 26, '1997-02-12', 5);

-- ESCÓCIA (ID 43)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(287, 'Angus Gunn', 'Goleiro', 1, '1996-01-22', 43),
(288, 'Zander Clark', 'Goleiro', 21, '1992-06-26', 43),
(289, 'Liam Kelly', 'Goleiro', 12, '1996-01-23', 43),
(290, 'Andrew Robertson', 'Defensor', 3, '1994-03-11', 43),
(291, 'Kieran Tierney', 'Defensor', 6, '1997-06-05', 43),
(292, 'Jack Hendry', 'Defensor', 13, '1995-05-07', 43),
(293, 'Ryan Porteous', 'Defensor', 15, '1999-03-25', 43),
(294, 'Scott McKenna', 'Defensor', 26, '1996-11-12', 43),
(295, 'Grant Hanley', 'Defensor', 5, '1991-11-20', 43),
(296, 'Greg Taylor', 'Defensor', 2, '1997-11-05', 43),
(297, 'Anthony Ralston', 'Defensor', 22, '1998-11-16', 43),
(298, 'Liam Cooper', 'Defensor', 16, '1991-08-30', 43),
(299, 'John McGinn', 'Meio-campo', 7, '1994-10-18', 43),
(300, 'Callum McGregor', 'Meio-campo', 8, '1993-06-14', 43),
(301, 'Scott McTominay', 'Meio-campo', 4, '1996-12-08', 43),
(302, 'Billy Gilmour', 'Meio-campo', 14, '2001-06-11', 43),
(303, 'Stuart Armstrong', 'Meio-campo', 17, '1992-03-30', 43),
(304, 'Ryan Christie', 'Meio-campo', 11, '1995-02-22', 43),
(305, 'Kenny McLean', 'Meio-campo', 23, '1992-01-08', 43),
(306, 'Ryan Jack', 'Meio-campo', 20, '1992-02-27', 43),
(307, 'Che Adams', 'Atacante', 10, '1996-07-13', 43),
(308, 'Lawrence Shankland', 'Atacante', 9, '1995-08-10', 43),
(309, 'James Forrest', 'Atacante', 25, '1991-07-07', 43),
(310, 'Tommy Conway', 'Atacante', 19, '2002-08-06', 43),
(311, 'Lewis Morgan', 'Atacante', 18, '1996-09-30', 43),
(312, 'Ben Doak', 'Atacante', 24, '2005-11-11', 43);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO D (104 atletas)
-- -----------------------------------------------------

-- ESTADOS UNIDOS (ID 3)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(313, 'Matt Turner', 'Goleiro', 1, '1994-06-24', 3),
(314, 'Ethan Horvath', 'Goleiro', 18, '1995-06-09', 3),
(315, 'Sean Johnson', 'Goleiro', 25, '1989-05-31', 3),
(316, 'Sergiño Dest', 'Defensor', 2, '2000-11-03', 3),
(317, 'Chris Richards', 'Defensor', 3, '2000-03-28', 3),
(318, 'Antonee Robinson', 'Defensor', 5, '1997-08-08', 3),
(319, 'Tim Ream', 'Defensor', 13, '1987-10-05', 3),
(320, 'Cameron Carter-Vickers', 'Defensor', 75, '1997-12-31', 3),
(321, 'Joe Scally', 'Defensor', 22, '2002-12-31', 3),
(322, 'Miles Robinson', 'Defensor', 12, '1997-03-14', 3),
(323, 'Kristoffer Lund', 'Defensor', 23, '2002-05-14', 3),
(324, 'Mark McKenzie', 'Defensor', 16, '1999-02-25', 3),
(325, 'Tyler Adams', 'Meio-campo', 4, '1999-02-14', 3),
(326, 'Yunus Musah', 'Meio-campo', 6, '2002-11-29', 3),
(327, 'Weston McKennie', 'Meio-campo', 8, '1998-08-28', 3),
(328, 'Gio Reyna', 'Meio-campo', 7, '2002-11-13', 3),
(329, 'Luca de la Torre', 'Meio-campo', 14, '1998-05-23', 3),
(330, 'Johnny Cardoso', 'Meio-campo', 15, '2001-09-20', 3),
(331, 'Malik Tillman', 'Meio-campo', 17, '2002-05-28', 3),
(332, 'Timothy Tillman', 'Meio-campo', 24, '1999-01-04', 3),
(333, 'Christian Pulisic', 'Atacante', 10, '1998-09-18', 3),
(334, 'Ricardo Pepi', 'Atacante', 9, '2003-01-09', 3),
(335, 'Folarin Balogun', 'Atacante', 20, '2001-07-03', 3),
(336, 'Timothy Weah', 'Atacante', 21, '2000-02-22', 3),
(337, 'Brenden Aaronson', 'Atacante', 11, '2000-10-22', 3),
(338, 'Haji Wright', 'Atacante', 19, '1998-03-27', 3),
(339, 'Josh Sargent', 'Atacante', 26, '2000-02-20', 3);

-- PARAGUAI (ID 11)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(340, 'Carlos Coronel', 'Goleiro', 22, '1996-12-29', 11),
(341, 'Alfredo Aguilar', 'Goleiro', 12, '1988-07-18', 11),
(342, 'Rodrigo Morínigo', 'Goleiro', 1, '1998-10-07', 11),
(343, 'Gustavo Gómez', 'Defensor', 15, '1993-05-06', 11),
(344, 'Júnior Alonso', 'Defensor', 6, '1993-02-09', 11),
(345, 'Fabián Balbuena', 'Defensor', 5, '1991-08-23', 11),
(346, 'Omar Alderete', 'Defensor', 3, '1997-12-26', 11),
(347, 'Matías Espinoza', 'Defensor', 4, '1997-09-19', 11),
(348, 'Iván Ramírez', 'Defensor', 2, '1994-12-08', 11),
(349, 'Néstor Giménez', 'Defensor', 13, '1997-07-24', 11),
(350, 'Gustavo Velázquez', 'Defensor', 25, '1991-04-17', 11),
(351, 'Mathías Villasanti', 'Meio-campo', 23, '1997-01-24', 11),
(352, 'Andrés Cubas', 'Meio-campo', 14, '1996-05-22', 11),
(353, 'Richard Sánchez', 'Meio-campo', 20, '1996-03-29', 11),
(354, 'Diego Gómez', 'Meio-campo', 8, '2003-03-27', 11),
(355, 'Damián Bobadilla', 'Meio-campo', 26, '2001-07-11', 11),
(356, 'Hernesto Caballero', 'Meio-campo', 16, '1991-04-09', 11),
(357, 'Matías Rojas', 'Meio-campo', 10, '1995-11-03', 11),
(358, 'Kaku Romero Gamarra', 'Meio-campo', 17, '1995-01-11', 11),
(359, 'Miguel Almirón', 'Atacante', 21, '1994-02-10', 11),
(360, 'Julio Enciso', 'Atacante', 19, '2004-01-23', 11),
(361, 'Adam Bareiro', 'Atacante', 9, '1996-07-26', 11),
(362, 'Ramón Sosa', 'Atacante', 24, '1999-08-31', 11),
(363, 'Ángel Romero', 'Atacante', 11, '1992-07-04', 11),
(364, 'Derlis González', 'Atacante', 7, '1994-03-20', 11),
(365, 'Alex Arce', 'Atacante', 18, '1995-06-16', 11);

-- AUSTRÁLIA (ID 18)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(366, 'Mathew Ryan', 'Goleiro', 1, '1992-04-08', 18),
(367, 'Joe Gauci', 'Goleiro', 12, '2000-07-04', 18),
(368, 'Paul Izzo', 'Goleiro', 18, '1995-01-06', 18),
(369, 'Harry Souttar', 'Defensor', 19, '1998-10-22', 18),
(370, 'Kye Rowles', 'Defensor', 4, '1998-06-24', 18),
(371, 'Aziz Behich', 'Defensor', 16, '1990-12-16', 18),
(372, 'Gethin Jones', 'Defensor', 2, '1995-10-13', 18),
(373, 'Cameron Burgess', 'Defensor', 21, '1995-10-21', 18),
(374, 'Jordan Bos', 'Defensor', 5, '2002-10-29', 18),
(375, 'Alessandro Circati', 'Defensor', 13, '2003-10-10', 18),
(376, 'Thomas Deng', 'Defensor', 3, '1997-03-20', 18),
(377, 'Jackson Irvine', 'Meio-campo', 22, '1993-03-07', 18),
(378, 'Connor Metcalfe', 'Meio-campo', 8, '1999-11-05', 18),
(379, 'Keanu Baccus', 'Meio-campo', 17, '1998-06-07', 18),
(380, 'Riley McGree', 'Meio-campo', 14, '1998-11-02', 18),
(381, 'Aiden O\'Neill', 'Meio-campo', 10, '1998-07-04', 18),
(382, 'Massimo Luongo', 'Meio-campo', 20, '1992-09-25', 18),
(383, 'Denis Genreau', 'Meio-campo', 26, '1999-05-21', 18),
(384, 'Cameron Devlin', 'Meio-campo', 24, '1998-06-07', 18),
(385, 'Ajdin Hrustic', 'Meio-campo', 11, '1996-07-05', 18),
(386, 'Craig Goodwin', 'Atacante', 23, '1991-12-16', 18),
(387, 'Mitchell Duke', 'Atacante', 15, '1991-01-18', 18),
(388, 'Martin Boyle', 'Atacante', 6, '1993-04-25', 18),
(389, 'Kusini Yengi', 'Atacante', 9, '1999-01-15', 18),
(390, 'Sam Silvera', 'Atacante', 7, '2000-10-25', 18),
(391, 'Bruno Fornaroli', 'Atacante', 25, '1987-09-07', 18);

-- TURQUIA (ID 47)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(392, 'Mert Günok', 'Goleiro', 1, '1989-03-01', 47),
(393, 'Uğurcan Çakır', 'Goleiro', 23, '1996-04-05', 47),
(394, 'Altay Bayındır', 'Goleiro', 12, '1998-04-14', 47),
(395, 'Merih Demiral', 'Defensor', 3, '1998-03-05', 47),
(396, 'Zeki Çelik', 'Defensor', 2, '1997-02-17', 47),
(397, 'Mert Müldür', 'Defensor', 18, '1999-04-03', 47),
(398, 'Ferdi Kadıoğlu', 'Defensor', 20, '1999-10-07', 47),
(399, 'Abdülkerim Bardakcı', 'Defensor', 14, '1994-09-07', 47),
(400, 'Samet Akaydin', 'Defensor', 4, '1994-03-13', 47),
(401, 'Ahmetcan Kaplan', 'Defensor', 13, '2003-01-16', 47),
(402, 'Ozan Kabak', 'Defensor', 15, '2000-03-25', 47),
(403, 'Hakan Çalhanoğlu', 'Meio-campo', 10, '1994-02-08', 47),
(404, 'Orkun Kökçü', 'Meio-campo', 6, '2000-12-29', 47),
(405, 'Salih Özcan', 'Meio-campo', 16, '1998-01-11', 47),
(406, 'İsmail Yüksek', 'Meio-campo', 11, '1999-01-26', 47),
(407, 'Kaan Ayhan', 'Meio-campo', 22, '1994-11-10', 47),
(408, 'Okay Yokuşlu', 'Meio-campo', 5, '1994-03-09', 47),
(409, 'Arda Güler', 'Meio-campo', 8, '2005-02-25', 47),
(410, 'İrfan Can Kahveci', 'Meio-campo', 17, '1995-07-15', 47),
(411, 'Kerem Aktürkoğlu', 'Atacante', 7, '1998-10-21', 47),
(412, 'Barış Alper Yılmaz', 'Atacante', 21, '2000-05-23', 47),
(413, 'Kenan Yıldız', 'Atacante', 19, '2005-05-04', 47),
(414, 'Cenk Tosun', 'Atacante', 9, '1991-06-07', 47),
(415, 'Semih Kılıçsoy', 'Atacante', 24, '2005-08-15', 47),
(416, 'Yunus Akgün', 'Atacante', 25, '2000-07-07', 47);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO E (104 atletas)
-- -----------------------------------------------------

-- ALEMANHA (ID 38)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(417, 'Manuel Neuer', 'Goleiro', 1, '1986-03-27', 38),
(418, 'Marc-André ter Stegen', 'Goleiro', 22, '1992-04-30', 38),
(419, 'Oliver Baumann', 'Goleiro', 12, '1990-06-02', 38),
(420, 'Antonio Rüdiger', 'Defensor', 2, '1993-03-03', 38),
(421, 'Jonathan Tah', 'Defensor', 4, '1996-02-11', 38),
(422, 'Nico Schlotterbeck', 'Defensor', 15, '1999-12-01', 38),
(423, 'Waldemar Anton', 'Defensor', 16, '1996-07-20', 38),
(424, 'Robin Koch', 'Defensor', 24, '1996-07-17', 38),
(425, 'Maximilian Mittelstädt', 'Defensor', 18, '1997-03-18', 38),
(426, 'David Raum', 'Defensor', 3, '1998-04-22', 38),
(427, 'Benjamin Henrichs', 'Defensor', 20, '1997-02-23', 38),
(428, 'Joshua Kimmich', 'Meio-campo', 6, '1995-02-08', 38),
(429, 'Toni Kroos', 'Meio-campo', 8, '1990-01-04', 38),
(430, 'İlkay Gündoğan', 'Meio-campo', 21, '1990-10-24', 38),
(431, 'Robert Andrich', 'Meio-campo', 23, '1994-09-22', 38),
(432, 'Pascal Groß', 'Meio-campo', 5, '1991-06-15', 38),
(433, 'Emre Can', 'Meio-campo', 25, '1994-01-12', 38),
(434, 'Jamal Musiala', 'Meio-campo', 10, '2003-02-26', 38),
(435, 'Florian Wirtz', 'Meio-campo', 17, '2003-05-03', 38),
(436, 'Chris Führich', 'Meio-campo', 11, '1998-01-09', 38),
(437, 'Leroy Sané', 'Atacante', 19, '1996-01-11', 38),
(438, 'Kai Havertz', 'Atacante', 7, '1999-06-11', 38),
(439, 'Niclas Füllkrug', 'Atacante', 9, '1993-02-09', 38),
(440, 'Thomas Müller', 'Atacante', 13, '1989-09-13', 38),
(441, 'Maximilian Beier', 'Atacante', 14, '2002-10-17', 38),
(442, 'Deniz Undav', 'Atacante', 26, '1996-07-19', 38);

-- CURAÇAO (ID 6)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(443, 'Eloy Room', 'Goleiro', 1, '1989-02-06', 6),
(444, 'Tyrick Bodak', 'Goleiro', 22, '2002-05-15', 6),
(445, 'Trevor Doornbusch', 'Goleiro', 23, '1999-07-06', 6),
(446, 'Cuco Martina', 'Defensor', 2, '1989-09-25', 6),
(447, 'Jurien Gaari', 'Defensor', 3, '1993-12-23', 6),
(448, 'Roshon van Eijma', 'Defensor', 4, '1998-06-09', 6),
(449, 'Sherel Floranus', 'Defensor', 5, '1998-08-23', 6),
(450, 'Shanon Carmelia', 'Defensor', 12, '1989-03-20', 6),
(451, 'Justin Ogenia', 'Defensor', 13, '1999-02-05', 6),
(452, 'Nathangelo Markelo', 'Defensor', 15, '1999-01-07', 6),
(453, 'Bradley Martis', 'Defensor', 24, '1998-07-13', 6),
(454, 'Kevin Felida', 'Meio-campo', 6, '1999-11-11', 6),
(455, 'Godfried Roemeratoe', 'Meio-campo', 8, '1999-08-19', 6),
(456, 'Juninho Bacuna', 'Meio-campo', 10, '1997-08-07', 6),
(457, 'Leandro Bacuna', 'Meio-campo', 18, '1991-08-21', 6),
(458, 'Vurnon Anita', 'Meio-campo', 20, '1989-04-04', 6),
(459, 'Roly Bonevacia', 'Meio-campo', 21, '1991-10-08', 6),
(460, 'Nathan Markelo', 'Meio-campo', 25, '1999-01-07', 6),
(461, 'Jearl Margaritha', 'Atacante', 7, '2000-04-10', 6),
(462, 'Rangelo Janga', 'Atacante', 9, '1992-04-16', 6),
(463, 'Brandley Kuwas', 'Atacante', 11, '1992-09-19', 6),
(464, 'Kenji Gorré', 'Atacante', 14, '1994-09-29', 6),
(465, 'Elson Hooi', 'Atacante', 16, '1991-10-01', 6),
(466, 'Richairo Zivkovic', 'Atacante', 17, '1996-09-05', 6),
(467, 'Jürgen Locadia', 'Atacante', 19, '1993-11-07', 6),
(468, 'Ar\'jany Martha', 'Atacante', 26, '2003-09-04', 6);

-- COSTA DO MARFIM (ID 31)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(469, 'Yahia Fofana', 'Goleiro', 1, '2000-08-21', 31),
(470, 'Charles Folly', 'Goleiro', 16, '1990-12-29', 31),
(471, 'Badra Ali Sangaré', 'Goleiro', 23, '1986-05-30', 31),
(472, 'Ousmane Diomande', 'Defensor', 2, '2003-12-04', 31),
(473, 'Ghislain Konan', 'Defensor', 3, '1995-12-27', 31),
(474, 'Wilfried Singo', 'Defensor', 5, '2000-12-25', 31),
(475, 'Odilon Kossounou', 'Defensor', 7, '2001-01-04', 31),
(476, 'Willy Boly', 'Defensor', 12, '1991-02-03', 31),
(477, 'Evan Ndicka', 'Defensor', 15, '1999-08-20', 31),
(478, 'Serge Aurier', 'Defensor', 17, '1992-12-24', 31),
(479, 'Emmanuel Agbadou', 'Defensor', 24, '1997-06-17', 31),
(480, 'Ismaël Diallo', 'Defensor', 25, '1997-01-29', 31),
(481, 'Jean Michaël Seri', 'Meio-campo', 4, '1991-07-19', 31),
(482, 'Seko Fofana', 'Meio-campo', 6, '1995-05-07', 31),
(483, 'Franck Kessié', 'Meio-campo', 8, '1996-12-19', 31),
(484, 'Ibrahim Sangaré', 'Meio-campo', 18, '1997-12-02', 31),
(485, 'Amani Lazare', 'Meio-campo', 26, '1998-03-03', 31),
(486, 'Jonathan Bamba', 'Meio-campo', 9, '1996-03-26', 31),
(487, 'Max Gradel', 'Atacante', 10, '1987-11-30', 31),
(488, 'Jean-Philippe Krasso', 'Atacante', 11, '1997-07-17', 31),
(489, 'Jérémie Boga', 'Atacante', 13, '1997-01-03', 31),
(490, 'Oumar Diakité', 'Atacante', 14, '2003-12-20', 31),
(491, 'Nicolas Pépé', 'Atacante', 19, '1995-05-29', 31),
(492, 'Christian Kouamé', 'Atacante', 20, '1997-12-06', 31),
(493, 'Simon Adingra', 'Atacante', 21, '2002-01-01', 31),
(494, 'Sébastien Haller', 'Atacante', 22, '1994-06-22', 31);

-- EQUADOR (ID 10)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(495, 'Hernán Galíndez', 'Goleiro', 1, '1987-03-30', 10),
(496, 'Alexander Domínguez', 'Goleiro', 22, '1987-06-05', 10),
(497, 'Moisés Ramírez', 'Goleiro', 12, '2000-09-09', 10),
(498, 'Félix Torres', 'Defensor', 2, '1997-01-11', 10),
(499, 'Piero Hincapié', 'Defensor', 3, '2002-01-09', 10),
(500, 'Joel Ordóñez', 'Defensor', 4, '2004-04-21', 10),
(501, 'Willian Pacho', 'Defensor', 6, '2001-10-16', 10),
(502, 'Layan Loor', 'Defensor', 7, '2001-05-23', 10),
(503, 'Angelo Preciado', 'Defensor', 17, '1998-02-18', 10),
(504, 'José Hurtado', 'Defensor', 24, '2001-12-23', 10),
(505, 'Jackson Porozo', 'Defensor', 25, '2000-08-04', 10),
(506, 'Andrés Micolta', 'Defensor', 26, '1999-07-06', 10),
(507, 'José Cifuentes', 'Meio-campo', 5, '1999-03-12', 10),
(508, 'Carlos Gruezo', 'Meio-campo', 8, '1995-04-19', 10),
(509, 'Kendry Páez', 'Meio-campo', 10, '2007-05-04', 10),
(510, 'Joao Ortiz', 'Meio-campo', 18, '1996-05-01', 10),
(511, 'Alan Franco', 'Meio-campo', 21, '1998-08-21', 10),
(512, 'Moisés Caicedo', 'Meio-campo', 23, '2001-11-02', 10),
(513, 'John Yeboah', 'Meio-campo', 9, '2000-06-23', 10),
(514, 'Ángel Mena', 'Meio-campo', 15, '1988-01-21', 10),
(515, 'Jeremy Sarmiento', 'Meio-campo', 16, '2002-06-16', 10),
(516, 'Kevin Rodríguez', 'Atacante', 11, '2000-03-04', 10),
(517, 'Enner Valencia', 'Atacante', 13, '1989-11-04', 10),
(518, 'Alan Minda', 'Atacante', 14, '2003-05-14', 10),
(519, 'Jordy Caicedo', 'Atacante', 19, '1997-11-18', 10),
(520, 'Janner Corozo', 'Atacante', 20, '1995-09-08', 10);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO F (104 atletas)
-- -----------------------------------------------------

-- HOLANDA (ID 39)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(521, 'Bart Verbruggen', 'Goleiro', 1, '2002-08-18', 39),
(522, 'Mark Flekken', 'Goleiro', 13, '1993-06-13', 39),
(523, 'Justin Bijlow', 'Goleiro', 23, '1998-01-22', 39),
(524, 'Virgil van Dijk', 'Defensor', 4, '1991-07-08', 39),
(525, 'Nathan Aké', 'Defensor', 5, '1995-02-18', 39),
(526, 'Matthijs de Ligt', 'Defensor', 3, '1999-08-12', 39),
(527, 'Stefan de Vrij', 'Defensor', 6, '1992-02-05', 39),
(528, 'Denzel Dumfries', 'Defensor', 22, '1996-04-18', 39),
(529, 'Jeremie Frimpong', 'Defensor', 12, '2000-12-10', 39),
(530, 'Lutsharel Geertruida', 'Defensor', 2, '2000-07-18', 39),
(531, 'Micky van de Ven', 'Defensor', 15, '2001-04-19', 39),
(532, 'Daley Blind', 'Defensor', 17, '1990-03-09', 39),
(533, 'Frenkie de Jong', 'Meio-campo', 21, '1997-05-12', 39),
(534, 'Teun Koopmeiners', 'Meio-campo', 20, '1998-02-28', 39),
(535, 'Tijjani Reijnders', 'Meio-campo', 14, '1998-07-29', 39),
(536, 'Joey Veerman', 'Meio-campo', 16, '1998-11-19', 39),
(537, 'Jerdy Schouten', 'Meio-campo', 24, '1997-01-12', 39),
(538, 'Georginio Wijnaldum', 'Meio-campo', 8, '1990-11-11', 39),
(539, 'Ryan Gravenberch', 'Meio-campo', 26, '2002-05-16', 39),
(540, 'Ian Maatsen', 'Meio-campo', 25, '2002-03-10', 39),
(541, 'Memphis Depay', 'Atacante', 10, '1994-02-13', 39),
(542, 'Cody Gakpo', 'Atacante', 11, '1999-05-07', 39),
(543, 'Xavi Simons', 'Atacante', 7, '2003-04-21', 39),
(544, 'Donyell Malen', 'Atacante', 18, '1999-01-19', 39),
(545, 'Wout Weghorst', 'Atacante', 9, '1992-08-07', 39),
(546, 'Brian Brobbey', 'Atacante', 19, '2002-02-01', 39);

-- JAPÃO (ID 13)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(547, 'Zion Suzuki', 'Goleiro', 23, '2002-08-21', 13),
(548, 'Daiya Maekawa', 'Goleiro', 1, '1994-09-08', 13),
(549, 'Keisuke Osako', 'Goleiro', 12, '1999-07-28', 13),
(550, 'Takehiro Tomiyasu', 'Defensor', 16, '1998-11-05', 13),
(551, 'Ko Itakura', 'Defensor', 4, '1997-01-27', 13),
(552, 'Yukinari Sugawara', 'Defensor', 2, '2000-06-28', 13),
(553, 'Hiroki Ito', 'Defensor', 21, '1999-05-12', 13),
(554, 'Koki Machida', 'Defensor', 15, '1997-08-25', 13),
(555, 'Seiya Maikuma', 'Defensor', 19, '1997-10-16', 13),
(556, 'Yuta Nakayama', 'Defensor', 3, '1997-02-16', 13),
(557, 'Tsuyoshi Watanabe', 'Defensor', 24, '1997-02-05', 13),
(558, 'Wataru Endo', 'Meio-campo', 6, '1993-02-09', 13),
(559, 'Hidemasa Morita', 'Meio-campo', 5, '1995-05-10', 13),
(560, 'Takumi Minamino', 'Meio-campo', 8, '1995-01-16', 13),
(561, 'Daichi Kamada', 'Meio-campo', 11, '1996-08-05', 13),
(562, 'Reo Hatate', 'Meio-campo', 91, '1997-11-21', 13),
(563, 'Takefusa Kubo', 'Meio-campo', 20, '2001-06-04', 13),
(564, 'Ritsu Doan', 'Meio-campo', 10, '1998-06-16', 13),
(565, 'Keito Nakamura', 'Meio-campo', 13, '2000-07-28', 13),
(566, 'Kaoru Mitoma', 'Atacante', 9, '1997-05-20', 13),
(567, 'Ayase Ueda', 'Atacante', 88, '1998-08-28', 13),
(568, 'Takuma Asano', 'Atacante', 18, '1994-11-10', 13),
(569, 'Daizen Maeda', 'Atacante', 25, '1997-10-20', 13),
(570, 'Mao Hosoya', 'Atacante', 87, '2001-09-07', 13),
(571, 'Koki Ogawa', 'Atacante', 22, '1997-08-08', 13),
(572, 'Junya Ito', 'Atacante', 14, '1993-03-09', 13);

-- SUÉCIA (ID 41)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(573, 'Robin Olsen', 'Goleiro', 1, '1990-01-08', 41),
(574, 'Viktor Johansson', 'Goleiro', 12, '1998-09-14', 41),
(575, 'Kristoffer Nordfeldt', 'Goleiro', 23, '1989-06-23', 41),
(576, 'Victor Lindelöf', 'Defensor', 3, '1994-07-17', 41),
(577, 'Isak Hien', 'Defensor', 4, '1999-01-13', 41),
(578, 'Emil Krafth', 'Defensor', 2, '1994-08-02', 41),
(579, 'Ludwig Augustinsson', 'Defensor', 6, '1994-04-21', 41),
(580, 'Emil Holm', 'Defensor', 5, '2000-05-13', 41),
(581, 'Carl Starfelt', 'Defensor', 15, '1995-06-01', 41),
(582, 'Linus Wahlqvist', 'Defensor', 13, '1996-11-11', 41),
(583, 'Gabriel Gudmundsson', 'Defensor', 14, '1999-04-29', 41),
(584, 'Dejan Kulusevski', 'Meio-campo', 21, '2000-04-25', 41),
(585, 'Jens Cajuste', 'Meio-campo', 8, '1999-08-10', 41),
(586, 'Mattias Svanberg', 'Meio-campo', 19, '1999-01-05', 41),
(587, 'Emil Forsberg', 'Meio-campo', 10, '1991-10-23', 41),
(588, 'Kristoffer Olsson', 'Meio-campo', 20, '1995-06-30', 41),
(589, 'Jesper Karlström', 'Meio-campo', 16, '1995-06-21', 41),
(590, 'Anton Salétros', 'Meio-campo', 18, '1996-04-12', 41),
(591, 'Yasin Ayari', 'Meio-campo', 26, '2003-10-06', 41),
(592, 'Hugo Larsson', 'Meio-campo', 22, '2004-06-27', 41),
(593, 'Alexander Isak', 'Atacante', 9, '1999-09-21', 41),
(594, 'Viktor Gyökeres', 'Atacante', 17, '1998-06-04', 41),
(595, 'Anthony Elanga', 'Atacante', 11, '2002-04-27', 41),
(596, 'Gustaf Nilsson', 'Atacante', 24, '1997-05-23', 41),
(597, 'Sebastian Andersson', 'Atacante', 25, '1991-07-15', 41),
(598, 'Ken Sema', 'Atacante', 7, '1993-09-30', 41);

-- TUNÍSIA (ID 24)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(599, 'Aymen Dahmen', 'Goleiro', 16, '1997-01-28', 24),
(600, 'Bechir Ben Said', 'Goleiro', 22, '1992-11-29', 24),
(601, 'Mouez Hassen', 'Goleiro', 1, '1995-03-05', 24),
(602, 'Montassar Talbi', 'Defensor', 3, '1998-05-26', 24),
(603, 'Yassine Meriah', 'Defensor', 4, '1993-07-02', 24),
(604, 'Ali Maâloul', 'Defensor', 12, '1990-01-01', 24),
(605, 'Wajdi Kechrida', 'Defensor', 21, '1995-11-05', 24),
(606, 'Ali Abdi', 'Defensor', 2, '1993-12-20', 24),
(607, 'Dylan Bronn', 'Defensor', 6, '1995-06-19', 24),
(608, 'Yan Valery', 'Defensor', 20, '1999-02-22', 24),
(609, 'Oussama Haddadi', 'Defensor', 5, '1992-01-28', 24),
(610, 'Ellyes Skhiri', 'Meio-campo', 17, '1995-05-10', 24),
(611, 'Aïssa Laïdouni', 'Meio-campo', 14, '1996-12-13', 24),
(612, 'Mohamed Ali Ben Romdhane', 'Meio-campo', 15, '1999-09-06', 24),
(613, 'Hannibal Mejbri', 'Meio-campo', 8, '2003-01-21', 24),
(614, 'Hamza Rafia', 'Meio-campo', 10, '1999-04-22', 24),
(615, 'Anis Ben Slimane', 'Meio-campo', 25, '2001-03-16', 24),
(616, 'Ferjani Sassi', 'Meio-campo', 13, '1992-03-18', 24),
(617, 'Ghailene Chaalali', 'Meio-campo', 18, '1994-02-28', 24),
(618, 'Youssef Msakni', 'Atacante', 7, '1990-10-28', 24),
(619, 'Elias Achouri', 'Atacante', 11, '1999-02-10', 24),
(620, 'Seifeddine Jaziri', 'Atacante', 19, '1993-02-11', 24),
(621, 'Naïm Sliti', 'Atacante', 23, '1992-07-27', 24),
(622, 'Haythem Jouini', 'Atacante', 9, '1993-05-07', 24),
(623, 'Sayfallah Ltaief', 'Atacante', 26, '2000-04-22', 24),
(624, 'Firas Ben Larbi', 'Atacante', 24, '1996-05-27', 24);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO G (104 atletas)
-- -----------------------------------------------------

-- BÉLGICA (ID 40)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(625, 'Koen Casteels', 'Goleiro', 1, '1992-06-25', 40),
(626, 'Matz Sels', 'Goleiro', 12, '1992-02-26', 40),
(627, 'Thomas Kaminski', 'Goleiro', 13, '1992-10-23', 40),
(628, 'Jan Vertonghen', 'Defensor', 5, '1987-04-24', 40),
(629, 'Wout Faes', 'Defensor', 4, '1998-04-03', 40),
(630, 'Arthur Theate', 'Defensor', 3, '2000-05-25', 40),
(631, 'Timothy Castagne', 'Defensor', 21, '1995-12-05', 40),
(632, 'Thomas Meunier', 'Defensor', 15, '1991-09-12', 40),
(633, 'Zeno Debast', 'Defensor', 2, '2003-10-24', 40),
(634, 'Maxim De Cuyper', 'Defensor', 25, '2000-12-22', 40),
(635, 'Sebastiaan Bornauw', 'Defensor', 22, '1999-03-22', 40),
(636, 'Kevin De Bruyne', 'Meio-campo', 7, '1991-06-28', 40),
(637, 'Amadou Onana', 'Meio-campo', 24, '2001-08-16', 40),
(638, 'Youri Tielemans', 'Meio-campo', 8, '1997-05-07', 40),
(639, 'Orel Mangala', 'Meio-campo', 18, '1998-03-18', 40),
(640, 'Aster Vranckx', 'Meio-campo', 16, '2002-10-04', 40),
(641, 'Arthur Vermeeren', 'Meio-campo', 23, '2005-02-07', 40),
(642, 'Alexis Saelemaekers', 'Meio-campo', 26, '1999-06-27', 40),
(643, 'Charles De Ketelaere', 'Meio-campo', 14, '2001-03-10', 40),
(644, 'Romelu Lukaku', 'Atacante', 10, '1993-05-13', 40),
(645, 'Jérémy Doku', 'Atacante', 20, '2002-05-27', 40),
(646, 'Leandro Trossard', 'Atacante', 9, '1994-12-04', 40),
(647, 'Loïs Openda', 'Atacante', 17, '2000-02-16', 40),
(648, 'Johan Bakayoko', 'Atacante', 19, '2003-04-20', 40),
(649, 'Dodi Lukebakio', 'Atacante', 11, '1997-09-24', 40),
(650, 'Yannick Carrasco', 'Atacante', 6, '1993-09-04', 40);

-- EGITO (ID 25)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(651, 'Mohamed El Shenawy', 'Goleiro', 1, '1988-12-18', 25),
(652, 'Mohamed Abou Gabal', 'Goleiro', 16, '1989-01-29', 25),
(653, 'Mohamed Sobhy', 'Goleiro', 23, '1999-07-15', 25),
(654, 'Ahmed Hegazi', 'Defensor', 6, '1991-01-25', 25),
(655, 'Mohamed Abdelmonem', 'Defensor', 24, '1999-02-01', 25),
(656, 'Mohamed Hany', 'Defensor', 3, '1996-01-25', 25),
(657, 'Ahmed Fotouh', 'Defensor', 13, '1998-03-22', 25),
(658, 'Ali Gabr', 'Defensor', 2, '1989-01-01', 25),
(659, 'Omar Kamal', 'Defensor', 4, '1993-12-29', 25),
(660, 'Ramy Rabia', 'Defensor', 15, '1993-05-20', 25),
(661, 'Mohamed Hamdi', 'Defensor', 12, '1995-03-15', 25),
(662, 'Mohamed Elneny', 'Meio-campo', 17, '1992-07-11', 25),
(663, 'Emam Ashour', 'Meio-campo', 8, '1998-02-20', 25),
(664, 'Marwan Attia', 'Meio-campo', 14, '1998-08-01', 25),
(665, 'Hamdi Fathi', 'Meio-campo', 5, '1994-09-29', 25),
(666, 'Mahmoud Hamada', 'Meio-campo', 20, '1993-11-01', 25),
(667, 'Ahmed Sayed Zizo', 'Meio-campo', 25, '1996-01-10', 25),
(668, 'Mohamed Magdy Afsha', 'Meio-campo', 22, '1996-03-06', 25),
(669, 'Mohanad Lasheen', 'Meio-campo', 26, '1996-05-29', 25),
(670, 'Mohamed Salah', 'Atacante', 10, '1992-06-15', 25),
(671, 'Trézéguet', 'Atacante', 7, '1994-10-01', 25),
(672, 'Omar Marmoush', 'Atacante', 21, '1999-02-07', 25),
(673, 'Mostafa Mohamed', 'Atacante', 11, '1997-11-28', 25),
(674, 'Ahmed Hassan Koka', 'Atacante', 9, '1993-03-05', 25),
(675, 'Mohamed Sherif', 'Atacante', 19, '1996-02-04', 25),
(676, 'Ahmed Yasser Rayan', 'Atacante', 18, '1998-01-24', 25);

-- IRÃ (ID 14)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(677, 'Alireza Beiranvand', 'Goleiro', 1, '1992-09-21', 14),
(678, 'Payam Niazmand', 'Goleiro', 12, '1995-04-06', 14),
(679, 'Hossein Hosseini', 'Goleiro', 22, '1992-06-30', 14),
(680, 'Ehsan Hajsafi', 'Defensor', 3, '1990-02-25', 14),
(681, 'Ramin Rezaeian', 'Defensor', 23, '1990-03-21', 14),
(682, 'Milad Mohammadi', 'Defensor', 5, '1993-09-29', 14),
(683, 'Hossein Kanaani', 'Defensor', 13, '1994-03-23', 14),
(684, 'Shojae Khalilzadeh', 'Defensor', 4, '1989-05-14', 14),
(685, 'Majid Hosseini', 'Defensor', 19, '1996-06-20', 14),
(686, 'Saleh Hardani', 'Defensor', 2, '1998-09-14', 14),
(687, 'Abolfazl Jalali', 'Defensor', 25, '1998-06-26', 14),
(688, 'Saeid Ezatolahi', 'Meio-campo', 6, '1996-10-01', 14),
(689, 'Saman Ghoddos', 'Meio-campo', 14, '1993-09-06', 14),
(690, 'Rouzbeh Cheshmi', 'Meio-campo', 15, '1993-07-24', 14),
(691, 'Omid Ebrahimi', 'Meio-campo', 8, '1987-09-15', 14),
(692, 'Mohammad Mohebi', 'Meio-campo', 21, '1998-12-20', 14),
(693, 'Mehdi Torabi', 'Meio-campo', 16, '1994-09-10', 14),
(694, 'Ali Gholizadeh', 'Meio-campo', 17, '1996-03-10', 14),
(695, 'Aria Yousefi', 'Meio-campo', 24, '2002-04-22', 14),
(696, 'Mehdi Taremi', 'Atacante', 9, '1992-07-18', 14),
(697, 'Sardar Azmoun', 'Atacante', 20, '1995-01-01', 14),
(698, 'Alireza Jahanbakhsh', 'Atacante', 7, '1993-08-11', 14),
(699, 'Karim Ansarifard', 'Atacante', 10, '1990-04-03', 14),
(700, 'Mehdi Ghayedi', 'Atacante', 18, '1998-12-05', 14),
(701, 'Reza Asadi', 'Atacante', 11, '1996-01-17', 14),
(702, 'Shahriyar Moghanlou', 'Atacante', 26, '1994-12-21', 14);

-- NOVA ZELÂNDIA (ID 22)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(703, 'Oliver Sail', 'Goleiro', 1, '1996-01-13', 22),
(704, 'Max Crocombe', 'Goleiro', 12, '1993-08-12', 22),
(705, 'Alex Paulsen', 'Goleiro', 21, '2002-07-04', 22),
(706, 'Liberato Cacace', 'Defensor', 13, '2000-09-27', 22),
(707, 'Michael Boxall', 'Defensor', 2, '1988-08-18', 22),
(708, 'Bill Tuiloma', 'Defensor', 6, '1995-03-27', 22),
(709, 'Tommy Smith', 'Defensor', 5, '1990-03-31', 22),
(710, 'Tyler Bindon', 'Defensor', 14, '2005-01-27', 22),
(711, 'Tim Payne', 'Defensor', 4, '1994-01-10', 22),
(712, 'Nando Pijnaker', 'Defensor', 3, '1999-02-25', 22),
(713, 'Finn Surman', 'Defensor', 15, '2003-09-23', 22),
(714, 'Joe Bell', 'Meio-campo', 8, '1999-04-27', 22),
(715, 'Marko Stamenic', 'Meio-campo', 10, '2002-02-19', 22),
(716, 'Matthew Garbett', 'Meio-campo', 16, '2002-04-13', 22),
(717, 'Sarpreet Singh', 'Meio-campo', 11, '1999-02-20', 22),
(718, 'Alex Rufer', 'Meio-campo', 18, '1996-06-12', 22),
(719, 'Cam Howieson', 'Meio-campo', 20, '1994-12-22', 22),
(720, 'Elijah Just', 'Meio-campo', 7, '2000-05-01', 22),
(721, 'Clayton Lewis', 'Meio-campo', 23, '1997-02-12', 22),
(722, 'Chris Wood', 'Atacante', 9, '1991-12-07', 22),
(723, 'Ben Waine', 'Atacante', 19, '2001-06-11', 22),
(724, 'Kosta Barbarouses', 'Atacante', 17, '1990-02-19', 22),
(725, 'Callum McCowatt', 'Atacante', 22, '1999-04-30', 22),
(726, 'Max Mata', 'Atacante', 24, '2000-07-10', 22),
(727, 'Alex Greive', 'Atacante', 25, '1999-05-13', 22),
(728, 'Ben Old', 'Atacante', 26, '2002-08-13', 22);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO H (104 atletas)
-- -----------------------------------------------------

-- ESPANHA (ID 37)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(729, 'Unai Simón', 'Goleiro', 23, '1997-06-11', 37),
(730, 'David Raya', 'Goleiro', 1, '1995-09-15', 37),
(731, 'Álex Remiro', 'Goleiro', 13, '1995-03-24', 37),
(732, 'Dani Carvajal', 'Defensor', 2, '1992-01-11', 37),
(733, 'Jesús Navas', 'Defensor', 22, '1985-11-21', 37),
(734, 'Aymeric Laporte', 'Defensor', 14, '1994-05-27', 37),
(735, 'Robin Le Normand', 'Defensor', 3, '1996-11-11', 37),
(736, 'Nacho Fernández', 'Defensor', 4, '1990-01-18', 37),
(737, 'Dani Vivian', 'Defensor', 5, '1999-07-05', 37),
(738, 'Alejandro Grimaldo', 'Defensor', 12, '1995-09-20', 37),
(739, 'Marc Cucurella', 'Defensor', 24, '1998-07-22', 37),
(740, 'Rodri', 'Meio-campo', 16, '1996-06-22', 37),
(741, 'Martín Zubimendi', 'Meio-campo', 18, '1999-02-02', 37),
(742, 'Fabián Ruiz', 'Meio-campo', 8, '1996-04-03', 37),
(743, 'Mikel Merino', 'Meio-campo', 6, '1996-06-22', 37),
(744, 'Pedri', 'Meio-campo', 20, '2002-11-25', 37),
(745, 'Fermín López', 'Meio-campo', 25, '2003-05-11', 37),
(746, 'Álex Baena', 'Meio-campo', 15, '2001-07-20', 37),
(747, 'Lamine Yamal', 'Atacante', 19, '2007-07-13', 37),
(748, 'Ferran Torres', 'Atacante', 11, '2000-02-29', 37),
(749, 'Dani Olmo', 'Atacante', 10, '1998-05-07', 37),
(750, 'Nico Williams', 'Atacante', 17, '2002-07-12', 37),
(751, 'Álvaro Morata', 'Atacante', 7, '1992-10-23', 37),
(752, 'Joselu', 'Atacante', 9, '1990-03-27', 37),
(753, 'Mikel Oyarzabal', 'Atacante', 21, '1997-04-21', 37),
(754, 'Ayoze Pérez', 'Atacante', 26, '1993-07-23', 37);

-- CABO VERDE (ID 28)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(755, 'Vozinha', 'Goleiro', 1, '1986-06-03', 28),
(756, 'Márcio da Rosa', 'Goleiro', 12, '1997-02-20', 28),
(757, 'Dylan Silva', 'Goleiro', 23, '1999-02-10', 28),
(758, 'Roberto Lopes', 'Defensor', 4, '1992-06-17', 28),
(759, 'Stopira', 'Defensor', 3, '1988-05-20', 28),
(760, 'Diney Borges', 'Defensor', 2, '1995-01-17', 28),
(761, 'Logan Costa', 'Defensor', 5, '2001-04-01', 28),
(762, 'João Paulo Fernandes', 'Defensor', 16, '1998-05-26', 28),
(763, 'Steven Moreira', 'Defensor', 22, '1994-08-13', 28),
(764, 'Jójó', 'Defensor', 24, '2001-02-05', 28),
(765, 'Dylan Tavares', 'Defensor', 14, '1996-08-30', 28),
(766, 'Kevin Pina', 'Meio-campo', 20, '1997-01-27', 28),
(767, 'Deroy Duarte', 'Meio-campo', 6, '1999-07-04', 28),
(768, 'Jamiro Monteiro', 'Meio-campo', 8, '1993-11-23', 28),
(769, 'Patrick Andrade', 'Meio-campo', 18, '1993-02-09', 28),
(770, 'Kenny Rocha Santos', 'Meio-campo', 15, '2000-01-03', 28),
(771, 'Cuca', 'Meio-campo', 25, '1991-01-09', 28),
(772, 'João Pedro', 'Meio-campo', 21, '1996-03-24', 28),
(773, 'Ryan Mendes', 'Atacante', 88, '1990-01-08', 28),
(774, 'Garry Rodrigues', 'Atacante', 10, '1990-11-27', 28),
(775, 'Bebé', 'Atacante', 11, '1990-07-12', 28),
(776, 'Jovane Cabral', 'Atacante', 7, '1998-06-14', 28),
(777, 'Gilson Benchimol', 'Atacante', 9, '2001-12-29', 28),
(778, 'Bryan Teixeira', 'Atacante', 19, '2000-09-01', 28),
(779, 'Willy Semedo', 'Atacante', 17, '1994-04-27', 28),
(780, 'Helio Varela', 'Atacante', 26, '2002-05-03', 28);

-- ARÁBIA SAUDITA (ID 20)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(781, 'Mohammed Al-Owais', 'Goleiro', 21, '1991-10-10', 20),
(782, 'Nawaf Al-Aqidi', 'Goleiro', 1, '2000-05-10', 20),
(783, 'Raghed Al-Najjar', 'Goleiro', 22, '1996-09-20', 20),
(784, 'Ali Al-Bulaihi', 'Defensor', 5, '1989-11-21', 20),
(785, 'Hassan Tambakti', 'Defensor', 17, '1999-02-09', 20),
(786, 'Saud Abdulhamid', 'Defensor', 12, '1999-07-18', 20),
(787, 'Yasser Al-Shahrani', 'Defensor', 13, '1992-05-25', 20),
(788, 'Abdulelah Al-Amri', 'Defensor', 4, '1997-01-15', 20),
(789, 'Ali Lajami', 'Defensor', 3, '1996-04-24', 20),
(790, 'Fawaz Al-Sqoor', 'Defensor', 2, '1996-04-23', 20),
(791, 'Awn Al-Saluli', 'Defensor', 15, '1998-09-02', 20),
(792, 'Mohamed Kanno', 'Meio-campo', 23, '1994-09-22', 20),
(793, 'Mukhtar Ali', 'Meio-campo', 6, '1997-10-30', 20),
(794, 'Abdulellah Al-Malki', 'Meio-campo', 8, '1994-10-11', 20),
(795, 'Abdullah Al-Khaibari', 'Meio-campo', 16, '1996-08-16', 20),
(796, 'Sami Al-Najei', 'Meio-campo', 14, '1997-02-07', 20),
(797, 'Nasser Al-Dawsari', 'Meio-campo', 24, '1998-12-19', 20),
(798, 'Faisal Al-Ghamdi', 'Meio-campo', 18, '2001-08-13', 20),
(799, 'Salem Al-Dawsari', 'Atacante', 10, '1991-08-19', 20),
(800, 'Saleh Al-Shehri', 'Atacante', 11, '1993-11-01', 20),
(801, 'Firas Al-Buraikan', 'Atacante', 9, '2000-05-14', 20),
(802, 'Abdulrahman Ghareeb', 'Atacante', 19, '1997-03-31', 20),
(803, 'Ayman Yahya', 'Atacante', 25, '2001-05-14', 20),
(804, 'Abdullah Radif', 'Atacante', 20, '2003-01-20', 20),
(805, 'Talal Haji', 'Atacante', 26, '2007-09-16', 20),
(806, 'Mohammed Maran', 'Atacante', 7, '2001-02-15', 20);

-- URUGUAI (ID 12)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(807, 'Sergio Rochet', 'Goleiro', 1, '1993-03-23', 12),
(808, 'Santiago Mele', 'Goleiro', 23, '1997-09-06', 12),
(809, 'Franco Israel', 'Goleiro', 12, '2000-04-22', 12),
(810, 'Ronald Araújo', 'Defensor', 4, '1999-03-07', 12),
(811, 'José María Giménez', 'Defensor', 2, '1995-01-20', 12),
(812, 'Mathías Olivera', 'Defensor', 16, '1997-10-31', 12),
(813, 'Matías Viña', 'Defensor', 17, '1997-11-09', 12),
(814, 'Nahitan Nández', 'Defensor', 8, '1995-12-28', 12),
(815, 'Guillermo Varela', 'Defensor', 13, '1993-03-24', 12),
(816, 'Nicolás Marichal', 'Defensor', 22, '2001-03-17', 12),
(817, 'Lucas Olaza', 'Defensor', 24, '1994-07-21', 12),
(818, 'Sebastián Cáceres', 'Defensor', 3, '1999-08-18', 12),
(819, 'Federico Valverde', 'Meio-campo', 15, '1998-07-22', 12),
(820, 'Manuel Ugarte', 'Meio-campo', 5, '2001-04-11', 12),
(821, 'Rodrigo Bentancur', 'Meio-campo', 6, '1997-06-25', 12),
(822, 'Nicolás de la Cruz', 'Meio-campo', 7, '1997-06-01', 12),
(823, 'Giorgian de Arrascaeta', 'Meio-campo', 10, '1994-06-01', 12),
(824, 'Emiliano Martínez', 'Meio-campo', 21, '1999-08-17', 12),
(825, 'Darwin Núñez', 'Atacante', 19, '1999-06-24', 12),
(826, 'Luis Suárez', 'Atacante', 9, '1987-01-24', 12),
(827, 'Facundo Pellistri', 'Atacante', 11, '2001-12-20', 12),
(828, 'Maximiliano Araújo', 'Atacante', 20, '2000-02-15', 12),
(829, 'Brian Rodríguez', 'Atacante', 18, '2000-05-20', 12),
(830, 'Cristian Olivera', 'Atacante', 25, '2002-04-17', 12),
(831, 'Agustín Canobbio', 'Atacante', 14, '1998-10-01', 12),
(832, 'Brian Ocampo', 'Atacante', 26, '1999-06-25', 12);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO I (104 atletas)
-- -----------------------------------------------------

-- FRANÇA (ID 34)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(833, 'Mike Maignan', 'Goleiro', 16, '1995-07-03', 34),
(834, 'Alphonse Areola', 'Goleiro', 23, '1993-02-27', 34),
(835, 'Brice Samba', 'Goleiro', 1, '1994-04-25', 34),
(836, 'Benjamin Pavard', 'Defensor', 2, '1996-03-28', 34),
(837, 'Jules Koundé', 'Defensor', 5, '1998-11-12', 34),
(838, 'Dayot Upamecano', 'Defensor', 4, '1998-10-27', 34),
(839, 'William Saliba', 'Defensor', 17, '2001-03-24', 34),
(840, 'Ibrahima Konaté', 'Defensor', 24, '1999-05-25', 34),
(841, 'Theo Hernández', 'Defensor', 22, '1997-10-06', 34),
(842, 'Ferland Mendy', 'Defensor', 3, '1995-06-08', 34),
(843, 'Jonathan Clauss', 'Defensor', 21, '1992-09-25', 34),
(844, 'N\'Golo Kanté', 'Meio-campo', 13, '1991-03-29', 34),
(845, 'Aurélien Tchouaméni', 'Meio-campo', 8, '2000-01-27', 34),
(846, 'Adrien Rabiot', 'Meio-campo', 14, '1995-04-03', 34),
(847, 'Eduardo Camavinga', 'Meio-campo', 6, '2002-11-10', 34),
(848, 'Warren Zaïre-Emery', 'Meio-campo', 18, '2006-03-08', 34),
(849, 'Youssouf Fofana', 'Meio-campo', 19, '1999-01-10', 34),
(850, 'Antoine Griezmann', 'Meio-campo', 7, '1991-03-21', 34),
(851, 'Kylian Mbappé', 'Atacante', 10, '1998-12-20', 34),
(852, 'Ousmane Dembélé', 'Atacante', 11, '1997-05-15', 34),
(853, 'Olivier Giroud', 'Atacante', 9, '1986-09-30', 34),
(854, 'Marcus Thuram', 'Atacante', 15, '1997-08-06', 34),
(855, 'Randal Kolo Muani', 'Atacante', 12, '1998-12-05', 34),
(856, 'Kingsley Coman', 'Atacante', 20, '1996-06-13', 34),
(857, 'Bradley Barcola', 'Atacante', 25, '2002-09-02', 34),
(858, 'Moussa Diaby', 'Atacante', 26, '1999-07-07', 34);

-- SENEGAL (ID 30)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(859, 'Édouard Mendy', 'Goleiro', 16, '1992-03-01', 30),
(860, 'Mory Diaw', 'Goleiro', 1, '1993-06-22', 30),
(861, 'Seny Dieng', 'Goleiro', 23, '1994-11-23', 30),
(862, 'Kalidou Koulibaly', 'Defensor', 3, '1991-06-20', 30),
(863, 'Abdou Diallo', 'Defensor', 22, '1996-05-04', 30),
(864, 'Moussa Niakhaté', 'Defensor', 19, '1996-03-08', 30),
(865, 'Ismail Jakobs', 'Defensor', 14, '1999-08-17', 30),
(866, 'Youssouf Sabaly', 'Defensor', 21, '1993-03-05', 30),
(867, 'Fodé Ballo-Touré', 'Defensor', 2, '1997-01-03', 30),
(868, 'Abdoulaye Seck', 'Defensor', 4, '1992-06-04', 30),
(869, 'Formose Mendy', 'Defensor', 12, '2001-01-02', 30),
(870, 'Idrissa Gueye', 'Meio-campo', 5, '1989-09-26', 30),
(871, 'Pape Matar Sarr', 'Meio-campo', 17, '2002-09-14', 30),
(872, 'Pape Gueye', 'Meio-campo', 26, '1999-01-24', 30),
(873, 'Nampalys Mendy', 'Meio-campo', 6, '1992-06-23', 30),
(874, 'Pathé Ciss', 'Meio-campo', 11, '1994-03-16', 30),
(875, 'Cheikhou Kouyaté', 'Meio-campo', 8, '1989-12-21', 30),
(876, 'Krépin Diatta', 'Meio-campo', 15, '1999-02-25', 30),
(877, 'Sadio Mané', 'Atacante', 10, '1992-04-10', 30),
(878, 'Ismaïla Sarr', 'Atacante', 18, '1998-02-25', 30),
(879, 'Nicolas Jackson', 'Atacante', 7, '2001-06-20', 30),
(880, 'Boulaye Dia', 'Atacante', 9, '1996-11-16', 30),
(881, 'Habib Diallo', 'Atacante', 20, '1995-06-18', 30),
(882, 'Iliman Ndiaye', 'Atacante', 13, '2000-03-06', 30),
(883, 'Bamba Dieng', 'Atacante', 24, '2000-03-23', 30),
(884, 'Abdallah Sima', 'Atacante', 25, '2001-06-17', 30);

-- IRAQUE (ID 21)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(885, 'Jalal Hassan', 'Goleiro', 1, '1991-05-18', 21),
(886, 'Fahad Talib', 'Goleiro', 12, '1994-10-21', 21),
(887, 'Ahmed Basil', 'Goleiro', 22, '1996-08-19', 21),
(888, 'Ali Adnan', 'Defensor', 6, '1993-12-19', 21),
(889, 'Saad Natiq', 'Defensor', 4, '1994-03-19', 21),
(890, 'Rebin Sulaka', 'Defensor', 2, '1992-04-12', 21),
(891, 'Frans Putros', 'Defensor', 5, '1993-07-14', 21),
(892, 'Merchas Doski', 'Defensor', 23, '1999-12-07', 21),
(893, 'Hussein Ali', 'Defensor', 3, '2002-03-01', 21),
(894, 'Zaid Tahseen', 'Defensor', 24, '2001-01-29', 21),
(895, 'Ahmed Yahya', 'Defensor', 15, '1997-05-27', 21),
(896, 'Amjad Attwan', 'Meio-campo', 14, '1997-03-12', 21),
(897, 'Osama Rashid', 'Meio-campo', 20, '1992-01-17', 21),
(898, 'Amir Al-Ammari', 'Meio-campo', 16, '1997-07-27', 21),
(899, 'Ibrahim Bayesh', 'Meio-campo', 8, '2000-05-01', 21),
(900, 'Bashar Resan', 'Meio-campo', 13, '1996-12-22', 21),
(901, 'Zidane Iqbal', 'Meio-campo', 11, '2003-04-27', 21),
(902, 'Safaa Hadi', 'Meio-campo', 19, '1998-10-14', 21),
(903, 'Ahmad Allee', 'Meio-campo', 21, '1996-04-29', 21),
(904, 'Youssef Amyn', 'Atacante', 7, '2003-08-21', 21),
(905, 'Ali Jasim', 'Atacante', 17, '2004-01-20', 21),
(906, 'Montader Madjed', 'Atacante', 26, '2005-04-24', 21),
(907, 'Aymen Hussein', 'Atacante', 18, '1996-03-22', 21),
(908, 'Mohanad Ali', 'Atacante', 10, '2000-06-20', 21),
(909, 'Ali Al-Hamadi', 'Atacante', 9, '2002-03-01', 21),
(910, 'Danilo Al-Saed', 'Atacante', 25, '1999-02-24', 21);

-- NORUEGA (ID 45)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(911, 'Ørjan Nyland', 'Goleiro', 1, '1990-09-10', 45),
(912, 'Mathias Dyngeland', 'Goleiro', 12, '1995-10-07', 45),
(913, 'Egil Selvik', 'Goleiro', 13, '1997-07-30', 45),
(914, 'Kristoffer Ajer', 'Defensor', 3, '1998-04-17', 45),
(915, 'Leo Skiri Østigård', 'Defensor', 4, '1999-11-28', 45),
(916, 'Stefan Strandberg', 'Defensor', 5, '1990-07-25', 45),
(917, 'Julian Ryerson', 'Defensor', 14, '1997-11-17', 45),
(918, 'Birger Meling', 'Defensor', 2, '1994-12-17', 45),
(919, 'Marcus Holmgren Pedersen', 'Defensor', 16, '2000-07-16', 45),
(920, 'Andreas Hanche-Olsen', 'Defensor', 21, '1997-01-17', 45),
(921, 'Fredrik Bjørkan', 'Defensor', 17, '1998-08-21', 45),
(922, 'Martin Ødegaard', 'Meio-campo', 10, '1998-12-17', 45),
(923, 'Sander Berge', 'Meio-campo', 8, '1998-02-14', 45),
(924, 'Fredrik Aursnes', 'Meio-campo', 15, '1995-12-10', 45),
(925, 'Kristian Thorstvedt', 'Meio-campo', 18, '1999-03-13', 45),
(926, 'Hugo Vetlesen', 'Meio-campo', 20, '2000-02-29', 45),
(927, 'Patrick Berg', 'Meio-campo', 6, '1997-11-24', 45),
(928, 'Morten Thorsby', 'Meio-campo', 25, '1996-05-05', 45),
(929, 'Oscar Bobb', 'Atacante', 22, '2003-07-12', 45),
(930, 'Mohamed Elyounoussi', 'Atacante', 11, '1994-08-04', 45),
(931, 'Antonio Nusa', 'Atacante', 26, '2005-04-17', 45),
(932, 'Erling Haaland', 'Atacante', 9, '2000-07-21', 45),
(933, 'Alexander Sørloth', 'Atacante', 7, '1995-12-05', 45),
(934, 'Jørgen Strand Larsen', 'Atacante', 23, '2000-02-06', 45),
(935, 'Aron Dønnum', 'Atacante', 24, '1998-04-20', 45),
(936, 'Bård Finne', 'Atacante', 19, '1995-02-13', 45);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO J (104 atletas)
-- -----------------------------------------------------

-- ARGENTINA (ID 7)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(937, 'Emiliano Martínez', 'Goleiro', 1, '1992-09-02', 7),
(938, 'Franco Armani', 'Goleiro', 23, '1986-10-16', 7),
(939, 'Gerónimo Rulli', 'Goleiro', 12, '1992-05-20', 7),
(940, 'Cristian Romero', 'Defensor', 13, '1998-04-27', 7),
(941, 'Nicolás Otamendi', 'Defensor', 19, '1988-02-12', 7),
(942, 'Lisandro Martínez', 'Defensor', 25, '1998-01-18', 7),
(943, 'Germán Pezzella', 'Defensor', 6, '1991-06-27', 7),
(944, 'Nahuel Molina', 'Defensor', 26, '1998-04-06', 7),
(945, 'Gonzalo Montiel', 'Defensor', 4, '1997-01-01', 7),
(946, 'Nicolás Tagliafico', 'Defensor', 3, '1992-08-31', 7),
(947, 'Marcos Acuña', 'Defensor', 8, '1991-10-28', 7),
(948, 'Rodrigo De Paul', 'Meio-campo', 7, '1994-05-24', 7),
(949, 'Enzo Fernández', 'Meio-campo', 24, '2001-01-17', 7),
(950, 'Alexis Mac Allister', 'Meio-campo', 20, '1998-12-24', 7),
(951, 'Leandro Paredes', 'Meio-campo', 5, '1994-06-29', 7),
(952, 'Giovani Lo Celso', 'Meio-campo', 16, '1996-04-09', 7),
(953, 'Exequiel Palacios', 'Meio-campo', 14, '1998-10-05', 7),
(954, 'Guido Rodríguez', 'Meio-campo', 18, '1994-04-12', 7),
(955, 'Lionel Messi', 'Atacante', 10, '1987-06-24', 7),
(956, 'Julián Álvarez', 'Atacante', 9, '2000-01-31', 7),
(957, 'Lautaro Martínez', 'Atacante', 22, '1997-08-22', 7),
(958, 'Nicolás González', 'Atacante', 15, '1998-04-06', 7),
(959, 'Alejandro Garnacho', 'Atacante', 17, '2004-07-01', 7),
(960, 'Paulo Dybala', 'Atacante', 21, '1993-11-15', 7),
(961, 'Facundo Buonanotte', 'Meio-campo', 11, '2004-12-23', 7),
(962, 'Valentín Barco', 'Defensor', 2, '2004-07-23', 7);

-- ARGÉLIA (ID 26)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(963, 'Anthony Mandrea', 'Goleiro', 1, '1996-12-25', 26),
(964, 'Moustapha Zeghba', 'Goleiro', 16, '1990-11-21', 26),
(965, 'Raïs M\'Bolhi', 'Goleiro', 23, '1986-04-25', 26),
(966, 'Ramy Bensebaini', 'Defensor', 21, '1995-04-16', 26),
(967, 'Aïssa Mandi', 'Defensor', 2, '1991-10-22', 26),
(968, 'Rayan Aït-Nouri', 'Defensor', 15, '2001-06-06', 26),
(969, 'Youcef Atal', 'Defensor', 20, '1996-05-17', 26),
(970, 'Ahmed Touba', 'Defensor', 5, '1998-03-13', 26),
(971, 'Mohamed Amine Tougai', 'Defensor', 4, '2000-01-22', 26),
(972, 'Yasser Larouci', 'Defensor', 3, '2001-01-01', 26),
(973, 'Kévin Van Den Kerkhof', 'Defensor', 22, '1996-03-14', 26),
(974, 'Ismaël Bennacer', 'Meio-campo', 44, '1997-12-01', 26),
(975, 'Nabil Bentaleb', 'Meio-campo', 14, '1994-11-24', 26),
(976, 'Houssem Aouar', 'Meio-campo', 11, '1998-06-30', 26),
(977, 'Ramiz Zerrouki', 'Meio-campo', 6, '1998-05-26', 26),
(978, 'Hicham Boudaoui', 'Meio-campo', 19, '1999-09-23', 26),
(979, 'Farès Chaïbi', 'Meio-campo', 8, '2002-11-28', 26),
(980, 'Sofiane Feghouli', 'Meio-campo', 10, '1989-12-26', 26),
(981, 'Riyad Mahrez', 'Atacante', 7, '1991-02-21', 26),
(982, 'Islam Slimani', 'Atacante', 13, '1988-06-18', 26),
(983, 'Baghdad Bounedjah', 'Atacante', 9, '1991-11-24', 26),
(984, 'Mohammed Amoura', 'Atacante', 18, '2000-05-09', 26),
(985, 'Amine Gouiri', 'Atacante', 12, '2000-02-16', 26),
(986, 'Saïd Benrahma', 'Atacante', 17, '1995-08-10', 26),
(987, 'Yassine Benzia', 'Atacante', 24, '1994-09-08', 26),
(988, 'Yacine Brahimi', 'Atacante', 25, '1990-02-08', 26);

-- ÁUSTRIA (ID 44)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(989, 'Alexander Schlager', 'Goleiro', 1, '1996-02-01', 44),
(990, 'Patrick Pentz', 'Goleiro', 13, '1997-01-02', 44),
(991, 'Heinz Lindner', 'Goleiro', 12, '1990-07-17', 44),
(992, 'David Alaba', 'Defensor', 8, '1992-06-24', 44),
(993, 'Kevin Danso', 'Defensor', 4, '1998-09-19', 44),
(994, 'Philipp Lienhart', 'Defensor', 15, '1996-07-11', 44),
(995, 'Stefan Posch', 'Defensor', 5, '1997-05-14', 44),
(996, 'Maximilian Wöber', 'Defensor', 2, '1998-02-04', 44),
(997, 'Phillipp Mwene', 'Defensor', 16, '1994-01-29', 44),
(998, 'Stefan Lainer', 'Defensor', 21, '1992-08-27', 44),
(999, 'Leopold Querfeld', 'Defensor', 14, '2003-12-20', 44),
(1000, 'Marcel Sabitzer', 'Meio-campo', 9, '1994-03-17', 44),
(1001, 'Konrad Laimer', 'Meio-campo', 20, '1997-05-27', 44),
(1002, 'Xaver Schlager', 'Meio-campo', 24, '1997-09-28', 44),
(1003, 'Christoph Baumgartner', 'Meio-campo', 19, '1999-08-01', 44),
(1004, 'Nicolas Seiwald', 'Meio-campo', 6, '2001-05-04', 44),
(1005, 'Florian Grillitsch', 'Meio-campo', 10, '1995-08-07', 44),
(1006, 'Romano Schmid', 'Meio-campo', 18, '2000-01-27', 44),
(1007, 'Patrick Wimmer', 'Meio-campo', 23, '2001-05-30', 44),
(1008, 'Matthias Seidl', 'Meio-campo', 22, '2001-01-24', 44),
(1009, 'Marko Arnautovic', 'Atacante', 7, '1989-04-19', 44),
(1010, 'Michael Gregoritsch', 'Atacante', 11, '1994-04-18', 44),
(1011, 'Sasa Kalajdzic', 'Atacante', 17, '1997-07-07', 44),
(1012, 'Andreas Weimann', 'Atacante', 25, '1991-08-05', 44),
(1013, 'Maximilian Entrup', 'Atacante', 26, '1997-07-25', 44),
(1014, 'Alexander Prass', 'Meio-campo', 3, '2001-05-26', 44);

-- JORDÂNIA (ID 17)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1015, 'Yazeed Abulaila', 'Goleiro', 1, '1993-01-08', 17),
(1016, 'Abdallah Al-Fakhouri', 'Goleiro', 22, '2000-01-22', 17),
(1017, 'Ahmad Al-Juaidi', 'Goleiro', 12, '2001-04-09', 17),
(1018, 'Yazan Al-Arab', 'Defensor', 5, '1996-01-31', 17),
(1019, 'Abdallah Nasib', 'Defensor', 3, '1994-02-25', 17),
(1020, 'Salem Al-Ajalin', 'Defensor', 2, '1988-02-18', 17),
(1021, 'Ihsan Haddad', 'Defensor', 23, '1994-02-05', 17),
(1022, 'Bara\' Marei', 'Defensor', 4, '1994-04-15', 17),
(1023, 'Mohammad Abu Hasheesh', 'Defensor', 16, '1995-05-09', 17),
(1024, 'Feras Shelbaieh', 'Defensor', 19, '1993-11-27', 17),
(1025, 'Saed Al-Rosan', 'Defensor', 24, '1997-02-01', 17),
(1026, 'Noor Al-Rawabdeh', 'Meio-campo', 8, '1997-02-24', 17),
(1027, 'Nizar Al-Rashdan', 'Meio-campo', 21, '1999-03-23', 17),
(1028, 'Rajaee Ayed', 'Meio-campo', 15, '1993-07-25', 17),
(1029, 'Mahmoud Al-Mardi', 'Meio-campo', 13, '1993-10-06', 17),
(1030, 'Saleh Ratib', 'Meio-campo', 57, '1994-12-18', 17),
(1031, 'Ibrahim Sadeh', 'Meio-campo', 20, '2000-04-27', 17),
(1032, 'Fadi Awad', 'Meio-campo', 25, '1993-03-26', 17),
(1033, 'Anas Al-Awadat', 'Atacante', 26, '1998-05-29', 17),
(1034, 'Youssef Abu Jalbosh', 'Meio-campo', 18, '1998-06-15', 17),
(1035, 'Mousa Al-Tamari', 'Atacante', 10, '1997-06-10', 17),
(1036, 'Yazan Al-Naimat', 'Atacante', 11, '1999-06-04', 17),
(1037, 'Ali Olwan', 'Atacante', 9, '2000-03-26', 17),
(1038, 'Hamza Al-Dardour', 'Atacante', 7, '1991-05-12', 17),
(1039, 'Aref Al-Haj', 'Atacante', 14, '2001-05-28', 17),
(1040, 'Abu Taha', 'Atacante', 17, '2001-11-03', 17);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO K (104 atletas)
-- -----------------------------------------------------

-- PORTUGAL (ID 36)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1041, 'Diogo Costa', 'Goleiro', 22, '1999-09-19', 36),
(1042, 'Rui Patrício', 'Goleiro', 1, '1988-02-15', 36),
(1043, 'José Sá', 'Goleiro', 12, '1993-01-17', 36),
(1044, 'Rúben Dias', 'Defensor', 4, '1997-05-14', 36),
(1045, 'Pepe', 'Defensor', 3, '1983-02-26', 36),
(1046, 'Gonçalo Inácio', 'Defensor', 14, '2001-08-25', 36),
(1047, 'António Silva', 'Defensor', 24, '2003-10-30', 36),
(1048, 'João Cancelo', 'Defensor', 20, '1994-05-27', 36),
(1049, 'Diogo Dalot', 'Defensor', 5, '1999-03-18', 36),
(1050, 'Nuno Mendes', 'Defensor', 19, '2002-06-19', 36),
(1051, 'Nélson Semedo', 'Defensor', 2, '1993-11-16', 36),
(1052, 'Danilo Pereira', 'Defensor', 13, '1991-09-09', 36),
(1053, 'Bruno Fernandes', 'Meio-campo', 8, '1994-09-08', 36),
(1054, 'Bernardo Silva', 'Meio-campo', 10, '1994-08-10', 36),
(1055, 'João Palhinha', 'Meio-campo', 6, '1995-07-09', 36),
(1056, 'Vitinha', 'Meio-campo', 23, '2000-02-13', 36),
(1057, 'Rúben Neves', 'Meio-campo', 18, '1997-03-13', 36),
(1058, 'Matheus Nunes', 'Meio-campo', 15, '1998-08-27', 36),
(1059, 'João Neves', 'Meio-campo', 16, '2004-09-27', 36),
(1060, 'Otávio', 'Meio-campo', 25, '1995-02-09', 36),
(1061, 'Cristiano Ronaldo', 'Atacante', 7, '1985-02-05', 36),
(1062, 'Rafael Leão', 'Atacante', 17, '1999-06-10', 36),
(1063, 'João Félix', 'Atacante', 11, '1999-11-10', 36),
(1064, 'Diogo Jota', 'Atacante', 21, '1996-12-04', 36),
(1065, 'Gonçalo Ramos', 'Atacante', 9, '2001-06-20', 36),
(1066, 'Pedro Neto', 'Atacante', 26, '2000-03-09', 36);

-- RD CONGO (ID 32)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1067, 'Lionel Mpasi', 'Goleiro', 1, '1994-08-01', 32),
(1068, 'Dimitry Bertaud', 'Goleiro', 16, '1998-06-06', 32),
(1069, 'Baggio Siadi', 'Goleiro', 23, '1997-07-21', 32),
(1070, 'Chancel Mbemba', 'Defensor', 22, '1994-08-08', 32),
(1071, 'Arthur Masuaku', 'Defensor', 26, '1993-11-07', 32),
(1072, 'Gédéon Kalulu', 'Defensor', 24, '1997-08-29', 32),
(1073, 'Henoc Inonga', 'Defensor', 2, '1993-11-01', 32),
(1074, 'Dylan Batubinsika', 'Defensor', 5, '1996-02-15', 32),
(1075, 'Joris Kayembe', 'Defensor', 12, '1994-08-08', 32),
(1076, 'Brian Bayeye', 'Defensor', 4, '2000-06-30', 32),
(1077, 'Rocky Bushiri', 'Defensor', 15, '1999-11-30', 32),
(1078, 'Samuel Moutoussamy', 'Meio-campo', 8, '1996-08-12', 32),
(1079, 'Charles Pickel', 'Meio-campo', 18, '1997-05-15', 32),
(1080, 'Aaron Tshibola', 'Meio-campo', 6, '1995-01-02', 32),
(1081, 'Gaël Kakuta', 'Meio-campo', 14, '1991-06-21', 32),
(1082, 'Théo Bongonda', 'Meio-campo', 10, '1995-11-20', 32),
(1083, 'Grady Diangana', 'Meio-campo', 7, '1998-04-19', 32),
(1084, 'Omenuke Mfulu', 'Meio-campo', 25, '1994-03-20', 32),
(1085, 'Edo Kayembe', 'Meio-campo', 13, '1998-08-03', 32),
(1086, 'Cédric Bakambu', 'Atacante', 17, '1991-04-11', 32),
(1087, 'Yoane Wissa', 'Atacante', 20, '1996-09-03', 32),
(1088, 'Meschak Elia', 'Atacante', 11, '1997-08-06', 32),
(1089, 'Fiston Mayele', 'Atacante', 19, '1994-06-24', 32),
(1090, 'Simon Banza', 'Atacante', 21, '1996-04-08', 32),
(1091, 'Silas Katompa Mvumpa', 'Atacante', 9, '1998-10-06', 32),
(1092, 'Ben Malango', 'Atacante', 3, '1993-11-10', 32);

-- UZBEQUISTÃO (ID 15)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1093, 'Utkir Yusupov', 'Goleiro', 1, '1991-01-04', 15),
(1094, 'Abduvohid Nematov', 'Goleiro', 12, '2001-03-20', 15),
(1095, 'Botirali Ergashev', 'Goleiro', 21, '1995-06-23', 15),
(1096, 'Abdukodir Khusanov', 'Defensor', 25, '2004-02-29', 15),
(1097, 'Rustam Ashurmatov', 'Defensor', 5, '1996-07-07', 15),
(1098, 'Umar Eshmurodov', 'Defensor', 15, '1992-11-30', 15),
(1099, 'Husniddin Aliqulov', 'Defensor', 3, '1999-04-04', 15),
(1100, 'Farrukh Sayfiev', 'Defensor', 4, '1991-01-17', 15),
(1101, 'Khojiakbar Alijonov', 'Defensor', 13, '1997-04-19', 15),
(1102, 'Sherzod Nasrullaev', 'Defensor', 26, '1998-07-23', 15),
(1103, 'Zafarmurod Abdurakhmatov', 'Defensor', 2, '2003-04-28', 15),
(1104, 'Otabek Shukurov', 'Meio-campo', 9, '1996-06-22', 15),
(1105, 'Odiljon Hamrobekov', 'Meio-campo', 7, '1996-02-13', 15),
(1106, 'Jaloliddin Masharipov', 'Meio-campo', 10, '1993-09-01', 15),
(1107, 'Oston Urunov', 'Meio-campo', 11, '2000-12-19', 15),
(1108, 'Abbosbek Fayzullaev', 'Meio-campo', 22, '2003-10-03', 15),
(1109, 'Jamshid Iskanderov', 'Meio-campo', 8, '1993-10-16', 15),
(1110, 'Jamshid Boltaboev', 'Meio-campo', 46, '1996-10-03', 15),
(1111, 'Diyor Kholmatov', 'Meio-campo', 20, '2002-07-22', 15),
(1112, 'Azizbek Turgunboev', 'Meio-campo', 19, '1994-10-01', 15),
(1113, 'Eldor Shomurodov', 'Atacante', 14, '1995-06-29', 15),
(1114, 'Igor Sergeev', 'Atacante', 23, '1993-04-30', 15),
(1115, 'Bobur Abdikholikov', 'Atacante', 17, '1997-04-23', 15),
(1116, 'Azizbek Amonov', 'Atacante', 24, '2000-10-30', 15),
(1117, 'Shokhboz Umarov', 'Atacante', 16, '1999-03-09', 15),
(1118, 'Jasurbek Yakhshiboev', 'Atacante', 18, '1997-06-24', 15);

-- COLÔMBIA (ID 9)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1119, 'Camilo Vargas', 'Goleiro', 12, '1989-03-09', 9),
(1120, 'David Ospina', 'Goleiro', 1, '1988-08-31', 9),
(1121, 'Álvaro Montero', 'Goleiro', 22, '1995-03-29', 9),
(1122, 'Davinson Sánchez', 'Defensor', 23, '1996-06-12', 9),
(1123, 'Yerry Mina', 'Defensor', 13, '1994-09-23', 9),
(1124, 'Carlos Cuesta', 'Defensor', 2, '1999-03-09', 9),
(1125, 'Jhon Lucumí', 'Defensor', 3, '1998-06-26', 9),
(1126, 'Daniel Muñoz', 'Defensor', 21, '1996-05-26', 9),
(1127, 'Santiago Arias', 'Defensor', 4, '1992-01-13', 9),
(1128, 'Johan Mojica', 'Defensor', 17, '1992-08-21', 9),
(1129, 'Deiver Machado', 'Defensor', 26, '1993-09-02', 9),
(1130, 'Jefferson Lerma', 'Meio-campo', 16, '1994-10-25', 9),
(1131, 'Richard Ríos', 'Meio-campo', 6, '2000-06-02', 9),
(1132, 'Kevin Castaño', 'Meio-campo', 5, '2000-09-29', 9),
(1133, 'Mateus Uribe', 'Meio-campo', 15, '1991-03-21', 9),
(1134, 'James Rodríguez', 'Meio-campo', 10, '1991-07-12', 9),
(1135, 'Juan Fernando Quintero', 'Meio-campo', 20, '1993-01-18', 9),
(1136, 'Jorge Carrascal', 'Meio-campo', 8, '1998-05-25', 9),
(1137, 'Jhon Arias', 'Meio-campo', 11, '1997-09-21', 9),
(1138, 'Yaser Asprilla', 'Meio-campo', 25, '2003-11-19', 9),
(1139, 'Luis Díaz', 'Atacante', 7, '1997-01-13', 9),
(1140, 'Rafael Santos Borré', 'Atacante', 19, '1995-09-15', 9),
(1141, 'Jhon Durán', 'Atacante', 14, '2003-12-13', 9),
(1142, 'Miguel Borja', 'Atacante', 9, '1993-01-26', 9),
(1143, 'Luis Sinisterra', 'Atacante', 18, '1999-06-17', 9),
(1144, 'Jhon Córdoba', 'Atacante', 24, '1993-05-11', 9);

-- -----------------------------------------------------
-- Inserindo Jogadores: GRUPO L (104 atletas)
-- -----------------------------------------------------

-- INGLATERRA (ID 33)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1145, 'Jordan Pickford', 'Goleiro', 1, '1994-03-07', 33),
(1146, 'Aaron Ramsdale', 'Goleiro', 13, '1998-05-14', 33),
(1147, 'Nick Pope', 'Goleiro', 23, '1992-04-19', 33),
(1148, 'Kyle Walker', 'Defensor', 2, '1990-05-28', 33),
(1149, 'John Stones', 'Defensor', 5, '1994-05-28', 33),
(1150, 'Harry Maguire', 'Defensor', 6, '1993-03-05', 33),
(1151, 'Kieran Trippier', 'Defensor', 12, '1990-09-19', 33),
(1152, 'Luke Shaw', 'Defensor', 3, '1995-07-12', 33),
(1153, 'Trent Alexander-Arnold', 'Defensor', 22, '1998-10-07', 33),
(1154, 'Marc Guéhi', 'Defensor', 15, '2000-07-13', 33),
(1155, 'Ben Chilwell', 'Defensor', 21, '1996-12-21', 33),
(1156, 'Declan Rice', 'Meio-campo', 4, '1999-01-14', 33),
(1157, 'Jude Bellingham', 'Meio-campo', 10, '2003-06-29', 33),
(1158, 'Jordan Henderson', 'Meio-campo', 8, '1990-06-17', 33),
(1159, 'Conor Gallagher', 'Meio-campo', 16, '2000-02-06', 33),
(1160, 'Mason Mount', 'Meio-campo', 19, '1999-01-10', 33),
(1161, 'James Maddison', 'Meio-campo', 20, '1996-11-23', 33),
(1162, 'Phil Foden', 'Meio-campo', 11, '2000-05-28', 33),
(1163, 'Bukayo Saka', 'Atacante', 7, '2001-09-05', 33),
(1164, 'Harry Kane', 'Atacante', 9, '1993-07-28', 33),
(1165, 'Marcus Rashford', 'Atacante', 14, '1997-10-31', 33),
(1166, 'Jack Grealish', 'Atacante', 17, '1995-09-10', 33),
(1167, 'Ollie Watkins', 'Atacante', 24, '1995-12-30', 33),
(1168, 'Callum Wilson', 'Atacante', 25, '1992-02-27', 33),
(1169, 'Raheem Sterling', 'Atacante', 26, '1994-12-08', 33),
(1170, 'Jarrod Bowen', 'Atacante', 18, '1996-12-20', 33);

-- CROÁCIA (ID 35)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1171, 'Dominik Livaković', 'Goleiro', 1, '1995-01-09', 35),
(1172, 'Ivica Ivušić', 'Goleiro', 12, '1995-02-01', 35),
(1173, 'Nediljko Labrović', 'Goleiro', 23, '1999-10-10', 35),
(1174, 'Joško Gvardiol', 'Defensor', 20, '2002-01-23', 35),
(1175, 'Josip Šutalo', 'Defensor', 6, '2000-02-28', 35),
(1176, 'Borna Sosa', 'Defensor', 19, '1998-01-21', 35),
(1177, 'Josip Juranović', 'Defensor', 22, '1995-08-16', 35),
(1178, 'Domagoj Vida', 'Defensor', 21, '1989-04-29', 35),
(1179, 'Martin Erlić', 'Defensor', 5, '1998-01-24', 35),
(1180, 'Josip Stanišić', 'Defensor', 2, '2000-04-02', 35),
(1181, 'Borna Barišić', 'Defensor', 3, '1992-11-10', 35),
(1182, 'Luka Modrić', 'Meio-campo', 10, '1985-09-09', 35),
(1183, 'Mateo Kovačić', 'Meio-campo', 8, '1994-05-06', 35),
(1184, 'Marcelo Brozović', 'Meio-campo', 11, '1992-11-16', 35),
(1185, 'Lovro Majer', 'Meio-campo', 7, '1998-01-17', 35),
(1186, 'Mario Pašalić', 'Meio-campo', 15, '1995-02-09', 35),
(1187, 'Nikola Vlašić', 'Meio-campo', 13, '1997-10-04', 35),
(1188, 'Luka Ivanušec', 'Meio-campo', 16, '1998-11-26', 35),
(1189, 'Martin Baturina', 'Meio-campo', 26, '2003-02-16', 35),
(1190, 'Andrej Kramarić', 'Atacante', 9, '1991-06-19', 35),
(1191, 'Ivan Perišić', 'Atacante', 14, '1989-02-02', 35),
(1192, 'Bruno Petković', 'Atacante', 17, '1994-09-16', 35),
(1193, 'Marko Livaja', 'Atacante', 18, '1993-08-26', 35),
(1194, 'Ante Budimir', 'Atacante', 24, '1991-07-22', 35),
(1195, 'Mislav Oršić', 'Atacante', 25, '1992-12-29', 35),
(1196, 'Matija Frigan', 'Atacante', 4, '2003-02-11', 35);

-- GANA (ID 27)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1197, 'Lawrence Ati-Zigi', 'Goleiro', 1, '1996-11-29', 27),
(1198, 'Richard Ofori', 'Goleiro', 12, '1993-11-01', 27),
(1199, 'Abdul Manaf Nurudeen', 'Goleiro', 23, '1999-02-08', 27),
(1200, 'Mohammed Salisu', 'Defensor', 4, '1999-04-17', 27),
(1201, 'Daniel Amartey', 'Defensor', 18, '1994-12-21', 27),
(1202, 'Alexander Djiku', 'Defensor', 24, '1994-08-09', 27),
(1203, 'Tariq Lamptey', 'Defensor', 2, '2000-09-30', 27),
(1204, 'Gideon Mensah', 'Defensor', 14, '1998-07-18', 27),
(1205, 'Abdul Rahman Baba', 'Defensor', 17, '1994-07-02', 27),
(1206, 'Denis Odoi', 'Defensor', 3, '1988-05-27', 27),
(1207, 'Alidu Seidu', 'Defensor', 26, '2000-06-04', 27),
(1208, 'Thomas Partey', 'Meio-campo', 5, '1993-06-13', 27),
(1209, 'Mohammed Kudus', 'Meio-campo', 20, '2000-08-02', 27),
(1210, 'Salis Abdul Samed', 'Meio-campo', 21, '2000-03-26', 27),
(1211, 'Iddrisu Baba', 'Meio-campo', 6, '1996-01-22', 27),
(1212, 'Elisha Owusu', 'Meio-campo', 15, '1997-11-07', 27),
(1213, 'Majeed Ashimeru', 'Meio-campo', 8, '1997-10-10', 27),
(1214, 'Jordan Ayew', 'Atacante', 9, '1991-09-11', 27),
(1215, 'André Ayew', 'Atacante', 10, '1989-12-17', 27),
(1216, 'Iñaki Williams', 'Atacante', 19, '1994-06-15', 27),
(1217, 'Antoine Semenyo', 'Atacante', 25, '2000-01-07', 27),
(1218, 'Kamaldeen Sulemana', 'Atacante', 22, '2002-02-15', 27),
(1219, 'Osman Bukari', 'Atacante', 11, '1998-12-13', 27),
(1220, 'Joseph Paintsil', 'Atacante', 13, '1998-02-01', 27),
(1221, 'Ernest Nuamah', 'Atacante', 7, '2003-11-01', 27),
(1222, 'Ransford-Yeboah Königsdörffer', 'Atacante', 16, '2001-09-13', 27);

-- PANAMÁ (ID 4)
INSERT INTO `jogadores` (`id_jogador`, `nome_jogador`, `posicao`, `numero_camisa`, `data_nascimento`, `id_selecao`) VALUES
(1223, 'Orlando Mosquera', 'Goleiro', 1, '1994-12-25', 4),
(1224, 'Luis Mejía', 'Goleiro', 12, '1991-03-16', 4),
(1225, 'César Samudio', 'Goleiro', 22, '1994-03-26', 4),
(1226, 'Fidel Escobar', 'Defensor', 4, '1995-01-09', 4),
(1227, 'Andrés Andrade', 'Defensor', 16, '1998-10-16', 4),
(1228, 'José Córdoba', 'Defensor', 3, '2001-06-03', 4),
(1229, 'Michael Amir Murillo', 'Defensor', 23, '1996-02-11', 4),
(1230, 'Eric Davis', 'Defensor', 15, '1991-03-31', 4),
(1231, 'César Blackman', 'Defensor', 2, '1998-04-02', 4),
(1232, 'Roderick Miller', 'Defensor', 25, '1992-04-03', 4),
(1233, 'Iván Anderson', 'Defensor', 24, '1997-11-24', 4),
(1234, 'Adalberto Carrasquilla', 'Meio-campo', 8, '1998-11-28', 4),
(1235, 'Aníbal Godoy', 'Meio-campo', 20, '1990-02-10', 4),
(1236, 'Édgar Bárcenas', 'Meio-campo', 10, '1993-10-23', 4),
(1237, 'Cristian Martínez', 'Meio-campo', 6, '1997-02-06', 4),
(1238, 'Jovani Welch', 'Meio-campo', 5, '1999-12-07', 4),
(1239, 'César Yanis', 'Meio-campo', 21, '1996-01-28', 4),
(1240, 'Alberto Quintero', 'Meio-campo', 19, '1987-12-18', 4),
(1241, 'Ismael Díaz', 'Atacante', 11, '1997-05-12', 4),
(1242, 'José Fajardo', 'Atacante', 17, '1993-08-18', 4),
(1243, 'Cecilio Waterman', 'Atacante', 18, '1991-04-13', 4),
(1244, 'Eduardo Guerrero', 'Atacante', 9, '2000-02-21', 4),
(1245, 'Rolando Blackburn', 'Atacante', 7, '1990-01-09', 4),
(1246, 'Freddy Góndola', 'Atacante', 13, '1995-09-18', 4),
(1247, 'Kahiser Lenis', 'Atacante', 14, '2000-07-23', 4),
(1248, 'Tomás Rodríguez', 'Atacante', 26, '1999-03-09', 4);

-- -----------------------------------------------------
-- 4. Inserindo Partidas - Fase de Grupos (Resultados Simulados)
-- -----------------------------------------------------
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES

-- GRUPO A: Avançam México (2), África do Sul (29) e Coreia do Sul (16)
(1, '2026-06-11', 12, 2, 29, 2, 1, 2),    -- México 2x1 África do Sul
(2, '2026-06-11', 13, 16, 46, 1, 0, 16),  -- Coreia do Sul 1x0 Rep. Tcheca
(3, '2026-06-16', 12, 2, 16, 2, 0, 2),    -- México 2x0 Coreia do Sul
(4, '2026-06-16', 14, 29, 46, 3, 1, 29),  -- África do Sul 3x1 Rep. Tcheca
(5, '2026-06-21', 12, 2, 46, 3, 0, 2),    -- México 3x0 Rep. Tcheca
(6, '2026-06-21', 13, 29, 16, 1, 0, 29),  -- África do Sul 1x0 Coreia do Sul

-- GRUPO B: Avançam Canadá (1), Bósnia (48) e Suíça (42)
(7, '2026-06-12', 16, 1, 48, 1, 1, NULL), -- Canadá 1x1 Bósnia (Empate)
(8, '2026-06-12', 15, 19, 42, 0, 2, 42),  -- Catar 0x2 Suíça
(9, '2026-06-17', 16, 1, 19, 2, 0, 1),    -- Canadá 2x0 Catar
(10, '2026-06-17', 15, 48, 42, 1, 0, 48), -- Bósnia 1x0 Suíça
(11, '2026-06-22', 16, 1, 42, 2, 1, 1),   -- Canadá 2x1 Suíça
(12, '2026-06-22', 15, 48, 19, 3, 0, 48), -- Bósnia 3x0 Catar

-- GRUPO C: Avançam Brasil (8), Marrocos (23) e Escócia (43)
(13, '2026-06-13', 2, 8, 23, 2, 0, 8),    -- Brasil 2x0 Marrocos
(14, '2026-06-13', 9, 5, 43, 0, 1, 43),   -- Haiti 0x1 Escócia
(15, '2026-06-19', 9, 8, 5, 4, 0, 8),     -- Brasil 4x0 Haiti
(16, '2026-06-19', 10, 23, 43, 1, 1, NULL),-- Marrocos 1x1 Escócia (Empate)
(17, '2026-06-24', 10, 43, 8, 1, 3, 8),   -- Escócia 1x3 Brasil
(18, '2026-06-24', 3, 23, 5, 2, 0, 23),   -- Marrocos 2x0 Haiti

-- GRUPO D: Avançam Estados Unidos (3) e Turquia (47)
(19, '2026-06-12', 7, 3, 11, 2, 0, 3),    -- EUA 2x0 Paraguai
(20, '2026-06-13', 8, 18, 47, 0, 1, 47),  -- Austrália 0x1 Turquia
(21, '2026-06-18', 7, 3, 18, 3, 1, 3),    -- EUA 3x1 Austrália
(22, '2026-06-18', 6, 11, 47, 1, 2, 47),  -- Paraguai 1x2 Turquia
(23, '2026-06-23', 7, 3, 47, 1, 1, NULL), -- EUA 1x1 Turquia (Empate)
(24, '2026-06-23', 8, 11, 18, 0, 0, NULL),-- Paraguai 0x0 Austrália (Empate)

-- GRUPO E: Avançam Alemanha (38), Costa do Marfim (31) e Equador (10)
(25, '2026-06-14', 1, 38, 6, 5, 0, 38),   -- Alemanha 5x0 Curaçao
(26, '2026-06-14', 4, 31, 10, 1, 1, NULL),-- Costa do Marfim 1x1 Equador (Empate)
(27, '2026-06-19', 1, 38, 31, 2, 1, 38),  -- Alemanha 2x1 Costa do Marfim
(28, '2026-06-19', 5, 6, 10, 0, 3, 10),   -- Curaçao 0x3 Equador
(29, '2026-06-24', 1, 38, 10, 2, 0, 38),  -- Alemanha 2x0 Equador
(30, '2026-06-24', 4, 6, 31, 0, 4, 31),   -- Curaçao 0x4 Costa do Marfim

-- GRUPO F: Avançam Holanda (39), Japão (13) e Suécia (41)
(31, '2026-06-14', 3, 39, 13, 2, 1, 39),  -- Holanda 2x1 Japão
(32, '2026-06-15', 5, 41, 24, 2, 0, 41),  -- Suécia 2x0 Tunísia
(33, '2026-06-20', 3, 39, 41, 1, 0, 39),  -- Holanda 1x0 Suécia
(34, '2026-06-20', 10, 13, 24, 3, 1, 13), -- Japão 3x1 Tunísia
(35, '2026-06-25', 3, 39, 24, 3, 0, 39),  -- Holanda 3x0 Tunísia
(36, '2026-06-25', 5, 13, 41, 1, 1, NULL),-- Japão 1x1 Suécia (Empate)

-- GRUPO G: Avançam Bélgica (40) e Egito (25)
(37, '2026-06-15', 2, 40, 25, 1, 0, 40),  -- Bélgica 1x0 Egito
(38, '2026-06-15', 9, 14, 22, 0, 0, NULL),-- Irã 0x0 Nova Zelândia (Empate)
(39, '2026-06-20', 2, 40, 14, 2, 0, 40),  -- Bélgica 2x0 Irã
(40, '2026-06-21', 11, 25, 22, 2, 0, 25), -- Egito 2x0 Nova Zelândia
(41, '2026-06-25', 2, 40, 22, 3, 0, 40),  -- Bélgica 3x0 Nova Zelândia
(42, '2026-06-26', 9, 25, 14, 1, 0, 25),  -- Egito 1x0 Irã

-- GRUPO H: Avançam Espanha (37) e Uruguai (12)
(43, '2026-06-15', 7, 37, 28, 3, 0, 37),  -- Espanha 3x0 Cabo Verde
(44, '2026-06-16', 6, 20, 12, 0, 2, 12),  -- Arábia Saudita 0x2 Uruguai
(45, '2026-06-21', 7, 37, 20, 4, 0, 37),  -- Espanha 4x0 Arábia Saudita
(46, '2026-06-21', 8, 28, 12, 0, 3, 12),  -- Cabo Verde 0x3 Uruguai
(47, '2026-06-26', 7, 37, 12, 1, 1, NULL),-- Espanha 1x1 Uruguai (Empate)
(48, '2026-06-26', 6, 28, 20, 0, 0, NULL),-- Cabo Verde 0x0 Arábia Saudita (Empate)

-- GRUPO I: Avançam França (34), Senegal (30) e Noruega (45)
(49, '2026-06-16', 1, 34, 30, 2, 1, 34),  -- França 2x1 Senegal
(50, '2026-06-17', 4, 21, 45, 0, 2, 45),  -- Iraque 0x2 Noruega
(51, '2026-06-22', 1, 34, 21, 3, 0, 34),  -- França 3x0 Iraque
(52, '2026-06-22', 5, 30, 45, 1, 0, 30),  -- Senegal 1x0 Noruega
(53, '2026-06-27', 1, 34, 45, 2, 0, 34),  -- França 2x0 Noruega
(54, '2026-06-27', 4, 30, 21, 3, 1, 30),  -- Senegal 3x1 Iraque

-- GRUPO J: Avançam Argentina (7), Argélia (26) e Áustria (44)
(55, '2026-06-17', 3, 7, 26, 2, 0, 7),    -- Argentina 2x0 Argélia
(56, '2026-06-17', 10, 44, 17, 3, 0, 44), -- Áustria 3x0 Jordânia
(57, '2026-06-22', 3, 7, 44, 2, 1, 7),    -- Argentina 2x1 Áustria
(58, '2026-06-23', 11, 26, 17, 2, 0, 26), -- Argélia 2x0 Jordânia
(59, '2026-06-27', 3, 7, 17, 4, 0, 7),    -- Argentina 4x0 Jordânia
(60, '2026-06-27', 10, 26, 44, 1, 1, NULL),-- Argélia 1x1 Áustria (Empate)

-- GRUPO K: Avançam Portugal (36) e Colômbia (9)
(61, '2026-06-18', 2, 36, 32, 2, 0, 36),  -- Portugal 2x0 RD Congo
(62, '2026-06-18', 9, 15, 9, 0, 3, 9),    -- Uzbequistão 0x3 Colômbia
(63, '2026-06-23', 2, 36, 15, 3, 1, 36),  -- Portugal 3x1 Uzbequistão
(64, '2026-06-23', 11, 32, 9, 0, 2, 9),   -- RD Congo 0x2 Colômbia
(65, '2026-06-27', 2, 36, 9, 1, 1, NULL), -- Portugal 1x1 Colômbia (Empate)
(66, '2026-06-27', 9, 32, 15, 0, 0, NULL),-- RD Congo 0x0 Uzbequistão (Empate)

-- GRUPO L: Avançam Inglaterra (33), Croácia (35) e Gana (27)
(67, '2026-06-18', 7, 33, 35, 1, 0, 33),  -- Inglaterra 1x0 Croácia
(68, '2026-06-19', 6, 27, 4, 2, 0, 27),   -- Gana 2x0 Panamá
(69, '2026-06-24', 7, 33, 27, 2, 0, 33),  -- Inglaterra 2x0 Gana
(70, '2026-06-24', 8, 35, 4, 3, 1, 35),   -- Croácia 3x1 Panamá
(71, '2026-06-27', 7, 33, 4, 4, 0, 33),   -- Inglaterra 4x0 Panamá
(72, '2026-06-27', 6, 35, 27, 1, 1, NULL);-- Croácia 1x1 Gana (Empate)

-- -----------------------------------------------------
-- 5. Inserindo Partidas - Fases Eliminatórias (Mata-Mata)
-- -----------------------------------------------------

-- 16-avos de Final (Rodada de 32)
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(73, '2026-06-28', 7, 2, 48, 2, 0, 2),    -- México (2) 2x0 Bósnia (48)
(74, '2026-06-28', 8, 42, 29, 1, 0, 42),  -- Suíça (42) 1x0 África do Sul (29)
(75, '2026-06-29', 1, 8, 43, 3, 0, 8),    -- Brasil (8) 3x0 Escócia (43)
(76, '2026-06-29', 2, 3, 31, 2, 1, 3),    -- EUA (3) 2x1 Costa do Marfim (31)
(77, '2026-06-30', 3, 38, 41, 2, 0, 38),  -- Alemanha (38) 2x0 Suécia (41)
(78, '2026-06-30', 4, 39, 45, 3, 1, 39),  -- Holanda (39) 3x1 Noruega (45)
(79, '2026-07-01', 5, 40, 26, 2, 0, 40),  -- Bélgica (40) 2x0 Argélia (26)
(80, '2026-07-01', 6, 37, 27, 1, 0, 37),  -- Espanha (37) 1x0 Gana (27)
(81, '2026-07-02', 9, 34, 16, 2, 1, 34),  -- França (34) 2x1 Coreia do Sul (16)
(82, '2026-07-02', 10, 7, 1, 3, 0, 7),    -- Argentina (7) 3x0 Canadá (1)
(83, '2026-07-03', 11, 36, 23, 1, 0, 36), -- Portugal (36) 1x0 Marrocos (23)
(84, '2026-07-03', 12, 33, 47, 2, 0, 33), -- Inglaterra (33) 2x0 Turquia (47)
(85, '2026-07-04', 13, 12, 10, 2, 1, 12), -- Uruguai (12) 2x1 Equador (10)
(86, '2026-07-04', 14, 9, 13, 1, 0, 9),   -- Colômbia (9) 1x0 Japão (13)
(87, '2026-07-05', 15, 35, 30, 1, 1, 35), -- Croácia (35) 1x1 Senegal (30) | Pênaltis: Croácia
(88, '2026-07-05', 16, 44, 25, 2, 1, 44); -- Áustria (44) 2x1 Egito (25)

-- Oitavas de Final
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(89, '2026-07-06', 1, 2, 8, 1, 2, 8),     -- México (2) 1x2 Brasil (8)
(90, '2026-07-06', 2, 42, 3, 0, 1, 3),    -- Suíça (42) 0x1 EUA (3)
(91, '2026-07-07', 3, 38, 40, 2, 1, 38),  -- Alemanha (38) 2x1 Bélgica (40)
(92, '2026-07-07', 4, 39, 37, 0, 1, 37),  -- Holanda (39) 0x1 Espanha (37)
(93, '2026-07-08', 7, 34, 36, 2, 0, 34),  -- França (34) 2x0 Portugal (36)
(94, '2026-07-08', 8, 7, 33, 2, 1, 7),    -- Argentina (7) 2x1 Inglaterra (33)
(95, '2026-07-09', 9, 12, 35, 1, 0, 12),  -- Uruguai (12) 1x0 Croácia (35)
(96, '2026-07-09', 10, 9, 44, 2, 1, 9);   -- Colômbia (9) 2x1 Áustria (44)

-- Quartas de Final
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(97, '2026-07-11', 11, 8, 37, 2, 1, 8),   -- Brasil (8) 2x1 Espanha (37)
(98, '2026-07-11', 6, 3, 38, 0, 3, 38),   -- EUA (3) 0x3 Alemanha (38)
(99, '2026-07-12', 7, 34, 12, 1, 0, 34),  -- França (34) 1x0 Uruguai (12)
(100, '2026-07-12', 1, 7, 9, 2, 0, 7);    -- Argentina (7) 2x0 Colômbia (9)

-- Semifinais
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(101, '2026-07-14', 1, 8, 34, 2, 1, 8),   -- Brasil (8) 2x1 França (34)
(102, '2026-07-15', 3, 38, 7, 1, 0, 38);  -- Alemanha (38) 1x0 Argentina (7)

-- Disputa do Terceiro Lugar
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(103, '2026-07-18', 10, 34, 7, 3, 2, 34); -- França (34) 3x2 Argentina (7) | França fica com o terceiro lugar

-- Grande Final
INSERT INTO `partidas` (`id_partida`, `data_partida`, `id_estadio`, `id_selecao_1`, `id_selecao_2`, `quantidade_gols_selecao_1`, `quantidade_gols_selecao_2`, `vencedor`) VALUES
(104, '2026-07-19', 2, 8, 38, 2, 0, 8);   -- Brasil (8) 2x0 Alemanha (38) | Brasil Campeão!