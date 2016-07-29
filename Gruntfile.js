module.exports=function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	
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
			'src/main/javascript/*.js',
			'src/test/javascript/*.js',
			'src/main/webapp/app/*/*.js']
		}
	});
	// The default tasks to run when you type: grunt
	grunt.registerTask('default', ['jshint','browserify']);
};