/*$(function(){
	/*$('#carousel li a').on('click', function(event) {
		
       $('#carrousel li').removeClass('prev_slide');
       $('#carrousel li').removeClass('next_slide');
       $('#carrousel li').removeClass('active');
       $(this).addClass('active');
       var previous = $('.active').prev();
        if(previous.length == 0){
             previous = $('#carrousel li').last();   
        }
        previous.addClass('prev_slide');

        var next = $('.active').next();
        if(next.length == 0){
           next = $('#carrousel li').first();
        }
         next.addClass('next_slide');
   

	});*/


	/*$('.next a').on('click', function(event) {
		var active = $(".active").removeClass('active');
        if (active.next('li') && active.next('li').length){
                active.next('li').addClass('active');
   		}
   		else{
      $('li').siblings(":first").addClass('active');
    }
    	
	
    });

    $('.next a').on('click', function(event) { 
    	$( "li" ).toggleClass(function() {
 			if ( $(this ).is( ".active" ) ) {
    			$('li').next().addClass('active');
  			} 
  			else {
   				 return "sad";
  			}
  		});


    });
});*/
 /*  setInterval(function(){
    
    var active = $(".active").removeClass('active').fadeOut(500);
    if(active.next() && active.next().length){
        active .next().addClass('active').fadeIn(500);
    }
    else{
      active.siblings(":first").addClass('active');
    }

  }, 3000);


}); */






$ (function(){
    var carouselList = $("#carousel ul");   
    
	function changeSlide() {   
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
  
	//setInterval(changeSlide, 4000);
  
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.animate({'marginLeft': 800}, 500);
		
	}
  
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginRight:0});
	}
  
	$("#prev").click(function(){
		carouselList.animate({'marginLeft': 400}, 500, moveFirstSlide );
	});
  
	$("next").click(function(){
		carouselList.animate({'marginRight': "+=400"}, 500, moveLastSlide);
	});  
 });