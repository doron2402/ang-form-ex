'use strict';

/**
 * @ngdoc function
 * @name angFormApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angFormApp
 */
angular.module('angFormApp')
  .controller('ContactCtrl', function () {
    this.msg = 'Hi, Please feel free to contact us';
    this.isSubmit = false;
    this.submit = function(){

      this.isSubmit = true;
      debugger;
    };
  });
