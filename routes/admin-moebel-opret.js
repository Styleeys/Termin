const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/admin/moebel/opret', (req, res) => {
        res.render('admin-moebel-opret');
    });

    app.post("/admin/moebel/opret", (req, res, next) => {
        db.query(`INSERT INTO moebler (navn, pris, designer, moebel_serie, designer_yy, vare_nr, beskrivelse) VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            req.fields.navn,
            req.fields.pris,
            req.fields.designer,
            req.fields.moebel_serie,
            req.fields.designer_yy,
            req.fields.vare_nr,
            req.fields.beskrivelse
          ],
          (err, results) => {
            if (err) {
              res.send("");
              console.log("fejl:" + err);
            } else {
              res.redirect("/admin/moebel/rediger/liste");
              // data indsat korrekt
            }
          }
        );
      });
}