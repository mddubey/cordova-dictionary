var dictionary = angular.module('dictionary',[]);

dictionary.controller('dict',function ($scope) {
	$scope.keyword;
	$scope.searching;
	$scope.noKeyword = true;
    var readFileAndSearchKeyword = function(keyword){
    	jQuery.get('dictionary/dictionary.json',function(data){
    		if(typeof(data)=='string')
	    		data = JSON.parse(data);
	    	$scope.searching = false;
	    	$scope.result = data[keyword];
	    	$scope.$apply();
	    });
    }
        
    $scope.getMeaning = function(){
    	$scope.noKeyword = !($scope.keyword && ($scope.keyword.trim().length>0))
    	$scope.searching=true;
        readFileAndSearchKeyword($scope.keyword);
	}
});