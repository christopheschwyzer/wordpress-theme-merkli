<?php get_header(); ?>

<section class="gallery">
	<ul>
		<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
			<li id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="thumb">
				<a href="<?php the_permalink() ?>" >
				<?php if (has_post_thumbnail()) {
				the_post_thumbnail('large');
			} ?>
			</a>
			</li>
			<?php endwhile; ?>
		<?php else : ?>
		<p>Sorry, but you are looking for something that isn't here.</p>
		<?php endif; ?>
	</ul>
</section>
<?php get_footer(); ?>

