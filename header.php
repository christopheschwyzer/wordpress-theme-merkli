<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/reset.css" type="text/css"
		  media="screen, projection"/>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/style.css" type="text/css"
		  media="screen, projection"/>

	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico"/>

	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/js/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/js/merkli.js"></script>

	<?php wp_head(); ?>
	<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
</head>
<body <?php body_class(); ?>>
<div class="sheet">
