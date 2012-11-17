<?php get_header(); ?>

<section class="gallery">
	<ul>
		<?php query_posts('cat=-22'); ?>
		<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
			<li id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="thumb">
				<?php if (has_post_thumbnail()) {
				the_post_thumbnail('homepage-thumb');
			} ?>
			</li>
			<?php endwhile; ?>
		<?php else : ?>
		<p>Sorry, but you are looking for something that isn't here.</p>
		<?php endif; ?>
	</ul>
</section>

<section class="preview"></section>

<a href="javascript:;" class="bigPagination prev"></a>
<a href="javascript:;" class="bigPagination next"></a>
<?php get_footer(); ?>