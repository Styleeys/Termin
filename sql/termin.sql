-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 06. 09 2019 kl. 01:09:17
-- Serverversion: 10.1.34-MariaDB
-- PHP-version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `termin`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `brugernavn` varchar(45) DEFAULT NULL,
  `adgangskode` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `login`
--

INSERT INTO `login` (`id`, `brugernavn`, `adgangskode`) VALUES
(1, 'admin', '$2b$10$rsUF22rsxWo/gdF7C/UF8e6qRRu5RoNqVscGrMos3O0405685kuNK');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `moebler`
--

CREATE TABLE `moebler` (
  `id` int(11) NOT NULL,
  `vare_nr` varchar(45) DEFAULT NULL,
  `moebel_serie` varchar(45) DEFAULT NULL,
  `designer` varchar(45) DEFAULT NULL,
  `designer_yy` varchar(45) DEFAULT NULL,
  `pris` varchar(45) DEFAULT NULL,
  `beskrivelse` varchar(450) DEFAULT NULL,
  `navn` varchar(45) DEFAULT NULL,
  `billede` varchar(45) DEFAULT NULL,
  `billede_1` varchar(45) DEFAULT NULL,
  `billede_2` varchar(45) DEFAULT NULL,
  `billede_3` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `moebler`
--

INSERT INTO `moebler` (`id`, `vare_nr`, `moebel_serie`, `designer`, `designer_yy`, `pris`, `beskrivelse`, `navn`, `billede`, `billede_1`, `billede_2`, `billede_3`) VALUES
(1, '123456', 'sofa', 'Karl Rüdiger', '2004', '4470', 'Less er det seneste bud på en danskproduceret kvalitetssofa, der repræsenterer det bedste i CMK møblers designfilosifi. Gennemført kvalitet til menneskelige priser. Det er eget design helt fra bunden med en kerne i massivt træ og polstring i det bedste skum. Derfor er der også 7 års garanti mod deformation på puderne. Ben i rustfrit stål.', 'Less', 'less_grey.jpg', 'less_grey.jpg', 'less_rod.jpg', 'less_sort.jpg'),
(2, '132456', 'sofa', 'Karl Rüdiger', '2005', '5765', 'Brisbane-serien har et stramt, stilsikkert formsprog, der fuldendes af et elegant chromstel. Vælg mellem to eksklusive læderkvaliteter og en blød stofudgave – alle i mange spændende farvevarianter. ', 'Brisbane', 'brisbane_rod.jpg', 'brisbane_grey.jpg', 'brisbane_sort.jpg', 'brisbane_rod.jpg'),
(3, '241345', 'sofabord', 'Hans J. Wegner', '2004', '2999', 'Bari bordet er ægte dansk håndværk af massiv amerikansk ege- eller valnøddetræ.', 'Bari', 'bari_valnut.jpg', 'bari_eg.jpg', 'bari_boe.jpg', 'bari_valnut.jpg'),
(4, '412632', 'spisebord', 'Bruno Mathsson', '2006', '6599', 'De mange variationsmuligheder i materialer, former og størrelser gør cromo bord-serien velegnet til et utal af formål. Med deres kvadratiske, rektangulære, cirkulære, super-cirkulære eller superelliptiske former tilgodeser bordene stort set alle indretningsbehov. Spændebenene fås forkromet og satinforkromet, mens søjlefodsbordene har satinpoleret aluminiumsfod. ', 'Cromo', 'como_crome.jpg', 'como_eg.jpg', 'como_valnut.jpg', 'como_crome.jpg'),
(5, '214325', 'spisebord', 'Morten Voss', '2001', '12999', 'Ovalt eller rundt bord i finer, mdf og stål. Lakeret, lamineret eller fineret bordplade mat eller højglans lak.', 'Corona', 'corona_eg.jpg', 'corona_hvid.jpg', 'corona_sort.jpg', 'corona_eg.jpg'),
(6, '482616', 'spisestol', 'Kasper Salto', '2006', '1349', 'ETC er innovation fra fremtiden designet af Kasper Salto. ETC har dyderne med fra fortidens klassiske stole omsat til nutidens materialevalg og er velegnet både til indendørs og udendørs brug. Rammen er aluminium, og ryggen og sædet er støbt i kunststof. Resultatet er en let, meget komfortabel og robust stol. Satinlooket fuldender indtrykket af Ice som en stol fra fremtiden.', 'ETC', 'ETC_orange.jpg', 'ETC_red.jpg', 'ETC_smoke.jpg', 'ETC_orange.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `nyheder`
--

CREATE TABLE `nyheder` (
  `id` int(11) NOT NULL,
  `overskrift` varchar(100) DEFAULT NULL,
  `dato` varchar(25) DEFAULT NULL,
  `tekst` mediumtext,
  `forfatter` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `nyheder`
--

INSERT INTO `nyheder` (`id`, `overskrift`, `dato`, `tekst`, `forfatter`) VALUES
(1, 'En salatskål - er ikke bare en salatskål... ', '2019-08-11', 'Nej, en salatskål fra det århusianske firma Ego skal være både flot, fræk og ikke mindst funktionel. Fx med en forhøjning i midten, hvor salatbestikket kan hvile, mener direktør i Ego, Michael Bruun, og designer Steffen Schmelling. Sammen står de bag en række lækre produkter til køkken og spisebord. - Vores design er lidt en reaktion på noget, der har været meget af, nmelig \"holderen til holderen\" - design for designets skyld. Det skal være super funktionelt og samtidig noget der overrasker brugeren, mener Michael Bruun. Både indkøbere og kunder har taget overmåde godt imod produkterne, som også møder succes internationalt, og de vil være at finde i butikkerne fra juni 2006.', 'Af Iber Børgesen'),
(2, 'Formland 2006 - Potten i gummi fik prisen', '2019-08-09', 'Pot for One Flower - vinder af Formland Prisen i foråret 2006. 10 farver, to stk. for 149 kr., Normann Copenhagen. En ganske lille, men alligevel helt innovativ urtepotte i gummi løb med Formland Prisen, der uddeles hvert halve år på messen Formland i Herning. Med prisen følger 100.000 kr. til markedsføring. Pot for One Flower, som vinderen hedder, er designet af Boris Berlin og Poul Christiansen fra Komplot. Design for Normann Copenhagen. Fra dommer-komiteen lød det, at Normann tidligere har anvendt gummi til bl.a. en vaskebalje, et dørslag og en tragt, og nu fuldendes serien med et produkt til bordet. De to andre nominerede til Formland Prisen var et par solide børnemøbler fra firmaet Collect Furniture samt vasen Confetti fra Rosendahl. Møblerne er designet i skæve vinkler, der hindrer, at de vælter, og vasen er designet af Lin Utzon, der har dekoreret med forårsglade farver i nye sammensætninger. ', 'Af  Dorte Mosbæk  '),
(3, 'Innovativ duo bag ny møbelkollektion', '2019-07-05', 'Danskproducerede møbler til \"den moderne design- og kvalitetsbeviste forbruger\", som ikke vil købe de samme møbler som sine forældre.Det er nyeste idé fra den 28-årige møbelarkitekt René Hovgaard og møbelmanden Jens Hornbak, 32. Sammen danner de firmaet dnmark, som lige nu er aktuel med en helt ny møbelkollektion, der sælges landet over.Kollektionen indeholder bl.a. Daybed i læder fra 25.500 kr., stolen Pablo fra 1375 kr. og bordet Hornsleth Café skabt i samarbejde med kunstneren Kristian von Hornsleth fra 3300 kr. ', 'Af  Reimer bo '),
(4, 'Lightyears udfordrer markedet for designede lamper', '2019-07-26', 'Ny lampevirksomhed bag ambitiøs lancering af dansk design. I 2005 introduceres 15 forskellige lampeserier alle initieret af nulevende førende designere. Lightyears A/S er navnet på den nye aktør på markedet for boligbelysning i Skandinavien, som på Copenhagen International Furniture Fair i maj præsenterer den mest ambitiøse produktlancering for designede belysningsprodukter i Danmark i mange år. Designede lamper af høj kvalitet til en fair pris er den bærende forretningsidé. ”Visionen er at gøre designede lamper tilgængelige for en bred målgruppe af design- og kvalitetsbevidste forbrugere,” siger adm. dir. Lars Østergaard Olsen. ', 'Af Finn Jørgensen'),
(5, 'Montana / Bang & Olufsen arrangement i butikken i august. ', '2019-07-24', 'Vi arrangerer med B&O i Vingårdsgade et spændende arrangement, hvor vi præsenterer nyheder fra B&O samt Montana. Indretningsarkitekt fra Montana samt specialister fra B&O vil være tilstede. Vi er vært ved en let forfriskning. For nærmere info. / dato samt tidspunkter venligst kontakt Jan Sørensen i butikken.', 'Af Bent bøf');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `moebler`
--
ALTER TABLE `moebler`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `nyheder`
--
ALTER TABLE `nyheder`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `moebler`
--
ALTER TABLE `moebler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Tilføj AUTO_INCREMENT i tabel `nyheder`
--
ALTER TABLE `nyheder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
