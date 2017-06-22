'use strict';

// global.$ = {
//     package: require('./package.json'),
//     config: require('./gulp/config.js'),

//     path: {
//         task: require('./gulp/path/tasks.js'),
//         app: require('./gulp/path/app.js')
//     },

//     gulp: require('gulp'),
//     browsersync: require('browser-sync').create(),
//     gp: require('gulp-load-plugins')()
// };

// $.path.task.forEach(function(taskPath) {
//     require(taskPath)();
// });

require('./gulp/tasks/watch.js');
require('./gulp/tasks/pug.js');
require('./gulp/tasks/styles.js');
require('./gulp/tasks/scripts.js');