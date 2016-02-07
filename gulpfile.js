var gulp = require( 'gulp' ) ,
	concat = require( 'gulp-concat' ) ,
	autoprefixer = require( 'gulp-autoprefixer' ) ,
	rename = require( 'gulp-rename' ) ,
	livereload = require( 'gulp-livereload' ) ,
	plumb = require( 'gulp-plumber' ) ,
	uglify = require( 'gulp-uglify' ) ,
	sass = require( 'gulp-sass' );


gulp.task( 'javascripts' , function ()
{
	return gulp.src( [ 'vendor/layzr/layzr.min.js' , 'vendor/headroom/headroom.js' , 'assets/javascripts/_*.js' ] )
			   .pipe( plumb() )
			   .pipe( concat( 'main.js' ) )
			   .pipe( gulp.dest( 'assets/javascripts' ) )
			   .pipe( rename( 'main.min.js' ) )
			   .pipe( uglify() )
			   .pipe( gulp.dest( 'assets/javascripts' ) )
			   .pipe( livereload() );
} );


gulp.task( 'sass' , function ()
{
	gulp.src( 'assets/stylesheets/main.scss' )
		.pipe( plumb() )
		.pipe( sass().on( 'error' , sass.logError ) )
		.pipe( sass( {outputStyle: 'compressed'} ) )
		.pipe( gulp.dest( 'assets/stylesheets' ) )
		.pipe( livereload() );
} );

gulp.task( 'prefixer' , function ()
{
	return gulp.src( 'assets/stylesheets/*.css' )
			   .pipe( plumb() )
			   .pipe( autoprefixer( {
				   browsers: [ 'last 2 versions' ] ,
				   cascade: false
			   } ) )
			   .pipe( gulp.dest( 'assets/stylesheets' ) );
} );

gulp.task( 'phprefresh' , function ()
{
	return gulp.src( '' )
			   .pipe( plumb() )
			   .pipe( livereload() );
} );

//Default Function

gulp.task( 'default' , function ()
{
	livereload.listen();
	gulp.watch( 'assets/stylesheets/*.scss' , [ 'sass' ] );
	gulp.watch( 'assets/stylesheets/*.css' , [ 'prefixer' ] );
	gulp.watch( 'assets/javascripts/_*.js' , [ 'javascripts' ] );
	gulp.watch( '*.php' , [ 'phprefresh' ] );
	gulp.watch( 'page-templates/*.php' , [ 'phprefresh' ] );
	gulp.watch( 'partials/*.php' , [ 'phprefresh' ] );
} );
