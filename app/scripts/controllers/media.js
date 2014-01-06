'use strict';

angular.module('uiMediaApp')
  .controller('MediaCtrl', function ($scope,$http) {
        $http.get('http://0.0.0.0:1337/images').
            success(function(data) {
                $scope.images = data;
            });
  });
