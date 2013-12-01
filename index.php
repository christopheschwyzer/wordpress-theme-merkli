<?php get_header(); ?>

<section class="gallery">
	<ul>
		<?php
		query_posts(
			array(
				'tag__not_in' => array(get_tag_id_by_name('hide')),
			)
		);
		?>
		<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
			<li id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="thumb">
				<a href="<?php the_permalink() ?>" >
				<?php if (has_post_thumbnail()) {
				the_post_thumbnail('medium');
			} ?>
				</a>
			</li>
			<?php endwhile; ?>
		<?php else : ?>
		<p>Sorry, but you are looking for something that isn't here.</p>
		<?php endif; ?>
	</ul>
</section>

<section class="preview"></section>
<?php get_footer(); ?>
