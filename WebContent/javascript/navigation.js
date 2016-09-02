(function(global) {
    "use strict;"

	// タブでbodyを切り替える機能
	function ChangeTab(tabname) {
		// 全部消す
		document.getElementById('tab-home').style.display = 'none';
		document.getElementById('tab-drawing').style.display = 'none';
		document.getElementById('tab-software').style.display = 'none';
		document.getElementById('tab-other').style.display = 'none';
		// 指定箇所のみ表示
		if(tabname) {
			document.getElementById(tabname).style.display = 'block';
		}
	};

    // scriptタグで呼び出し
    if ("process" in global) {
        module["exports"] = ChangeTab;
    }
    global["ChangeTab"] = ChangeTab;

})((this || 0).self || global);