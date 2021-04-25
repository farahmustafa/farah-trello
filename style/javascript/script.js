
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

function showf(inputValue){
  var addbtn = document.getElementsByClassName("btn1");
  var i;

  var showDiv = document.createElement("div");
  var title = document.createElement("input");
  var details = document.createElement("input");
  var closbtn = document.createElement("button");
  var clostxt = document.createTextNode("\u00D7");
  closbtn.appendChild(clostxt);

  var add = document.createElement("button");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("id", "title_edt");
  details.setAttribute("type", "text");
  details.setAttribute("id", "detail");
  details.setAttribute("name", "details")
  details.setAttribute("placeholder", "Enter Card Details...")
  closbtn.setAttribute("id","closbttn");

  showDiv.setAttribute("id","formm");
  add.textContent ="Add";
  add.setAttribute("id","aadbtn");
  showDiv.appendChild(title);
  showDiv.appendChild(details);
  showDiv.appendChild(add);
  showDiv.appendChild(closbtn);
  Div.appendChild(showDiv);

  button.addEventListener('click', function() {
    document.getElementById("formm").style.display="block";
    document.getElementById("buttn").style.display="none";
});
closbtn.addEventListener('click', function() {
  document.getElementById("buttn").style.display="block";
  document.getElementById("formm").style.display="none";
  
});

}}