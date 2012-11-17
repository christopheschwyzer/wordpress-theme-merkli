$(document).ready(function () {


	// Add next link to image
	$(function () {
		var nextLink = $('.pagination .next a').attr('href');
		if (nextLink) {
			$('.post img').wrap('<a href="' + nextLink + '" />');
		}
	});

	var thumbs = $('.thumb');
	var gallery = $('.gallery');
	var preview = $('.preview');

	var loadPreview = function (id) {
		var url = '/?p=' + id;
		$.get(url, function (data) {
			$('.preview').html(data);
		}).success(function() {
				resizeVideo();
				$('img').data("title", $(this).attr("title")).removeAttr("title");
				$('img').bind('contextmenu', function (e) {
					return false;
				});
			});
	};

	loadPreview(thumbs.first().attr('data-project-id'));

	thumbs.on('click', function () {
		$('.preview').empty();
		loadPreview($(this).attr('data-project-id'));
		gallery.toggle();
		preview.toggle();
	});

	// bigPagination
	$(window).resize(function () {
		var bigPaginationWidth = ($(window).width() - preview.width()) / 2;
		$('.bigPagination').css({width:bigPaginationWidth - 20});
	});

	// loadNext
	$('.image img, .pagination .next, .bigPagination.next').live('click', function () {
		loadNextPreview(true);
	});

	$('.pagination .prev, .bigPagination.prev').live('click', function () {
		loadNextPreview(false);
	});



	// Show Info
	var captionOpener = $('.captionPanel');

	captionOpener.live('click', function () {
		$(this).toggleClass('active');
		var text = $(this).hasClass('active') == true ? '-' : '+';
		$(this).children(":first").text(text);
		$('.captionWindow').toggle();
	});

	// Show gallery
	var galleryOpener = $('.showOverview');

	galleryOpener.live('click', function () {
		gallery.toggle();
		preview.toggle();
	});


	var loadNextPreview = function (direction) {
		var id = preview.find('.post').attr('data-project-id');
		var rel = gallery.find("[data-project-id='" + id + "']");
		var el = direction == true ? rel.next() : rel.prev();

		loadPreview(el.attr('data-project-id'));
	};



});


var resizeVideo = function () {

	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
		$fluidEl = $('.sheet');

	$allVideos.each(function () {

		$(this)
			// jQuery .data does not work on object/embed elements
			.attr('data-aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');

	});

	$(window).resize(function () {

		var newWidth = $fluidEl.width();
		$allVideos.each(function () {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.attr('data-aspectRatio'));

		});

	}).resize();
};