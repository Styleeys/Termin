const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

app.use(express.static('./public'));

require('dotenv').config()
require('./config/session')(app);



require('./routes/nyheds-arkiv')(app);
require('./routes/forside')(app);
require('./routes/admin')(app);
require('./routes/admin-opret-nyhed')(app);
require('./routes/admin-rediger-liste')(app);
require('./routes/admin-rediger')(app);
require('./routes/moebel-soeg')(app);
require('./routes/moebel-beskrivelse')(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})