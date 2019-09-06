const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/moebel/liste", (req, res, next) => {
        let sql = `SELECT
            moebler.id,
            moebler.vare_nr,
            moebler.moebel_serie,
            moebler.designer,
            moebler.designer_yy,
            moebler.pris,
            moebler.beskrivelse,
            moebler.billede,
            moebler.navn
            FROM
            termin.moebler`;
        db.query(sql, function(err, results) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("moebel-liste", { results: results });
          }
        });
      });
}