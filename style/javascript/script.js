
function add1(){

  document.getElementById("add-list").style.display="none";
  document.getElementById("sect-add").style.display="block";
}

function hide(){
  document.getElementById("sect-add").style.display="none";
  document.getElementById("add-list").style.display="block";
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var Div = document.createElement("div");
  Div.setAttribute("class","list");
  var parag = document.createElement("p");
  parag.setAttribute("id","title_p");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  parag.appendChild(t)
  Div.appendChild(parag);
 


  document.getElementById("board").prepend(Div);
  
  document.getElementById("myInput").value = "";

  // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
Div.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var button = document.createElement("button");
var btnTxt = document.createTextNode("+ Add anther card");
button.className= "btn1";
button.appendChild(btnTxt);
Div.appendChild(button);
button.setAttribute("id","buttn")
button.addEventListener('click', function() {
  showf(parag);
}, false);



}