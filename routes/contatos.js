module.exports = function(app) {
    let contatos = app.controllers.contatos;
    app.get('/contatos', contatos.index);
};