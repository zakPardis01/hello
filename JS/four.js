
//How to change css properties using JavaScript?
let p1=document.getElementById('p1');
p1.style.color="red";
p1.style.cssText="color:black; background-color:red;";
p1.classList.add('p1');
// how to create a new html element?
let p2=document.createElement('p');
// what is appendChild();/append(); method do
//document.body.appendChild(p2);
// how to remove a child element
//document.body.removeChild(p2)
//p1.remove();
// how to replace a child element
//document.body.replaceChild(newChild,childToBeReplaced);
// how ot remove an element
// how to insert an element before another element
//document.body.insertBefore();
// how to take value of form element
//.value method
p1.insertAdjacentHTML("afterbegin", p2)
//afterbegin - first Child.
//afterend
//beforebegin
//beforeend - last Child

//!Task

//setInterval()
function toBeCalled( subjectName){
    console.log(`our Subject is ${subjectName}`);
}
//toBeCalled();
let runMethod=setInterval(toBeCalled,3000,'JavaScript');
clearInterval(runMethod);

let setTime=setTimeout(toBeCalled,10000,'JavaScript');
clearTimeout(setTime);

/*//!Task
display sum of two numbers you are passing as parameter values
2. dispaly it after 4 sec dealy
3. the result to be displayed repeatedly after each 2 sec.
*/
console.clear();

// Date and time in JavaScript
let date=new Date();
console.log(date);
//year,month,day,hours,minutes,seconds, milisecond.
let date1=new Date('2022,1,25');
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getDay());

console.log(date.toLocaleString('en-us',{year:'numeric',month:'long', day:'numeric', weekday:'long'}));
//!TASK
/*
create date object,
add custom date, and time
retreive -- year, monthName dayOfMonth,dayName
display only dayName, MonthName, year
*/

//Math object
console.log(Math.max(10,5,20,39,111));
console.log(Math.min(10,5,20,39,111));
console.log(Math.round(4.5));//5
console.log(Math.pow(3,3));//3**3 -27
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));
console.log(Math.sin(1));
console.log(Math.round(Math.random(1,20)*10));
//!TASK
/*
take two number as input from user using input element
by clicking a button change text of paragraph 
with a random numbere between the range of those
two numbers.
*/
let a=10;
let b=5;
console.log(!(a<b));//
//!TASK
/*
Button, create a paragarph,
date and time of posting- date and time of expiration
after 30 day's it should be expired.
*/
//Local Storage
localStorage.setItem('subject','JavaScript');
localStorage.setItem('subject2','MySQL');
//let subjectName=localStorage.getItem('subject');
console.log(localStorage.getItem('subject'));
localStorage.removeItem('subject');
console.log(localStorage.getItem('subject'));
console.log(localStorage.getItem('subject2'));
localStorage.clear();

console.log(localStorage.getItem('subject2'));

//!TASK
/*
With a button add html elements which will not 
delete even if you referesh the browser.
*/

// Ternary Conditional Operator
let number=9;
if(number<10)
console.log("Number is less than 10");
else
console.log("Number is  not les than 10");

//let message=number<10 ? "Number is less than 10":"Number is  not les than 10";
console.log(
number<10 ? "Number is less than 10":"Number is  not les than 10"
    );

//Arrow Function

function sum(number){
    console.log(number+10);
}
sum(10);

let sum1=number=>number+10;
console.log(sum1(10));

let person={
    firstName:'Zak',
    subjectName:['Java','Database','C#'],
    lastName:'Pardis',
    location: function(){
       let inner=function() {
        console.log(this);
       }
       inner();
    },
    honk:function(){
    let inner=()=>{console.log(this);}
    }
    inner();
}
person.location();
let l=person.location;
l();

//console.log(person.location());
//console.log(person.location1);