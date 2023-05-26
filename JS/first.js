//document.getElementById('p1').innerHTML='Changed';

// this is single line comment
/*
this is multi line comment
*/
// how to output JavaScript
console.log("Welcome to JavaScript");
console.warn('This is warning');
console.clear();

// Variable 
// What are they? - Custom words that we can use to store or assign data to. 
// then we can use these variable to refere to the data.
// declaration
let num1; 
// intialization
num1=10;

let num2=10;
/*
it can not be redeclared.
a variable with let must be declared before we use it.
let has block scope.
*/
let num3=10;
{
    let num3=20;
}
console.log(num3);

let num4;
num4=10;
console.log(num4);

var number1;
number1=10;
{
    console.log(number1);
    var number1=20;
}
console.log(number1); //20

/*
const 
    can not redeclared
    const variable can not be reassigned
    const variable has block scope.

*/
const a=1;
const b=10;

const dateOfBirth='1995-01-20';
//!TASK
 /*
 1. Create a variable called favFood and assign the value Pizza,
another variable called favColor with the value Red and a third 
 variable called favDrink with the value lemonade.

2. Console log the favDrink variable to show it's value.

 3. Change the value of the favFood variable to "Pasta", console log it's value.

 4. Create a variable, call it whatever you want and assign the value of your brithday.
*/
let favFood="Pizza";
let favColor="Red";
let favDrink="Lemonade";


//2.
console.log(favDrink);
//3.
favFood="Pasta";
console.log(favFood);
//4.
const DOB="1995/01/20";

console.log(DOB);

// total=a+b;
// console.log(total);

/*
Variable Name
Name can contain letters, digits, underscores and dollar sign
Name should start with letter - name can also begin with $ and _
Names are case sensitives
We can not use reserved keywords as variable name.
Variable name can not contain spaces.
*/

// Data Types
// in JavaScrip a value is always of a certain type, this type is called data type.

let height=100;     // Number value -- this is simply a number data type

let lastName = "PARDIS";    // String value
// String - text inside a pair of quotation marks, common practice is double quotation (" "), 
// but single quotaion also works (' ')
/*
!Primitive DATA type                           Non-Primitives
 The word primitive mean simple           Non-primitives data types hold
or basic - they are called primitive     complext data.
data type because the value they hold      Object (arrays, function and objects)
are simple and single data.
       Number                   
       String
       Boolean
       Bigint
       Symbol
       Undefined
       Null
*/

let myNumber1=5; // this is number data type
let myNumber2=5.2;// also number
let myNumber3=5;
let subjectName='JavaScript'; // string data type
let subjectName1="JavaScript";

//Boolean - return either true or false;
let degree=true;

console.log(myNumber1==myNumber3);// return true
console.log(myNumber1==myNumber2);// return false

let result=myNumber1==myNumber2;
console.log(result);

let bigNumber=93484387237838n;
console.log(typeof bigNumber);// bigint
console.log(typeof myNumber1);
console.log(typeof subjectName);

//Undefined
let myNumber4;
console.log(myNumber4);//return undefined
//NULL
let myNumber5=null;
console.log( myNumber5);

//!No Primitive Datatypes
//Array -- is used to store mutiple values in a single variable.

let myList=["Zak","JavaScript",10, true];
console.log(myList);
//index number start with 0,1,2,3,4,5,6
console.log(myList[1]);

// fucntion
// block of code used to perform a specific task.
function hello()
{
    // body of function 
    console.log("Welcome to JavaScript");
}

hello();

// Object is a standalone entity, with properties and types

let vehicle={
    model:"A-Class",
    modelYear:2020,
    palate:"L2020",
    colour:"White"
};

console.log(vehicle);
console.log(vehicle.modelYear);

//!TASK
// 1. Create an object profile which have at least 4 property
// like fName, lName, dateOfBirth, faveSubject
// 2. Return values of two specific property
// 3. return all properties of profile
let profile={
    firstName:"Zak",
    lastName:"Pardis"
};
console.log(profile.firstName+" "+profile.lastName);
console.log(profile);
/*
              ----- //!TASK ----
1. Create a string variable called favDrink and assign a value to it
2. Create a number variable called favNum and assign a value to it
3. Create a funtion block called myFavs that console log your answers,
dont forget to invoke the myyFavs function.
*/
let favDrink1="Juice";
let favNum1=10;
let myyFavs=function(){
    console.log(favDrink1, favNum1);
}
myyFavs();

// Operators
//Arithmatic Operators
//+ Addition
let sum=10+20; //30
//- Subtraction
let total=10-5; //5
//* Multiplication
// ** Exponentiation or power of
let powerOf=3**4 //3*3*3*3
// / Division
// % Modul (Division reminder);
// ++ Increment
// -- Decrement
let myNumber6=10;
console.log(++myNumber6);//11
console.log(myNumber6);

// Comparison Operators
// ==	equal value to
// != Value not equal
// ===	equal value and equal type  
// !== Value and type not equal
let value1="7";
let value2=7;
console.log(value1==value2);

console.log(value1===value2);

// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

let sum1= 5 + 3 * 2- 1 * ( 1 + 1*(1+1) );
// inner bracket,outer braket, devision/multiply, addition/substraction

/*
 Write a code which will display a message 
 in the cosole of browser 'the number is even' if the value of 
 variable is even and it should display 'the number is odd' if 
 the value of variable is odd.

 -- before this try to check that the value is number
 if value of variable is string it shoult give a message that
 'the value is not number'
 */

 let value=9;

 if(typeof value==='number')
 {
if(value%2==0)
{
    console.log("Value is Even");
}
else
console.log("value is Odd");
 }
else{
    console.log("the value is not number");
}
//!TASK

//1. What will the value of x be in the following?
let x=20; //
x +=20; // x=x+20; //x=40
console.log(x);
x /=2;  //x=x/2; //x=20
console.log(x);
/* 2. Create a variable called xp and intitialise it to have a
value of 200, multiply the value by 2 and console log the value.
*/
let xp=200;
xp*=2; //xp=xp*2;
console.log(xp);
//console.log(xp*2);


/*
Array Methods
*/
let ourList=["Zak","JavaScript",26, true];
let ourList2=[25,"Mark"];
console.log(ourList.length);
console.log(ourList);
console.log(ourList.length-1);// last index
ourList.push("JavaScript");
console.log(ourList);
ourList.pop();
console.log(ourList);
ourList.unshift("JavaScript");
console.log(ourList);
ourList.shift()
console.log(ourList);

console.log(ourList[1]);

ourList[2]=false;
console.log(ourList[2]);

ourList.splice(2,0,"Pardis");
console.log(ourList);

let sliceArray=ourList.slice(1,3);
console.log(sliceArray);
//concat
console.log(ourList.sort());

//!TASK
/*
Create an array of 5 elements
1. sort the element
2. add an item in the begining and at the end of Array
3. remove item at index 3
4. add an item at the a specific index
5. replace and item with another item
*/

//alert("Hello");
console.error("This is error");
console.warn("Warning");

prompt("What is your age","Type your age");

console.log(confirm("Do you want to continue"));

//!TASK
/*
via the prompt method type your age, if your age Ok
they your age should be displayed in the cosole of browser.
*/

