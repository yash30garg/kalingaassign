let promiseToCleanTheRoom=new Promise(function(resolve,reject)
{
    let isClean=false;

    if(isClean)
    {
        resolve('clean');
    }
    else 
    {
        reject('not clean');
    }

});
promiseToCleanTheRoom.then(function(fromResolve)
{
    console.log('the room is '+ fromResolve);
}).catch(function(fromReject)
{
    console.log('the room is' +fromReject);
})

//callback
let x=function()      
{
    console.log("i am calling from inside the function")
};
let y =function(callback)
{
    console.log('do something');
    callback();
}
y(x);