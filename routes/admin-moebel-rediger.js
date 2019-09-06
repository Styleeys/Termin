const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/moebel/rediger/:id", (req, res, next) => {
    // selecter 1 møbel efter id 
    let sql = `SELECT
		    moebler.navn,
        moebler.pris,
		    moebler.designer,
        moebler.moebel_serie,
        moebler.designer_yy,
        moebler.vare_nr,
        moebler.beskrivelse
        FROM
        moebler
        WHERE
        id = ?`;
    db.query(sql, [req.params.id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("admin-moebel-rediger", { result: results[0] });
      }
    });
  });

  app.post("/admin/moebel/rediger/:id", (req, res) => {
    //opdatere møbel
    let sql = `UPDATE moebler
        SET 
        navn = ?,
        pris = ?,
        designer = ?,
        moebel_serie = ?,
        designer_yy = ?,
        vare_nr = ?,
        beskrivelse = ?
        WHERE id = ?`;
    db.query(sql,
      [
        req.fields.navn,
        req.fields.pris,
        req.fields.designer,
        req.fields.moebel_serie,
        req.fields.designer_yy,
        req.fields.vare_nr,
        req.fields.beskrivelse,
        req.params.id
      ],
      (err, results) => {
        //fejlhåndtering
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          res.redirect("/admin/moebel/rediger/liste");
        }
      }
    );
  });
};
