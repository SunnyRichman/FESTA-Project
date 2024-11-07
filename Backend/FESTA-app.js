// Web service

// Import important modules
const express = require("express");
const path = require("path")
const app = express();
const cors = require('cors');

// Import and configure cors
let corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors(corsOptions))

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Import dotenv and configurate
const dotenv = require("dotenv");
dotenv.config();

/* Connection to MySQL */
const mysql = require('mysql2');
var connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

/* Connect to DB */
connection.connect(function(err){if(err) throw err;console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`);
});

app.use(router);

    // GET methods section

    // 1. Retreive all items to show at homepage
    router.get('/callItems',(req,res) =>{
        let album = `SELECT * FROM Album`;
        connection.query( album, function (error, results) {
            if (error) throw error;
            return res.send(results)
        })
    })

    // 2. Retreive all album title from table album
    router.get('/callAlbum',(req,res) => { 
        connection.query('SELECT Title From album', function (error, results){
        if (error) throw error;
        return res.send(results);
        });
    })

    // 3. Retreive all information about clicked album.
    router.get('/callDetail/:title',(req,res) =>{
        let title = req.params.title;
        title = title.replaceAll("%20"," ");
        connection.query('SELECT * FROM Song s INNER JOIN Album a ON s.aTitle = a.Title WHERE a.Title = ?', title, function (error, results) {
            if (error) throw error;
            return res.send(results);
        });
    })

    // 4. Retreive all information of every admins.
    router.get('/callAdmin',(req,res) =>{
        let query = `SELECT * FROM _admin`;
        connection.query( query ,function (error, results) {
            if (error) throw error;
            return res.send(results)
        })
    })

    // 5. Retreive account to check if information sent from login is valid.
    router.get('/callAcc',(req,res) =>{
        let user = req.query.Username
        connection.query( `SELECT * FROM _admin WHERE Username = ?`, user, function (error, results) {
            if (error) throw error;
            return res.send(results)
        })
    })

    // 6. Retreive all information according to what user looks for.
    router.get('/callSearch',(req,res) =>{
        console.log(req.query);
        let title = req.query.title;
        let artist = req.query.artist;
        let year = req.query.year;
        let type = req.query.eplp;
        let label = req.query.label;
        let lowprice = req.query.lowPrice;
        let highprice = req.query.highPrice;
        let sort = req.query.sort;
        let _query = `SELECT * FROM album WHERE 1=1`;

        if(title) _query += ` AND Title LIKE "%${title}%"`;
        if(artist) _query += ` AND contributeArtist LIKE "%${artist}%"`;
        if(year) _query += ` AND releaseYear = ${year}`;
        if(type) _query += ` AND albumType = "${type}"`;
        if(label) _query += ` AND label LIKE "%${label}%"`;
        if(lowprice && highprice){
            _query += ` AND Price BETWEEN ${lowprice} AND ${highprice}`;
        }else{
            if(lowprice) _query += ` AND Price >= ${lowprice}`;
            if(highprice) _query += ` AND Price <= ${highprice}`;
        }
        if(sort){
            switch (sort) {
                case "A2Z":
                    _query += ` ORDER BY Title ASC`
                    break;
    
                case "Z2A":
                    _query += ` ORDER BY Title DESC`
                    break;
    
                case "PriceASC":
                    _query += ` ORDER BY Price ASC`
                    break;
    
                case "PriceDESC":
                    _query += ` ORDER BY Price DESC`
                    break;
            }
        }
        console.log(_query)
        connection.query( _query, function (error, results) {
            if (error) throw error;
            return res.send(results)
        })
    })

    // End of GET method section

    // POST methods section

    // 7. Add new admin's information to table admin.
    router.post('/addAdmin',(req,res) => { 
        let value = req.body.Admin;
        let admin = req.body.Admin.Fname;
        connection.query(`INSERT INTO _admin VALUE ("${value.Fname}","${value.Lname}","${value._Username}","${value.Password}")`,function (error, results){
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: `Admin ${admin} has been added on our system successfully`})
        });
    })

    // 8. Add new album's information to table album.
    router.post('/addAlbum',(req,res) => { 
        let album = req.body.album;
        connection.query('INSERT INTO album SET ?', [album], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Album ${album.Title} has been added successfully`});
        });
    })

    // 9. Add new song's information to table song.
    router.post('/addSong',(req,res) => { 
        let song = req.body.song;
        connection.query('INSERT INTO song SET ?', [song], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Song ${song.songName} has been added successfully`});
        });
    })

    // End of POST methods section

    // PUT method section

    // 10. Update admin's information.
    router.put('/updateAdmin',(req,res) => { 
        let property = req.body.Admin.Edit;
        let value = req.body.Admin.Value;
        let username = req.body.Admin.Username;
        connection.query(`UPDATE _admin SET ${property} = "${value}" WHERE Username = "${username}"`, function (error, results){
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: `${username}'s ${property} has become ${value}.`})
        });
    })

    // 11. Update album's information.
    router.put('/updateAlbum',(req,res) => { 
        let property = req.body.song.property;
        let value = req.body.song.value;
        let album = req.body.song.title;
        connection.query(`UPDATE album SET ${property} = "${value}" WHERE Title = "${album}"`, function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Album ${album}'s ${property} has become ${value}`});
        });
    })

    // 12. Update song's information.
    router.put('/updateSong',(req,res) => { 
        let songName = req.body.song.song;
        let property = req.body.song.property;
        let value = req.body.song.value;
        let title = req.body.song.title;
        connection.query(`UPDATE song SET ${property} = "${value}" WHERE songName = "${songName}" AND aTitle = "${title}"`, function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Updated song`});
        });
    })

    // End of PUT methods section

    // DELETE methods section

    // 13. Delete admin by input admin's username.
    router.delete('/deleteAdmin/:username',(req,res) => { 
        let username = req.params.username;
        connection.query('DELETE FROM _admin WHERE Username = ?', [username], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Admin ${username} has been deleted successfully.`});
        });
    })

    // 14. Delete album by click at button which will sent the information to function and function will call this API.
    router.delete('/deleteAlbum/:title',(req,res) => { 
        let Title = req.params.title;
        Title = Title.replaceAll("%20"," ");
        connection.query(`DELETE FROM album WHERE Title = "${Title}"`, function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: Title});
        });
    })
    
    // 15. Delete song by click at button which will sent the information to function and function will call this API.
    router.delete('/deleteSong',(req,res) => { 
        let Album = req.body.album;
        let Song = req.body.song;
        connection.query('DELETE FROM song WHERE aTitle = ? AND songName = ?', [Album,Song], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: `Song ${Song} from album ${Album} has been deleted successfully.`});
        });
    })

    // End of DELETE methods section

    // Every error detected on browser will be redirected to this page.
    router.use((req,res,next) => { 
        console.log("404: Invalid accesssed")
        res.sendFile(path.join(`${__dirname}/../Frontend/HTML/error.html`))       
        res.statusCode = 404; 
    })

/* Run Server */
app.listen(process.env.PORT, function() {console.log("Server listening at Port " + process.env.PORT);});    