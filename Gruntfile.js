module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                src: 'random.js', 
                dest: 'random.min.js'
            }
        },
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 8000,
                    hostname: '*',
                    keepalive: true,
                    base: ['']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            grunt: {
                files: ['Gruntfile.js']
            },
            scripts: {
                files: 'random.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};
