
var Layout = {};

Layout.page = '';

Layout.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

Layout.setHtml = function (page, pagename, callback) {
	var xhr = new XMLHttpRequest();

	/*xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var html = this.responseText;
			document.getElementById("main").innerHTML = html;
			document.getElementById("bannerName").setAttribute("key",pagename);
			Language.init();
        }
    };*/
	
	xhr.open("GET", './html/'+page+'.html', false);
	xhr.send();
	
	var html = xhr.responseText;
	document.getElementById("main").innerHTML = html;
	document.getElementById("bannerName").setAttribute("key",pagename);
	Language.init();

	callback();
}

Layout.getHtml = function() {
	Layout.page = Layout.getStringParamFromUrl('page') ? Layout.getStringParamFromUrl('page') : 'none';
	
	if (Layout.page === 'none') 
	{
		// 404
	}
	else if (Layout.page === 'company') {
		Layout.setHtml(Layout.page, 'about', function(){
			$(".main").css("padding-bottom", "2vh");
		});
	}
	else if (Layout.page === 'news') {
		Layout.setHtml(Layout.page, 'about', function(){});
	}
	else if (Layout.page === 'contact') {
		Layout.setHtml(Layout.page, 'contact', function(){});
	}
	else if (Layout.page === 'process' || Layout.page === 'quality') {
		Layout.setHtml(Layout.page, 'process', function() {
			//document.write('<script src="./js/effect.js"></script>');
		});
	}
	else 
	{
		Layout.setHtml(Layout.page, 'product', function() {
			document.write('<script src="./js/product.js"></script>');
		});
	}
	
}

Layout.getHtml();








