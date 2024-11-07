const express = require("express");
const path = require("path")
const app = express();
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'/css')));
app.use('/HTML',express.static(path.join(__dirname,'/HTML')));
app.use('/Backend',express.static(path.join(__dirname,'../Backend')));

app.use(router);

    // User's zone

    // 1. Go to homepage
    router.get('/',(req,res) => { 
        console.log("Request at: /home")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/home.html`))
    })

    // 2. Go to page that show detail of each album
    router.get('/album/:title',(req,res) =>{
        var title = req.params.title
        console.log(`Request at: /${title}`);
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/detail.html`))
    })

    // 3. Go to search page
    router.get('/search',(req,res) => { 
        console.log("Request at: /search")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/search.html`))
    })

    // 4. Go to the page that show products which user looks for.
    router.get('/searchDetail',(req,res) => {
        console.log("Request at: /searchDetail");
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/searchDetail.html`))
    })

    // 5.Go to the page that show detail of searched product.
    router.get('/search/:title',(req,res) => { 
        console.log("Request at: /"+req.params.title);
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/detailSearch.html`))
    })
    
    // 6. Go to login page
    router.get('/login',(req,res) => { 
        console.log("Request at: /login")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/login.html`))
    })
    
    // 7. Go to team page.
    router.get('/team',(req,res) => { 
        console.log("Request at: /team")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/team.html`))
    })

    // Admin's zone

    // 8. Go to admin portal if login is valid
    router.get('/adminPortal',(req,res) => { 
        console.log("Request at: /adminPortal")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/adminPortal.html`))
    })

    // 9. Go to account management page.
    router.get('/accManagement',(req,res) => { 
        console.log("Request at: /adminPortal")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/accManagement.html`))
    })

    // 10. Go to album management page.
    router.get('/albumManagement',(req,res) => { 
        console.log("Request at: /albumManagement")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/albumManagement.html`))
    })

    // 11. Number 1., but for admin
    router.get('/admin/home',(req,res) => { 
        console.log("Request at: /admin/home")
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/adminhome.html`))
    })
    
    // 12. Number 2., but for admin
    router.get('/admin/album/:title',(req,res) => { 
        console.log("Request at: /admin/album/"+req.params.title);
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/admindetail.html`))
    })

    // 13. Number 3., but for admin
    router.get('/admin/search',(req,res) => { 
        console.log("Request at: /admin/search");
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/adminsearch.html`))
    })

    // 14. Number 4., but for admin
    router.get('/admin/searchDetail',(req,res) => { 
        console.log("Request at: /admin/searchDetail");
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/adminsearchDetail.html`))
    })

    // 15. Number 5., but for admin
    router.get('/admin/search/:title',(req,res) => { 
        console.log("Request at: /admin/"+req.params.title);
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/admindetailSearch.html`))
    })
    
    // 16. Number 7., but for admin
    router.get('/admin/team',(req,res) => { 
        console.log("Request at: /admin/team");
        res.statusCode = 200; // Status 200: OK
        res.sendFile(path.join(`${__dirname}/HTML/adminteam.html`))
    })

    // Every error detected on browser will be redirected to this page.
    router.use((req,res,next) => { 
        console.log("404: Invalid accesssed")
        res.sendFile(path.join(`${__dirname}/HTML/error.html`))       
        res.statusCode = 404; 
    })

/* Run Server */
app.listen(3000, function() {console.log("Server listening at Port " + 3000);});    