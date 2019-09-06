const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/nyhed/rediger/liste", (req, res) => {
    // selecter alle nyheder i liste, faldende efter dato
    let sql = `SELECT
        nyheder.id,
        nyheder.overskrift
        FROM
        termin.nyheder
        ORDER BY dato DESC`;
    db.query(sql, [req.fields.id], function(err, results) {
      //fejlhåndtering
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("admin-nyhed-rediger-liste", { results: results });
      }
    });
  });


};