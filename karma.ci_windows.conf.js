module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['browserify', 'mocha', 'chai-as-promised', 'chai'],

        files: [
            'src/**/*.js',
            'test/template-engine/**/*Spec.js',
            'test/plugin/compiled/**/*Spec.js'
        ],
        exclude: [],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/template-engine/**/*.js': ['browserify']
        },

        browserify: {
            transform: ['babelify'],
            debug: true
        },

        babelPreprocessor: {
            options: {
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            },
            debug: true
        },

        reporters: ['mocha'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_WARN,

        autoWatch: false,

        browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],


        singleRun: true,

    });
};
