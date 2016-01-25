$(function(){

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
                fillColor: brandPrimary,
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
                fillColor: brandInfo,
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
                fillColor: brandPrimary,
                strokeColor: brandPrimary,
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
                fillColor: brandWarning,
                strokeColor: brandWarning,
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
                fillColor: brandSuccess,
                strokeColor: brandSuccess,
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
                strokeColor: brandInfo,
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
                strokeColor: brandSuccess,
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
                strokeColor: brandDanger,
                highlightFill: 'rgba(255,255,255,.55)',
                highlightStroke: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var ctx = $('#chart-6').get(0).getContext('2d');
    var Chart6 = new Chart(ctx).Line(data, options);


})
