angular.module('starter.controllers', [])

  .controller('ConsumerSignupCtrl', ['$scope', '$http', '$state', 'Consumer', function ($scope, $http, $state, Consumer) {
    var self = this;
    this.consumer = {};

    this.newConsumer = function () {
      console.log(self.consumer);
      console.log("fired controller");
      Consumer.new(self.consumer).then(function (data) {
        console.log('consumer added');
        $state.go('tutorial');
      }, function (err) {
        if (err.statusCode == 500) console.log('Dados duplicados');
      })
    };
  }])

  .controller('SigninFormController', ['$scope', '$http', '$state', 'Consumer', function ($scope, $http, $state, Consumer) {
    var self = this;
    this.consumer = {};
    this.authError = null;

    this.signinConsumer = function () {
      console.log('fired');
      /*Consumer.login(self.consumer).then(function (response) {
       if (!response.data.consumer) {
       this.authError = 'CPF or Password not right';
       } else {
       $state.go('tutorial');
       }
       }, function (x) {
       this.authError = 'Server Error';
       });*/
    };
  }])

  .controller('ProviderSignupCtrl', ['$scope', '$http', '$state', 'Provider', function ($scope, $http, $state, Provider) {
    var self = this;
    this.consumer = {};

    this.newProvider = function () {
      console.log(self.provider);
      Provider.new(self.provider).then(function (data) {
        console.log('provider added');
        $state.go('tutorial');
      }, function (err) {
        if (err.statusCode == 500)
          console.log('Dados duplicados');
      })
    };
  }])

  .controller('TermsOfConsumers', function ($scope, $mdDialog, $mdMedia) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupTerms')))
          .clickOutsideToClose(true)
          .title('Termos')
          .textContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' +
            ' Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Aceito')
          .targetEvent(ev)
      );
    };
  })

  .controller('TermsOfProviders', function ($scope, $mdDialog, $mdMedia) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupTerms')))
          .clickOutsideToClose(true)
          .title('Termos')
          .textContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' +
            ' Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Aceito')
          .targetEvent(ev)
      );
    };
  });
