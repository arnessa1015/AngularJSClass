(function() {
angular.module('mainModule') 
.controller('aboutUsController', aboutUsCtrl);
aboutUsCtrl.$inject = ['$scope'];
function aboutUsCtrl($scope)
{
	$scope.company = {
		name: "Tom and Jerrie",
		street: "1600 Pennsylvania Ave",
		city:  "Washington",
		state: "DC",
		zip: "12345",
		phoneNbr:  "555-555-5555",
		email: "jerrie.moy@wal-mart.com",
		socFB: "www.facebook.com",
		socTwit: "www.twitter.com",
		socYT: "www.youtube.com"
	}
}})();
