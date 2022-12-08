module.exports = function (app) {
    let Usuario = app.models.usuario;

    let HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        login: function (req, res) {
            let email = req.body.usuario.email;
            let nome = req.body.usuario.nome;

            if (email && nome) {
                let usuario = req.body.usuario;
                res.redirect('/contatos');
            } else {
                res.redirect('/')
            }
        },
        logout: function (req, res) {
           req.session.destroy();
           res.redirect('/');
        }
    };

    return HomeController;
}