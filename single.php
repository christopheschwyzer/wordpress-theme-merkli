<?php get_header(); ?>
<div class="preview">
<?php
if (have_posts()) :
	while (have_posts()) : the_post();?>
		<div id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="post">
			<div class="post-content clearfix">
				<?php the_content(); ?>
			</div>
			<div class="caption">
				<h3 class="title"><?php the_title(); ?></h3>
				<div class="description"><?php the_excerpt(); ?></div>
			</div>
		</div>

		<div id="navigationLinks">
			<div class="previous"><?php next_post_link('%link', '',true); ?></div>
			<div class="next"><?php previous_post_link('%link','', true); ?></div>
		</div>
	<?php endwhile; ?>
<?php else : ?>
	<p>Sorry, but you are looking for something that isn't here.</p>
<?php endif; ?>
</div>
<?php get_footer(); ?>
