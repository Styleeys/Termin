const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/nyhed/rediger/:id", (req, res, next) => {
    // selecter 1 nyheder efter id 
    let sql = `SELECT
		    nyheder.overskrift,
        nyheder.dato,
		    nyheder.tekst,
        nyheder.forfatter
        FROM
        nyheder
        WHERE
        id = ?`;
    db.query(sql, [req.params.id], function(err, results) {
      //fejlhåndtering
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("admin-nyhed-rediger", { result: results[0] });
      }
    });
  });

  app.post("/admin/nyhed/rediger/:id", (req, res) => {
    //opdatere nyhed
    let sql = `UPDATE nyheder
        SET 
        overskrift = ?,
        dato = ?,
        tekst = ?,
        forfatter = ?
        WHERE id = ?`;
    db.query(sql,
      [
        req.fields.overskrift,
        req.fields.dato,
        req.fields.tekst,
        req.fields.forfatter,
        req.params.id
      ],
      (err, results) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          res.redirect("/admin/index");
        }
      }
    );
  });
};
