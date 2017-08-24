function formController($scope,$localStorage){
		$scope.save = function(){
			$localStorage.message = "hello";
		}	
		
		$scope.load = function(){
			$localStorage.data = $localStorage.message;
		}
	}