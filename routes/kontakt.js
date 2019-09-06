var fs = require('fs');
var Hogan = require('hogan.js');
const sgMail = require('@sendgrid/mail');

var template = fs.readFileSync('./views/emailTemplate.ejs', 'utf-8');
var compiledTemplate = Hogan.compile(template);



module.exports = function (app) {
   app.get('/kontakt', (req, res) => {
       res.render('kontakt');
   });

   app.post('/kontakt', (req, res, next) => {
       // console.log(req.body);

       sgMail.setApiKey(process.env.KEY);
       const msg = {
     to: 'stylez5555@gmail.com',
     from: req.body.email,
     subject: req.body.emne,
     html: compiledTemplate.render({name: req.body.navn, tlf: req.body.tlf, besked: req.body.besked})
   };
   sgMail.send(msg);
       res.render('forside');
   });
}