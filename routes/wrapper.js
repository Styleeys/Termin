const db = require("../config/mysql")();

module.exports = function(app) {
    app.get("/", (req, res) => {
        let sql = `SELECT *
            FROM termin.moebler
            ORDER BY RAND()
            LIMIT 1`;
        db.query(sql, function(err, wraps) {
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            // console.log(wraps);
            req.flash( {'wrap': wraps[0]})
            res.redirect("/forside");
          }
        });
      });
}