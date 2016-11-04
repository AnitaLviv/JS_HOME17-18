module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      jshint: {
    options: {
       curly: true,
       eqeqeq: true,
       immed: true,
       latedef: true,
       newcap: true,
       noarg: true,
       sub: true,
       undef: true,
       eqnull: true,
       browser: true,
       globals: {
           jQuery: true,
           $: true,
        console: true 
   }
    
  },
     "<%= pkg.name %>": {
       src: ['js/**/*.js']
 }
       },

     concat: {
        



         dist: {
        src: ['js/script1.js', 'js/script2.js'],
        dest: 'new/build.js'
          }
       },

     uglify: {

 options: {
         stripBanners: true,
         banner: '/*"<%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>"*/\n' 
      },
        build: {
        src: "new/build.js",
        dest:"new/build.min.js"
       }

     },

   cssmin: {
       with_banner: {
         options: {
            banner:"/*My first minified CSS*/"
       },

            files: {
              'new/style.min.css' : ['css/style1.css','css/style2.css']
              
               }

         }
      }

   });

 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-cssmin');

 grunt.registerTask('default',['jshint','concat','uglify','cssmin']);

 };


   
