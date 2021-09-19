$(document).ready(function() {
    /*
    * Plugin intialization
    */

    var interval;
var timeout;
var autoPlayDuration = 8000;

$('#maverick_sec').pagepiling({
    direction: 'horizontal',
    menu: '#menu',
    sectionsColor: ['#fff6ef', '#e99fb6', '#77ddc0', '#c0c2ff', '#27d8f9', '#aae600'],
    loopTop: true,
    loopBottom: true,
    afterLoad: function (anchorLink, index) {
        clearInterval(interval);
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            interval = getInterval();
        },autoPlayDuration);
    },
    afterRender: function () {
        interval = getInterval();
    }
});


function getInterval() {
    return setInterval(function () {
        $.fn.pagepiling.moveSectionDown();
    }, autoPlayDuration);
}

    
});








$(window).load(function() {

  $(".project-post").click(function() {
    $(".lightbox").fadeIn(300);
    $(".lightbox").append("<img src='" + $(this).attr("href") + "' alt='" + $(this).attr("alt") + "' />");
    $(".filter").css("background-image", "url(" + $(this).attr("href") + ")");
    /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
    $("html").css("overflow", "hidden");
    if ($(this).is(":last-child")) {
		//console.log(1);
      $(".arrowr").css("display", "none");
      $(".arrowl").css("display", "block");
    } else if ($(this).is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut(300);
    //$("h1").remove();
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });

  $(".arrowr").click(function() {
	 // alert(1);
    var imgSrc = $(".lightbox img").attr("src");
	
    var search = $(".portfolio-box").find(".project-post[href$='" + imgSrc + "']");
    var newImage = search.next().attr("href");
	//alert(newImage);
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");

    if (!search.next().is(":last-child")) {
      $(".arrowl").css("display", "block");
    } else {
      $(".arrowr").css("display", "none");
    }
  });

  $(".arrowl").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
     var search = $(".portfolio-box").find(".project-post[href$='" + imgSrc + "']");
    var newImage = search.prev().attr("href");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");

    if (!search.prev().is(":first-child")) {
      $(".arrowr").css("display", "block");
    } else {
      $(".arrowl").css("display", "none");
    }
  });
$(".filters-button-group .button").click(function() {
	$(".display_none").show();
});


});


