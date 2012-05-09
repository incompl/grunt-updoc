// Example grunt.js using updoc task.

module.exports = function(grunt) {

  grunt.loadTasks("grunt-updoc");

  // Project configuration.
  grunt.initConfig({
    updoc: {
      "exampleOutput": ["exampleInput/*"]
    }
  });

  // Default task.
  grunt.registerTask("default", "updoc");

};