function onLoad()
       {
   // alert("function onload() called");
   document.getElementById("timestamp").innerHTML=Date();
       }
       function checkNumber()
       {
var theNumber,theMessage;

theNumber=document.getElementById("smallnumber").value;
if(isNaN(theNumber) || theNumber<1 || theNumber>10) {
theMessage="number should be greater than 1 and less than 10";

}
else{
    theMessage="number is good";
}
document.getElementById("numbermessage").innerHTML=theMessage;
}

var cats=require('./cats.js');
console.log(cats);
       