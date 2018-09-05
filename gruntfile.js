const package = require('./package.json');

module.exports = function(grunt) {
	grunt.initConfig({
		// --- Compile Sass and Coffee -----------------------------------------
		sass: {
			default: {
				options: {
					force: true,
					style: "expanded",
					noCache: true
				},
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
					'htdocs/js/default.js': ['src/coffee/event-list.coffee', 'src/coffee/event-app.coffee', 'src/coffee/*.coffee']
				}
			}
		},
		clean: {
			default: ['htdocs'],
			temp : ['.temp']
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
				files: {
					'htdocs/index.html': 'src/index.pug'
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
			deploy : {
				files : [{
					cwd : 'htdocs',
					expand : true,
					flatten: false,
					src:['**'],
					dest: '.temp/' + package.id + '/' + package.version
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
				tasks: ["sass", "pug", "coffee"]
			}
		},
		'ftp-deploy': {
			build: {
				auth: {
					host: 'wp327.webpack.hosteurope.de',
					port: 21,
					authKey: 'felix-click'
				},
				src: '.temp',
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	
	grunt.registerTask("default", ['sass', 'pug', 'coffee', 'copy:images', 'connect', 'watch']);
	grunt.registerTask("build", ['sass', 'pug', 'coffee', 'copy:images']);
	
	grunt.registerTask("deploy", [
		'build',
		'copy:deploy',
		'ftp-deploy',
		'clean:temp'
	]);
};