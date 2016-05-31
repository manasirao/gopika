module.exports = function(grunt) {

    var stringify = require('stringify');
    // show elapsed time at the end
    require('time-grunt')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    var config = {
        dist: './dist'
    };

    grunt.initConfig({
        gpwConfig: config,
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                src: ['js/**/*.js']
            }
        },
        jscs: {
            src: ['js/**/*.js'],
            options: {
                config: '.jscsrc'
            }
        },
        watch: {
            dist: {
                files: ['css/*.scss', 'css/*.css', 'featured-products.json', 'products.json', 'Gruntfile.js', 'js/**/*.js', 'js/**/*.html',  'templates/**/*.html', 'index.html'],
                tasks: ['buildDev']
            }
        },
        browserify: {
            options: {
                transform: [stringify(['.html', '.xml'])],
                allowErrors: false,
                browserifyOptions: {
                    debug: true
                }
            },
            dist: {
                transform: [stringify(['.html', '.xml'])],
                files: {
                    './dist/js/main.js': ['js/main.js']
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['gopika.scss'],
                    dest: '<%= gpwConfig.dist %>/styles',
                    ext: '.css'
                }]
            }
        },
        copy: {
            dist: {
                files: [
                    /* {expand: true, cwd: './css',  src: ['*.css'], dest: '<%= gpwConfig.dist %>/styles', filter: 'isFile'}, */
                    {expand: false, src: ['index.html'], dest: '<%= gpwConfig.dist %>/index.html', filter: 'isFile'},
                    {expand: false, src: ['products.json'], dest: '<%= gpwConfig.dist %>/products.json', filter: 'isFile'},
                    {expand: false, src: ['featured-products.json'], dest: '<%= gpwConfig.dist %>/featured-products.json', filter: 'isFile'},
                    {expand: true,  src: ['bower_components/*/**'], dest: '<%= gpwConfig.dist %>/' },
                    {expand: true,  src:['images/*', 'images/*/**'], dest: '<%= gpwConfig.dist %>/' }
                ]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['<%= gpwConfig.dist %>/*']
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint:all',
        'jscs',
        'bower:dist',
        'browserify:dist',
        'copy:dist'
    ]);

    grunt.registerTask('buildDev', [
        'clean:dist',
        'browserify:dist',
        'sass:dist',
        'copy:dist'
    ]);
    grunt.registerTask('default', ['build']);
};
