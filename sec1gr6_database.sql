DROP DATABASE IF EXISTS sec1_gr6_database;
CREATE DATABASE IF NOT EXISTS sec1_gr6_database;
USE sec1_gr6_database;

CREATE TABLE Album (
    Title VARCHAR(50) NOT NULL,
    Price INT NOT NULL,
    cover VARCHAR(200) NOT NULL,
    cassetteTape INT,     vinylDisc INT,
    label VARCHAR(50),
    contributeArtist VARCHAR(50) NOT NULL,
    albumType CHAR(2) NOT NULL,
    releaseYear INT CHECK (releaseYear BETWEEN 1960 AND 2024),
    PRIMARY KEY (Title)
);

INSERT INTO Album
VALUE ("ETC Studio Live Session",3000,"https://drive.google.com/thumbnail?id=1hba5L1Otw9lP2sgSBuA4qxJhE0JBkOwy",10,43,"Muzik Move Records","ETC","LP",2022),
("ICE Saranyu",450,"https://drive.google.com/thumbnail?id=1b7UKNaluWq_Wwj2zQa7e8VOPHhcZyPrK",11,0,"GMM Grammy","Ice Saranyu","LP",2006),
("BLISS",1500,"https://drive.google.com/thumbnail?id=1yCGevL6qwjZIwRGMKGf5kEVB6LHmVELl",13,50,"Muzik Move Records","Ink Waruntorn","EP",2017),
("Are You Serious",2400,"https://drive.google.com/thumbnail?id=109Mr7CGTGkeCbjj6oBfevaRP1ItuzKPj",12,20,"Muzik Move Records","Serious Bacon","LP",2022),
("Volume 8: Chong-Proh",4900,"https://drive.google.com/thumbnail?id=https://drive.google.com/file/d/1FmdPiiPk-haJSknDGpYUg20CryC9zAj6/view?usp=sharing",0,0,"Smallroom","Tattoo Colour","LP",2008),
("B",2200,"https://drive.google.com/thumbnail?id=1_tPC954AgHGAX22J3bYA9NM7M4LuZgp9",0,48,"Smallroom","Slur","LP",2015),
("D Gerrard",3900,"https://drive.google.com/thumbnail?id=1w-1xKJXod7FtsL_s_Y9rzOflNWOIf1_0",1,3,"Warner Music Thailand","D Gerrard","LP",2019),
("Making Steak",4290,"https://drive.google.com/thumbnail?id=1H8s78ETxhAT1vEpD03Wi6qP7tEqqB8Lo",0,1,"JUICEY","HYBS","LP",2022),
("Reun Pae Volume 6",1200,"https://drive.google.com/thumbnail?id=1eGvolJqENIR8A5TyBqUYPXN-_U8vQaGR",0,5,"Smallroom","Tattoo Colour","LP",2022),
("80 Kisses",6990,"https://drive.google.com/thumbnail?id=1-kTIbmfLRL5uc2jLQO6vQkrXF8xmaod5",1,0,"Smallroom","Polycat","LP",2016);

CREATE TABLE _Admin (
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    _Password VARCHAR(50) NOT NULL,
    PRIMARY KEY (Username)
);

INSERT INTO _Admin()
VALUE ("Engaugsorn","Augsornthoeng","u6588005","admin005"),
("Kongpum","Bunkueakarunrak","u6588009","admin009"),
("Shalom","Inchoi","u6588023","admin023"),
("Punnavit","Amatasriprasert","u6588082","admin082"),
("Raweerot","Bhasidhchirapiroch","u6588132","admin132"),
("Jidapa","Kraisangka","Jidapa.kra","adminPa"),
("Wudhichart","Sawangphol","Wudhichart.saw","adminWud"),
("Patthanasak","Mongkolwat","Patthanasak.mon","PatTheDean"),
("Admin1","Fake","adminf001","admin1"),
("Admin2","Fake","adminf002","admin2");

CREATE TABLE Song (
    aTitle VARCHAR(50),
    songName VARCHAR(200) NOT NULL,
    Duration CHAR(4),
    _Key VARCHAR(2),
    FOREIGN KEY (aTitle) REFERENCES Album(Title)
);

INSERT INTO Song
VALUE ("ETC Studio Live Session","Cheb-Lae-Chin-Pai-Aeng","6:03","F"),
("ETC Studio Live Session","Kwam-Jing-Pen-Sing-Thee-Tai","4:24","C"),
("ETC Studio Live Session","Khao-Khang-Tua-Aeng (Eek-Laew)","6:03","C"),
("ETC Studio Live Session","Krai-Ni-Yarm","4:29","D"),
("ETC Studio Live Session","Blur","6:10","B"),
("ETC Studio Live Session","LIES","4:16","Bb"),
("ETC Studio Live Session","Mai-Yark-Ja-Rub-Roo","4:20","Bb"),
("ICE Saranyu","Khon-Jai-Ngai","3:41","Eb"),
("ICE Saranyu","Khon-Dee-Dee-Tum-Mai-Mai-Rak","4:20","C#"),
("ICE Saranyu","Eek-Narn-Mai","3:28","C#"),
("ICE Saranyu","Khon-Man-Ruk","3:48","C"),
("BLISS","Insomnia","4:52","Bb"),
("BLISS","Cloudy","4:33","C#"),
("BLISS","You?","4:14","Eb"),
("BLISS","SNAP","3:58","F"),
("BLISS","Old Feelings","4:20","C"),
("Are You Serious","Phee-Phee-Tud-Wan-Hai-Noi","3:39","F#"),
("Are You Serious","Mai-Yak-Fung","4:38","E"),
("Are You Serious","1001 (You're lonely)","3:15","E"),
("Are You Serious","Ja-Glub-Pai-Dee-Gub-Khao-Gor-Bork","3:20","D"),
("Are You Serious","Mee-Pun-Ha-Pruek-Sa-Dao","3:39","G"),
("Are You Serious","Mai-Phi-Set","3:58","E"),
("Are You Serious","Kum-Lung-Tud-Jai","3:58","C#"),
("Are You Serious","Hak-Wa-Chun","4:15","E"),
("Volume 8: Chong-Proh","Ko-Hok","3:12","A"),
("Volume 8: Chong-Proh","O-Kard-Sud-Taay","4:02","G"),
("Volume 8: Chong-Proh","Jum-Yum-Mai","3:49","F"),
("Volume 8: Chong-Proh","Kha-Moo","3:21","E"),
("Volume 8: Chong-Proh","Chun-Ruk-Thoe (feat. F. HERO)","3:44","A"),
("Volume 8: Chong-Proh","Cinderella","3:16","G"),
("Volume 8: Chong-Proh","Poed-Pleng-Nai-Poed-Muea-Rai-Kor-Yung-Suai-Ngam","2:40","A"),
("B","Hak-Jai","3:48","G"),
("B","Popular Vote","4:32","G"),
("B","Rhue","4:53","F"),
("B","Hey-Thur","3:29","C"),
("D Gerrard","Ban-Nok","4:28","G"),
("D Gerrard","Hey-Bae","3:06","E"),
("D Gerrard","Rat-Ti-Karn","3:30","F"),
("D Gerrard","MAYA (feat P9D)","5:05","D"),
("Making Steak","Dancing with my phone","3:23","F#"),
("Making Steak","Ride","3:01","F"),
("Making Steak","Would you mind","3:22","C"),
("Making Steak","Rockstar","3:02","C#"),
("Making Steak","Prettiest to me","3:22","F#"),
("Reun Pae Volume 6","Ron-Khong","3:40","A"),
("Reun Pae Volume 6","SuperCarCare","3:27","G"),
("Reun Pae Volume 6","Tung-Jai-Rian","3:13","G"),
("Reun Pae Volume 6","Yah-Yooh-Loei","3:46","G"),
("Reun Pae Volume 6","Sao-Thur","3:08","A"),
("Reun Pae Volume 6","Song-Kram-Yen","3:32","C"),
("Reun Pae Volume 6","Yah-Rong-Aye-Khao","3:48","D"),
("Reun Pae Volume 6","Jai-Gay-Ray","3:48","Bb"),
("Reun Pae Volume 6","Laew-Tae-Mae-Khun","3:34","E"),
("80 Kisses","Puen-Mai-Jing","4:34","A"),
("80 Kisses","Wae-La-Thur-Yim","3:47","E"),
("80 Kisses","Mun-Pen-Krai","3:39","C#"),
("80 Kisses","Pob-Gun-Mai","5:14","C"),
("80 Kisses","Pen-Proh-Fon","4:15","D");