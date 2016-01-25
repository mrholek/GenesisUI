angular
    .module('app')
    .directive('title', titleDirective)
    .directive('poweredby', poweredByDirective)
    .directive('body', layoutDirective)
    .directive('breadcrumb', breadcrumbPrefixDirective)
    .directive('a', preventClickDirective)
    .directive('a', bootstrapCollapseDirective)
    .directive('a', navigationDirective)
    .directive('nav', navigationDynamicResizeDirective)
    .directive('after', layoutTogglerDirective)
    .directive('button', collapseMenuTogglerDirective)
    .directive('div', bootstrapCarouselDirective)
    .directive('toggle', bootstrapTooltipsPopoversDirective)
    .directive('button', cardCollapseDirective)
    .directive('ionslider', ionSliderDirective)
    .directive('lrform', loginPageDirective)
    .directive('error', errorPageDirective)
    .directive('emailapp', emailAppDirective)
    .directive('gaugejs', gaugeJsDirective)


/**
* @desc this directive add meta title
* @example <title></title>
*/

function layoutDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {

        if (header.fixed) {
            angular.element('body').addClass('navbar-fixed');
        }

        if (nav.active) {
            angular.element('body').addClass(nav.position + '-nav');
        }

        if (nav.fixed) {
            angular.element('body').addClass('fixed-nav');
        }

        if (nav.compact) {
            angular.element('body').addClass('compact-nav');
        }

        scope.$watch( function() {
            element.find('header').addClass('navbar-' + header.color).addClass('brand-' + brand.color);
            element.find('#navigation').addClass('nav-' + nav.color);
        });
    }
}

function titleDirective() {
    var directive = {
        restrict: 'E',
        template: headTitle
    }
    return directive;
}

/**
* @desc this directive add information regarding Bootstra & AngularJS versions
* @example <poweredby></poweredby>
*/
function poweredByDirective() {
    var directive = {
        restrict: 'E',
        template: appName + ' | Powered by: Bootstrap ' + bootstrapVersion + ' & AngularJS ' + angularVersion
    }
    return directive;
}

//Breadcrumb Prefix
function breadcrumbPrefixDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element) {
        console.log('be');
        if (breadcrumbPrefix) {
            console.log('be');
            element.prepend('<li><span>' + breadcrumbPrefixName + '</span></li>');
        }
    }
}

function preventClickDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.href === '#'){
            element.on('click', function(event){
                event.preventDefault();
            });
        }
    }
}

//Bootstrap Collapse
function bootstrapCollapseDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=="collapse"){
            element.attr('href','javascript;;').attr('data-target',attrs.href.replace('index.html',''));
        }
    }
}

//Genesis main navigation - Siedebar menu
function navigationDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if(element.hasClass('nav-dropdown-toggle') && angular.element('body').hasClass('sidebar-nav') && angular.element('body').width() > 782) {
            element.on('click', function(){
                if(!angular.element('body').hasClass('compact-nav')) {
                    element.parent().toggleClass('open').find('.open').removeClass('open');
                }
            });
        } else if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() < 783) {
            element.on('click', function(){
                element.parent().toggleClass('open').find('.open').removeClass('open');
            });
        }
    }
}

//Dynamic resize #navigation-items
navigationDynamicResizeDirective.$inject = ['$window', '$timeout'];

function navigationDynamicResizeDirective($window, $timeout) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (element.attr('id') == 'navigation' && angular.element('body').hasClass('sidebar-nav') && angular.element('body').hasClass('fixed-nav')) {

            var bodyHeight = angular.element(window).height();

            scope.$watch(function(){
                var headerHeight = angular.element('header').outerHeight();
                var navHeaderHeight = angular.element('#navigation-header').outerHeight();
                var navFooterHeight = angular.element('#navigation-footer').outerHeight();
                angular.element('#navigation-items').css('height', bodyHeight - headerHeight - navHeaderHeight - navFooterHeight);
            })

            angular.element($window).bind('resize', function(){
                var bodyHeight = angular.element(window).height();
                var headerHeight = angular.element('header').outerHeight();
                var navHeaderHeight = angular.element('#navigation-header').outerHeight();
                var navFooterHeight = angular.element('#navigation-footer').outerHeight();
                angular.element('#navigation-items').css('height', bodyHeight - headerHeight - navHeaderHeight - navFooterHeight);
                //scope.$digest();
            });
        }
    }
}

//Layout Toggler
function layoutTogglerDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){
            var before = element.attr('data-before');
            var after = element.attr('data-after');

            angular.element('body').removeClass(before).addClass(after);
            element.attr('data-before', after)
                   .attr('data-after', before);
        });
    }
}

//Collapse menu toggler
function collapseMenuTogglerDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){
            if (element.hasClass('navbar-toggler')) {
                angular.element('body').toggleClass('mobile-open')
            }
        })
    }
}

//Bootstrap Carousel
function bootstrapCarouselDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.ride=="carousel"){
            element.find('a').each(function(){
                $(this).attr('data-target',$(this).attr('href').replace('index.html','')).attr('href','javascript;;')
            });
        }
    }
}

//Bootstrap Tooltips & Popovers
function bootstrapTooltipsPopoversDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=="tooltip"){
            angular.element(element).tooltip();
        }
        if (attrs.toggle=="popover"){
            angular.element(element).popover();
        }
    }
}

//Card Collapse
function cardCollapseDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=="collapse" && element.parent().hasClass('card-actions')){

            if (element.parent().parent().parent().find('.card-block').hasClass('in')) {
                console.log('in');
                element.find('i').addClass('r180');
            }

            var id = 'collapse-' + Math.floor((Math.random() * 1000000000) + 1);
            element.attr('data-target','#'+id)
            element.parent().parent().parent().find('.card-block').attr('id',id);

            element.on('click', function(){
                element.find('i').toggleClass('r180');
            })
        }
    }
}

ionSliderDirective.$inject = ['$timeout'];

function ionSliderDirective($timeout) {
    var directive = {
        require: 'ngModel',
        restrict:'E',
        scope:{
            min:'=',
            max:'=',
            type:'@',
            prefix:'@',
            maxPostfix:'@',
            prettify:'@',
            grid:'@',
            gridMargin:'@',
            postfix:'@',
            step:'@',
            hideMinMax:'@',
            hideFromTo:'@',
            from:'=',
            disable:'=',
            onChange:'=',
            onFinish:'=',
            ngModel : '&'
        },
        template:'<input type="text" value=""/>',
        replace:true,
        link: link
    }
    return directive;

    function link(scope, element, attrs, ngModel) {
        scope.$watch(function(){
            //console.log(ngModel);
            return ngModel.$modelValue;
        }, function(modelValue){
            if (modelValue.options) {
                element.ionRangeSlider(modelValue.options);
            } else {
                element.ionRangeSlider({
                    min: scope.min,
                    max: scope.max,
                    type: scope.type,
                    prefix: scope.prefix,
                    maxPostfix: scope.maxPostfix,
                    prettify: scope.prettify,
                    grid: scope.grid,
                    gridMargin: scope.gridMargin,
                    postfix:scope.postfix,
                    step:scope.step,
                    hideMinMax:scope.hideMinMax,
                    hideFromTo:scope.hideFromTo,
                    from:scope.from,
                    disable:scope.disable,
                    onChange:scope.onChange,
                    onFinish:scope.onFinish
                });
            }
        });
        scope.$watch('min', function(value) {
            $timeout(function(){ element.data("ionRangeSlider").update({min: value}); });
        },true);
        scope.$watch('max', function(value) {
            $timeout(function(){ element.data("ionRangeSlider").update({max: value}); });
        });
        scope.$watch('from', function(value) {
            $timeout(function(){ element.data("ionRangeSlider").update({from: value}); });
        });
        scope.$watch('disable', function(value) {
            $timeout(function(){ element.data("ionRangeSlider").update({disable: value}); });
        });
    }
}

loginPageDirective.$inject = ['$window'];

function loginPageDirective($window) {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        var bodyHeight = angular.element(window).height();
        var formHeight = element.height();
        var marginTop = (bodyHeight / 2) - (formHeight / 2);

        if (marginTop > 0) {
            element.css('margin-top', marginTop);
        }

        angular.element($window).bind('resize', function(){
            var bodyHeight = angular.element(window).height();
            var formHeight = element.height();
            var marginTop = (bodyHeight / 2) - (formHeight / 2);

            if (marginTop > 0) {
                element.css('margin-top', marginTop);
            }

            scope.$digest();
        });
    }
}

errorPageDirective.$inject = ['$window'];

function errorPageDirective($window) {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        var bodyHeight = angular.element(window).height();
        var formHeight = element.height();
        var marginTop = (bodyHeight / 2) - (formHeight / 2);

        if (marginTop > 0) {
            element.css('margin-top', marginTop);
        }

        angular.element($window).bind('resize', function(){
            var bodyHeight = angular.element(window).height();
            var formHeight = element.height();
            var marginTop = (bodyHeight / 2) - (formHeight / 2);

            if (marginTop > 0) {
                element.css('margin-top', marginTop);
            }

            scope.$digest();
        });
    }
}

emailAppDirective.$inject = ['$window'];

function emailAppDirective($window) {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        var height = angular.element(window).height() - angular.element('.navbar').outerHeight() - angular.element('.breadcrumb').outerHeight() - angular.element('#footer').outerHeight() - 158;
        console.log(height);
        element.css('min-height', height);
    }
}

function gaugeJsDirective() {
    var directive = {
        restrict: 'AC',
        scope: {
            'animationTime': '=',
            'value': '=',
            'options': '=',
            'maxValue': '=',
            'gaugeType': '='
        },
        controller: controller
    }
    return directive;

    function controller($scope, $element) {
        if ($scope.gaugeType === 'donut') {
            $scope.gauge = new Donut($element[0]);
        } else {
            $scope.gauge = new Gauge($element[0]);
        }
        $element.addClass('gaugejs')
        $scope.gauge.maxValue = $scope.maxValue;
        $scope.$watchCollection('[options, value]', function(newValues){
            $scope.gauge.setOptions(newValues[0]);
            if (!isNaN(newValues[1])){
                $scope.gauge.set(newValues[1]);
            }
        });
    }
}
