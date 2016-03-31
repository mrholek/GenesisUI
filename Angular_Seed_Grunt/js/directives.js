angular
    .module('app')
    .directive('title', titleDirective)
    .directive('breadcrumb', breadcrumbPrefixDirective)
    .directive('a', preventClickDirective)
    .directive('a', bootstrapCollapseDirective)
    .directive('a', navigationDirective)
    .directive('nav', sidebarNavDynamicResizeDirective)
    .directive('nav', topNavSmartResizeDirective)
    .directive('button', layoutToggleDirective)
    .directive('a', layoutToggleDirective)
    .directive('button', collapseMenuTogglerDirective)
    .directive('div', bootstrapCarouselDirective)
    .directive('toggle', bootstrapTooltipsPopoversDirective)
    .directive('tab', bootstrapTabsDirective)
    .directive('button', cardCollapseDirective)
    .directive('ionslider', ionSliderDirective)
    .directive('vamiddle', verticalAlignMiddleDirective)
    .directive('emailapp', emailAppDirective)
    .directive('gaugejs', gaugeJsDirective)


/**
* @desc this directive add meta title
* @example <title></title>
*/

function titleDirective() {
    var directive = {
        restrict: 'E',
        template: headTitle
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
        if (breadcrumbPrefix) {
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
        if (attrs.toggle=='collapse'){
            element.attr('href','javascript;;').attr('data-target',attrs.href.replace('index.html',''));
        }
    }
}

/**
* @desc Genesis main navigation - Siedebar menu
* @example <li class="nav-item nav-dropdown"></li>
*/
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

//Dynamic resize .sidebar-nav
sidebarNavDynamicResizeDirective.$inject = ['$window', '$timeout'];
function sidebarNavDynamicResizeDirective($window, $timeout) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {

        if (element.hasClass('sidebar-nav') && angular.element('body').hasClass('fixed-nav')) {
            var bodyHeight = angular.element(window).height();
            scope.$watch(function(){
                var headerHeight = angular.element('header').outerHeight();
                var sidebarHeaderHeight = angular.element('.sidebar-header').outerHeight();
                var sidebarFooterHeight = angular.element('.sidebar-footer').outerHeight();

                if (angular.element('body').hasClass('sidebar-off-canvas')) {
                    element.css('height', bodyHeight - sidebarHeaderHeight - sidebarFooterHeight);
                } else {
                    element.css('height', bodyHeight - headerHeight - sidebarHeaderHeight - sidebarFooterHeight);
                }
            })

            angular.element($window).bind('resize', function(){
                var bodyHeight = angular.element(window).height();
                var headerHeight = angular.element('header').outerHeight();
                var sidebarHeaderHeight = angular.element('.sidebar-header').outerHeight();
                var sidebarFooterHeight = angular.element('.sidebar-footer').outerHeight();

                if (angular.element('body').hasClass('sidebar-off-canvas')) {
                    element.css('height', bodyHeight - sidebarHeaderHeight - sidebarFooterHeight);
                } else {
                    element.css('height', bodyHeight - headerHeight - sidebarHeaderHeight - sidebarFooterHeight);
                }
            });
        }
    }
}

topNavSmartResizeDirective.$inject = ['$window', '$timeout'];
function topNavSmartResizeDirective($window, $timeout) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {

        if (element.hasClass('top-nav')) {

            var oldNav = element.find('ul.nav').clone();
            var more = '<li class="nav-item nav-more nav-dropdown"><a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-options-vertical"></i> More</a><ul class="nav-dropdown-items items-more"></ul></li>'
            var offcanvas = false;
            var offCanvasLi = [];

            $timeout(function(){
                angular.forEach(element.find('ul.nav li'), function(value, key){
                    var li = angular.element(value);
                    if (li.parent().hasClass('nav')) {

                        if (offcanvas == true) {
                            offCanvasLi.push(li[0].outerHTML);
                            li.remove();
                        } else {
                            var rect = li[0].getBoundingClientRect();
                            if (rect.right < (window.innerWidth || document.documentElement.clientWidth)) {

                                var nextLi = li.next();
                                if (nextLi[0]) {
                                    var nextLiRect = nextLi[0].getBoundingClientRect();

                                    if (nextLiRect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
                                        offcanvas = true;
                                        offCanvasLi.push(li[0].outerHTML);
                                    }
                                }

                            } else {
                                offcanvas = true;
                                offCanvasLi.push(li[0].outerHTML);
                            }

                            if (offcanvas == true) {
                                li.remove()
                            }
                        }
                    }
                }, offCanvasLi);

                if (offCanvasLi.length > 0) {
                    element.find('ul.nav').append(more).find('.items-more').append(offCanvasLi.join(''));
                }

            },0);

            angular.element($window).bind('resize', function(){

                var offcanvas = false;
                var offCanvasLi = [];

                var cloneMore = element.find('.items-more').html();

                element.find('.nav-more').remove();
                element.find('ul.nav').append(cloneMore);

                angular.forEach(element.find('ul.nav li'), function(value, key){
                    var li = angular.element(value);
                    if (li.parent().hasClass('nav')) {

                        if (offcanvas == true) {
                            offCanvasLi.push(li[0].outerHTML);
                            li.remove();
                        } else {
                            var rect = li[0].getBoundingClientRect();
                            if (rect.right < (window.innerWidth || document.documentElement.clientWidth)) {

                                var nextLi = li.next();
                                if (nextLi[0]) {
                                    var nextLiRect = nextLi[0].getBoundingClientRect();

                                    if (nextLiRect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
                                        offcanvas = true;
                                        offCanvasLi.push(li[0].outerHTML);
                                    }
                                }
                            } else {
                                offcanvas = true;
                                offCanvasLi.push(li[0].outerHTML);
                            }

                            if (offcanvas == true) {
                                li.remove()
                            }
                        }
                    }
                }, offCanvasLi);

                if (offCanvasLi.length > 0) {
                    element.find('ul.nav').append(more).find('.items-more').append(offCanvasLi.join(''));
                }

                scope.$digest();

            });
        }
    }
}

//LayoutToggle
layoutToggleDirective.$inject = ['$interval'];
function layoutToggleDirective($interval) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){

            var bodyClass = localStorage.getItem('body-class');

            if ((element.hasClass('layout-toggler') || element.hasClass('sidebar-close')) && angular.element('body').hasClass('sidebar-off-canvas')) {
                angular.element('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)

            } else if (element.hasClass('layout-toggler') && (angular.element('body').hasClass('sidebar-nav') || bodyClass == 'sidebar-nav')) {
                angular.element('body').toggleClass('sidebar-nav');
                localStorage.setItem('body-class', 'sidebar-nav');
                if (bodyClass == 'sidebar-nav') {
                    localStorage.clear();
                }

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }

            if (element.hasClass('aside-toggle')) {
                angular.element('body').toggleClass('aside-menu-open');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }
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
            if (element.hasClass('navbar-toggler') && !element.hasClass('layout-toggler')) {
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
        if (attrs.ride=='carousel'){
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
        if (attrs.toggle=='tooltip'){
            angular.element(element).tooltip();
        }
        if (attrs.toggle=='popover'){
            angular.element(element).popover();
        }
    }
}

//Bootstrap Tabs
function bootstrapTabsDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.click(function(e) {
            e.preventDefault();
            angular.element(element).tab('show');
        });
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
        if (attrs.toggle=='collapse' && element.parent().hasClass('card-actions')){

            if (element.parent().parent().parent().find('.card-block').hasClass('in')) {
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
            $timeout(function(){ element.data('ionRangeSlider').update({min: value}); });
        },true);
        scope.$watch('max', function(value) {
            $timeout(function(){ element.data('ionRangeSlider').update({max: value}); });
        });
        scope.$watch('from', function(value) {
            $timeout(function(){ element.data('ionRangeSlider').update({from: value}); });
        });
        scope.$watch('disable', function(value) {
            $timeout(function(){ element.data('ionRangeSlider').update({disable: value}); });
        });
    }
}

verticalAlignMiddleDirective.$inject = ['$window'];
function verticalAlignMiddleDirective($window) {
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
