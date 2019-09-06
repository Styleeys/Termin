const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/forside", (req, res, next) => {
        //selecter 3 nyheder til forsiden, i orden efter faldende dato 
        let sql = `SELECT
            nyheder.id,
            nyheder.overskrift,
            nyheder.dato,
            nyheder.tekst,
            nyheder.forfatter
            FROM
            termin.nyheder
            ORDER BY dato DESC LIMIT 3`;
        db.query(sql, function(err, results, wraps) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            // console.log(wraps);
            
            res.render("forside", { results: results, wrap: wraps[0]});
          }
        });
      });
}