var app = angular.module('bruVue', []);
var proxy = "https://cors-anywhere.herokuapp.com/";
app.controller('dataCtrl', function($scope, $http) {
    $http.get(proxy + "https://s3.amazonaws.com/bruvue-data/beer-data.json")
        .then(function(response) {
            $scope.beerInfo = response.data;
            for (var i = 0; i <= response.data.length; i++) {
                console.log(response.data[i]['Brewery Name']);

            }


        });
});