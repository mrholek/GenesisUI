module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({

      	copy: {
            development: {
                files: [
                // Bootstrap SCSS Styles without bootstrap.scss
                {
                    expand: true,
                    cwd: 'bower_components/bootstrap/scss/',
                    src: ['**', '!bootstrap.scss'],
                    dest:'scss/bootstrap/',
                    filter: 'isFile'
                },
                // Main 3rd party components & plugins - seed version
                {
                    expand: true,
                    flatten: true,
                    src: [
                        //bootstrap & jquery
                        'bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'bower_components/tether/dist/js/tether.min.js',
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/jquery/dist/jquery.min.map',

                        //angular modules
                        'bower_components/angular/angular.min.js',
                        'bower_components/angular/angular.min.js.map',
                        'bower_components/angular-animate/angular-animate.min.js',
                        'bower_components/angular-animate/angular-animate.min.js.map',
                        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                        'bower_components/oclazyload/dist/oclazyload.min.js',
                        'bower_components/angular-breadcrumb/dist/angular-breadcrumb.min.js',
                        'bower_components/angular-loading-bar/build/loading-bar.min.js',
                        'bower_components/angular-translate/angular-translate.min.js'
                    ],
                    dest:'js/libs/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'bower_components/fontawesome/scss/**',
                    dest:'scss/app/vendors/fontawesome/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'bower_components/fontawesome/fonts/**',
                    dest:'fonts/',
                    filter: 'isFile'
                }, {
                    src: 'bower_components/simple-line-icons/scss/simple-line-icons.scss',
                    dest:'scss/app/vendors/simple-line-icons/simple-line-icons.scss'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'bower_components/simple-line-icons/fonts/**',
                    dest:'fonts/',
                    filter: 'isFile'
                },
                // Optional 3rd party components & plugins - fully featured version
                {
                    expand: true,
                    flatten: true,
                    src: [
                        //plugins & components
                        'bower_components/Chart.js/Chart.min.js',
                        'bower_components/datatables/media/js/dataTables.bootstrap.min.js',
                        'bower_components/datatables/media/js/jquery.dataTables.min.js',
                        'bower_components/moment/min/moment.min.js',
                        'bower_components/bootstrap-daterangepicker/daterangepicker.js',
                        'bower_components/select2/select2.min.js',
                        //'bower_components/jquery-nestable/jquery.nestable.js',
                        'bower_components/ionrangeslider/js/ion.rangeSlider.min.js',
                        'bower_components/gauge.js/dist/gauge.min.js',
                        'bower_components/fullcalendar/dist/fullcalendar.min.js',
                        'bower_components/fullcalendar/dist/gcal.js',
                        //'bower_components/echarts/build/source/echarts-all.js',
                        //angular modules
                        'bower_components/angular-ui-mask/dist/mask.min.js',
                        'bower_components/angular-sanitize/angular-sanitize.min.js',
                        'bower_components/angular-sanitize/angular-sanitize.min.js.map',
                        'bower_components/angular-ui-select/dist/select.min.js',
                        'bower_components/angular-daterangepicker/js/angular-daterangepicker.min.js',
                        'bower_components/angular-daterangepicker/js/angular-daterangepicker.min.js.map',
                        'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
                        'bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js',
                        'bower_components/angular-datatables/dist/angular-datatables.min.js',
                        'bower_components/angular-chart.js/dist/angular-chart.min.js',
                        'bower_components/angular-chart.js/dist/angular-chart.min.js.map',
                        'bower_components/angular-ui-calendar/src/calendar.js',
                        'bower_components/angularjs-slider/dist/rzslider.min.js',
                        //'bower_components/angular-echarts/dist/angular-echarts.min.js'
                    ],
                    dest:'js/libs/',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'bower_components/datatables/media/images/**',
                    dest:'img/',
                    filter: 'isFile'
                }]
            },
            seed: {
                files: [{
                    expand: true,
                    src: [
                        'css/**',
                        'img/**',
                        'js/**',
                        '!js/controllers/**',
                        '!js/demo/**',
                        '!js/docs.js',
                        '!js/holder.min.js',
                    ],
                    dest: '../build/Angular_Seed/dist',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'views/',
                    src: '**',
                    dest: '../build/Angular_Seed/views',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'fonts/**',
                    dest:'../build/Angular_Seed/dist/fonts',
                    filter: 'isFile'
                }, {
                    src: ['index-seed-dist.html'],
                    dest: '../build/Angular_Seed/index.html'
                }]
            }
        },
        replace: {
            seedJs:{
                src: ['../build/Angular_Seed/dist/js/routes.js'],
                overwrite: true,
                replacements: [{
                    from: '\'js/libs',
                    to: '\'dist/js/libs'
                }, {
                    from: '\'js/controllers',
                    to: '\'dist/js/controllers'
                }]
            },
            seedViews: {
                src: ['../build/Angular_Seed/views/*.html', '../build/Angular_Seed/views/**/*.html'],
                overwrite: true,
                replacements: [{
                    from: '"img/',
                    to: '"dist/img/',
                }]
            }
        },
        sass: {
            development: {
                files: {
                    'css/style.css' : 'scss/bootstrap/bootstrap.scss'
                }
            }
        },
        cssmin: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'js/libs',
                    src: ['*.js', '!*.min.js'],
                    dest:'js/libs',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            }
        },
        clean: {
            seedGrunt: {
                options: {
                    force: true
                },
                src: [
                    '../Angular_Seed_Grunt/css/docs.min.css',
                    '../Angular_Seed_Grunt/js/controllers',
                    '../Angular_Seed_Grunt/js/demo',
                    '../Angular_Seed_Grunt/js/docs.js',
                    '../Angular_Seed_Grunt/js/holder.min.js'
                ]
            }
        },
        watch: {
            options: {
                livereload: true,
                interval: 1000
            },
            sass: {
                options: {
                    livereload: false
                },
                files: ['**/*.scss', '**/**/*.scss'],
                tasks: ['sass:development']
            },
            cssmin: {
                options: {
                    livereload: false
                },
                files: ['css/*.css'],
                tasks: ['cssmin:development']
            },
            concat: {
                options: {
                    livereload: false
                },
                files: ['js/*.js', 'js/**/*.js'],
                tasks: ['concat']
            },
            reload: {
                files: ['**/*.php', '**/*.html', '**/**/*.html', '**/*.js', '**/**/*.js']
            },
            livereload: {
                options: { livereload: true, interval: 1000 },
                files: [
                    '**/*.css'
                ]
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');

    // Default task.
    grunt.registerTask('default', ['watch']);

    // Own tasks.
    grunt.registerTask('build-development', ['copy:development', 'sass:development', 'cssmin:development']);
    grunt.registerTask('build-seed',        ['copy:seed', 'replace:seedJs', 'replace:seedViews']);
    grunt.registerTask('build-all',         ['build-development', 'build-seed']);
};
