angular.module('starter.factories', [])
  .factory('Consumer', ['$q', 'UserService', function($q, UserService) {
    return {
      new: function (consumer) {
        var deferred = $q.defer();

        console.log("fired factory");

        io.socket.request({
          method: 'post',
          url: '/consumer',
          params: consumer
        }, function (data, jwr) {
          console.log(jwr);
          console.log("fired response factory");
          if (jwr.statusCode == 200) {
            deferred.resolve(data);
            UserService.setToken(data.token);
          } else {
            deferred.reject(data);
          }
        });

        return deferred.promise;
      },
      list: function (page) {
        var deferred = $q.defer();

        io.socket.request({
          method: 'get',
          url: '/customers/' + page,
          headers: {
            Authorization: UserService.getToken()
          }
        }, function (data, jwr) {
          console.log(jwr);
          if (jwr.statusCode == 206) {
            deferred.resolve(data);
          } else {
            deferred.reject(data);
          }
        });

        return deferred.promise;
      },
      find: function (customer) {
        var deferred = $q.defer();

        io.socket.request({
          method: 'get',
          url: '/customer/' + customer.id,
          headers: {
            Authorization: UserService.getToken()
          }
        }, function (data, jwr) {
          console.log(jwr);
          if (jwr.statusCode == 200) {
            deferred.resolve(data);
          } else {
            deferred.reject(data);
          }
        });

        return deferred.promise;
      },
      update: function (customer) {
        var deferred = $q.defer();
        io.socket.request({
          method: 'put',
          url: '/customer/' + customer.id,
          params: customer,
          headers: {
            Authorization: UserService.getToken()
          }
        }, function (data, jwr) {
          console.log(jwr);
          if (jwr.statusCode == 200) {
            deferred.resolve(data);
          } else {
            deferred.reject(data);
          }
        });
        return deferred.promise;
      },
      delete: function (customer) {
        var deferred = $q.defer();
        io.socket.request({
          method: 'delete',
          url: '/customer/' + customer.id,
          headers: {
            Authorization: UserService.getToken()
          }
        }, function (data, jwr) {
          console.log(jwr);
          if (jwr.statusCode == 200) {
            deferred.resolve();
          } else {
            deferred.reject(data);
          }
        });
        return deferred.promise;
      },
      login: function (consumer) {
        var deferred = $q.defer();
        io.socket.request({
          method: 'post',
          url: '/consumer/signin',
          params: consumer,
          headers: {
            Authorization: UserService.getToken()
          }
        }, function (data, jwr) {
          if (jwr.statusCode == 200) {
            UserService.setToken(data.token);
            deferred.resolve();
          } else {
            deferred.reject();
          }
        });

        return deferred.promise;
      }
  };
  }]);
