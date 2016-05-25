var gulp = require('gulp');
var statePlugin = require('./gulp-angular-state');
var watch = require('gulp-watch');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');

var SRC = './src',
	DIST = './dist';

var jsFilter = filter('**/*.js', {restore: true}),
	cssFilter = filter('**/*.css', {restore: true}),
	htmlFilter = filter('**/*.html', {restore: true});

gulp.task('watch', ['init:controller', 'init:module'], function (cb) {
	// 监听controller添加到路由文件
	watch(['./src/module/**/*.controller.js', './env/RouterConfig.js'], function() {
		return gulp.src('./src/module/**/*.controller.js', {base: SRC})
			.pipe(statePlugin.controller('./env/RouterConfig.js'))
			.pipe(gulp.dest(SRC));
	});
	// 监听service和directive
	watch(['./src/module/**/*.service.js', './src/directive/**/*.directive.js', './env/ModuleConfig.js'], function() {
		return gulp.src(['./src/module/**/*.service.js', './src/directive/**/*.directive.js'], {base: SRC})
			.pipe(statePlugin.module('./env/ModuleConfig.js'))
			.pipe(gulp.dest(SRC));
	});
});
/**
 * 初始化controller到路由文件
 */
gulp.task('init:controller', function () {
	return gulp.src('./src/module/**/*.controller.js', {base: SRC})
			.pipe(statePlugin.controller('./env/RouterConfig.js'))
			.pipe(gulp.dest(SRC));
});
/**
 * 初始化service和directive添加到ModuleConfig
 */
gulp.task('init:module', function() {
	return gulp.src(['./src/module/**/*.service.js', './src/directive/**/*.directive.js'], {base: SRC})
			.pipe(statePlugin.module('./env/ModuleConfig.js'))
			.pipe(gulp.dest(SRC));
});
/**
 * 生成版本号并且压缩文件
 */
gulp.task('rev', ['init:controller', 'init:module'], function() {
	return gulp.src(['./src/**/*.*', '!./src/lib/**'], {base: SRC})
		// 压缩js
		.pipe(jsFilter)
		.pipe(uglify().on('error', console.log)) 
		.pipe(jsFilter.restore)
		// 压缩css
		.pipe(cssFilter)
		.pipe(csso())
		.pipe(cssFilter.restore)
		// 压缩html
		.pipe(htmlFilter)
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true}).on('error', console.log))
		.pipe(htmlFilter.restore)
		// 生成版本号
		.pipe(rev())
		.pipe(gulp.dest(DIST))
		// 写入映射文件
		.pipe(rev.manifest('manifest.json', { merge: true }))
		.pipe(gulp.dest(DIST));
});
/**
 * 将源文件copy到dist目录，避免没加版本号的时候不能使用
 */
gulp.task('copy', function() {
	return gulp.src(['./src/**/*.*'], {base: SRC})
		.pipe(gulp.dest(DIST));
});
/**
 * 修改文件加版本号
 */
gulp.task('dist', ['copy', 'rev'], function() {
	var manifest = gulp.src('./dist/manifest.json');
	return gulp.src(['./dist/index.html', './dist/RouterConfig-*.js', './dist/ModuleConfig-*.js', './dist/directive/**/*.js'], {base: DIST})
		.pipe(revReplace({ manifest: manifest }))
		.pipe(gulp.dest(DIST));
});

gulp.task('default', ['watch']);
