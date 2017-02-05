(function() {
  'use strict';

  angular.module('app')
    .component('form', {
      controllerAs: 'model'
      controller: controller,
      templateUrl: 'angular/form/form.template.html'
    });

    function controller(){

      const model = this;

      model.submitForm = function(){
        if (model.userForm.$valid) {
     				alert('our form is amazing');
       			}
      }
      
    }

}());
