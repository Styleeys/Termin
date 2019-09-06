const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/nyheds/arkiv", (req, res, next) => {
        //selecter data i orden efter dato
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
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("nyheds-arkiv", { results: results });
          }
        });
      });
}