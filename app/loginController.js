(function() {
angular.module('authModule') 
.controller('loginController', getLogin);
getLogin.$inject = ['$scope'];
function getLogin($scope)
{
	console.log("In the controller");	
	$scope.loginInfo = [
	{ 
		"userName":"Jerrie",
		"userPWD":12563
	}];
	$scope.successMessage = "You are now logged in as " + $scope.loginInfo.userName;
}
})();
