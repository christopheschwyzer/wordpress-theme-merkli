<?php
if (have_posts()) :
	while (have_posts()) : the_post(); ?>
	<div id="post-<?php the_ID(); ?>" data-project-id="<?php the_ID(); ?>" class="post">
		<div class="image">
			<?php the_content(); ?>
		</div>
		<div class="pagination">
			<a href="javascript:;" class="arrow prev"></a>
			<a href="javascript:;" class="arrow next"></a>
		</div>
		<a href="javascript:;" class="captionPanel"><span>+</span></a><a href="javascript:;" class="showOverview"><span class="box"></span></a>
		<div class="captionWindow">
			<h3 class="title"><?php the_title(); ?></h3>
			<div class="description"><?php the_excerpt(); ?></div>
		</div>
	</div>
	<?php endwhile; ?>
<?php else : ?>
<p>Sorry, but you are looking for something that isn't here.</p>
<?php endif; ?>