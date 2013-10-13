'use strict';

function NavCtrl($scope, $location){
    $scope.location = $location;
}

function HomeCtrl($scope){
    // herpie-derp
}

function ContactCtrl($scope){
    // google.maps.visualRefresh = true;
    angular.extend($scope, {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoomProperty: 8,
        markersProperty: [ {
            latitude: 45,
            longitude: -74
        }],
        clickedLatitudeProperty: null,  
        clickedLongitudeProperty: null,
    });
}
