module.exports = (app) => {
  const { home } = app.controllers.home;
  app.get('/', home.index);
};