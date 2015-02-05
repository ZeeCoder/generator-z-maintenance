'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Z-Maintenance') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'publicDirectory',
      message: 'Please provide your project\'s public where you want to place the files in.',
      default: 'web'
    }];

    this.prompt(prompts, function (props) {
      this.publicDirectory = props.publicDirectory;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      // this.fs.copy(
      //   this.templatePath('_package.json'),
      //   this.destinationPath(this.publicDirectory + '/package.json')
      // );
      // this.fs.copy(
      //   this.templatePath('_bower.json'),
      //   this.destinationPath(this.publicDirectory + '/bower.json')
      // );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('.htaccess'),
        this.destinationPath(this.publicDirectory + '/.htaccess')
      );
      this.fs.copy(
        this.templatePath('maintenance.html.php'),
        this.destinationPath(this.publicDirectory + '/maintenance.html.php')
      );
    }
  },

  install: function () {
    // this.installDependencies({
    //   skipInstall: this.options['skip-install']
    // });
  }
});
