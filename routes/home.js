module.exports = function(app) {
  let home = app.controllers.home;
  app.get('/', home.index);
}