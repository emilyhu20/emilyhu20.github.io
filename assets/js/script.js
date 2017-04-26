$(document).ready(function(){

	//carousel stuff
	 //Implement the "slide to left" when the user clicks on #carousel-next here
    $("#carousel-next").click(function() {
      var curr = parseInt($("#carousel").css("margin-left").replace("px", ""));
      if (curr == -3840) {
        return false;
      } else {
        $("#carousel").css("margin-left", curr - 960);
      }
    });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $("#carousel-prev").click(function() {
      var curr = parseInt($("#carousel").css("margin-left").replace("px", ""));
      if (curr == 0) {
        return false;
      } else {
        $("#carousel").css("margin-left", curr + 960);
      }
    });

    //hover functions for leading things
    $(".start").hover(function() {
    	if (!$(".start").hasClass("active")) {
    		$(".start").addClass("active");
    	}
    });

    $("#sf").hover(function() {
    	if ($(".start").hasClass("active")) {
    		$(".start").removeClass("active");
    	}
    });

    $(".proj-start").hover(function() {
    	if (!$(".proj-start").hasClass("active")) {
    		$(".proj-start").addClass("active");
    	}
    });

    $("#polaroid").hover(function() {
    	if ($(".proj-start").hasClass("active")) {
    		$(".proj-start").removeClass("active");
    	}
    });

    //scroll functions for leading things
    $(".start").click(function() {
    	$('html, body').animate({
    		scrollTop: $($.attr(this, 'href')).offset().top
    	}, 300);
    });
    $(".proj-start").click(function() {
    	$('html, body').animate({
    		scrollTop: $($.attr(this, 'href')).offset().top
    	}, 300);
    });

});