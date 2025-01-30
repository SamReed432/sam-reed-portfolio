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

	var windowWidth = $(window).width();
	var isTablet = navigator.userAgent.match(/iPad|Android/i);

	/* Mobile Touch Functionality for Menus so that touch replicates hover effect */
  	if (!!isTablet) {
		$('.headerleaderboard.advertisement.right').addClass("tablet");
	}

	if (windowWidth < 667 || !!isTablet) {
		$(".hamburger-menu a.dropdown-toggle").one("click", false, function(e){
			if ("ontouchstart" in document.documentElement) {
				e.preventDefault();
			}
		});
	}

	$(document).on('click', '#top-bar .hamburger-menu ul .dropdown-menu', function (e) {
		e.stopPropagation();
	});

	if (windowWidth < 667 || !!isTablet) {
		$("#sidebarMenu a.dropdown-toggle").one("click", false, function(e){
			if ("ontouchstart" in document.documentElement) {
			  e.preventDefault();
			}
		});
	}

	$(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= 100) {
			$('#top-bar').addClass('scrolled');
			$('#top-bar .logo .main').hide();
			$('#top-bar .logo .scrolled').show();
        } else {
			$('#top-bar').removeClass('scrolled');
			$('#top-bar .logo .scrolled').hide();
			$('#top-bar .logo .main').show();
        }
	});

	$("#top-bar .right i.fa.fa-search").click(function() {
		$("#top-bar .search-bar").css("display", "block");
		$("#top-bar .right i.fa.fa-search").css("display", "none");
		$("#top-bar .right .go").css("display", "block");
	});

	$("#sidebarMenu .menu .dropdown-caret").click(function() {
		var title = $(this).attr("menu-title");
		var parenttitle = $(this).attr("parent-title");
		var level = $(this).attr("menu-level");
		$("#sidebarMenu .header .main").css("display", "none");
		$("#sidebarMenu .header .back").css("display", "block");
		var childmenudisplay = $(".child_menu[menu-title='"+ title +"']").css('display');
		var secondchildmenudisplay = $(".second_child_menu[menu-title='"+ title +"']").css('display');

		if ( childmenudisplay == "none") {
			$("#sidebarMenu .child_menu[menu-title='"+ title +"']").css("display", "block");
			$(".dropdown-caret[menu-title='"+ title +"'] > i").addClass("fa-caret-up");
		} else if ( childmenudisplay == "block") {
			$("#sidebarMenu .child_menu[menu-title='"+ title +"']").css("display", "none");
			$(".dropdown-caret[menu-title='"+ title +"'] > i").removeClass("fa-caret-up");	
		}
		if ( secondchildmenudisplay == "none") {
			$("#sidebarMenu .second_child_menu[menu-title='"+ title +"']").css("display", "block");
			$(".dropdown-caret[menu-title='"+ title +"'] > i").addClass("fa-caret-up");
		} else if ( secondchildmenudisplay == "block") {
			$("#sidebarMenu .second_child_menu[menu-title='"+ title +"']").css("display", "none");
			$(".dropdown-caret[menu-title='"+ title +"'] > i").removeClass("fa-caret-up");	
		}


		$("#sidebarMenu .menu .item[menu-title='"+ title +"']").each(function() {
			$(this).removeClass("hideMenu");
		});
		$("#sidebarMenu .menu .item[menu-title='"+ parenttitle +"']").each(function() {
			$(this).removeClass("hideMenu");
		});
		$("#sidebarMenu .menu .item .menulabel[menu-title='"+ title +"']").each(function() {
			$(this).removeClass("hideMenu");
		});
		$("#sidebarMenu .menu .item .menulabel[menu-title='"+ parenttitle +"']").each(function() {
			$(this).removeClass("hideMenu");
		});
	
	});

	$("#sidebarMenu .header .back").click(function() {
		$("#sidebarMenu .header .main").css("display", "flex");
		$("#sidebarMenu .header .back").css("display", "none");
		$("#sidebarMenu .menu .item").each(function() {
			$(this).addClass("hideMenu");
		});
		$("#sidebarMenu .menu .menulabel").each(function() {
			$(this).addClass("hideMenu");
		});
		$("#sidebarMenu .menu .item .dropdown-caret").each(function() {
			$(this).css("display", "block");
		});
		$("#sidebarMenu .menu .item .title").each(function() {
			$(this).css("display", "block");
		});
		$("#sidebarMenu .menu .item[menu-level='0']").each(function() {
			$(this).removeClass("hideMenu");
		});
	});

	/* Mobile Search Open/Close Form on Click */
	$( ".submit.mobile-search-icon" ).click(function() {
			$( ".submit.mobile-search-icon" ).addClass("hidden");
			$( ".main-nav-mobile-search.hidden" ).removeClass("hidden");
	});

	$(".sidebar-menu-search-above").prependTo("#sidebarMenu");
	$(".sidebar-menu-search-below").appendTo("#sidebarMenu");
	$(".sidebar_menu_logo").appendTo("#sidebarMenu");
	$(".sidebar_menu_logo").show()	
	$(".sidebarMenuCloseButton").show()	
	$(".sidebar-menu-search-above").show()
	$(".sidebar-menu-search-below").show()	

});

function toggleDropdown() {
	var dropdownMenuButton = document.getElementById("dropdownMenuButton");
	var dropdownDiv = document.getElementById("sidemenuDim");
	if ( dropdownMenuButton.classList.contains("closed") ){
		dropdownMenuButton.classList.remove("closed");
		dropdownMenuButton.classList.add("open");
		dropdownDiv.classList.remove("closed");
		dropdownDiv.classList.add("open");
	} else if (dropdownMenuButton.classList.contains("open")) {
		dropdownMenuButton.classList.remove("open");
		dropdownMenuButton.classList.add("closed");
		dropdownDiv.classList.remove("open");
		dropdownDiv.classList.add("closed");
	}
}

function toggleSidebar() {
	var dropdownMenuButton = document.getElementById("dropdownMenuButton");
	var dropdownDiv = document.getElementById("sidemenuDim");
	if ( dropdownMenuButton.classList.contains("closed") ){
		dropdownMenuButton.classList.remove("closed");
		dropdownMenuButton.classList.add("open");
		dropdownDiv.classList.remove("closed");
		dropdownDiv.classList.add("open");
	} else if (dropdownMenuButton.classList.contains("open")) {
		dropdownMenuButton.classList.remove("open");
		dropdownMenuButton.classList.add("closed");
		dropdownDiv.classList.remove("open");
		dropdownDiv.classList.add("closed");
	}
}


function openNav(sidebarWidth) {
	document.getElementById("sidebarMenu").style.width = sidebarWidth + 'px';
    document.getElementById("sidebarMenu").style.transform = 'translateX(0%)';
	var sideMenuDiv = document.getElementById("sidemenuDim");
	sideMenuDiv.classList.remove("closed");
	sideMenuDiv.classList.add("open");
}

function closeNav() {
  document.getElementById("sidebarMenu").style.width = "0";
  document.getElementById("sidebarMenu").style.transform = 'translateX(-100%)';
	var sideMenuDiv = document.getElementById("sidemenuDim");
	sideMenuDiv.classList.remove("open");
	sideMenuDiv.classList.add("closed");
}

}
/*
     FILE ARCHIVED ON 13:34:01 Apr 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:18 Jan 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.728
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.013
  esindex: 0.013
  cdx.remote: 10.846
  LoadShardBlock: 355.529 (3)
  PetaboxLoader3.datanode: 227.741 (5)
  PetaboxLoader3.resolve: 251.953 (2)
  load_resource: 176.092
  loaddict: 57.074
*/