angular
    .module('app')
    .directive('getdocscontent', getDocsContentDirective)
    .directive('img', holderJsDirective)

getDocsContentDirective.$inject = ['$http', '$compile'];

function getDocsContentDirective($http, $compile) {
    var directive = {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope:{
            src: '@src'
        },
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        $http.get(scope.src).success(function (response) {
            var contents = angular.element("<div>").html(response).find(".bd-content >");
            element.empty().append($compile(contents)(scope));
        });
    }
}

//Holder.js fix
function holderJsDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.src){
            Holder.run({ images: element[0], nocss: true });
        }
    }
}
