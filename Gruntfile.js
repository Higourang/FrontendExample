module.exports=function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.initConfig({
		browserify: {
			js: {
			 // A single entry point for our app
			 src: 'src/main/javascript/dependencies.js',
			 // Compile to a single file to add a script tag for in your HTML
			 dest: 'src/main/webapp/assets/js/dependencies.js'
			} 
		},
		jshint: {
			//Check syntax of listed files
			files: [
	        'Gruntfile.js',
			'src/main/javascript/**/*.js',
			'src/main/webapp/app/**/*.js']
		},
		karma: {
		  unit: {
			options: {
			  frameworks: ['jasmine'],
			  singleRun: true,
			  browsers: ['PhantomJS'],
			  files: [
			  //Libraries
			  'node_modules/angular/angular.js',
			  'node_modules/angular-mocks/angular-mocks.js',
			  //Scripts to test.
			  'src/main/webapp/app/**/*.js',
			  //spec files
			  'src/main/webapp/app/**/*.test.js'
			  ]
			}
		  }
		}
	});
	// The default tasks to run when you type: grunt
	grunt.registerTask('default', ['jshint','browserify', 'karma']);
};