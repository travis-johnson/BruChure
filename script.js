var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/";
app.controller('dataCtrl', function($scope, $filter, $http) {
    $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json")
        .then(function(response) {
            $scope.beerInfo = response.data;
            // $scope.predicate = 'Beer Name';
            $scope.propertyName = 'Beer%Name'; // set the default sort type
            $scope.reverse = true; // set the default sort order
            $scope.searchBeer = ''; // set the default search filter term

            $scope.sortBy = function(propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
        });
});