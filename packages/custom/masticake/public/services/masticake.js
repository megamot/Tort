(function () {
  'use strict';

  angular
    .module('mean.masticake')
    .factory('Masticake', Masticake);

  Masticake.$inject = [];

  function Masticake() {
    return {
      name: 'masticake'
    };
  }
})();
