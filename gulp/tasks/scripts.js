var gulp = require('gulp'),
webpack = require('webpack'),
path = require('path'); 

//gulp.task('scripts', function() {
//	webpack(path.resolve(__dirname, '../../webpack.config.js'), function(err, stats) {
//		if (err) {
//			console.log(err)
//		}
//		console.log(stats.toString());
//		callback();
//	});
//});

gulp.task('scripts', function() {
	return gulp.src('./app/assets/scripts/App.js')
		.pipe(webpack())
		.pipe(gulp.dest('./app/temp/scripts/App.js'));
});