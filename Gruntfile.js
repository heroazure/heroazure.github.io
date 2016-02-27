/**
 * Created by xiaolijun on 2016/2/22.
 */
module.exports = function(grunt) {

    //var mozjpeg = require('imagemin-mozjpeg');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "js/jquery.fullPage.js",
                    "js/smeite.js",
                    "js/index.js"
                ],
                dest: "assets/js/default.js"
            }
        },*/
        jshint: {
            options: {
                eqeqeq: true,
                trailing: true
            },
            files: ['Gruntfile.js', 'js/**/*.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'js/jquery.fullPage.min.js': 'js/jquery.fullPage.js'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'css/main.min.css': [
                        "css/normalize.css",
                        "css/jquery.fullPage.css",
                        "css/swiper.css",
                        "css/style.css"
                    ]
                }
            }
        },
        imagemin: {                          // Task
            /*static: {                          // Target
                options: {                       // Target options
                    optimizationLevel: 0,
                    svgoPlugins: [{ removeViewBox: false }]
                    //use: [mozjpeg()]
                },
                files: {                         // Dictionary of files
                    'dist/page0.png': 'img/page0.png', // 'destination': 'source'
                    'dist/pic1.png': 'img/pic1.png',
                    'dist/pic2.png': 'img/pic2.png',
                    'dist/test11.jpg': 'img/test11.jpg'
                }
            }*/
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
        watch: {
            css: {
                files: ['css/*.css','!css/*.min.css'],
                tasks: ['cssmin'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true
                }
            },
            another: {
                files: ['img/*'],
                tasks: ['imagemin:dynamic'],
                options: {
                    // Start another live reload server on port 1337
                    livereload: 1337
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify','cssmin','imagemin:dynamic']);

};