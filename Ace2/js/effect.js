/******* Company *******/

$(document).ready(function() {
	if(Layout.page === 'company') {
		$(window).scroll( function(){
			$('.company-title span').each( function(key) {
				
				var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 250;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				if( bottom_of_window > bottom_of_object ){
                
					$(this).addClass('fadeInUp');
					$(this).css({"opacity":"1"});
					
					$('.company-img').eq(key).addClass('flipInY');
					$('.company-img').eq(key).css({"opacity":"1"});
				}
				
			});
		})
	}
	
});

/****** Product ********/

$(".zoom").elevateZoom({
	zoomType: "inner",
	scrollZoom : true
});

/******* Process *******/

$('.tile')
// tile mouse actions
.on('mouseover', function(){
  $(this).children('.process_photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
})
.on('mouseout', function(){
  $(this).children('.process_photo').css({'transform': 'scale(1)'});
})
.on('mousemove', function(e){
  $(this).children('.process_photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
})
// tiles set up
.each(function(){
  $(this)
	// add a photo container
	.append('<div class="process_photo"></div>')
	// set up a background image for each tile based on data-image attribute
	.children('.process_photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
})

/******* Quality *******/

function swapQualityImg(element) {
	
	var newSrc = element.getElementsByTagName("img")[0].getAttribute("src");
	var oldSrc = document.getElementById("qualityMainImg").getAttribute("src");
	
	document.getElementById("qualityMainImg").setAttribute("src",newSrc);
	element.getElementsByTagName("img")[0].setAttribute("src", oldSrc);
	
}

