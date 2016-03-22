$(function(){

    //convert Hex to RGBA
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    //Cards with Charts
    var labels = ['January','February','March','April','May','June','July'];
    var options = {
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        scaleFontSize: 5,
        scaleLineColor: 'rgba(0,0,0,0)',
        scaleFontColor: 'rgba(0,0,0,0)',
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: $.brandPrimary,
                strokeColor: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var ctx = $('#card-chart1').get(0).getContext('2d');
    var cardChart1 = new Chart(ctx).Line(data, options);

    var options = {
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        scaleFontSize: 5,
        scaleLineColor: 'rgba(0,0,0,0)',
        scaleFontColor: 'rgba(0,0,0,0)',
        bezierCurve : false,
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: $.brandInfo,
                strokeColor: 'rgba(255,255,255,.55)',
                data: [1, 18, 9, 17, 34, 22, 11]
            },
        ]
    };
    var ctx = $('#card-chart2').get(0).getContext('2d');
    var cardChart2 = new Chart(ctx).Line(data, options);

    var options = {
        showScale: false,
        scaleShowGridLines: false,
        pointDot: false,
        pointDotStrokeWidth : 0,
        pointDotRadius : 0,
        scaleGridLineWidth : 0,
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,

    };
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'rgba(255,255,255,.2)',
                strokeColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40]
            },
        ]
    };
    var ctx = $('#card-chart3').get(0).getContext('2d');
    var cardChart3 = new Chart(ctx).Line(data, options);

    //Random Numbers
    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    var elements = 16;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }


    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 3,
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                fillColor: 'rgba(255,255,255,.3)',
                strokeColor: 'rgba(255,255,255,.55)',
                data: data
            },
        ]
    };
    var ctx = $('#card-chart4').get(0).getContext('2d');
    var cardChart4 = new Chart(ctx).Bar(data, options);


    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                fillColor: $.brandPrimary,
                strokeColor: $.brandPrimary,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: data
            },
        ]
    };
    var ctx = $('#chart-1').get(0).getContext('2d');
    var Chart1 = new Chart(ctx).Bar(data, options);


    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                fillColor: $.brandWarning,
                strokeColor: $.brandWarning,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: data
            },
        ]
    };
    var ctx = $('#chart-2').get(0).getContext('2d');
    var Chart2 = new Chart(ctx).Bar(data, options);


    var elements = 15;
    var labels = [];
    var data = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
    }

    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barShowStroke : false,
        barStrokeWidth : 0,
        scaleGridLineWidth : 0,
        barValueSpacing : 1,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: labels,
        datasets: [
            {
                fillColor: $.brandSuccess,
                strokeColor: $.brandSuccess,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: data
            },
        ]
    };
    var ctx = $('#chart-3').get(0).getContext('2d');
    var Chart3 = new Chart(ctx).Bar(data, options);

    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        pointDot: false,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: ['January','February','March','April','May','June','July'],
        datasets: [
            {
                fillColor: 'rgba(255,255,255,0)',
                strokeColor: $.brandInfo,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var ctx = $('#chart-4').get(0).getContext('2d');
    var Chart4 = new Chart(ctx).Line(data, options);


    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        pointDot: false,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: ['January','February','March','April','May','June','July'],
        datasets: [
            {
                fillColor: 'rgba(255,255,255,0)',
                strokeColor: $.brandSuccess,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var ctx = $('#chart-5').get(0).getContext('2d');
    var Chart5 = new Chart(ctx).Line(data, options);


    var options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        pointDot: false,
        tooltipCornerRadius: 0,
        responsive: false,
        maintainAspectRatio: false,
    };
    var data = {
        labels: ['January','February','March','April','May','June','July'],
        datasets: [
            {
                fillColor: 'rgba(255,255,255,0)',
                strokeColor: $.brandDanger,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var ctx = $('#chart-6').get(0).getContext('2d');
    var Chart6 = new Chart(ctx).Line(data, options);

    var options = {
        showScale: false,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        pointDot: false,
        datasetStrokeWidth : 2,
        responsive: true,
    };
    var data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: 'rgba(255,255,255,.55)',
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
            },
        ]
    };
    var ctx = $('.chart-7').get(0).getContext('2d');
    var Chart7 = new Chart(ctx).Line(data, options);

    var ctx = $('.chart-7-2').get(0).getContext('2d');
    var Chart72 = new Chart(ctx).Line(data, options);

    var ctx = $('.chart-7-3').get(0).getContext('2d');
    var Chart73 = new Chart(ctx).Line(data, options);

    var ctx = $('.chart-7-4').get(0).getContext('2d');
    var Chart74 = new Chart(ctx).Line(data, options);


    var options = {
        showScale: false,
        scaleShowGridLines: false,
        barShowStroke : false,
        scaleGridLineWidth : 0,
        barValueSpacing : 5,
        responsive: true,
    };
    var data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                fillColor: 'rgba(0,0,0,.2)',
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
            },
        ]
    };
    var ctx = $('.chart-8').get(0).getContext('2d');
    var Chart8 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-8-2').get(0).getContext('2d');
    var Chart82 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-8-3').get(0).getContext('2d');
    var Chart83 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-8-4').get(0).getContext('2d');
    var Chart84 = new Chart(ctx).Bar(data, options);


    var options = {
        scaleLineWidth: 0.00001,
        responsive: false,
        maintainAspectRatio: false,
        scaleShowGridLines: false,
        scaleShowLabels: false,
        barShowStroke : false,
        barValueSpacing : 4,
        scaleFontSize: 10,
        scaleFontColor: $.gray,
        scaleIntegersOnly: true,
        scaleBeginAtZero: true,
    };
    var data = {
        labels: ['M','T','W','T','F','S','S'],
        datasets: [
            {
                fillColor: $.grayLight,
                data: [17, 34, 22, 11, 3, 15, 12]
            },
        ]
    };
    var ctx = $('.chart-9').get(0).getContext('2d');
    var Chart9 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-9-2').get(0).getContext('2d');
    var Chart92 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-9-3').get(0).getContext('2d');
    var Chart93 = new Chart(ctx).Bar(data, options);

    var ctx = $('.chart-9-4').get(0).getContext('2d');
    var Chart94 = new Chart(ctx).Bar(data, options);


    var options = {
        scaleLineWidth: 0.00001,
        showScale: true,
        scaleShowLabels: false,
        scaleShowGridLines: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth: 3,
        responsive: true,
        maintainAspectRatio: false,
    };
    var data = {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.grayLighter,
                pointColor: '#fff',
                data: [75, 59, 94, 104, 151, 155, 240]
            },
        ]
    };
    var ctx = $('#chart-10').get(0).getContext('2d');
    var Chart10 = new Chart(ctx).Line(data, options);


    var options = {
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
    var data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: '#fff',
                pointColor: $.brandPrimary,
                data: [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
            },
        ]
    };
    var ctx = $('#chart-11').get(0).getContext('2d');
    var Chart11 = new Chart(ctx).Line(data, options);


    var options = {
        scaleLineColor: 'rgba(255,255,255,.0)',
        responsive: true,
        maintainAspectRatio: false,
        scaleShowGridLines: false,
        scaleShowLabels: false,
        barShowStroke : false,
        barValueSpacing : 10,
        scaleFontColor: $.gray,
        scaleIntegersOnly: true,
        scaleBeginAtZero: true,
    };
    var data = {
        labels: ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'],
        datasets: [
            {
                fillColor: $.brandSuccess,
                data: [35, 14, 10, 8, 6, 6, 5, 4, 3, 9]
            },
        ]
    };
    var ctx = $('#chart-12').get(0).getContext('2d');
    var Chart12 = new Chart(ctx).Bar(data, options);


	var opts1 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandInfo,
        colorStop: $.brandInfo,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
	var target = document.getElementById('gauge1'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts1); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value

    var opts2 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandSuccess,
        colorStop: $.brandSuccess,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
	var target = document.getElementById('gauge2'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts2); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value

    var opts3 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandWarning,
        colorStop: $.brandWarning,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
	var target = document.getElementById('gauge3'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts3); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value

    var opts4 = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.8,
            strokeWidth: 0.035,
            color: $.grayDark
        },
        limitMax: 'false',
        colorStart: $.brandDanger,
        colorStop: $.brandDanger,
        strokeColor: $.grayLighter,
        generateGradient: true,
        responsive: true,
	};
	var target = document.getElementById('gauge4'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts4); // create sexy gauge!
	gauge.maxValue = 3000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(random(0,3000)); // set actual value

})
