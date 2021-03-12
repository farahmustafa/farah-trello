function showform(){
  document.getElementById("list").style.display="none";
   document.getElementById("add-list").style.display="block"; 
 }
 function cancelform(){
  document.getElementById("list").style.display="block";
  document.getElementById("add-list").style.display="none"; 
}
function showform4(){
  document.getElementById("hide3").style.display="none";
  document.getElementById("add-card3").style.display="block";
}
function cancelform1(){
  document.getElementById("hide3").style.display="block";
  document.getElementById("add-card3").style.display="none";   
}

function add(){
  var lI = document.createElement("li");
  lI.style.background="white";
  lI.style.width="268px";
  lI.style.listStyleType="none";
  var input = document.getElementById("inpt11").Value;
  var text = document.createTextNode(input);
  lI.appendChild(text);
  document.getElementById("myList").appendChild(lI);
}
