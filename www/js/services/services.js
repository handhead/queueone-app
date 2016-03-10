angular.module('starter.services', [])

.service('ConnectionService', ['$rootScope', function($rootScope) {
  var connection = {
    status: 'disconnected',
    activity: false
  };

  var setConnection = function(status, activity) {
    connection.status = status;
    connection.activity = activity;
    $rootScope.$emit('updateConnection', connection);
  };

  var getConnection = function() {
    return connection;
  };

  return {
    getConnection: getConnection,
    setConnection: setConnection
  };
}])

.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.userInfos = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.userInfos || '{}');
  };

  var removeUser = function(){
    window.localStorage.removeItem("userInfos");
  };

  var setToken = function(token) {
    window.localStorage.userToken = JSON.stringify(token);
  };

  var getToken = function(){
    return JSON.parse(window.localStorage.userToken || '{}');
  };

  var removeToken = function(){
    window.localStorage.removeItem("userToken");
  };

  return {
    getUser: getUser,
    setUser: setUser,
    removeUser: removeUser,
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken
  };
});
