$(document).ready(function() {
	// Masonry
	$(window).on('load', function() {
		$('.gallery').masonry({
			itemSelector: '.thumb'
		});
	});

	// Toggle off-screen Navigation
	$('.toggleMenu').on('click', function() {
		var offCanvasActive = $('html').hasClass('offCanvas-active');
		offCanvasNavigation(!offCanvasActive);
		previewInteraction(offCanvasActive);
	});

	// Hammer js
	$(document).hammer().on("tap", ".thumb", function(event) {
		console.log(this, event);
	});

	updatePhotoInfo();
	bindNavigation();
});

function offCanvasNavigation(state) {
	$('html').toggleClass('offCanvas-active', state);
	$('.menu-opener').toggleClass('open', state);
	previewInteraction(!state);
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

	// Update navigation links
	var nextLink = $('#navigationLinks .next > a').attr('href');
	var previousLink = $('#navigationLinks .previous > a').attr('href');

	var $customNextLink = $('.galleryInteraction .paginationNext');
	if (nextLink) {
		$customNextLink.attr('href', nextLink);
	} else {
		$customNextLink.hide();
	}

	var $customPreviousLink = $('.galleryInteraction .paginationPrev');

	if (previousLink) {
		$customPreviousLink.attr('href', previousLink);
	} else {
		$customPreviousLink.hide();
	}


	$('.post img').on('click', function() {
		if (nextLink) {
			navigate(nextLink);
		}
	});

	$(document).keyup(function(event) {
		if (nextLink && event.keyCode == 39) {
			navigate(nextLink);
		} else if (previousLink && event.keyCode == 37) {
			navigate(previousLink);
		}
	});

	$('body').hammer().on("swipeleft", function(event) {
		if (nextLink) {
			navigate(nextLink);
		}
	});

	$('body').hammer().on("swiperight", function(event) {
		if (previousLink) {
			navigate(previousLink);
		}
	});
}


function navigate(link) {
	window.location.href = link;
}

function previewInteraction(state) {
	$('.galleryInteraction').toggle(state);
}


function updatePhotoInfo() {

	// Show Info
	$('.showCaption').on('click', function(e) {
		$(e.currentTarget).toggleClass('hover');
		$('.caption').toggle();
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
