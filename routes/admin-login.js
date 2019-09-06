const db = require("../config/mysql")();
const bcryptjs = require("bcryptjs");
module.exports = function(app) {

  app.get("/admin/login", (req, res) => {
      res.render("admin-login");
  });

  app.post("/admin/login", (req, res, next) => {
    //selecter login oplysninger
    db.query("SELECT id, adgangskode FROM login WHERE brugernavn = ?",
      [req.fields.brugernavn],
      (err, results) => {
        if (err) {
          //fejlhåndtering
          res.send("");
          console.log("fejl:" + err);
        } else if (results.length !== 1) {
          res.send("fejl 1 post");
        } else {
          // for af-kryptere adgangskode
          if (bcryptjs.compareSync(req.fields.adgangskode, results[0].adgangskode)) {
            req.session.user_id = results[0].id;
            res.redirect("/admin/index");
          } else {
            res.send("fejl 2 forkert login");
          }
        }
      }
    );
  });
};
