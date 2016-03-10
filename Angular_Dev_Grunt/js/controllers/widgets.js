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
    .controller('cardChartCtrl10', cardChartCtrl10)
    .controller('cardChartCtrl11', cardChartCtrl11)
    .controller('cardChartCtrl12', cardChartCtrl12)
    .controller('cardChartCtrl13', cardChartCtrl13)
    .controller('gaugeCtrl', gaugeCtrl);

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

cardChartCtrl11.$inject = ['$scope'];
function cardChartCtrl11($scope) {

    $scope.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'];
    $scope.data = [
        [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
    ];
    $scope.options = {
        showScale: false,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        pointDot: false,
        datasetStrokeWidth : 2,
    };
    $scope.colours = [{
        fillColor: 'transparent',
        strokeColor: 'rgba(255,255,255,.55)',
    }];

    $scope.options2 = {
        showScale: false,
        scaleShowGridLines: false,
        barShowStroke : false,
        scaleGridLineWidth : 0,
        barValueSpacing : 5,
    };

    $scope.colours2 = [{
        fillColor: 'rgba(0,0,0,.2)',
    }];

    $scope.labels3 = ['M','T','W','T','F','S','S'];
    $scope.data3 = [
        [17, 34, 22, 11, 3, 15, 12]
    ];

    $scope.options3 = {
        scaleLineWidth: 0.00001,
        responsive: false,
        maintainAspectRatio: false,
        scaleShowGridLines: false,
        scaleShowLabels: false,
        barShowStroke : false,
        barValueSpacing : 4,
        scaleFontSize: 10,
        scaleFontColor: grayLight,
    }

    $scope.colours3 = [{
        fillColor: grayLight,
    }];
}

cardChartCtrl12.$inject = ['$scope'];
function cardChartCtrl12($scope) {

    $scope.labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    $scope.data = [
        [75, 59, 94, 104, 151, 155, 240]
    ];
    $scope.options = {
        scaleLineWidth: 0.00001,
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth: 3,
        responsive: true,
        maintainAspectRatio: false,
    };
    $scope.colours = [{
        fillColor: 'transparent',
        strokeColor: grayLighter,
        pointColor: '#fff',
    }];
}

cardChartCtrl13.$inject = ['$scope'];
function cardChartCtrl13($scope) {

    $scope.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    $scope.data = [
        [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
    ];
    $scope.options = {
        showScale: true,
        scaleGridLineColor : 'rgba(255,255,255,.2)',
        scaleShowVerticalLines: false,
        scaleLineColor: 'rgba(255,255,255,.0)',
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 5000,
        scaleStartValue: 20000,
        scaleLabel: "<%= '$' + value %>",
        bezierCurve : false,
        scaleFontColor: '#fff',
        datasetStrokeWidth : 4,
        pointDotStrokeWidth: 4,
        responsive: true,
        maintainAspectRatio: false,
    };
    $scope.colours = [{
        fillColor: 'transparent',
        strokeColor: '#fff',
        pointColor: brandPrimary,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
    }];

    $scope.labels2 = ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'];
    $scope.data2 = [
        [35, 14, 10, 8, 6, 6, 5, 4, 3, 9]
    ];

    $scope.options2 = {
        scaleLineColor: 'rgba(255,255,255,.0)',
        responsive: true,
        maintainAspectRatio: false,
        scaleShowGridLines: false,
        scaleShowLabels: false,
        barShowStroke : false,
        barValueSpacing : 10,
        scaleFontColor: gray,
        scaleIntegersOnly: true,
        scaleBeginAtZero: true,
    }

    $scope.colours2 = [{
        fillColor: brandSuccess,
    }];
}

gaugeCtrl.$inject = ['$scope', '$timeout'];
function gaugeCtrl($scope, $timeout) {

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $scope.gauge1 = {
        animationSpeed: 32,
        value: random(0,3000),
        maxValue: 3000,
        options: {
            lines: 12,
            angle: 0.15,
            lineWidth: 0.44,
            pointer: {
                length: 0.8,
                strokeWidth: 0.035,
                color: grayDark
            },
            limitMax: 'false',
            colorStart: brandInfo,
            colorStop: brandInfo,
            strokeColor: grayLighter,
            generateGradient: true,
            responsive: true,
        }
    }

    $scope.gauge2 = {
        animationSpeed: 32,
        value: random(0,3000),
        maxValue: 3000,
        options: {
            lines: 12,
            angle: 0.15,
            lineWidth: 0.44,
            pointer: {
                length: 0.8,
                strokeWidth: 0.035,
                color: gray
            },
            limitMax: 'false',
            colorStart: brandSuccess,
            colorStop: brandSuccess,
            strokeColor: grayLighter,
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge3 = {
        animationSpeed: 32,
        value: random(0,3000),
        maxValue: 3000,
        options: {
            lines: 12,
            angle: 0.15,
            lineWidth: 0.44,
            pointer: {
                length: 0.8,
                strokeWidth: 0.035,
                color: gray
            },
            limitMax: 'false',
            colorStart: brandWarning,
            colorStop: brandWarning,
            strokeColor: grayLighter,
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge4 = {
        animationSpeed: 32,
        value: random(0,3000),
        maxValue: 3000,
        options: {
            lines: 12,
            angle: 0.15,
            lineWidth: 0.44,
            pointer: {
                length: 0.8,
                strokeWidth: 0.035,
                color: gray
            },
            limitMax: 'false',
            colorStart: brandDanger,
            colorStop: brandDanger,
            strokeColor: grayLighter,
            generateGradient: true,
            responsive: true
        }
    }
}
