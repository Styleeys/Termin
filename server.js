const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

app.use(express.static('./public'));

require('dotenv').config()
require('./config/session')(app);



require('./routes/forside')(app);
require('./routes/admin')(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})