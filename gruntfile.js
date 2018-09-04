module.exports = function(grunt) {
	grunt.initConfig({


		// --- Compile Sass and Coffee -----------------------------------------

		sass: {
			default: {
				options: {
					force: true,
					style: "compressed",
					noCache: true
				},
				files: {
					'htdocs/css/style.min.css': 'src/sass/style.scss'
				}
			}
		},

		coffee: {
			default: {
				files: {
					'htdocs/js/default.js' : [
						'src/coffee/**/*.coffee' ]
				}
			}
		},

		clean: {
			default: [
				'htdocs/**/*.html',
				'htdocs/**/*.js',
				'htdocs/**/*.css'
			]
		},

		// --- Pug ------------------------------------------------------------

		pug: {
			default: {
				options: {
					client: false,
					pretty: "    ",
					data: {
						debug: false
					}
				},
				files: [{
					src: ["src/*.pug"],
					dest: "htdocs/",
					expand: true,
					ext: ".html"
				}]
			}
		},

		// --- Server ---------------------------------------------------------

		connect: {
			devServer: {
				options: {
					hostname: 'localhost',
					port: 8888,
					base: "htdocs",
					keepalive: false,
					open: true
				}
			}
		},

		// --- Watcher ---------------------------------------------------------

		watch: {
			default: {
				options: {
					spawn: false
				},
				files: [
					"src/**/*.coffee",
					"src/**/*.pug",
					"src/**/*.scss" ],

				tasks: [
					"sass",
					"pug",
					"coffee"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
