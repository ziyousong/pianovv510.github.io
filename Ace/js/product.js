var Product = {};

Product.item_length = 15;
Product.page_length = 3;

Product.setItem = function(pagenum) {

	var content = '';
	var p = 0;
	
	for (var i = 0; i < Product.item_length; i++) {
		
		p = i;
		if(i >= 8) {
			p = i - 8;
		}
		
		content += '<li class="list">' +
				'<a onclick="">' +
					'<div class="item">' +
						'<img class="img-fluid" src="./images/product/num1p'+p+'.png" alt="..." />' +
					'</div>' +
				'</a></li>';
		
		/*
		if(i >= 3) {
			p = 2;
		}
		if(i >= 7) {
			p = 3;
		}
		if(i >= 11) {
			p = 4;
		}
		*/
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
