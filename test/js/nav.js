$(".close-nav").hide();

$(".nav-icon").click(function(e) {
	e.stopPropagation();
  //$(".fa-bars").hide();	
  //$(".close-nav").show();	
  $(".btn-nav").toggleClass('active');
  $(".btn-nav").toggleClass('not-active');	
	
	
  var top = $(this).css("top");
  $(".nav").css("top", top);
  var right = $(".nav").css("right");
  $(".nav").css("right", right === "0px" ? "-100%" : "0px");
});



$(".mainMenu__container").click(function(e) {
	e.stopPropagation();
});
