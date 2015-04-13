module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                src: 'random.js', 
                dest: 'random.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

};
