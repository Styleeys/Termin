const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/admin/nyhed/opret', (req, res) => {
        res.render('admin-nyhed-opret');
    });

    app.post("/admin/nyhed/opret", (req, res, next) => {
      // opretter ny nyhed
        db.query(`INSERT INTO nyheder (overskrift, dato, tekst, forfatter) VALUES (?, ?, ?, ?)`,
          [
            req.fields.overskrift,
            req.fields.dato,
            req.fields.tekst,
            req.fields.forfatter,
          ],
          (err, results) => {
            //fejlhåndtering
            if (err) {
              res.send("");
              console.log("fejl:" + err);
            } else {
              res.redirect("/admin/nyhed/rediger/liste");
              // data indsat korrekt
            }
          }
        );
      });
}