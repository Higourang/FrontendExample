module.exports=function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js',
			'src/main/javascript/*.js',
			'src/test/javascript/*.js']
		},
		phantom: {
			default_options: {
				
			},
			custom_options: {
				options: {
					port: 5555
				}
			},
			
		}
	});
	grunt.registerTask('default', ['jshint']);
};