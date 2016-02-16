$(function(){

    toastr.info('Bootstrap 4 on steroids', 'Welcome to ROOT Admin', {
        closeButton: true,
        progressBar: true,
    });

    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });

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
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
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
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
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
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
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
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: data
            },
        ]
    };
    var ctx = $('#card-chart4').get(0).getContext('2d');
    var cardChart4 = new Chart(ctx).Bar(data, options);

    //Main Chart
    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50,200));
        data2.push(random(80,100));
        data3.push(65);
    }

    var data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: 'My First dataset',
                fillColor: convertHex($.brandInfo,10),
                strokeColor: $.brandInfo,
                pointColor: $.brandInfo,
                pointStrokeColor: 'transparent',
                data: data1
            },
            {
                label: 'My Second dataset',
                fillColor: 'transparent',
                strokeColor: $.brandSuccess,
                pointColor: $.brandSuccess,
                pointStrokeColor: 'transparent',
                data: data2
            },
            {
                label: 'My Third dataset',
                fillColor: 'transparent',
                strokeColor: $.brandDanger,
                pointColor: $.brandDanger,
                pointStrokeColor: 'transparent',
                data: data3
            }
        ]
    };

    var options = {
        tooltipFillColor: '#2a2c36',
        tooltipTitleFontSize: 12,
        tooltipCornerRadius: 0,
        responsive: true,
        maintainAspectRatio: false,
        scaleShowVerticalLines: false,
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: Math.ceil(250 / 5),
        scaleStartValue: 0,
        pointDot : false,
    };
    var ctx = $('#main-chart').get(0).getContext('2d');
    var mainChart = new Chart(ctx).Line(data, options);



    //Social Box Charts
    var labels = ['January','February','March','April','May','June','July'];

    var options = {
        pointHitDetectionRadius : 0,
        showScale: false,
        scaleLineWidth: 0.001,
        scaleShowLabels : false,
        scaleShowGridLines : false,
        pointDot : false,
        showTooltips: false
    };

    var data1 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'rgba(255,255,255,.1)',
                strokeColor: 'rgba(255,255,255,.55)',
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [65, 59, 84, 84, 51, 55, 40]
            }
        ]
    };
    var ctx = $('#social-box-chart-1').get(0).getContext('2d');
    var socialBoxChart1 = new Chart(ctx).Line(data1, options);

    var data2 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'rgba(255,255,255,.1)',
                strokeColor: 'rgba(255,255,255,.55)',
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [1, 13, 9, 17, 34, 41, 38]
            }
        ]
    };
    var ctx = $('#social-box-chart-2').get(0).getContext('2d');
    var socialBoxChart2= new Chart(ctx).Line(data2, options);

    var data3 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'rgba(255,255,255,.1)',
                strokeColor: 'rgba(255,255,255,.55)',
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#social-box-chart-3').get(0).getContext('2d');
    var socialBoxChart3= new Chart(ctx).Line(data3, options);

    var data4 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'rgba(255,255,255,.1)',
                strokeColor: 'rgba(255,255,255,.55)',
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#social-box-chart-4').get(0).getContext('2d');
    var socialBoxChart4= new Chart(ctx).Line(data4, options);



    //Sparkline Charts
    var labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    var options = {
        pointHitDetectionRadius : 0,
        showScale: false,
        scaleLineWidth: 0.001,
        scaleShowLabels : false,
        scaleShowGridLines : false,
        pointDot : false,
        showTooltips: false
    };

    var data1 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.brandPrimary,
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-1').get(0).getContext('2d');
    var sparklineChart1= new Chart(ctx).Line(data1, options);

    var data2 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.brandDanger,
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-2').get(0).getContext('2d');
    var sparklineChart2= new Chart(ctx).Line(data2, options);

    var data3 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.brandWarning,
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-3').get(0).getContext('2d');
    var sparklineChart3= new Chart(ctx).Line(data3, options);

    var data4 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.brandSuccess,
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-4').get(0).getContext('2d');
    var sparklineChart4= new Chart(ctx).Line(data4, options);

    var data5 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: '#d1d4d7',
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-5').get(0).getContext('2d');
    var sparklineChart5= new Chart(ctx).Line(data5, options);

    var data6 = {
        labels: labels,
        datasets: [
            {
                fillColor: 'transparent',
                strokeColor: $.brandInfo,
                highlightFill: 'rgba(47, 132, 71, 0.8)',
                highlightStroke: 'rgba(47, 132, 71, 0.8)',
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-6').get(0).getContext('2d');
    var sparklineChart6= new Chart(ctx).Line(data6, options);


    //Gauge JS
    var options = {
        lines: 12, // The number of lines to draw
        angle: 0.5, // The length of each line
        lineWidth: 0.08, // The line thickness
        pointer: {
            length: 0.9, // The radius of the inner circle
            strokeWidth: 0.035, // The rotation offset
            color: '#000000' // Fill color
        },
        limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
        colorStart: $.brandInfo,   // Colors
        colorStart: $.brandInfo,    // just experiment with them
        strokeColor: '#d1d4d7',   // to see which ones work best for you
        generateGradient: true
    };
    var target1 = document.getElementById('gauge-1'); // your canvas element
    var gauge1 = new Donut(target1).setOptions(options); // create sexy gauge!
        gauge1.maxValue = 100; // set max gauge value
        gauge1.animationSpeed = 32; // set animation speed (32 is default value)
        gauge1.set(48); // set actual value

    var target2 = document.getElementById('gauge-2');
    var gauge2 = new Donut(target2).setOptions(options);
        gauge2.maxValue = 100;
        gauge2.animationSpeed = 32;
        gauge2.set(61);

    var target3 = document.getElementById('gauge-3');
    var gauge3 = new Donut(target3).setOptions(options);
        gauge3.maxValue = 100;
        gauge3.animationSpeed = 32;
        gauge3.set(33);

    var target4 = document.getElementById('gauge-4');
    var gauge4 = new Donut(target4).setOptions(options);
        gauge4.maxValue = 100;
        gauge4.animationSpeed = 32;
        gauge4.set(23);

    var target5 = document.getElementById('gauge-5');
    var gauge5 = new Donut(target5).setOptions(options);
        gauge5.maxValue = 100;
        gauge5.animationSpeed = 32;
        gauge5.set(78);

    var target6 = document.getElementById('gauge-6');
    var gauge6 = new Donut(target6).setOptions(options);
        gauge6.maxValue = 100;
        gauge6.animationSpeed = 32;
        gauge6.set(11);

});
