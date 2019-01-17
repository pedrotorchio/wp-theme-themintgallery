<?php

define('VUE_PORT', 9876);
define('IS_PRODUCTION', false);

add_theme_support('post-thumbnails');

require_once( get_stylesheet_directory() . '/wordpress/helper-functions.php' );
require_once( get_stylesheet_directory() . '/wordpress/remove_redirects.php' );
require_once( get_stylesheet_directory() . '/wordpress/register_vue.php' );
require_once( get_stylesheet_directory() . '/wordpress/options-page/functions.php' );
require_once( get_stylesheet_directory() . '/wordpress/api.php' );
