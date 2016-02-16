$(function(){

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

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

    var options = {
        pointHitDetectionRadius : 0,
        showScale: false,
        scaleLineWidth: 0.001,
        scaleShowLabels : false,
        scaleShowGridLines : false,
        pointDot : false,
        showTooltips: false,
        responsive: true,
    }

    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'transparent',
        		strokeColor : $.brandInfo,
                data: data
            },
        ]
    }

    var ctx = $('#header-chart-1').get(0).getContext('2d');
    var headerChart = new Chart(ctx).Line(data, options);

    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'transparent',
        		strokeColor : $.brandDanger,
                data: data1
            },
        ]
    };
    var ctx = $('#header-chart-2').get(0).getContext('2d');
    var headerChart2 = new Chart(ctx).Line(data, options);

    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'transparent',
        		strokeColor : $.brandSuccess,
                data: data2
            },
        ]
    };
    var ctx = $('#header-chart-3').get(0).getContext('2d');
    var headerChart3 = new Chart(ctx).Line(data, options);

});
