const sass    = require('node-sass');
const package = require('./package.json');

module.exports = function(grunt) {
	grunt.initConfig({
		// --- Compile Sass and Coffee -----------------------------------------
		sass: {
			options: {
				implementation : sass,
				sourcemap : false
			},
			dist: {
				files: {
					'htdocs/css/style.css': 'src/sass/style.scss'
				}
			}
		},

		coffee: {
			default: {
				options: {
					join: true
				},
				files: {
					'htdocs/js/default.js': [
						'src/coffee/event-list.coffee',
						'src/coffee/event-app.coffee',
						'src/coffee/*.coffee'
					]
				}
			}
		},
		clean: {
			default: ['htdocs'],
			temp: ['.temp']
		},
		// --- Pug ------------------------------------------------------------
		pug: {
			dev: {
				options: {
					client: false,
					pretty: "    ",
					data: {
						DEV : true,
						VERSION : package.version,
						BUILD : Date.now()
					}
				},
				files: {
					'htdocs/index.html':'src/index.pug',
					'htdocs/impressum.html':'src/impressum.pug',
					'htdocs/datenschutz.html':'src/datenschutz.pug'
				}
			},
			prod: {
				options: {
					client: false,
					pretty: "  ",
					data: {
						PROD : true,
						VERSION : package.version,
						BUILD : Date.now()
					}
				},
				files: {
					'htdocs/index.html':'src/index.pug',
					'htdocs/impressum.html':'src/impressum.pug',
					'htdocs/datenschutz.html':'src/datenschutz.pug'
				}
			}
		},
		copy: {
			images: {
				files: [{
					expand: true,
					flatten: true,
					src: ['src/images/*'],
					dest: 'htdocs/images/'
				}]
			},
			deploy: {
				files: [{
					cwd: 'htdocs',
					expand: true,
					flatten: false,
					src: ['**'],
					dest: '.temp/deploy/' + package.id + '/' + package.version
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
					spawn: false,
					livereload: true
				},
				files: ["src/**/*.coffee", "src/**/*.pug", "src/**/*.scss"],
				tasks: ["sass", "pug:dev", "coffee"]
			}
		},
		'ftp-deploy': {
			build: {
				auth: {
					host: 'wp327.webpack.hosteurope.de',
					port: 21,
					authKey: 'felix-click'
				},
				src: '.temp/deploy',
				dest: '/',
				exclusions: [
					'htdocs/**/.DS_Store'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	grunt.registerTask("default", [
		'clean',
		'sass',
		'pug:dev',
		'coffee',
		'copy:images',
		'connect',
		'watch'
	]);
	
	grunt.registerTask("build", [
		'clean',
		'sass',
		'pug:prod',
		'coffee',
		'copy:images'
	]);

	grunt.registerTask("deploy", [
		'build',
		'copy:deploy',
		'ftp-deploy',
		'clean:temp'
	]);
};