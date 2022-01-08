let app = angular.module("myapp",[]);

app.controller("myctrl", function($scope, $http) {
    
    $http.get('https://api.unsplash.com/photos/?client_id=etDeW5hv6WNMFNtfNUGwyp9zjzzNGtzl26beRpMltd8&per_page=20&page=8')
        .then(
        (response) => {
            $scope.images = response.data;
            console.log(response.data);
        },
        (error) => {
            console.log(error);
        }
    )
})

