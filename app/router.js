module.exports = app => {
  //Chat
  app.io.route('chat', app.io.controllers.chat);
  app.io.of('/chat').route('chat', app.io.controllers.chat);
};