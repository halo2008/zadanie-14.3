$ (function(){
  var carouselList = $("#carousel ul");   
    
	function changeSlide() {   
		carouselList.animate({marginLeft:-400}, 500, moveFirstSlide);
	}
  
	setInterval(changeSlide, 9000);
  
  /*var firstItem;
  var lastItem; 

  function moveSlide(itemDirection, item, margin){ 
    firstItem = carouselList.find("li:first");
    lastItem = carouselList.find("li:last");   
    item.after(itemDirection);
    carouselList.css({margin});
  }*/

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});		
	}
 
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginLeft: 0});
	}
  
	$("#prev").click(function(){
		carouselList.animate({marginLeft:-400}, 500, moveFirstSlide);
	});
  
	$("#next").click(function(){
		carouselList.animate({marginLeft: 400}, 500, moveLastSlide);
	});  
 });