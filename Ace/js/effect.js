/******* Background *******/

var rellax = new Rellax('.rellax', {
    center: true
  });

/******* Company *******/

setTimeout(function(){
		$('.company-ACE').each(function(){
		  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});

		anime.timeline({loop: false})
		  .add({
			targets: '.company-ACE .letter',
			scale: [4,1],
			opacity: [0,1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 950,
			delay: function(el, i) {
			  return 70*i;
			}
		  }).add({
			targets: '.company-ACE',
			opacity: 1,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 1000
		  });
	}, 500);

$(document).ready(function() {
	if(Layout.page === 'company') {
		$(window).scroll( function(){
			$('.company-title span').each( function(key) {
				
				var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 250;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				if( bottom_of_window > bottom_of_object ){
                
					$(this).addClass('fadeInUp');
					$(this).css({"opacity":"1"});
					
				}
				
			});
		})
	}
	
});

/****** Product ********/

$(".zoom1, .zoom2, .zoom3").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 1
});

$(".zoom4, .zoom5").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 11
});

$(".zoom6, .zoom7, .zoom8").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 2
});

$(".zoom9, .zoom10").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 10
});

$(".zoom11, .zoom12, .zoom13").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 3
});

$(".zoom14, .zoom15").elevateZoom({
	scrollZoom : true,
	zoomWindowPosition: 9
});

/******* Process *******/

$(".tile").elevateZoom({
  zoomType: "inner",
  easing : true,
  cursor: "crosshair"
});

/******* Quality *******/

function swapQualityImg(element) {
	
	var newSrc = element.getElementsByTagName("img")[0].getAttribute("src");
	var oldSrc = document.getElementById("qualityMainImg").getAttribute("src");
	
	document.getElementById("qualityMainImg").setAttribute("src",newSrc);
	element.getElementsByTagName("img")[0].setAttribute("src", oldSrc);
	
}

/******* Footer *******/

setInterval(function(){
	$('#footer-logo').addClass('flip');
	setTimeout(function(){
		$('#footer-logo').removeClass('flip');
	}, 2000);
}, 5000);


