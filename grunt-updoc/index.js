/*
 * updoc task for grunt
 * Copyright (c) 2012 Greg Smith
 * This work is public domain.
 */

module.exports = function(grunt) {

  var updoc = require("updoc");

  grunt.registerMultiTask("updoc", "JavaScript Documentation Generator.", function() {
    var dest = this.file.dest;
    var files = grunt.file.expandFiles(this.file.src);
    files.forEach(function(fileName) {
      var match = fileName.match(/(\w+).js/);
      var newFileName;
      var newFilePath;
      if (match) {
        newFileName = match[1] + ".html";
        newFilePath = dest + "/" + newFileName;
        updoc(fileName, newFilePath, "./grunt-updoc/node_modules/updoc/templates/default._template");
      }
      else {
        grunt.log.writeln("Skipping " + fileName);
      }
    });
  });

};