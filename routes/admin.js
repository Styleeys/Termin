module.exports = function(app) {
    app.get('/admin', (req, res) => {
        res.render((__dirname + '/admin-pages/admin-forside'));
    });
}