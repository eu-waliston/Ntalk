module.exports = function (app) {
  let home = app.controller.home;
  app.get('/', home.index);
};

