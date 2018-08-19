var Product = {};

if (Layout.page == 'product1'){ Product.item_length = 12; }
if (Layout.page == 'product2'){ Product.item_length = 13; }
if (Layout.page == 'product3'){ Product.item_length = 10; }
if (Layout.page == 'product4'){ Product.item_length = 6; }
if (Layout.page == 'product5'){ Product.item_length = 8; }
if (Layout.page == 'product6'){ Product.item_length = 12; }
//Product.item_length = 15;
Product.page_length = 3;

Product.setItem = function(pagenum) {

	var content = '';
	var p = 1;
	
	for (var i = 1; i <= Product.item_length; i++) {
		/*
		p = i;
		if(i >= 14) {
			p = i - 13;
		}*/
		
		if (i == 1) {
			content += '<div class="row justify-content-start">'
		}
		/*
		content += '<li class="list">' +
					'<div class="item">' +
						'<img class="img-fluid zoom" src="./images/product/num1p'+p+'.png" data-zoom-image="./images/product/large/num1p'+p+'.png"/>' +
					'</div>' +
				'</li>';*/
		
		content += '<li class="list">' +
					'<a href="./images/product/'+Layout.page+'/num1p'+i+'.png" data-lightbox="mygallery">' +
					'<div class="item">' +
						'<img class="img-fluid" src="./images/product/'+Layout.page+'/num1p'+i+'.png" />' +
					'</div>' +
				'</a></li>';
		
		if (i % 5 == 0) {
			content += '</div>'
			content += '<div class="row justify-content-start">'
		}
		
		if (i == Product.item_length) {
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
