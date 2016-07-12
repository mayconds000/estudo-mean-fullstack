angular.module('contatooh').controller('ContatosController', function($scope, $resource){

  var Contato = $resource('/contatos/:id');
  $scope.contato = [];
  $scope.filtro = '';

  // var promise = Contato.query().$promise;
  // promise.then(function(contatos){
  //   $scope.contatos = contatos;
  // }).catch(function(erro){
  //   console.log('Nao foi possivel obter alista de contatos');
  //   console.log(statusText);
  // });

  function buscaContatos(){
    Contato.query(function(contatos){
      $scope.contatos = contatos;
    }, function(erro){
      console.log("Não foi possivel obter a lista de contatos");
      console.log(erro);
    });
  };

  buscaContatos();

  $scope.remove = function(contato){
    Contato.delete({id: contato._id}),
    buscaContatos,
    function(erro){
        console.log("Não foi possivel remover o contato");
        console.log(erro);
    }
  };

});
