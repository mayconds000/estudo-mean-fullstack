angular.module('contatooh').controller('ContatosController',
function(Contato, $scope){
  $scope.contato = [];
  $scope.filtro = '';
  $scope.mensagem = {text: ''};

  function buscaContatos(){
    Contato.query(function(contatos){
      $scope.contatos = contatos;
      $scope.mensagem = {};
    }, function(erro){
      $scope.mensagem = {texto: "Não foi possivel obter a lista de contatos"};
      console.log(erro);
    });
  };

  buscaContatos();

  $scope.remove = function(contato){
    Contato.remove({id: contato._id}),
    buscaContatos,
    function(erro){
      $scope.mensagem = {texto: "Não foi possivel remover o contato"};
        console.log(erro);
    }
  };

});
