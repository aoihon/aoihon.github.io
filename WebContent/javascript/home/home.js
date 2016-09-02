(function(global) {
	"use strict;"

	// 展開先のindex.htmlを基準とする。
	var xmlFile = "WebContent/resources/xml/introduction.xml";

	function introduction(chapter) {
		$.ajax({
			url : xmlFile,
			type : "GET",
			dataType : "xml",
			timeout : 1000,
			async : false,
			error : function() {
				alert("xmlロードできないっぽい？");
			},
			success : function(xml) {
				$(xml).find(chapter).each(function(){
					makeHTML(chapter, "dt", $(this).find("title").text());
					$(this).find('item').each(function(){
						makeHTML(chapter, "dd", $(this).text());
					});
				});
			}
		});
	}
	
	function makeHTML(chapter, tag, value){
		// 要素を生成する
		var p = document.createElement(tag);
		p.innerHTML = value;
		// DOMに組み込む
		var d = document.getElementById(chapter);
		d.appendChild(p);
	}
	
	// scriptタグで呼び出し
	if ("process" in global) {
		module["exports"] = introduction;
	}
	global["introduction"] = introduction;

})((this || 0).self || global);