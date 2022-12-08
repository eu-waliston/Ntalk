module.exports = function (app) {
    let ContatoController = {
        index: function (req, res) {
            let usuario = req.session.usuario
                , params = {usuario: usuario};
            res.render('contatos/index', params);
        }
    }
    return ContatoController;
};