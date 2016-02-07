//shared.js
angular
    .module('app')
    .controller('chartsCtrl', chartsCtrl);

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

chartsCtrl.$inject = ['$scope'];
function chartsCtrl($scope) {

    var elements = 16;
    var labels = [];
    var data = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
        data1.push(random(20,100));
        data2.push(random(60,100));
    }

    $scope.labels = labels;

    $scope.data = [data];
    $scope.data1 = [data1];
    $scope.data2 = [data2];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barStrokeWidth : 2,

        // pointDot :false,
        // scaleLineColor: 'transparent',
    };

    $scope.colours = [{
        fillColor : '#d1d4d7',
		strokeColor : "rgba(0,0,0,0)",
		highlightFill: '#818a91',
        pointStrokeColor: '#fff'
    }];
}
