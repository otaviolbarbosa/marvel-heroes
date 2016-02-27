angular.module('app.controllers', [])
  
.controller('buscaCtrl', function($scope, formService, $state) {
    // 
    $scope.formPersonagem = {nome: '', limit: 20, offset: 0};

    $scope.enviaForm = function() {
        formService.setForm($scope.formPersonagem);

        $state.go('listaDePersonagens');
    }
})
   
.controller('listaDePersonagensCtrl', function($scope, $http, formService) {
    $scope.personagens = [];

    var personagemData = formService.getForm();
    var apiData        = {
        api: '26252970203837515310c48de7bf80f0',
        timestamp: 1455553214,
        hash: 'f52cb6f4d55cef23a0ae6346a89a4b30'
    };

    $http({
        method: 'GET',
        url:    'http://gateway.marvel.com/v1/public/characters?ts=' + apiData.timestamp + '&apikey=' + apiData.api + '&hash=' + apiData.hash + '&limit=' + personagemData.limit + '&offset=' + personagemData.offset + '&nameStartsWith=' + personagemData.nome
    }).then(
        function(response) {
            console.log(response);
            $scope.personagens = response.data.data.results;
        },
        function(response) {
            console.log(response);
        }
    );

})
   
.controller('personagemCtrl', function($scope, $http, $stateParams) {
    console.log($stateParams);

    $scope.personagem = {};
    var idPersonagem = $stateParams.idPersonagem;

    var apiData = {
        api: '26252970203837515310c48de7bf80f0',
        timestamp: 1455553214,
        hash: 'f52cb6f4d55cef23a0ae6346a89a4b30'
    };

    $http({
        method: 'GET',
        url:    'http://gateway.marvel.com/v1/public/characters/' + idPersonagem + '?ts=' + apiData.timestamp + '&apikey=' + apiData.api + '&hash=' + apiData.hash
    }).then(
        function(response) {
            console.log(response);
            $scope.personagem = response.data.data.results[0];
        },
        function(response) {
            console.log(response);
        }
    );

})
 