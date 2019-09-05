const express = require('express');
const app = express();

const session = require('./config/session')(app);

var flash = require('flash');
app.use(flash());

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

const fs = require('fs');

app.use(express.static('./public'));

require('dotenv').config()



let protectedRoutes = [
    '/admin/index',
    '/admin/nyhed/opret',
    '/admin/nyhed/rediger/liste',
    '/admin/nyhed/rediger'
];

app.use(protectedRoutes, (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/admin/login');
        return;
    } else {
        next();
    }
});



require('./routes/nyheds-arkiv')(app);
require('./routes/forside')(app);
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
// require('./routes/admin-moebel-slet')(app);



app.listen(3000, () => {
    console.log('http://localhost:3000');
})