angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('busca', {
    url: '/busca',
    templateUrl: 'templates/busca.html',
    controller: 'buscaCtrl'
  })

  .state('listaDePersonagens', {
    url: '/personagens',
    templateUrl: 'templates/listaDePersonagens.html',
    controller: 'listaDePersonagensCtrl'
  })

  .state('personagem', {
    url: '/personagem/:idPersonagem',
    templateUrl: 'templates/personagem.html',
    controller: 'personagemCtrl'
  })

$urlRouterProvider.otherwise('/busca')

  

});