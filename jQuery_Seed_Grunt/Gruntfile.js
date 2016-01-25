/*!
 * GenesisUI's Gruntfile
 * http://GenesisUI.com
 * Copyright 2016 creativeLabs Łukasz Holeczek
 * License : http://genesisui.com/license.html
 */

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
                        'bower_components/momentjs/min/moment.min.js',
                        'bower_components/bootstrap-daterangepicker/daterangepicker.js',
                        'bower_components/toastr/toastr.min.js',
                        'bower_components/toastr/toastr.js.map',
                        'bower_components/select2/select2.min.js',
                        'bower_components/ionrangeslider/js/ion.rangeSlider.min.js',
                        'bower_components/gauge.js/dist/gauge.min.js',
                        'bower_components/fullcalendar/dist/fullcalendar.min.js',
                        'bower_components/fullcalendar/dist/gcal.js',
                        'bower_components/pace/pace.min.js',
                        'bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js'
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
                    ],
                    dest: '../build/jQuery_Seed/dist',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'views/',
                    src: '**',
                    dest: '../build/jQuery_Seed/views',
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'seed/js/',
                    src: '**',
                    dest: '../build/jQuery_Seed/dist/js',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: 'fonts/**',
                    dest:'../build/jQuery_Seed/dist/fonts',
                    filter: 'isFile'
                }, {
                    src: ['index-seed-dist.html'],
                    dest: '../build/jQuery_Seed/index.html'
                }]
            }
        },
        concat: {
            demo: {
                options: {
                    sourceMap: true
                },
                files: [{
                    src: [
                        'js/libs/jquery.min.js',
                        'js/libs/tether.min.js',
                        'js/libs/bootstrap.min.js',
                        'js/libs/pace.min.js',
                        'js/libs/Chart.min.js',
                        'js/views/shared.js',
                        'js/app.js',
                    ],
                    dest: '../build/jQuery_Demo/dist/js/app.js'
                }]
            }
        },
        replace: {
            seedViews: {
                src: ['../build/jQuery_Seed/views/*.html', '../build/jQuery_Seed/views/**/*.html'],
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
            },
            demo: {
                options: {
                    mangle: false
                },
                files: {
                    '../build/jQuery_Demo/dist/js/app.js': ['../build/jQuery_Demo/dist/js/app.js']
                }
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
                files: ['css/*.css', '!css/*.min.css'],
                tasks: ['cssmin:development']
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
    grunt.loadNpmTasks('grunt-text-replace');

    // Default task.
    grunt.registerTask('default', ['watch']);

    // Own tasks.
    grunt.registerTask('build-development', ['copy:development', 'sass:development', 'cssmin:development']);
    grunt.registerTask('build-seed',        ['copy:seed', 'replace:seedViews']);
    grunt.registerTask('build-all',         ['build-development', 'build-seed']);
};
