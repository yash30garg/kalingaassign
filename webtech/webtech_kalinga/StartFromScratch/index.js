
let list=[];
const addToIt =() =>
{
let name=document.getElementById('new-product');
let addingToList=document.getElementById('bye');
let item=document.createElement('li');

item.innerText=name.value;
let i=0;



                                           
addingToList.appendChild(item);
 addingToList.innerHTML+=`<button>Delete</button>  <button>Rename</button>`;
list.push(name.value);

}

