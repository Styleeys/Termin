const db = require("../config/mysql")();
module.exports = function(app) {

  app.get('/admin/moebel/slet/:id', (req, res, next) => {
    // sletter møbel udfra req.params.id
    db.query('DELETE FROM moebler WHERE id = ?', [req.params.id], (err, result) => {
      //fejlhåndtering
        if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.redirect("/admin/index");
          }
    });
});
};