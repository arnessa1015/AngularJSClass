(function() {
angular.module('sharedModule') 
.service('productService',productService);
productService.$inject = ['$http'];

console.log("In the productService");

	function productService($http)
	{
		this.getAllProducts = function () 
		{
			var promise = $http({
				url:'http://localhost:3000/api/product',
				method:"GET",
				data:{}
			});
			return promise;
		};
		
				
		
	}
})();
		
		/**
		var allProducts =[
			$scope.products = [
			{
				"productID" : 9,
				"productName" : "Alice Mutton",
				"supplierID" : 8,
				"categoryID" : 6,
				"quantityPerUnit" : "20 - 1 kg tins",
				"unitPrice" : 39.00,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			},
			{
				"productID" : 9,
				"productName" : "Mishi Kobe Niku",
				"supplierID" : 8,
				"categoryID" : 6,
				"quantityPerUnit" : "18 - 500 g pkgs.",
				"unitPrice" : 97.00,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			},
			{
				"productID" : 53,
				"productName" : "Perth Pasties",
				"supplierID" : 8,
				"categoryID" : 3,
				"quantityPerUnit" : "48 pieces",
				"unitPrice" : 32.80,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			},
			{
				"productID" : 55,
				"productName" : "Pâté chinois",
				"supplierID" : 8,
				"categoryID" : 3,
				"quantityPerUnit" : "24 boxes x 2 pies",
				"unitPrice" : 81.34,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			},
			{
				"productID" : 29,
				"productName" : "Thüringer Rostbratwurst",
				"supplierID" : 8,
				"categoryID" : 6,
				"quantityPerUnit" : "50 bags x 30 sausages.",
				"unitPrice" : 123.79,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			},
			{
				"productID" : 54,
				"productName" : "Tourtière",
				"supplierID" : 8,
				"categoryID" : 3,
				"quantityPerUnit" : "16 pies",
				"unitPrice" : 7.45,
				"unitsInStock" : 40,
				"unitsOnOrder" : 0,
				"reorderLevel" : 0,
				"discontinued" : 0,
				"featured" : true
			}
		] 
	]} return allProducts; 
	}
})();**/