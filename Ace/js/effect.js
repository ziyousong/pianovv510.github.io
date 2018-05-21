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


function swapQualityImg(element) {
	
	var newSrc = element.getElementsByTagName("img")[0].getAttribute("src");
	var oldSrc = document.getElementById("qualityMainImg").getAttribute("src");
	
	document.getElementById("qualityMainImg").setAttribute("src",newSrc);
	element.getElementsByTagName("img")[0].setAttribute("src", oldSrc);
	
}

