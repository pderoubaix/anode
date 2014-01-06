'use strict';



angular.module('uiMediaApp')
  .controller('MediaCtrl', function ($scope,$http,Mediasservice) {
        $scope.status;
        $scope.images;

        getMedias();

        function getMedias() {
            Mediasservice.getMedias()
                .success(function (custs) {
                    $scope.images = custs;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }
  });
