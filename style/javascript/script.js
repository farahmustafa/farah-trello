function showform() {
  document.getElementById("list").style.display = "none";
  document.getElementById("add-list").style.display = "block";
}
function cancelform() {
  document.getElementById("list").style.display = "block";
  document.getElementById("add-list").style.display = "none";
}
function showform1(){
  document.getElementById("hide3").style.display = "none";
  document.getElementById("card-title").style.display = "block";
}
function cancelform1() {
  document.getElementById("hide3").style.display = "block";
  document.getElementById("card-title").style.display = "none";
}
function myFunction(){
  document.getElementById("inpt11").style.display = "block"; 
  document.getElementById("inpp").style.padding=0;
  document.getElementById("inpp").style.width="80%";
}
function add(){
  var lI = document.createElement("li");
  lI.style.background = "white";
  lI.style.width = "260px";
  lI.style.listStyleType = "none";
  lI.style.marginBottom = "3px";
  lI.style.border = "1px solid";
  lI.style.padding = "3px";
  lI.style.position = "relative";
  lI.style.top = "18px";
  lI.style.overflow = "auto";
  var input = document.getElementById("inpp").value;
  var text = document.createTextNode(input);
  lI.appendChild(text);
  document.getElementById("myList").appendChild(lI);
 document.getElementById("head").innerHTML=input;
  document.getElementById("inpp").value = "";
  document.getElementById("card-title").style.display="none";
  document.getElementById("hide3").style.display="block";
  lI.setAttribute("data-toggle","modal");
  lI.setAttribute("data-target","#myModal");
  var parag =document.getElementById("inpt11").value;
  document.getElementById("descrip").innerHTML=parag;
}





