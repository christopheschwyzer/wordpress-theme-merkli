var previewActive = false;

$(document).ready(function() {
	// Masonry
	$(window).on('load', function() {
		$('.gallery').masonry({
			itemSelector: '.thumb'
		});
	});

	// Toggle off-screen Navigation
	$('.toggleMenu').on('click', function() {
		var offCanvasActive = $('.offCanvas').hasClass('active');
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
	$('.offCanvas').toggleClass('active', state);
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


	$('.image img, .paginationNext').on('click', function() {
		navigate(nextLink);
	});

	var navigationLinks = new Array(nextLink, previousLink);
	return navigationLinks;
}

function navigate(link) {
	window.location.href = link;
}

$(document).keyup(function(event) {
	if (previewActive && event.keyCode == 39) {
		navigate(bindNavigation[0]);
	} else if (previewActive && event.keyCode == 37) {
		navigate(bindNavigation[1]);
	}
});

function previewInteraction(state) {
	$('.galleryInteraction').toggle(state);
}


function updatePhotoInfo() {

	// Show Info
	$('.showCaption').on('click', function() {
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
