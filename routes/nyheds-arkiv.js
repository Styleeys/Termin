const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/nyheds/arkiv", (req, res, next) => {
        // console.log('session user.id er ' + req.session.user_id); //Chek id
        let sql = `SELECT
            nyheder.id,
            nyheder.overskrift,
            nyheder.dato,
            nyheder.tekst,
            nyheder.forfatter
            FROM
            termin.nyheder
            ORDER BY dato DESC`;
        db.query(sql, function(err, results) {
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("nyheds-arkiv", { results: results });
          }
        });
      });
}