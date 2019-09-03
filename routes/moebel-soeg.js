const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/moebel/soegning', (req, res) => {
        res.render('moebel-soeg');
    });
}