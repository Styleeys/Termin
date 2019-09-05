const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/forside", (req, res, next) => {
        // console.log('session user.id er ' + req.session.user_id); //Chek id
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
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            // console.log(wraps);
            
            res.render("forside", { results: results, wrap: wraps});
          }
        });
      });
}