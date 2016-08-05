(function() {
angular.module('orderingModule') 
.controller('shipAddressController', setShipAddress);
setShipAddress.$inject = ['$scope'];
function setShipAddress($scope)
{
	console.log("In the shipAddressController");
	$scope.customer = [ 
	{
		"companyName": "Bottom-Dollar Markets",
		"contactName": "Elizabeth Lincoln",
		"address": "23 Tsawassen Blvd.",
		"city": "Tsawassen",
		"region": "BC",
		"postalCode": "T2F 8M4",
		"country": "Canada"
	}]
}})();