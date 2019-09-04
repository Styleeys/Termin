const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

app.use(express.static('./public'));

require('dotenv').config()
require('./config/session')(app);

let protectedRoutes = [
    '/admin/index',
    '/admin/opret/nyhed',
    '/admin/rediger/liste'
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
require('./routes/admin-index')(app);
require('./routes/admin-opret-nyhed')(app);
require('./routes/admin-rediger-liste')(app);
require('./routes/admin-rediger-nyhed')(app);
require('./routes/admin-slet-nyhed')(app);
require('./routes/moebel-soeg')(app);
require('./routes/moebel-beskrivelse')(app);
require('./routes/moebel-liste')(app);
require('./routes/admin-login')(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})