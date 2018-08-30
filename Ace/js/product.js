var Product = {};

Product.total_length = 15;
Product.page_length = 3;

Product.setItem = function(pagenum) {

	var content = '';
	var p = 1;
	
	for (var i = 1; i <= Product.total_length; i++) {
		
		if (i == 1) {
			content += '<div class="row justify-content-center">'
		}
		
		/*
		content += '<li class="list">' +
					'<a href="./images/product/'+Layout.page+'/num1p'+i+'.png" data-lightbox="mygallery">' +
					'<div class="item">' +
						'<img class="img-fluid" src="./images/product/'+Layout.page+'/num1p'+i+'.png" />' +
					'</div>' +
				'</a></li>';*/
		
		content += '<li class="list">' +
				'<div class="item">' +
					'<img class="img-fluid zoom'+i+'" src="./images/product/'+Layout.page+'/num1p'+i+'.png" data-zoom-image="./images/product/large/'+Layout.page+'/num1p'+i+'.png"/>' +
				'</div>' +
			'</li>';
	
		if (i % 5 == 0) {
			content += '</div>'
			content += '<div class="row justify-content-center">'
		}
		
		if (i == Product.total_length) {
			content += '</div>'
		}
		
	}

	//var pagecode = Product.getPage(Product.page_length, pagenum);

	document.getElementById("productul").innerHTML = content;
	//document.getElementById("product_page").innerHTML = pagecode;
}

Product.getPage = function(totalPage, nowPage) {

	var code = '';

	for(var i = 1; i <= totalPage; i++){
		if(i == nowPage){
				code += '<span class="active">'+i+'</span>';
		}else{
				code += '<span onclick=javascript:location.href="./layout.html?page='+Layout.page+'&num='+i+'">'+i+'</span>';
		}
	}

	var prevPage = new Number(nowPage)-1;
	var nextPage = new Number(nowPage)+1;
	var prev = (nowPage == 1) ? '<span style="cursor:default"><</span>' : '<span onclick=javascript:location.href="./layout.html?page='+Layout.page+'&num='+prevPage+'"><</span>';
	var next = (nowPage == totalPage) ? '<span style="cursor:default">></span>' : '<span onclick=javascript:location.href="./layout.html?page='+Layout.page+'&num='+nextPage+'">></span>';

	return prev + code + next;
}

var pagenum = Layout.getStringParamFromUrl('num') ? Layout.getStringParamFromUrl('num') : 1;

Product.setItem(pagenum);
