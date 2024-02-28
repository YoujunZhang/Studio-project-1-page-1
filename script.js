


const div1 = document.getElementById("myDIV");

function myFunction() {
  div1.style.animation = "mymove 4s 2";
}

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepeatFunction);
div1.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "The animation has started";
  this.style.backgroundColor = "transparent";
}
function myRepeatFunction() {
  this.innerHTML = "The animation was played again";
  this.style.backgroundColor = "lightblue";
}
function myEndFunction() {
  this.innerHTML = "The animation has completed";
  this.style.backgroundColor = "yellow";
}




function myFunction1() {
  location.replace("https://youjunzhang.github.io/Studio-project-1-page-1-1/")
}
