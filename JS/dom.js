// DOM - Dodument Object Model
let p2=document.getElementById('p2');
console.log(document.getElementsByClassName('p2')[0]);
document.getElementsByName('p');
document.querySelector('p');
let allParagraph=document.querySelectorAll('.div1, #p1, div');
//selector
// .className #idName

// for(let i=0; i<allParagraph.length; i++ )
// {
//     allParagraph[i].innerHTML="Changed";
// }
let div1=document.getElementById('div1');
// div1.textContent="Change";
//textContent

// div1.style.backgroundColor="red";
// div1.style.border="2px solid black";
//div1.style.cssText="background-Color:blue; border: 10px dashed red;";
//div1.setAttribute("class","changeColor")
div1.classList.add('changeColor');

div1.className="changeColor";
div1.classList.remove('changeColor');
//createElement();
//appendChild();
div1.appendChild(document.createElement('div'));
let createParagraph=document.createElement('p');
let text=document.createTextNode('This is New Paragraph');
createParagraph.appendChild(text);
//div1.appendChild(createParagraph);
div1.insertBefore(createParagraph,document.getElementsByTagName('h1')[1])
//document.getElementsByTagName('h1')[0].remove();
div1.removeChild(document.getElementsByTagName('h1')[1]);
paragraph2=document.createElement('p');
div1.replaceChild(paragraph2,document.getElementsByTagName('h2')[0]);

function changeText()
{
    p2.textContent=document.getElementById('firstName').value;
}
document.getElementById('takeValue').addEventListener('click', changeText);

//!TASK
let table=document.getElementById('table');
let firstName=document.getElementById('firstName');
let lastName=document.getElementById('lastName');
let age=document.getElementById('age');
//console.log(table);
document.getElementById('takeValue').addEventListener('click',function addData(){
let fname=firstName.value;
let lnmae=lastName.value;
let Age=age.value;
// console.log(fname, lnmae, Age);
let tableRow=table.appendChild(document.createElement('tr'));
let td1=tableRow.appendChild(document.createElement('td'));
let td2=tableRow.appendChild(document.createElement('td'));
let td3=tableRow.appendChild(document.createElement('td'));
td1.innerText=fname;
td2.innerText=lnmae;
td3.innerText=Age;
});

p2.innerHTML="<h1>Heading 2</h1>";
//p2.innerText="<h1>Heading 2</h1>";
// console.log(div1.style);
// console.log(window.getComputedStyle(div1));

console.log(div1.offsetHeight);
console.log(div1.offsetWidth);
console.log(div1.clientHeight);

