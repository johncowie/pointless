module.exports = function(grunt) {
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    

    /*============================================================
     Sass
     ============================================================*/
    sass: {
        compile: {
            options: {
                // style: 'compressed'
            },

            files: {
                'svgcounter/css/app.css': 'sass/app.scss'
            }
        }
    },

    /*============================================================
     Watch
     ============================================================*/
    watch: {
        sass: {
            files: ['sass/**/*'],
            tasks: ['sass'],
        }
    },
  
  });

  // Loads the required plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['sass', 'watch']);

};
