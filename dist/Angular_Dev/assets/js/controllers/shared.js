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
        pointHitDetectionRadius : 0,
		showScale: false,
		scaleLineWidth: 0.001,
		scaleShowLabels : false,
		scaleShowGridLines : false,
		pointDot : false,
		showTooltips: false,
		responsive: true,
    };

    $scope.colours = [{
        fillColor : "rgba(0,0,0,0)",
		strokeColor : brandInfo,
		highlightFill: '#818a91',
        pointStrokeColor: '#fff'
    }];

    $scope.colours2 = [{
        fillColor : "rgba(0,0,0,0)",
		strokeColor : brandWarning,
		highlightFill: '#818a91',
        pointStrokeColor: '#fff'
    }];

    $scope.colours3 = [{
        fillColor : "rgba(0,0,0,0)",
		strokeColor : brandSuccess,
		highlightFill: '#818a91',
        pointStrokeColor: '#fff'
    }];
}
