const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/moebel/beskrivelse', (req, res) => {
        res.render('moebel-beskrivelse');
    });
}