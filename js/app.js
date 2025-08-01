console.log("Hello Web");
ShowProject(0);


function ToggleMenu(x) {
  x.classList.toggle("change");
  let rmiStyle = document.getElementsByClassName("respnsive-menu-items")[0].style;
  let currentHeight = rmiStyle.maxHeight;
  rmiStyle.maxHeight = currentHeight == "50vh" ? "0vh" : "50vh";
  rmiStyle.minHeight = currentHeight == "50vh" ? "0vh" : "20vh";
  rmiStyle.padding = currentHeight == "50vh" ? "0ch" : "2ch";
  
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