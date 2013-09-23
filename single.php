<?php
if (have_posts()) :
	while (have_posts()) : the_post(); ?>
		<div id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="post">
			<div class="galleryInteraction visible">
				<a href="javascript:;" class="icon arrow-left paginationPrev"></a>
				<a href="javascript:;" class="icon info showCaption"></a>
				<a href="javascript:;" class="icon overview showOverview"></a>
				<a href="javascript:;" class="icon arrow-right paginationNext"></a>
			</div>
			<div class="image">
				<?php the_content(); ?>
			</div>
			<div class="caption">
				<h3 class="title"><?php the_title(); ?></h3>
				<div class="description"><?php the_excerpt(); ?></div>
			</div>
		</div>
	<?php endwhile; ?>
<?php else : ?>
	<p>Sorry, but you are looking for something that isn't here.</p>
<?php endif; ?>
