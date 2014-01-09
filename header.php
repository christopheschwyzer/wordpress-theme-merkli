<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/reset.css" type="text/css"
		  media="screen, projection"/>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/style.css" type="text/css"
		  media="screen, projection"/>

	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico"/>
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/js/01-modernizr.js"></script>

	<?php wp_head(); ?>
	<meta name="description" content="CEDRIC CHRISTOPHER MERKLI - PHOTOGRAPHY + VISUAL WORK" />
	<title>CEDRIC CHRISTOPHER MERKLI</title>
</head>
<body <?php body_class(); ?>>

	<a href="javascript:;" class="toggleMenu"><span class="menu-opener"></span></a>
	<header class="header">
		<h1 class="headline"><a href="/"><?php bloginfo('name'); ?></a></h1>
	</header>
	<div id="navigation">
		<?php
		if (function_exists('has_nav_menu') && has_nav_menu('primary-menu')) {
			?>
			<nav class="main-menu">
				<?php wp_nav_menu(array('depth' => 6, 'sort_column' => 'menu_order', 'container' => 'ul', 'menu_class' => 'main-menu-list', 'menu_id' => 'main-nav', 'theme_location' => 'primary-menu')); ?>
			</nav>
		<?php
		} else {
			?>
			<p>Error: There is no menu</p>
		<?php } ?>
	</div>
	<div class="offCanvas">

		<div class="sheet">
