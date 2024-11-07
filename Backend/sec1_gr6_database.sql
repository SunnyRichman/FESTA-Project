CREATE DATABASE  IF NOT EXISTS `sec1_gr6_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sec1_gr6_database`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: sec1_gr6_database
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_admin`
--

DROP TABLE IF EXISTS `_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_admin` (
  `Fname` varchar(50) NOT NULL,
  `Lname` varchar(50) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `_Password` varchar(50) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_admin`
--

LOCK TABLES `_admin` WRITE;
/*!40000 ALTER TABLE `_admin` DISABLE KEYS */;
INSERT INTO `_admin` VALUES ('Admin1','Fake','adminf001','admin1'),('Admin2','Fake','adminf002','admin2'),('Jidapa','Kraisangka','Jidapa.kra','adminPa'),('Patthanasak','Mongkolwat','Patthanasak.mon','PatTheDean'),('Engaugsorn','Augsornthoeng','u6588005','admin005'),('Kongpum','Bunkueakarunrak','u6588009','admin009'),('Shalom','Inchoi','u6588023','admin023'),('Punnavit','Amatasriprasert','u6588082','admin082'),('Raweerot','Bhasidhchirapiroch','u6588132','admin132'),('Wudhichart','Sawangphol','Wudhichart.saw','adminWud');
/*!40000 ALTER TABLE `_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `Title` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `cover` varchar(200) NOT NULL,
  `cassetteTape` int DEFAULT NULL,
  `vinylDisc` int DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `contributeArtist` varchar(50) NOT NULL,
  `albumType` char(2) NOT NULL,
  `releaseYear` int DEFAULT NULL,
  PRIMARY KEY (`Title`),
  CONSTRAINT `album_chk_1` CHECK ((`releaseYear` between 1960 and 2024))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES ('80 Kisses',6990,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/polycat.jpg',1,0,'Smallroom','Polycat','LP',2016),('Are You Serious',2400,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/Serious%20Bacon.jpg',12,20,'Muzik Move Records','Serious Bacon','LP',2022),('B',2200,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/B.png',0,48,'Smallroom','Slur','LP',2015),('BLISS',1500,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/INK.jpg',13,50,'Muzik Move Records','Ink Waruntorn','EP',2017),('D Gerrard',3900,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/D.png',1,3,'Warner Music Thailand','D Gerrard','LP',2019),('ETC Studio Live Session',3000,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/main/Album/ETC.jpg',10,43,'Muzik Move Records','ETC','LP',2022),('ICE Saranyu',450,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/main/Album/ICE.jpg',11,0,'GMM Grammy','Ice Saranyu','LP',2006),('Making Steak',4290,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/hybes.jpg',0,1,'JUICEY','HYBS','LP',2022),('Reun Pae Volume 6',1200,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/FESTAProject/Album/reun.png',0,5,'Smallroom','Tattoo Colour','LP',2022),('Volume 8: Chong-Proh',4900,'https://raw.githubusercontent.com/SunnyRichman/ICTLife/cac91c9743c2acaef131e0ace7d308acbc32a916/Album/Tattoo%20colour.jpg',0,0,'Smallroom','Tattoo Colour','LP',2008);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `aTitle` varchar(50) DEFAULT NULL,
  `songName` varchar(200) NOT NULL,
  `Duration` char(4) DEFAULT NULL,
  `_Key` varchar(2) DEFAULT NULL,
  KEY `aTitle` (`aTitle`),
  CONSTRAINT `song_ibfk_1` FOREIGN KEY (`aTitle`) REFERENCES `album` (`Title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES ('ETC Studio Live Session','Cheb-Lae-Chin-Pai-Aeng','6:03','F'),('ETC Studio Live Session','Kwam-Jing-Pen-Sing-Thee-Tai','4:24','C'),('ETC Studio Live Session','Khao-Khang-Tua-Aeng (Eek-Laew)','6:03','C'),('ETC Studio Live Session','Krai-Ni-Yarm','4:29','D'),('ETC Studio Live Session','Blur','6:10','B'),('ETC Studio Live Session','LIES','4:16','Bb'),('ETC Studio Live Session','Mai-Yark-Ja-Rub-Roo','4:20','Bb'),('ICE Saranyu','Khon-Jai-Ngai','3:41','Eb'),('ICE Saranyu','Khon-Dee-Dee-Tum-Mai-Mai-Rak','4:20','C#'),('ICE Saranyu','Eek-Narn-Mai','3:28','C#'),('ICE Saranyu','Khon-Man-Ruk','3:48','C'),('BLISS','Insomnia','4:52','Bb'),('BLISS','Cloudy','4:33','C#'),('BLISS','You?','4:14','Eb'),('BLISS','SNAP','3:58','F'),('BLISS','Old Feelings','4:20','C'),('Are You Serious','Phee-Phee-Tud-Wan-Hai-Noi','3:39','F#'),('Are You Serious','Mai-Yak-Fung','4:38','E'),('Are You Serious','1001 (You\'re lonely)','3:15','E'),('Are You Serious','Ja-Glub-Pai-Dee-Gub-Khao-Gor-Bork','3:20','D'),('Are You Serious','Mee-Pun-Ha-Pruek-Sa-Dao','3:39','G'),('Are You Serious','Mai-Phi-Set','3:58','E'),('Are You Serious','Kum-Lung-Tud-Jai','3:58','C#'),('Are You Serious','Hak-Wa-Chun','4:15','E'),('Volume 8: Chong-Proh','Ko-Hok','3:12','A'),('Volume 8: Chong-Proh','O-Kard-Sud-Taay','4:02','G'),('Volume 8: Chong-Proh','Jum-Yum-Mai','3:49','F'),('Volume 8: Chong-Proh','Kha-Moo','3:21','E'),('Volume 8: Chong-Proh','Chun-Ruk-Thoe (feat. F. HERO)','3:44','A'),('Volume 8: Chong-Proh','Cinderella','3:16','G'),('Volume 8: Chong-Proh','Poed-Pleng-Nai-Poed-Muea-Rai-Kor-Yung-Suai-Ngam','2:40','A'),('B','Hak-Jai','3:48','G'),('B','Popular Vote','4:32','G'),('B','Rhue','4:53','F'),('B','Hey-Thur','3:29','C'),('D Gerrard','Ban-Nok','4:28','G'),('D Gerrard','Hey-Bae','3:06','E'),('D Gerrard','Rat-Ti-Karn','3:30','F'),('D Gerrard','MAYA (feat P9D)','5:05','D'),('Making Steak','Dancing with my phone','3:23','F#'),('Making Steak','Ride','3:01','F'),('Making Steak','Would you mind','3:22','C'),('Making Steak','Rockstar','3:02','C#'),('Making Steak','Prettiest to me','3:22','F#'),('Reun Pae Volume 6','Ron-Khong','3:40','A'),('Reun Pae Volume 6','SuperCarCare','3:27','G'),('Reun Pae Volume 6','Tung-Jai-Rian','3:13','G'),('Reun Pae Volume 6','Yah-Yooh-Loei','3:46','G'),('Reun Pae Volume 6','Sao-Thur','3:08','A'),('Reun Pae Volume 6','Song-Kram-Yen','3:32','C'),('Reun Pae Volume 6','Yah-Rong-Aye-Khao','3:48','D'),('Reun Pae Volume 6','Jai-Gay-Ray','3:48','Bb'),('Reun Pae Volume 6','Laew-Tae-Mae-Khun','3:34','E'),('80 Kisses','Puen-Mai-Jing','4:34','A'),('80 Kisses','Wae-La-Thur-Yim','3:47','E'),('80 Kisses','Mun-Pen-Krai','3:39','C#'),('80 Kisses','Pob-Gun-Mai','5:14','C'),('80 Kisses','Pen-Proh-Fon','4:15','D');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21 10:30:45
