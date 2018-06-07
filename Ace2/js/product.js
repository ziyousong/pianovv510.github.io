var Product = {};

Product.item_length = 15;
Product.page_length = 3;

Product.setItem = function(pagenum) {

	var content = '';
	var p = 0;
	
	for (var i = 0; i < Product.item_length; i++) {
		
		p = i;
		if(i >= 13) {
			p = i - 13;
		}
		
		/*content += '<li class="list">' +
				'<a onclick="">' +
					'<div class="item">' +
						'<a data-fancybox="gallery" href="./images/product/num1p'+p+'.png"><img class="img-fluid" src="./images/product/num1p'+p+'.png"></a>' +
					'</div>' +
				'</a></li>';*/
		
		content += '<li class="list">' +
				'<a onclick="">' +
					'<div class="item">' +
						'<img class="img-fluid zoom" src="./images/product/num1p'+p+'.png" data-zoom-image="./images/product/large/num1p'+p+'.png"/>' +
					'</div>' +
				'</a></li>';
		
	}

	var pagecode = Product.getPage(Product.page_length, pagenum);

	document.getElementById("productul").innerHTML = content;
	document.getElementById("product_page").innerHTML = pagecode;
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
