angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('formService', [function(){
    return {
        form: {},
        getForm: function() {
            return this.form;
        },
        setForm: function(form) {
            this.form = form;
        }

    }
}]);

