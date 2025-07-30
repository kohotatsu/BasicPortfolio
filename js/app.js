console.log("Hello Web");
ShowProject(0);


function ToggleMenu(x) {
  x.classList.toggle("change");
  let mh = document.getElementsByClassName("respnsive-menu-items")[0].style.maxHeight;
  
  document.getElementsByClassName("respnsive-menu-items")[0].style.maxHeight = mh == "50vh" ? "0vh" : "50vh";
  document.getElementsByClassName("respnsive-menu-items")[0].style.minHeight = mh == "50vh" ? "0vh" : "20vh";
  
  //console.log(mh);
}

function ShowProject(n){
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
}