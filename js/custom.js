(function(){
	angular
		.module("form",[])
        .controller("formController", function ($scope){
		
		$scope.formobject = {};
		$scope.saved = localStorage.getItem('contacts');
		$scope.contacts = (localStorage.getItem('contacts') !== null) ? JSON.parse($scope.saved): [{
			email: 'valerqaminko@gmail.com',
			password: 'vavava'
		}];
		
		localStorage.setItem('contacts', JSON.stringify($scope.contacts));
		
		$scope.saving = function(){
			$scope.contacts.push($scope.formobject);
			localStorage.setItem('contacts', JSON.stringify($scope.contacts));
			$scope.formobject = {};
		}
		
	});
	
	
	
})();