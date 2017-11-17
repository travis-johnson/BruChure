var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/";
app.controller('dataCtrl', function($scope, $filter, $http) {
    var sourceBeerData;
    $scope.sortBy = sortBeerData;
    $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json")
        .then(function(response) {
            sourceBeerData = response.data;
            sourceBeerData.forEach(function(beer) {
                for (var key in beer) {
                    var newKey = key.replace(' ', '_');
                    beer[newKey] = beer[key];
                }
                return beer;
            });

            sortBeerData();

            // $scope.predicate = 'Beer Name';
            $scope.propertyName = 'Beer_Name'; // set the default sort type
            $scope.reverse = true; // set the default sort order
            $scope.searchBeer = ''; // set the default search filter term
        });

    function sortBeerData() {
        $scope.beerInfo = sourceBeerData.sort(beerSort);
    }

    function beerSort(a, b) {
        var output = 0;
        if (a[$scope.propertyName] < b[$scope.propertyName]) output = -1;
        if (a[$scope.propertyName] > b[$scope.propertyName]) output = 1;
        if ($scope.reverse) output = -output;
        return output;
    };
});