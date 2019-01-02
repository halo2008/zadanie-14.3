$ (function(){
  var carouselList = $("#carousel ul");

	function changeSlide() {
		carouselList.animate({marginLeft:-400}, 500, moveFirstSlide);
	}

	setInterval(changeSlide, 9000);

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft: 0});
	}

	$("#prev").click(function(){
		carouselList.animate({marginLeft:-400}, 500, moveFirstSlide);
	});

	$("#next").click(function(){
		carouselList.animate({marginLeft: 400}, 500, moveLastSlide);
	});

  function showSlides(n) {
    var i;
    var slides = $('.item').length;
    var dots = $(".dot").length;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

});
