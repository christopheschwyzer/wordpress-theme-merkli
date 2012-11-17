<footer>

	<?php
	if (function_exists('has_nav_menu') && has_nav_menu('primary-menu')) {
		?>
		<div class="menuWrapper">
			<nav class="main-menu">
				<?php wp_nav_menu(array('depth' => 6, 'sort_column' => 'menu_order', 'container' => 'ul', 'menu_class' => 'main-menu-list', 'menu_id' => 'main-nav', 'theme_location' => 'primary-menu')); ?>
			</nav>
		</div>
		<?php
	} else {
		?>
		<p>Error: There is no menu</p>
		<?php } ?>

<?php wp_footer(); ?>
</footer>

</div>
</body>
</html>
