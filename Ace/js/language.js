
var Language = {};

Language.data = {};
Language.FAMILY = ["zh-tw", "en", "ja", "de"];

Language.change = function (newLang) {
	localStorage.lang = newLang;
	location.reload();
}

Language.init = function() {
	
	localStorage.lang = localStorage.lang ? localStorage.lang : navigator.language.toLowerCase();
	var lang = localStorage.lang;
	
	Language.request(lang);
	
	Language.selector();
	
}

Language.selector = function() {
	
	var content = '';
	
	for(var key in Language.FAMILY) {
		if(Language.FAMILY[key] == localStorage.lang) {
			document.getElementById("langDropdown").innerHTML = '<img src="./images/icon/'+Language.FAMILY[key]+'.png" style="width:25px;"/>';
		} else {
		content += '<a class="dropdown-item" href="" onclick=Language.change("'+Language.FAMILY[key]+'")><img src="./images/icon/'+Language.FAMILY[key]+'.png" style="width:25px;"/></a>';
		}
	}
	document.getElementById("dropdown-menu").innerHTML = content;
}

Language.request = function(lang) {
	var xhr = new XMLHttpRequest();

	xhr.onload = function() {
		var data = JSON.parse(this.responseText);
		setText(data);
	} 

	xhr.open("GET", './msg/'+lang+'.json');
	xhr.send();
}

function setText(MSG) {
	$(".lang").each(function(index, element) {
		$(this).text(MSG[$(this).attr('key')]);
	});
}

Language.init();
