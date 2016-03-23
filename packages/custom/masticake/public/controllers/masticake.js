(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.masticake')
    .controller('MasticakeController', MasticakeController);

  MasticakeController.$inject = ['$scope', 'Global', 'Masticake'];

  function MasticakeController($scope, Global, Masticake) {
    $scope.global = Global;
    $scope.package = {
      name: 'masticake'
    };
  }
})();