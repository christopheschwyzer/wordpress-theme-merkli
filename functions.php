<?php

add_theme_support('post-thumbnails');
set_post_thumbnail_size(150, 150); // default Post Thumbnail dimensions

// navigation menu
function grid_register_main_menus() {
	register_nav_menus(
		array(
			'primary-menu' => __('Primary Menu')
		)
	);
}

if (function_exists('register_nav_menus')) {
	add_action('init', 'grid_register_main_menus');
}


function get_tag_id_by_name($tag_name) {
	global $wpdb;
	return $wpdb->get_var("SELECT term_id FROM ".$wpdb->terms." WHERE `name` =  '".$tag_name."'");
}

?>
