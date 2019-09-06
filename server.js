//loader alle npm pakker
const express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer();
const app = express();

const session = require('./config/session')(app);

var flash = require('flash');
app.use(flash());

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

const fs = require('fs');
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('./public'));

require('dotenv').config()


// for protected routes
let protectedRoutes = [
    '/admin/index',
    '/admin/nyhed/opret',
    '/admin/nyhed/rediger/liste',
    '/admin/nyhed/rediger',

    '/admin/moebel/opret',
    '/admin/moebel/rediger/liste',
    '/admin/moebel/rediger',
];

app.use(protectedRoutes, (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/admin/login');
        return;
    } else {
        next();
    }
});


// require all js files via module exports
require('./routes/nyheds-arkiv')(app);
require('./routes/forside')(app);
require('./routes/kontakt')(app);
require('./routes/wrapper')(app);

require('./routes/admin-login')(app);
require('./routes/admin-index')(app);
require('./routes/admin-nyhed-opret')(app);
require('./routes/admin-nyhed-rediger-liste')(app);
require('./routes/admin-nyhed-rediger')(app);
require('./routes/admin-nyhed-slet')(app);

require('./routes/moebel-soeg')(app);
require('./routes/moebel-beskrivelse')(app);
require('./routes/moebel-liste')(app);

require('./routes/admin-moebel-opret')(app);
require('./routes/admin-moebel-rediger-billede')(app);
require('./routes/admin-moebel-rediger-liste')(app);
require('./routes/admin-moebel-rediger')(app);
require('./routes/admin-moebel-slet')(app);

// lytter på hvilken port sereven skal kører på
app.listen(3000, () => {
    console.log('http://localhost:3000');
})