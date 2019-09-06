const db = require("../config/mysql")();

module.exports = function(app) {
    app.get("/", (req, res) => {
      // selecter 1 tilfældigt møbel fra databasen
        let sql = `SELECT *
            FROM termin.moebler
            ORDER BY RAND()
            LIMIT 1`;
        db.query(sql, function(err, wraps) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            // console.log(wraps);
            //flash sender data fra et route til et anden
            req.flash( {wrap: wraps[0]})
            res.redirect("/forside");
          }
        });
      });
}