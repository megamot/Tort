(function () {
  'use strict';

  angular
    .module('mean.masticake')
    .config(masticake);

  masticake.$inject = ['$stateProvider'];

  function masticake($stateProvider) {
    $stateProvider.state('masticake example page', {
      url: '/masticake/example',
      templateUrl: 'masticake/views/index.html'
    });
  }

})();
