module.exports = function(app) {
    let HomeController = {
        index: function(req, res) {
            res.render('home/index');
        }
    };
    return HomeController;
};