function bigImg(x) {
  x.style.height="20%";
  x.style.width ="20%";
}

function normalImg(x){
  x.style.height="10%";
  x.style.width="10%";
}

function showBio(x){
  var myBio= document.getElementById(x);
  myBio.style.display = "block";
}
function hideBio(x){
  var myBio= document.getElementById(x);
  myBio.style.display = "none";

}
