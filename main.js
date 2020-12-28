// ==UserScript==
// @name YorkBBS - Auto open posts in a new tab
// @namespace Violentmonkey Scripts
// @version: 0.1
// @author: Lovely Cat
// @include  /http://forum\.yorkbbs\.ca/[a-z]+/
// ==/UserScript==

(function(){
  var suppressing;
  var posts = document.getElementById("alltopic");
  if(posts != null){
    posts.addEventListener('mouseup', function(e) {
    if (e.button > 1 || e.altKey){
      	return;
    }
    let newTab = window.open(e.target.href, '_blank');
    newTab.focus();    	
  	}, true); 
	let allAnchors = posts.querySelectorAll("tr div.L_subject a[href][onclick]");
  
  // stop page navigation on the same page
  for(var i = 0; i < allAnchors.length; i++){
		let anchor = allAnchors[i];
		console.log(allAnchors[i].onclick);
		anchor.onclick = () => {return false;};
		console.log(allAnchors[i].onclick);
	}
  }
})();
