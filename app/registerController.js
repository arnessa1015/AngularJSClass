(function() {
angular.module('authModule') 
.controller('registrationController', register);
registration.$inject = ['$scope'];
function register($scope)
{
	$scope.registration = function registerUser(user){
	"firstName":"Jerrie",
	"lastName": "Moy" 
	}
	$scope.successMessage = user.firstName + " is successfully registered!";
	};
})();
