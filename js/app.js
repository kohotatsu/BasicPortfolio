console.log("Hello Web")

function  OpenProject(tabId){
	console.log("Tab "+tabId +" clicked");
	let i;
	let x = document.getElementsByClassName("projets-view");
	for (i=0;i<x.length;i++){
		x[i].style.display = "none";
	}
	document.getElementById(tabId).style.display = "block";
}