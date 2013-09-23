var previewMode = false;

$(document).ready(function() {
	// Masonry
	$(window).on('load', function() {
		$('.gallery').masonry({
			itemSelector: '.thumb'
		});
	});

	// Toggle off-screen Navigation
	$('.toggleMenu').on('click', function(e) {
		$('.offCanvas').toggleClass('active');
		$('.menu-opener').toggleClass('open');
	});

	var $thumbs = $('.thumb');
	var currentId = $thumbs.first().data('project-id');

	$thumbs.on('click', function(e) {
		currentId = $(e.currentTarget).data('project-id');
		loadPreview(currentId);
		switchView();
		previewMode = true;
	});

	// ***************************************

	// Hammer js
	$(document).hammer().on("tap", ".thumb", function(event) {
		console.log(this, event);
	});


});

function navigate(direction) {
	var currentId = $('.preview').find('.post').data('project-id');
	var galleryOffsetId = $('.gallery').find("[data-project-id='" + currentId + "']");

	if (direction == 'next') {
		var galleryNextId = galleryOffsetId.next().data('project-id');

		if (null === galleryNextId) {
			galleryNextId = $('.gallery .thumb').first().data('project-id');
		}
		return galleryNextId;

	} else if (direction == 'prev') {
		var galleryPrevId = galleryOffsetId.prev().data('project-id');

		if (null === galleryPrevId) {
			galleryPrevId = $('.gallery .thumb').last().data('project-id');
		}
		return galleryPrevId;
	}
}

function bindNavigation() {
	var forceNavigationHover = function(state) {
		$('.paginationNext').toggleClass('hover', state);
	}
	$('.image').mouseover(function() {
		forceNavigationHover(true);
	}).mouseleave(function() {
			forceNavigationHover(false);
		});



	$('.image img, .paginationNext').on('click', function() {
		loadPreview(navigate('next'));
	});

	$('.paginationPrev').on('click', function() {
		loadPreview(navigate('prev'));
	});
}

$(document).keyup(function(event) {
	if (previewMode && event.keyCode == 39) {
		loadPreview(navigate('next'));
	} else if (previewMode && event.keyCode == 37) {
		loadPreview(navigate('prev'));
	}
});

function switchView() {
	$('.preview').empty();
	$('.gallery, .preview').toggle();
}

function loadPreview(id) {
	var url = '/?p=' + id;
	$.get(url,function(data) {
		$('.preview').html(data);
	}).success(function() {
			resizeVideo();
			bindNavigation();
			//			preventImageInteraction();
			updatePhotoInfo();
		});
}

function updatePhotoInfo() {

	// Show Info
	$('.showCaption').on('click', function() {
		$('.caption').toggle();
	});

	// Show gallery
	$('.showOverview').on('click', function() {
		switchView();
	});

	var galleryToggle = function(state) {
		$('.galleryInteraction').toggleClass('visible', state);
	}
	$('body').mouseenter(function() {
		galleryToggle(true);
	}).mouseleave(function() {
			galleryToggle(false);
		});
}

function preventImageInteraction() {
	$('img').data("title", $(this).attr("title")).removeAttr("title");
	$('img').bind('contextmenu', function(e) {
		return false;
	});
}

function resizeVideo() {
	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"), $fluidEl = $('.sheet');

	$allVideos.each(function() {

		$(this)// jQuery .data does not work on object/embed elements
			.attr('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');

	});

	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		$allVideos.each(function() {

			var $el = $(this);
			$el.width(newWidth).height(newWidth * $el.attr('aspectRatio'));
		});

	}).resize();
};
