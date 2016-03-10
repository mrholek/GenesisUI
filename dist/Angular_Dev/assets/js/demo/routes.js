angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $stateProvider

            .state('bootstrap', {
                abstract: true,
                templateUrl: 'views/common/layouts/full.html',
                ncyBreadcrumb: {
                    label: 'Bootstrap'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: ['assets/js/libs/Chart.min.js', 'assets/js/libs/angular-chart.min.js']
                        }]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/shared.js']
                        });
                    }]
                }
            })
            .state('bootstrap.layout', {
                abstract: true,
                templateUrl: 'views/common/bootstrap.html',
                ncyBreadcrumb: {
                    label: 'Content'
                }
            })
            .state('bootstrap.layout.overview', {
                url: '/bootstrap/layout/overview',
                template: '<div getDocsContent src="views/bootstrap/layout/overview/index.html"></div>',
                params: {
                    subtitle: 'Bootstrap includes several components and options for laying out your project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.'
                },
                ncyBreadcrumb: {
                    label: 'Overview',
                }
            })
            .state('bootstrap.layout.grid', {
                url: '/bootstrap/layout/grid',
                template: '<div getDocsContent src="views/bootstrap/layout/grid/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Grid',
                }
            })
            .state('bootstrap.layout.media-object', {
                url: '/bootstrap/layout/media-object',
                template: '<div getDocsContent src="views/bootstrap/layout/media-object/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Media Object',
                }
            })
            .state('bootstrap.layout.responsive-utilities', {
                url: '/bootstrap/layout/responsive-utilities',
                template: '<div getDocsContent src="views/bootstrap/layout/responsive-utilities/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Responsive Utilities',
                }
            })
            .state('bootstrap.content', {
                abstract: true,
                templateUrl: 'views/common/bootstrap.html',
                ncyBreadcrumb: {
                    label: 'Content'
                }
            })
            .state('bootstrap.content.reboot', {
                url: '/bootstrap/content/reboot',
                template: '<div getDocsContent src="views/bootstrap/content/reboot/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Reboot',
                }
            })
            .state('bootstrap.content.code', {
                url: '/bootstrap/content/code',
                template: '<div getDocsContent src="views/bootstrap/content/code/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Code',
                }
            })
            .state('bootstrap.content.typography', {
                url: '/bootstrap/content/typography',
                template: '<div getDocsContent src="views/bootstrap/content/typography/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Typography',
                }
            })
            .state('bootstrap.content.images', {
                url: '/bootstrap/content/images',
                template: '<div getDocsContent src="views/bootstrap/content/images/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Images',
                },

            })
            .state('bootstrap.content.tables', {
                url: '/bootstrap/content/tables',
                template: '<div getDocsContent src="views/bootstrap/content/tables/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Tables',
                }
            })
            .state('bootstrap.content.figures', {
                url: '/bootstrap/content/figures',
                template: '<div getDocsContent src="views/bootstrap/content/figures/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Figures',
                }
            })
            .state('bootstrap.components', {
                abstract: true,
                templateUrl: 'views/common/bootstrap.html',
                ncyBreadcrumb: {
                    label: 'Components'
                }
            })
            .state('bootstrap.components.alerts', {
                url: '/bootstrap/components/alerts',
                template: '<div getDocsContent src="views/bootstrap/components/alerts/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Alerts',
                }
            })
            .state('bootstrap.components.breadcrumb', {
                url: '/bootstrap/components/breadcrumb',
                template: '<div getDocsContent src="views/bootstrap/components/breadcrumb/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Breadcrumb',
                }
            })
            .state('bootstrap.components.buttondropdown', {
                url: '/bootstrap/components/buttondropdown',
                template: '<div getDocsContent src="views/bootstrap/components/button-dropdown/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Button Dropdown',
                }
            })
            .state('bootstrap.components.buttongroup', {
                url: '/bootstrap/components/buttongroup',
                template: '<div getDocsContent src="views/bootstrap/components/button-group/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Button Group',
                }
            })
            .state('bootstrap.components.buttons', {
                url: '/bootstrap/components/buttons',
                template: '<div getDocsContent src="views/bootstrap/components/buttons/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Buttons',
                }
            })
            .state('bootstrap.components.card', {
                url: '/bootstrap/components/card',
                template: '<div getDocsContent src="views/bootstrap/components/card/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Card',
                }
            })
            .state('bootstrap.components.carousel', {
                url: '/bootstrap/components/carousel',
                template: '<div getDocsContent src="views/bootstrap/components/carousel/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Carousel',
                }
            })
            .state('bootstrap.components.collapse', {
                url: '/bootstrap/components/collapse',
                template: '<div getDocsContent src="views/bootstrap/components/collapse/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Collapse',
                }
            })
            .state('bootstrap.components.dropdowns', {
                url: '/bootstrap/components/dropdowns',
                template: '<div getDocsContent src="views/bootstrap/components/dropdowns/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Dropdowns',
                }
            })
            .state('bootstrap.components.forms', {
                url: '/bootstrap/components/forms',
                template: '<div getDocsContent src="views/bootstrap/components/forms/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Forms',
                }
            })
            .state('bootstrap.components.inputgroup', {
                url: '/bootstrap/components/inputgroup',
                template: '<div getDocsContent src="views/bootstrap/components/input-group/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Input Group',
                }
            })
            .state('bootstrap.components.jumbotron', {
                url: '/bootstrap/components/jumbotron',
                template: '<div getDocsContent src="views/bootstrap/components/jumbotron/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Jumbotron',
                }
            })
            .state('bootstrap.components.label', {
                url: '/bootstrap/components/label',
                template: '<div getDocsContent src="views/bootstrap/components/label/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Label',
                }
            })
            .state('bootstrap.components.listgroup', {
                url: '/bootstrap/components/listgroup',
                template: '<div getDocsContent src="views/bootstrap/components/list-group/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'List Group',
                }
            })
            .state('bootstrap.components.modal', {
                url: '/bootstrap/components/modal',
                template: '<div getDocsContent src="views/bootstrap/components/modal/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Modal',
                }
            })
            .state('bootstrap.components.nav', {
                url: '/bootstrap/components/nav',
                template: '<div getDocsContent src="views/bootstrap/components/nav/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Nav',
                }
            })
            .state('bootstrap.components.navbar', {
                url: '/bootstrap/components/navbar',
                template: '<div getDocsContent src="views/bootstrap/components/navbar/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Navbar',
                }
            })
            .state('bootstrap.components.navs', {
                url: '/bootstrap/components/navs',
                template: '<div getDocsContent src="views/bootstrap/components/navs/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'navs',
                }
            })
            .state('bootstrap.components.pagination', {
                url: '/bootstrap/components/pagination',
                template: '<div getDocsContent src="views/bootstrap/components/pagination/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Pagination',
                }
            })
            .state('bootstrap.components.popovers', {
                url: '/bootstrap/components/popovers',
                template: '<div getDocsContent src="views/bootstrap/components/popovers/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Popovers',
                }
            })
            .state('bootstrap.components.progress', {
                url: '/bootstrap/components/progress',
                template: '<div getDocsContent src="views/bootstrap/components/progress/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Progress',
                }
            })
            .state('bootstrap.components.reboot', {
                url: '/bootstrap/components/reboot',
                template: '<div getDocsContent src="views/bootstrap/components/reboot/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Reboot',
                }
            })
            .state('bootstrap.components.scrollspy', {
                url: '/bootstrap/components/scrollspy',
                template: '<div getDocsContent src="views/bootstrap/components/scrollspy/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Scrollspy',
                }
            })
            .state('bootstrap.components.tooltips', {
                url: '/bootstrap/components/tooltips',
                template: '<div getDocsContent src="views/bootstrap/components/tooltips/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Label',
                }
            })
            .state('bootstrap.components.transitions', {
                url: '/bootstrap/components/transitions',
                template: '<div getDocsContent src="views/bootstrap/components/transitions/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Transitions',
                }
            })
            .state('bootstrap.components.utilities', {
                url: '/bootstrap/components/utilities',
                template: '<div getDocsContent src="views/bootstrap/components/utilities/index.html"></div>',
                ncyBreadcrumb: {
                    label: 'Utilities',
                }
            })
            .state('app.icons', {
                url: "/icons",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: '{{ "ICONS" | translate }}'
                }
            })
            .state('app.icons.fontawesome', {
                url: '/font-awesome',
                templateUrl: 'views/icons/font-awesome.html',
                ncyBreadcrumb: {
                    label: 'Font Awesome'
                }
            })
            .state('app.icons.simplelineicons', {
                url: '/simple-line-icons',
                templateUrl: 'views/icons/simple-line-icons.html',
                ncyBreadcrumb: {
                    label: 'Simple Line Icons'
                }
            })
            .state('app.components', {
                url: "/components",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Components'
                }
            })
            .state('app.components.buttons', {
                url: '/buttons',
                templateUrl: 'views/components/buttons.html',
                ncyBreadcrumb: {
                    label: '{{ "BUTTONS" | translate }}'
                }
            })
            .state('app.components.social-buttons', {
                url: '/social-buttons',
                templateUrl: 'views/components/social-buttons.html',
                ncyBreadcrumb: {
                    label: 'Social Buttons'
                }
            })
            .state('app.components.cards', {
                url: '/cards',
                templateUrl: 'views/components/cards.html',
                ncyBreadcrumb: {
                    label: 'Cards'
                }
            })
            .state('app.components.forms', {
                url: '/forms',
                templateUrl: 'views/components/forms.html',
                ncyBreadcrumb: {
                    label: 'Forms'
                }
            })
            .state('app.components.switches', {
                url: '/switches',
                templateUrl: 'views/components/switches.html',
                ncyBreadcrumb: {
                    label: 'Switches'
                }
            })
            .state('app.components.tables', {
                url: '/tables',
                templateUrl: 'views/components/tables.html',
                ncyBreadcrumb: {
                    label: '{{ "TABLES" | translate }}'
                }
            })
            .state('app.plugins', {
                url: "/plugins",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Plugins'
                }
            })
            .state('app.plugins.calendar', {
                url: '/calendar',
                templateUrl: 'views/plugins/calendar.html',
                ncyBreadcrumb: {
                    label: '{{ "CALENDAR" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serial: true,
                                files: ['assets/js/libs/moment.min.js','assets/js/libs/fullcalendar.min.js','assets/js/libs/gcal.min.js','assets/js/libs/calendar.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/calendar.js']
                        });
                    }]
                }
            })
            .state('app.plugins.notifications', {
                url: '/notifications',
                templateUrl: 'views/plugins/notifications.html',
                ncyBreadcrumb: {
                    label: '{{ "NOTIFICATIONS" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['assets/js/libs/angular-toastr.tpls.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/notifications.js']
                        });
                    }]
                }
            })
            .state('app.plugins.sliders', {
                url: '/sliders',
                templateUrl: 'views/plugins/sliders.html',
                ncyBreadcrumb: {
                    label: '{{ "SLIDERS" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['assets/js/libs/ion.rangeSlider.min.js', 'assets/js/libs/rzslider.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/sliders.js']
                        });
                    }]
                }
            })
            .state('app.plugins.tables', {
                url: '/tables',
                templateUrl: 'views/plugins/tables.html',
                ncyBreadcrumb: {
                    label: '{{ "TABLES" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['assets/js/libs/jquery.dataTables.min.js', 'assets/js/libs/angular-datatables.min.js', 'assets/js/libs/angular-datatables.bootstrap.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/tables.js']
                        });
                    }]
                }
            })
            .state('app.forms', {
                url: '/forms',
                templateUrl: 'views/forms.html',
                ncyBreadcrumb: {
                    label: '{{ "FORMS" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                files: ['assets/js/libs/moment.min.js']
                            },
                            {
                                serie: true,
                                files: ['assets/js/libs/daterangepicker.min.js', 'assets/js/libs/angular-daterangepicker.min.js']
                            },
                            {
                                files: ['assets/js/libs/mask.min.js']
                            },
                            {
                                files: ['assets/js/libs/select.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/forms.js']
                        });
                    }]
                }
            })
            .state('app.widgets', {
                url: '/widgets',
                templateUrl: 'views/widgets.html',
                ncyBreadcrumb: {
                    label: '{{ "WIDGETS" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                files: ['assets/js/libs/gauge.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/widgets.js']
                        });
                    }]
                }
            })
            .state('app.charts', {
                url: '/charts',
                templateUrl: 'views/charts.html',
                ncyBreadcrumb: {
                    label: '{{ "CHARTS" | translate }}'
                },
                resolve: {
                    // Plugins loaded before
                    // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //     return $ocLazyLoad.load([
                    //         {
                    //             serial: true,
                    //             files: ['assets/js/libs/Chart.min.js', 'assets/js/libs/angular-chart.min.js']
                    //         }
                    //     ]);
                    // }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/charts.js']
                        });
                    }]
                }
            })
            .state('app.echarts', {
                url: '/echarts',
                templateUrl: 'views/echarts.html',
                ncyBreadcrumb: {
                    label: '{{ "CHARTS" | translate }}'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serial: true,
                                files: ['assets/js/libs/echarts-all.min.js', 'assets/js/libs/angular-echarts.min.js']
                            }
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['assets/js/controllers/echarts.js']
                        });
                    }]
                }
            })
            .state('app.animations', {
                url: '/animations',
                templateUrl: 'views/animations.html',
                ncyBreadcrumb: {
                    label: '{{ "ANIMATIONS" | translate }}'
                }
            })
    }]);
