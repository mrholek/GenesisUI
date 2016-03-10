//main.js
angular
    .module('app')
    .controller('toastrWelcome', toastrWelcome)
    .controller('trafficDemoCtrl', trafficDemoCtrl)
    .controller('socialBoxCtrl', socialBoxCtrl)
    .controller('dateRangeCtrl', dateRangeCtrl)
    .controller('sparklineChartCtrl', sparklineChartCtrl)
    .controller('gaugeCtrl', gaugeCtrl)
    .controller('barChartCtrl', barChartCtrl)
    .controller('gaugeJSDemoCtrl', gaugeJSDemoCtrl)
    .controller('horizontalBarsCtrl', horizontalBarsCtrl)
    .controller('horizontalBarsType2Ctrl', horizontalBarsType2Ctrl)
    .controller('usersTableCtrl', usersTableCtrl)
    .controller('clientsTableCtrl', clientsTableCtrl)
    .controller('cardChartCtrl1', cardChartCtrl1)
    .controller('cardChartCtrl2', cardChartCtrl2)
    .controller('cardChartCtrl3', cardChartCtrl3)
    .controller('cardChartCtrl4', cardChartCtrl4);


toastrWelcome.$inject = ['$scope', 'toastr'];
function toastrWelcome($scope, toastr) {
    toastr.info('Bootstrap 4 & AngularJS UI Kit', 'Welcome to ROOT Admin', {
        closeButton: true,
        progressBar: true,
    });
}

//convert Hex to RGBA
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

trafficDemoCtrl.$inject = ['$scope'];
function trafficDemoCtrl($scope){

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50,200));
        data2.push(random(80,100));
        data3.push(65);
    }

    $scope.labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
    $scope.series = ['Current', 'Previous', 'BEP'];
    $scope.data = [ data1, data2, data3];
    $scope.colours = [{
        fillColor: convertHex(brandInfo,10),
        strokeColor: brandInfo,
        pointColor: brandInfo,
        pointStrokeColor: 'transparent'
    }, {
        fillColor: 'transparent',
        strokeColor: brandSuccess,
        pointColor: brandSuccess,
        pointStrokeColor: 'transparent'
    },{
        fillColor: 'transparent',
        strokeColor: brandDanger,
        pointColor: brandDanger,
        pointStrokeColor: 'transparent'
    }];
    $scope.options = {
        tooltipFillColor: '#2a2c36',
        tooltipTitleFontSize: 12,
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,
        scaleShowVerticalLines: false,
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: Math.ceil(250 / 5),
        //bezierCurve : false,
        scaleStartValue: 0,
        pointDot : false,
    }
}

dateRangeCtrl.$inject = ['$scope'];
function dateRangeCtrl($scope) {
    $scope.date = {
       startDate: moment().subtract(5, 'days'),
       endDate: moment()
   };
   $scope.opts = {
        drops: 'down',
        opens: 'left',
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 days': [moment().subtract(7, 'days'), moment()],
            'Last 30 days': [moment().subtract(30, 'days'), moment()],
            'This month': [moment().startOf('month'), moment().endOf('month')]
        }
    };

    //Watch for date changes
    $scope.$watch('date', function(newDate) {
        //console.log('New date set: ', newDate);
    }, false);

    function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }
}

socialBoxCtrl.$inject = ['$scope'];
function socialBoxCtrl($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.options = {
        pointHitDetectionRadius : 0,
        showScale: false,
        scaleLineWidth: 0.001,
        scaleShowLabels : false,
        scaleShowGridLines : false,
        pointDot : false,
        showTooltips: false
    };
    $scope.colours = [{
        fillColor: 'rgba(255,255,255,.1)',
        strokeColor: 'rgba(255,255,255,.55)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
}

sparklineChartCtrl.$inject = ['$scope'];
function sparklineChartCtrl($scope) {
    $scope.labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.options = {
        pointHitDetectionRadius : 0,
        showScale: false,
        scaleLineWidth: 0.001,
        scaleShowLabels : false,
        scaleShowGridLines : false,
        pointDot : false,
        showTooltips: false
    };
    $scope.default = [{
        fillColor: 'transparent',
        strokeColor: '#d1d4d7',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
    $scope.primary = [{
        fillColor: 'transparent',
        strokeColor: brandPrimary,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
    $scope.info = [{
        fillColor: 'transparent',
        strokeColor: brandInfo,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
    $scope.danger = [{
        fillColor: 'transparent',
        strokeColor: brandDanger,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
    $scope.warning = [{
        fillColor: 'transparent',
        strokeColor: brandWarning,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
    $scope.success = [{
        fillColor: 'transparent',
        strokeColor: brandSuccess,
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];
}

horizontalBarsCtrl.$inject = ['$scope'];
function horizontalBarsCtrl($scope) {

    $scope.data = [
        {
            day: 'Monday',    new: 34, recurring: 78
        },
        {
            day: 'Tuesday',   new: 56, recurring: 94
        },
        {
            day: 'Wednesday', new: 12, recurring: 67
        },
        {
            day: 'Thursday',  new: 43, recurring: 91
        },
        {
            day: 'Friday',    new: 22, recurring: 73
        },
        {
            day: 'Saturday',  new: 53, recurring: 82
        },
        {
            day: 'Sunday',    new: 9,  recurring: 69
        }
    ];
}

horizontalBarsType2Ctrl.$inject = ['$scope'];
function horizontalBarsType2Ctrl($scope) {

    $scope.gender = [
        {
            title: 'Male',
            icon: 'icon-user',
            value: 43
        },
        {
            title: 'Female',
            icon: 'icon-user-female',
            value: 37
        },
    ];

    $scope.source = [
        {
            title: 'Organic Search',
            icon: 'icon-globe',
            value: 191235,
            percent: 56
        },
        {
            title: 'Facebook',
            icon: 'icon-social-facebook',
            value: 51223,
            percent: 15
        },
        {
            title: 'Twitter',
            icon: 'icon-social-twitter',
            value: 37564,
            percent: 11
        },
        {
            title: 'LinkedIn',
            icon: 'icon-social-linkedin',
            value: 27319,
            percent: 8
        }
    ];
}

usersTableCtrl.$inject = ['$scope', '$timeout'];
function usersTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'USA',
            flag: 'USA.png',
            usage: '50',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'mastercard',
            activity: '10 sec ago',
            satisfaction: '48'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'India',
            flag: 'India.png',
            usage: '74',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'stripe',
            activity: '1 hour ago',
            satisfaction: '33'
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'France',
            flag: 'France.png',
            usage: '98',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'paypal',
            activity: 'Last month',
            satisfaction: '23'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        }
    ]


    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $scope.gauge = {
        animationTime: 10,
        value: random(0,100),
        maxValue: 100,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.08,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandInfo,
            // Colors
            colorStop: brandInfo,
            // just experiment with them
            strokeColor: '#d1d4d7',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }
}

clientsTableCtrl.$inject = ['$scope', '$timeout'];
function clientsTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            registered: 'Jan 1, 2015',
            activity: '10 sec ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            registered: 'Jan 1, 2015',
            activity: '5 minutes ago',
            transactions: 156,
            comments: 76
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            registered: 'Jan 1, 2015',
            activity: '1 hour ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            registered: 'Jan 1, 2015',
            activity: 'Last month',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            registered: 'Jan 1, 2015',
            activity: 'Last week',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            registered: 'Jan 1, 2015',
            activity: 'Yesterday',
            transactions: 189,
            comments: 72
        }
    ]
}


gaugeCtrl.$inject = ['$scope'];
function gaugeCtrl($scope) {
    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $scope.gauge1 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.05,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandInfo,
            // Colors
            colorStop: brandInfo,
            // just experiment with them
            strokeColor: '#d1d4d7',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge2 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.05,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandSuccess,
            // Colors
            colorStop: brandSuccess,
            // just experiment with them
            strokeColor: '#d1d4d7',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge3 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.05,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandWarning,
            // Colors
            colorStop: brandWarning,
            // just experiment with them
            strokeColor: '#d1d4d7',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge4 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.05,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandDanger,
            // Colors
            colorStop: brandDanger,
            // just experiment with them
            strokeColor: '#d1d4d7',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

barChartCtrl.$inject = ['$scope'];
function barChartCtrl($scope) {

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
        barStrokeWidth : 0,
        barBackground: 'rgba(221, 224, 229, 1)',

        // pointDot :false,
        // scaleLineColor: 'transparent',
    };

    $scope.colours = [{
        fillColor : brandInfo,
		strokeColor : 'rgba(0,0,0,1)',
		highlightFill: '#818a91',
        pointStrokeColor: '#000'
    }];
}

gaugeJSDemoCtrl.$inject = ['$scope', '$timeout'];
function gaugeJSDemoCtrl($scope, $timeout) {

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $scope.gauge1 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.1,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandInfo,
            // Colors
            colorStop: brandInfo,
            // just experiment with them
            strokeColor: '#E0E0E0',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge2 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.1,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandSuccess,
            // Colors
            colorStop: brandSuccess,
            // just experiment with them
            strokeColor: '#E0E0E0',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge3 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.1,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandWarning,
            // Colors
            colorStop: brandWarning,
            // just experiment with them
            strokeColor: '#E0E0E0',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }

    $scope.gauge4 = {
        animationTime: 10,
        value: random(0,3000),
        maxValue: 3000,
        gaugeType: 'donut',
        options: {
            lines: 12,
            // The number of lines to draw
            angle: 0.5,
            // The length of each line
            lineWidth: 0.1,
            // The line thickness
            pointer: {
                length: 0.09,
                // The radius of the inner circle
                strokeWidth: 0.0035,
                // The rotation offset
                color: '#000000' // Fill color
            },
            limitMax: 'false',
            // If true, the pointer will not go past the end of the gauge
            colorStart: brandDanger,
            // Colors
            colorStop: brandDanger,
            // just experiment with them
            strokeColor: '#E0E0E0',
            // to see which ones work best for you
            generateGradient: true,
            responsive: true
        }
    }
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
