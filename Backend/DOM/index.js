document.querySelector("h1").innerHTML = "Bye" ;
// 
document.getElementsByClassName("item")[2].innerHTML = "Heyyy!";
document.querySelectorAll(".item")[2].innerHTML = "<em>Same here</em>";
document.querySelector("button").style.backgroundColor = "yellow" ;


// Add style class to a selector to change style using js
document.querySelector("button").classList.toggle("invisible");
document.querySelector("h1").classList.toggle("huge");