function b()
{ var myVar;
    console.log(myVar);// if myVar is not defined in function b()  
}
function a()
{
   
var myVar=2;
b();
}
var myVar=1;
a();