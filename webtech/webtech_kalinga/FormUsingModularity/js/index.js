

import {dropdown} from "./js/button.js"
import {form1} from "./js/form1.js"
import {form2} from "./js/form2.js"



function f1()
{
        document.getElementById('form2').style.display="none";
          document.getElementById('form1').style.display="block";
}


//  console.log( document.forms["fo1"].getElementsByTagName("input"));

function f11() 

{   

//    var message= document.getElementById("myForm").elements[0].value;
//    display_message.innerHTML=message;
 //   var inputs = document.getElementsByTagName("input");
//   console.log(inputs);

var x=document.getElementById("myForm1");
var text1="";
for(var i=0;i<x.length;i++)
{
    text1+= x.elements[i].value +"<br>";
}

     
 document.getElementById("displayMessage").innerHTML=text1;

}


function f2()
{
     document.getElementById('form1').style.display="none";
          document.getElementById('form2').style.display="block";
}

function f12()
{
var y=document.getElementById("myForm2");
var text2="";
for(var j=0;j<y.length;j++)
{
    text2+= y.elements[j].value +"<br>";
}


 document.getElementById("displayMessage").innerHTML=text2;
 
}

