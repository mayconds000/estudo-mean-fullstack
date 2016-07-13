module.exports = function(app) {
  var controller = app.controllers.contatos;
  app.route('/contatos')
    .get(controller.listaContatos)
    .post(controller.salvaContato);

  app.route('/contatos/:id')
    .get(controller.getContato)
    .delete(controller.removeContato);
};
