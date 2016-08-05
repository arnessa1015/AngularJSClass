(function() {
angular.module('productModule') 
.controller('productListController', productListController);
productListController.$inject = ['$scope','productService','categoryService'];
	
	function productListController($scope, productService,categoryService)
	{
		
		console.log("In the productListController");
		$scope.categories = categoryService.getAllCategories();
		console.log($scope.categories);
		/** $scope.products = productService.getProducts();
		**/
		
		productService.getAllProducts().then(function (response){
			$scope.products = response.data;     
			console.log($scope.products);
		});
	}
})();