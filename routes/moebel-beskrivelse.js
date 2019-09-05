const db = require("../config/mysql")();
module.exports = function(app) {
    app.get("/moebel/beskrivelse/:id", (req, res, next) => {
        let sql = `SELECT
            moebler.id,
            moebler.vare_nr,
            moebler.moebel_serie,
            moebler.designer,
            moebler.designer_yy,
            moebler.pris,
            moebler.beskrivelse,
            moebler.billede,
            moebler.billede_1,
            moebler.billede_2,
            moebler.billede_3,
            moebler.navn
            FROM
            termin.moebler
            WHERE 
            id = ?`;
        db.query(sql, [req.params.id], function(err, results) {
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("moebel-beskrivelse", { result: results[0] });
          }
        });
      });
}