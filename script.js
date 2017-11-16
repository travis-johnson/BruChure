var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/";
app.controller('dataCtrl', function($scope, $filter, $http) {
    $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json")
        .then(function(response) {
            $scope.beerInfo = response.data;
            // $scope.predicate = 'Beer Name';
            $scope.sortType = 'Beer Name'; // set the default sort type
            $scope.sortReverse = false; // set the default sort order
            $scope.searchBeer = ''; // set the default search filter term
            // console.log($scope.predicate);
            // for (var i = 0; i <= response.data.length; i++) {
            //     // console.log(response.data[i]['Beer Name']);
            //     $scope.predicate = response.data[i];


            // }
        });
});