angular
    .module('app')

    // List of navigations elements
    .controller('bootstrapElements', bootstrapElements)

bootstrapElements.$inject = ['$scope'];

function bootstrapElements($scope) {
    $scope.layout = [
        {
            name: 'overview',
            desc: 'Overview'
        },
        {
            name: 'grid',
            desc: 'Grid'
        },
        {
            name: 'media-object',
            desc: 'Media object'
        },
        {
            name: 'responsive-utilities',
            desc: 'Responsive utilities'
        }
    ]
    $scope.content = [
        {
            name: 'reboot',
            desc: 'Reboot'
        },
        {
            name: 'typography',
            desc: 'Typography'
        },
        {
            name: 'code',
            desc: 'Code'
        },
        {
            name: 'images',
            desc: 'Images'
        },
        {
            name: 'tables',
            desc: 'Tables'
        },
        {
            name: 'figures',
            desc: 'Figures'
        }
    ]
    $scope.components = [
        {
            name: 'alerts',
            desc: 'Alerts'
        },
        {
            name: 'breadcrumb',
            desc: 'Breadcrumb'
        },
        {
            name: 'buttondropdown',
            desc: 'Button Dropdown'
        },
        {
            name: 'buttongroup',
            desc: 'Button Group'
        },
        {
            name: 'buttons',
            desc: 'Buttons'
        },
        {
            name: 'card',
            desc: 'Card'
        },
        {
            name: 'carousel',
            desc: 'Carousel'
        },
        {
            name: 'collapse',
            desc: 'Collapse'
        },
        {
            name: 'dropdowns',
            desc: 'Dropdowns'
        },
        {
            name: 'forms',
            desc: 'Forms'
        },
        {
            name: 'inputgroup',
            desc: 'Input Group'
        },
        {
            name: 'jumbotron',
            desc: 'Jumbotron'
        },
        {
            name: 'label',
            desc: 'Label'
        },
        {
            name: 'listgroup',
            desc: 'List Group'
        },
        {
            name: 'modal',
            desc: 'Modal'
        },
        {
            name: 'navbar',
            desc: 'Navbar'
        },
        {
            name: 'navs',
            desc: 'Navs'
        },
        {
            name: 'pagination',
            desc: 'Pagination'
        },
        {
            name: 'popovers',
            desc: 'Popovers'
        },
        {
            name: 'progress',
            desc: 'Progress'
        },
        {
            name: 'scrollspy',
            desc: 'Scrollspy'
        },
        {
            name: 'tooltips',
            desc: 'Tooltips'
        },
        {
            name: 'utilities',
            desc: 'Utilities'
        }
    ]
}
