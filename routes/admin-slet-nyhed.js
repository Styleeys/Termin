const db = require("../config/mysql")();
module.exports = function(app) {

    app.post('/admin/slet/:id', (req, res, next) => {
        db.query('DELETE FROM nyheder WHERE id = ?', [req.params.id], (err, result) => {
            if (err) {
                res.send("");
                console.log("fejl:" + err);
              } else {
                res.redirect("/admin");
              }
        });
    });
};