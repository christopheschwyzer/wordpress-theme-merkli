<?php get_header(); ?>

<div class="page page<?php echo the_title(); ?>">

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div id="post-<?php the_ID(); ?>" class="post">
        
			<?php the_content(); ?>
	<?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>