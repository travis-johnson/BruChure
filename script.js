// var app = angular.module('bruVue', []);
// var proxy = "https://cors-anywhere.herokuapp.com/";
// app.controller('dataCtrl', function($scope, $filter, $http) {
//     var sourceBeerData;
//     $scope.sortBy = sortBeerData;
//     $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json")
//         .then(function(response) {
//             sourceBeerData = response.data;
//             sourceBeerData.forEach(function(beer) {
//                 for (var key in beer) {
//                     var newKey = key.replace(' ', '_');
//                     beer[newKey] = beer[key];
//                 }
//                 return beer;
//             });

//             sortBeerData();

//             // $scope.predicate = 'Beer Name';
//             $scope.propertyName = 'Beer_Name'; // set the default sort type
//             $scope.reverse = true; // set the default sort order
//             $scope.searchBeer = ''; // set the default search filter term
//         });

//     function sortBeerData() {
//         $scope.beerInfo = sourceBeerData.sort(beerSort);
//     }

//     function beerSort(a, b) {
//         var output = 0;
//         if (a[$scope.propertyName] < b[$scope.propertyName]) output = -1;
//         if (a[$scope.propertyName] > b[$scope.propertyName]) output = 1;
//         if ($scope.reverse) output = -output;
//         return output;
//     };
// });

var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/";
app.controller('dataCtrl',
    function($scope, $filter, $http) {
        $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json").then(
            function(response) {
                // process data to remove spaces in key names
                $scope.beerInfo = [];
                response.data.forEach(
                    function(item) {
                        var record = {};
                        record.name = item['Beer Name'].trim();
                        record.brewery = item['Brewery Name'].trim();
                        record.style = item['Beer Style'].trim();
                        record.abv = item['ABV'];
                        record.ibu = item['IBU'];
                        $scope.beerInfo.push(record);
                        $scope.beerInfo;
                    });
                for (i = 0; i <= response.data.length; i++) {
                    $scope.beerData = response.data[i];

                }
                // $scope.propertyName = "Beer Name";
                $scope.reverse = false;
                $scope.searchBeer = ''; // set the default search filter term


            });

    });