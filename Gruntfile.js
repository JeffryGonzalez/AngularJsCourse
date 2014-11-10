module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          src: ["bower_components/angular-full/*.js"],
          dest: "AngularJsApplications/scripts/vendor/angular",
          filter: "isFile"
        }, {
          expand: true,
          flatten: true,
          src: ["bower_components/angular-ui-router/release/*.js"],
          dest: "AngularJsApplications/scripts/vendor/angular-ui",
          filter: "isFile"
        },{
          expand: true,
          flatten: true,
          src: ["bower_components/bootstrap/dist/css/*"],
          dest: "AngularJsApplications/content/vendor/bootstrap/css",
          filter: "isFile"
        },{
          expand: true,
          flatten: true,
          src: ["bower_components/bootstrap/dist/fonts/*"],
          dest: "AngularJsApplications/content/vendor/bootstrap/fonts",
          filter: "isFile"
        },{
          expand: true,
          flatten: true,
          src: ["bower_components/bootstrap/dist/js/*.js"],
          dest: "AngularJsApplications/content/vendor/bootstrap/js",
          filter: "isFile"
        }]
      }
    }





  });

  grunt.registerTask('default', ['copy']);
  grunt.registerTask('make-project', 'creates the files and directories for your project', function(name) {
    var options = {};
    options.name = name || "blank"

    grunt.log.writeln("Making Files");
    var root = "AngularJsApplications";
    grunt.file.mkdir(root + "/apps");
    var projectName = root + '/apps/' + options.name + '/';

    var appFile = grunt.file.read('templates/app.js');
    grunt.file.write(projectName + 'src/app.js', grunt.template.process(appFile, {data: options}));
    grunt.file.write(projectName + 'src/config.js', "");
    grunt.file.write(projectName + 'src/constants.js', "");

    grunt.file.mkdir(projectName + "src/controllers");
    grunt.file.mkdir(projectName + "src/services");
    grunt.file.mkdir(projectName + "src/templates");
    grunt.file.mkdir(projectName + "src/directives");
    grunt.file.mkdir(projectName + "src/tests");

    var viewFile = grunt.file.read('templates/view.cshtml');
    grunt.file.write(root + '/Views/Angular/' + options.name + ".cshtml", grunt.template.process(viewFile, {data: options}));

  });


};
