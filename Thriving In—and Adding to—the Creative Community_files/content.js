var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function( $ ) {
	
	if(window.location.href.indexOf("?print") > -1) {
		$('body.article-template-single-article').addClass("print");
		$('.content-area').removeClass("col-md-9").addClass("col-md-12");
		window.print();
		 window.close();
	  }
	
	var adFrequency = $(".in-article-ad").attr('data-ad-frequency');
	$( ".article-restofcontent .article-factbox .article__body" ).removeClass( "article__body" );
	$( ".article-restofcontent .article__body:eq(" + adFrequency  + ")" ).addClass( "beforeArticleAd" );
	$( ".in-article-ad" ).insertAfter( $( ".article__body.beforeArticleAd" ) );
	$( ".in-article-ad" ).removeClass("hidden");

	/* Adds the image caption from the image.twig file to the image slider. */
	$( ".article-page .article_image_caption" ).each(function() {
		var image_caption_uuid = $(this).attr("data-uuid");
		$(this).show();
		$(this).insertAfter( ".article-slider img[uuid='" + image_caption_uuid + "']" );
	});

	/* Add Numbers on Most Read Teaser */
	$('.mostread-teaser').each(function(i) {
		var counter = i + 1;
		console.log(counter);
		$(this).find('.count').html(counter);
	});

	$('.article-page.gallery .article__body').each(function(i) {
		$(this).appendTo(".article-page .gallery-body");
		$(".article-page.gallery .article__body").show();
	});

});

function fontSizeUpdateSmaller() {
	var fontSize = parseInt($("p.article__body").css("font-size"));
	fontSize = fontSize - 2 + "px";
	console.log(fontSize);
	$("p.article__body").css({'font-size':fontSize});
}

function fontSizeUpdateLarger() {
	var fontSize = parseInt($("p.article__body").css("font-size"));
	fontSize = fontSize + 2 + "px";
	console.log(fontSize);
	$("p.article__body").css({'font-size':fontSize});
}

}
/*
     FILE ARCHIVED ON 03:47:26 Apr 24, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:18 Jan 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.528
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 16.846
  LoadShardBlock: 104.309 (3)
  PetaboxLoader3.datanode: 115.02 (4)
  PetaboxLoader3.resolve: 162.619 (2)
  load_resource: 185.396
*/