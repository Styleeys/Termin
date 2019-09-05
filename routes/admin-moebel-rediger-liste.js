const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/moebel/rediger/liste", (req, res) => {
    let sql = `SELECT
        moebler.id,
        moebler.navn
        FROM
        termin.moebler
        ORDER BY navn DESC`;
    db.query(sql, [req.fields.id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("admin-moebel-rediger-liste", { results: results });
      }
    });
  });
};