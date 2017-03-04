// /node_modules/jquery/dist/jquery.min.js

module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      options: {
        sassDir: "src/sass",
        cssDir: "src/css",
        imagesDir: "src/img",
        fontsDir: "src/fonts",
        javascriptsDir: "src/js"
      },
      dev: {
        options: {
          relativeAssets: true
        }
      }
    },
    jshint: {
      all: {
        options: {
          curly: false,
          undef: true,
          browser: true,
          devel: true,
          eqeqeq: true,
          eqnull: true
        },
        files: {
          src: ["src/js/dev/**/*.js"]
        }
      }
    },
    concat: {
      app: {
        src: [
          "node_modules/jquery/dist/jquery.min.js",
          "src/js/dev/index.js"
        ],
        dest: "src/js/dist/app.js"
      }
    },
    watch: {
      sass: {
        files: "src/sass/**/*.{sass,scss}",
        tasks: ["compass:dev"]
      },
      js: {
        files: "src/js/dev/**/*.js",
        tasks: ["jshint:all", "concat:app"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ["compass:dev", "jshint:all", "concat:app"]);
};

