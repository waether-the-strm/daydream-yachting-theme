<?php

if ( ! function_exists( 'daydream_support' ) ) :
	function daydream_support()  {

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );
	}
	add_action( 'after_setup_theme', 'daydream_support' );
endif;

/**
 * Enqueue scripts and styles.
 */
function daydream_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'daydream-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
	wp_enqueue_script( 'daydream-livereload', get_template_directory_uri() . '/livereload.js', array(), wp_get_theme()->get( 'Version' ) );
}

add_action( 'wp_enqueue_scripts', 'daydream_scripts' );
