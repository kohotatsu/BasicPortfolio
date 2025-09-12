console.log("Hello Web");
//ShowProject(0);


function ToggleMenu(x) {
  x.classList.toggle("change");
  let rmiStyle = document.getElementsByClassName("respnsive-menu-items")[0].style;
  let currentHeight = rmiStyle.maxHeight;
  rmiStyle.maxHeight = currentHeight == "50vh" ? "0vh" : "50vh";
  rmiStyle.minHeight = currentHeight == "50vh" ? "0vh" : "20vh";
  rmiStyle.padding = currentHeight == "50vh" ? "0ch" : "2ch";
  
  //console.log(mh);
}

function ToggleFilterActivity(item){
  item.classList.toggle("active-filter");
  item.classList.toggle("inactive-filter");
  FilterShownProject();
}
function FilterShownProject(){
  let projectPreviews = document.getElementsByClassName("project-preview");
  for(let i = 0 ; i < projectPreviews.length ; i ++ ){

      projectPreviews[i].style.display = "flex"
  }
  let activeFilters = document.getElementsByClassName("active-filter");
  if(activeFilters.length<=0) return;

  let filterTags = new Set();
  for(let i = 0 ; i < activeFilters.length ; i ++ ){
      filterTags.add(activeFilters[i].id);
  }  
  for(let i = 0 ; i < projectPreviews.length ; i ++ ){
    let needToShow = false;
    for (const t of filterTags) {
      needToShow = (projectPreviews[i].classList.contains(t));
      if(needToShow) break;
    }
    if(!needToShow)projectPreviews[i].style.display = "none";
  }
}

function TriggerCollapse(self){
  var content = self.nextElementSibling;
    if (content.style.maxHeight === "100%") {
      content.style.maxHeight = "0%";
      content.style.maxHeight = "0px";
    } else {
      content.style.maxHeight = "100%";
    }
}

/*function ShowProject(n){
  let projs = document.getElementsByClassName("project-view")
  //console.log("proj wanted: " + n);
  for (var i = 0; i < projs.length; i++) {
    projs[i].style.display = i==n? "block":"none";
    projs[i].style.opacity = i==n? "100%":"0%";
  }
/*  switch(n){
  case 0:
    document.getElementById("projets0").style.display = "block";
    break;
  case 1:
    document.getElementById("projets1").style.display = "block";
    break;
}*/