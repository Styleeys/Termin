const db = require("../config/mysql")();
const uploadDir = './public/img/';
const fs = require('fs');
module.exports = function(app) {

    app.get("/admin/moebel/rediger/billede/:id", (req, res, next) => {
      //selecter billede efter id
        let sql = `SELECT
            moebler.billede,
            moebler.navn,
            moebler.id

            FROM
            moebler
            WHERE
            id = ?`;
        db.query(sql, [req.params.id], function(err, results) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
              
              console.log(results);
              
              
              
            res.render("admin-moebel-rediger-billede", { result: results[0]});
          }
        });
      });



    app.post('/img/:id', async (req, res, next) => {
      //tjekker om den valgte fil er et billede
        if(!/image/.test(req.files.billede.type)) {
            return res.send('Den oploadede fil er ikke et billede');
        }
        try {
            // var image = req.result.billede;
            // console.log(image);
             
            const data = fs.readFileSync(req.files.billede.path);
            const newFileName = Date.now() + '_' + req.files.billede.name;
            console.log(req.files.billede.name);
            fs.writeFileSync(uploadDir + newFileName, data);
            fs.unlinkSync(uploadDir + req.params.id);
            const result = await db.query('UPDATE moebler SET billede = ? WHERE id = ?', [newFileName, req.params.id]);
            res.redirect('/admin/index');
        } catch (error) {
            return next(error);
        }
    });
}