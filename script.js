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
                // for (i = 0; i <= response.data.length; i++) {
                //     $scope.beerData = response.data[i];

                // }
                $scope.reverse = false;
                $scope.searchBeer = ''; // set the default search filter term


            });

    });