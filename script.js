var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/"; //this is to avoid having to use a plugin for cross-origin-resource sharing 
app.controller('dataCtrl',
    function($scope, $filter, $http) {
        $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json").then(
            function(response) {
                // process data to remove spaces in key names
                $scope.beerInfo = [];
                response.data.forEach(
                    function(item) {
                        var record = {};
                        //trims out the blank space in the keys and renders the new keys as something simple (ie.name, brewery)
                        record.name = item['Beer Name'].trim();
                        record.brewery = item['Brewery Name'].trim();
                        record.style = item['Beer Style'].trim();
                        record.abv = item['ABV'];
                        record.ibu = item['IBU'];
                        $scope.beerInfo.push(record); //inserts the new edited keys into the objects
                        $scope.beerInfo; //renders the new keys into an array
                    });
                //keeps the list in proper oder upon rendering
                $scope.reverse = false;
                $scope.searchBeer = ''; // set the default search filter term


            });

    });