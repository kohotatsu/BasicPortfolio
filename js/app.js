console.log("Hello Web");

let slideIndex = 1;
let currentTabId = 0;


showSlides(slideIndex);

function  OpenProject(tabId){
	currentTabId = tabId;
	console.log("Tab "+tabId +" clicked");
	let i;
	let x = document.getElementsByClassName("projets-view");
	for (i=0;i<x.length;i++){
		x[i].style.display = "none";
	}
	document.getElementById(tabId).style.display = "block";
	currentSlide(1);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("projets-exemples");
  let dots = document.getElementsByClassName("dot");
  if (n > 3) {slideIndex = 1}
  if (n < 1) {slideIndex = 3}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentTabId*3+slideIndex-1].style.display = "block";
  dots[currentTabId*3+slideIndex-1].className += " active";
}