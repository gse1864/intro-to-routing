app.controller('DetailsController', function($scope, $routeParams, DataService){
    
    var idx = $routeParams.index;  //"index" represents what we put after the colon in the app.js
    
    $scope.detailPerson = DataService.data[idx];
});