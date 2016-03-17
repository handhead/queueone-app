// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'starter.controllers', 'starter.directives', 'starter.services', 'starter.factories',
  'ngMaterial', 'ngMessages', 'ksSwiper'])

.run(function($ionicPlatform, ConnectionService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  io.socket.on('connect', function() {
    ConnectionService.setConnection('connected', true);
  });
  io.socket.on('disconnect', function() {
    ConnectionService.setConnection('disconnected', false);
  });
  io.socket.on('reconnecting', function() {
    ConnectionService.setConnection('reconnecting', false);
  });
  io.socket.on('reconnect', function() {
    ConnectionService.setConnection('connected', true);
  });
  io.socket.on('error', function() {
    ConnectionService.setConnection('disconnected', false);
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/tutorial');

  $stateProvider
    .state('tutorial',{
      url: '/tutorial',
      templateUrl: 'views/tutorial.html'
    })

    .state('account', {
      url: '/account',
      abstract: true,
      templateUrl: 'templates/account.html'
    })
    .state('account.consumer', {
      url: '/consumer',
      abstract: true,
      views: {
        'account': {
          templateUrl: 'templates/account/consumer.html'
        }
      }
    })
    .state('account.provider', {
      url: '/provider',
      abstract: true,
      views: {
        'account': {
          templateUrl: 'templates/account/provider.html'
        }
      }
    })
    .state('account.consumer.signin', {
      url: '/signin',
      views: {
        'consumer': {
          templateUrl: 'views/account/consumer/signin.html'
        }
      }
    })
    .state('account.consumer.signup', {
      url:'/signup',
      views:{
        'consumer':{
          templateUrl:'views/account/consumer/signup.html'
        }
      }
    })
    .state('account.provider.signin', {
      url: '/signin',
      views: {
        'provider': {
          templateUrl: 'views/account/provider/signin.html'
        }
      }
    })
    .state('account.provider.signup', {
      url: '/signup',
      views:{
        'provider':{
          templateUrl:'views/account/provider/signup.html'
        }
      }
    })

;});
