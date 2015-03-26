app.controller("mainController", function($scope, $http){

    $scope.init = function() {

    };
    .directive('validatePasswordCharacters', function () {
	    return {
	        require: 'ngModel',
	        link: function ($scope, element, attrs, ngModel) {
	            ngModel.$validators.eightCharacters = function (value) {
	                return (typeof value !== 'undefined')
	                    && value.length >= 8;
	            };
	        }
	    }
	})
});



