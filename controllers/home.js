module.exports = function (app) {
    let HomeController = {
        index: function (req, res) {
            res.header('home/index');
        }
    };
    return HomeController;
}