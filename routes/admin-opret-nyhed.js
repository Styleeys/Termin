const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/admin/opret/nyhed', (req, res) => {
        res.render('admin-opret-nyhed');
    });

    app.post("/adminOpret", (req, res, next) => {
        db.query(`INSERT INTO nyheder (overskrift, dato, tekst, forfatter) VALUES (?, ?, ?, ?)`,
          [
            req.fields.overskrift,
            req.fields.dato,
            req.fields.tekst,
            req.fields.forfatter,
          ],
          (err, results) => {
            if (err) {
              res.send("");
              console.log("fejl:" + err);
            } else {
              res.redirect("/admin/index");
              // data indsat korrekt
            }
          }
        );
      });
}