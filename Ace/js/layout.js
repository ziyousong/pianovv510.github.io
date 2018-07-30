
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
		Layout.setHtml(Layout.page, 'about', function(){});
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

var bg = Layout.getStringParamFromUrl('bg');

if (bg != undefined) {
	$('#main').css("background-image","url('./images/background/mainbg"+bg+".jpg')");
}

/*function newsInit() {
	var newsparam = getStringParamFromUrl("news");
	console.log(newsparam);
	if(newsparam === undefined) {
		var xhr = new XMLHttpRequest();

		xhr.onload = function() {
			var data = JSON.parse(this.responseText);
			var content = '';
			for(var key in data.newsList) {
				content += '<div class="media">' +
					'<img class="align-self-center mr-4 ml-6 rounded" src="'+data.newsList[key].newsImg+'" alt="...">' +
					'<div class="media-body">' +
					'<span class="media-date">'+data.newsList[key].newsDate+'</span>' +
					'<div class="media-title mb-3 mt-2"><a href="./news.html?news=1">'+data.newsList[key].newsTitle+'</a></div>' +
					'<p>'+data.newsList[key].newsContent+'<a href="./news.html?news=1">VIEW MORE></a></p></div></div>' +
					'<br><p>';
			}
			content += '<div class="news-page"> <span><u>1</u></span> <span>2</span> <span>3</span> </div>';
			document.getElementById("newsContain").innerHTML = content;
		} 

		xhr.open("GET", './msg/'+localStorage.lang+'.json');
		xhr.send();
	}
}*/






