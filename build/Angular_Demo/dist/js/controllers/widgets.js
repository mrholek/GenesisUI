//widgets.js
angular
    .module('app')
    .controller('cardChartCtrl1', cardChartCtrl1)
    .controller('cardChartCtrl2', cardChartCtrl2)
    .controller('cardChartCtrl3', cardChartCtrl3)
    .controller('cardChartCtrl4', cardChartCtrl4)
    .controller('cardChartCtrl5', cardChartCtrl5)
    .controller('cardChartCtrl6', cardChartCtrl6)
    .controller('cardChartCtrl7', cardChartCtrl7)
    .controller('cardChartCtrl8', cardChartCtrl8)
    .controller('cardChartCtrl9', cardChartCtrl9)
    .controller('cardChartCtrl10', cardChartCtrl10);


//Default colours
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#4dbd74';
var brandInfo =     '#63c2de';
var brandWarning =  '#f8cb00';
var brandDanger =   '#f86c6b';

//convert Hex to RGBA
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

cardChartCtrl1.$inject = ['$scope'];
function cardChartCtrl1($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.options = {
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        scaleFontSize: 5,
        scaleLineColor: 'rgba(0,0,0,0)',
        scaleFontColor: 'rgba(0,0,0,0)'
    };
    $scope.colours = [{
        fillColor: brandPrimary,
        strokeColor: 'rgba(255,255,255,.55)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl2.$inject = ['$scope'];
function cardChartCtrl2($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [1, 18, 9, 17, 34, 22, 11]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.options = {
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        scaleFontSize: 5,
        scaleLineColor: 'rgba(0,0,0,0)',
        scaleFontColor: 'rgba(0,0,0,0)',
        bezierCurve : false,
    };
    $scope.colours = [{
        fillColor: brandInfo,
        strokeColor: 'rgba(255,255,255,.55)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl3.$inject = ['$scope'];
function cardChartCtrl3($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.options = {
        showScale: false,
        scaleShowGridLines: false,
        pointDot: false,
        pointDotStrokeWidth : 0,
        pointDotRadius : 0,
        scaleGridLineWidth : 0,
        //pointHitDetectionRadius : 0,
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,.2)',
        strokeColor: 'rgba(255,255,255,.55)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

cardChartCtrl4.$inject = ['$scope'];
function cardChartCtrl4($scope) {

    var elements = 16;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    $scope.labels = labels;

    $scope.data = [data];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 3,
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,.3)',
        strokeColor: 'rgba(255,255,255,.55)',
        highlightFill: 'rgba(255,255,255,.55)',
        highlightStroke: 'rgba(255,255,255,.55)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl5.$inject = ['$scope'];
function cardChartCtrl5($scope) {

    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    $scope.labels = labels;

    $scope.data = [data];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        responsive: false,
        maintainAspectRatio: false,

    };
    $scope.colours = [{
        fillColor: brandPrimary,
        strokeColor: brandPrimary,
        highlightFill: 'rgba(255,255,255,.55)',
        highlightStroke: 'rgba(255,255,255,.55)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl6.$inject = ['$scope'];
function cardChartCtrl6($scope) {

    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    $scope.labels = labels;

    $scope.data = [data];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        responsive: false,
        maintainAspectRatio: false,

    };
    $scope.colours = [{
        fillColor: brandDanger,
        strokeColor: brandDanger,
        highlightFill: 'rgba(255,255,255,.55)',
        highlightStroke: 'rgba(255,255,255,.55)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl7.$inject = ['$scope'];
function cardChartCtrl7($scope) {

    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    $scope.labels = labels;

    $scope.data = [data];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        responsive: false,
        maintainAspectRatio: false,

    };
    $scope.colours = [{
        fillColor: brandSuccess,
        strokeColor: brandSuccess,
        highlightFill: 'rgba(255,255,255,.55)',
        highlightStroke: 'rgba(255,255,255,.55)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl8.$inject = ['$scope'];
function cardChartCtrl8($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.options = {
        showScale: false,
        scaleShowGridLines: false,
        pointDot: false,
        responsive: false,
        maintainAspectRatio: false,
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,0)',
        strokeColor: brandInfo,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl9.$inject = ['$scope'];
function cardChartCtrl9($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.options = {
        showScale: false,
        scaleShowGridLines: false,
        pointDot: false,
        responsive: false,
        maintainAspectRatio: false,
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,0)',
        strokeColor: brandSuccess,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}

cardChartCtrl10.$inject = ['$scope'];
function cardChartCtrl10($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.options = {
        showScale: false,
        scaleShowGridLines: false,
        pointDot: false,
        responsive: false,
        maintainAspectRatio: false,
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,0)',
        strokeColor: brandWarning,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        tooltipCornerRadius: 0,
    }];
}
