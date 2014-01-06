'use strict';

angular.module('uiMediaApp')
  .service('Mediasservice',function Mediasservice($http) {
        var urlBase = 'http://0.0.0.0:1337/images';

        this.getMedias = function () {
            return $http.get(urlBase);
        };

        this.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        this.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        this.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        this.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        this.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        };
  });
