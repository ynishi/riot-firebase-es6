module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-rollup-preprocessor'
    ],
    files: [
      'https://www.gstatic.com/firebasejs/3.8.0/firebase.js',
      'node_modules/expect.js/index.js',
      'node_modules/es6-shim/es6-shim.js',
      'test/**/*.js'
                ],
    preprocessors: {
      'test/**/*.js': ['rollup']
    },
    rollupPreprocessor: {
      plugins:[  
        require('rollup-plugin-riot')(),
        require('rollup-plugin-buble')(),
        require('rollup-plugin-commonjs')(),
        require('rollup-plugin-node-resolve')(),
      ],
      external: ['firebase'],
      globals: {
        firebase: 'firebase'
      },
      format: 'iife',
      moduleName: 'app',
      sourceMap: 'inline',
      dest: 'bundle.js'
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true,
    logLevel: "info"
  });
};
