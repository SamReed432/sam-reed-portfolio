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

jQuery(document).ready(function($){
    $('.frontpage-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
      });

      $('.article-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0px',
        lazyLoad: 'progressive',
        prevArrow: '<div class="previous_arrow"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="next_arrow"><i class="fa fa-angle-right"></i></div>',
        responsive: [
          {
            breakpoint: 640,
            settings: {
              swipeToSlide: true
            }
          }
        ],
      });

      $('.relatedArticlesSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
      });

      $('.gallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="previous_arrow"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="next_arrow"><i class="fa fa-angle-right"></i></div>'
      });
});


}
/*
     FILE ARCHIVED ON 18:04:39 Apr 26, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:17 Jan 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.529
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 17.006
  LoadShardBlock: 172.932 (3)
  PetaboxLoader3.datanode: 99.604 (4)
  PetaboxLoader3.resolve: 146.271 (2)
  load_resource: 84.49
*/