(function() {
angular.module('orderingModule') 
.controller('shipViaController', setShipOptions);
setShipOptions.$inject = ['$scope'];
function setShipOptions($scope, id, name, price)
{
	console.log("In the shipViaController");
	$scope.shipViaOptions = [ 
	{id:1, name:'Next day', price:100},
	{id:2, name:'Two day', price:50},
	{id:3, name:'Ground', price:0}
	]
}})();
