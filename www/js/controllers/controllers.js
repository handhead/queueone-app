angular.module('starter.controllers', [])

.controller('ConsumerSignupCtrl', ['$scope', '$http', '$state','Consumer', function($scope, $http, $state, Consumer) {
  var self = this;
  this.consumer = {};

  this.signup = function(){
    console.log(self.consumer);
    Consumer.new(self.consumer).then(function(data){
      console.log('consumer added');
      $state.go('tutorial');
    },function(err){
      if(err.statusCode == 500)
        console.log('Dados duplicados');
    })
  };
}]);
