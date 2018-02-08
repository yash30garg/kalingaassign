import {markup} from "./templates/button.js"
document.getElementById("data").innerHTML=markup;

var button=document.getElementById("button");

button.addEventListener("click", getData);

function getData(){ document.getElementById("res").innerHTML = "yes i'm called"};

