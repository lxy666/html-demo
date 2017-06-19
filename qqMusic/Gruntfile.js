module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        
        uglify : {
            qqmin : {
                files:{
                    'src/play.min.js':['src/play.js']
                }
            }
        },
        jshint: {
            all: ['src/play.js']
        }
    });
    // 载入插件
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    // 注册任务
    grunt.registerTask('default', ['uglify','jshint']);
};