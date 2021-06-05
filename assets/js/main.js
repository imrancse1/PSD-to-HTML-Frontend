(function ($) {
	"use strict";

    jQuery(document).ready(function($){

         $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");   
       
    $('[data-toggle="tooltip"]').tooltip();

    	$(".menu-show").click(function(){
    		$(".offcanvas-area").css('margin-left' , '-300px');
            $(".side-menu-wrap").css('right' , '0');
            $(this).hide();
    	});
        $(".menu-cross").click(function(){
            $(".offcanvas-area").css('margin-left' , '0');
            $(".side-menu-wrap").css('right' , '-300px');
            $(".menu-show").show();
        });

    	$('.parallax-bg').parallax("50%", -0.5);
    	$('.parallax-bg-2').parallax("50%", 0.5);
        
    });
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	