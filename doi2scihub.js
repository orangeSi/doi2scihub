var links = document.getElementsByTagName("a");
var reg_doi = /^https:\/\/doi.org\//;
for(var i=0; i< links.length; i++){
	var link = links[i];
	if(reg_doi.exec(link.href)){
		var scihub = ["sci-hub.se", "sci-hub.tw"];
		for(var j=0; j < scihub.length; j++){
			var new_href = link.href.replace(/doi.org/, scihub[j]);
			var go_link = document.createElement("a"); 
			go_link.target="_blank";
			go_link.href = new_href;
			go_link.innerHTML = "go to "+ scihub[j];
			go_link.style="padding: 1px;margin: 1px;background-color: green;color: black";
			link.parentNode.insertBefore(go_link, link.nextSibling);
			console.log(new_href);
		}
	}
}
