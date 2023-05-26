/*
What are the different ways to declare a variable in JS?
let
    we can not redeclare a variable if it is already declared.
    it has block scope
    we can change the value of a variable declared with let.
const
    we can not redeclare or reassign a variable if it is declared with const
    block scope
var

variableName

Main categories of Data type in JS?
Primitive Data types    
    boolean
    number
    string 
    null
    undefined

None-Primitive Data types
    function, object and array
*/
let num1=20;
// What does confirm method do? create a pop-up menu for confirming and cancelling
//Ok=>true      Cancel=>false
// what does prompt method do? Create a pop-up menue with inserting a value.

//Type Conversion and Coercion

/*
Conversion -
In programming languages, conversion is the fundamental 
aspect used to deal with situations facing the code.
The conversion is the way in which the variable of one type 
is compatible with the variable of 
another type to perform a particular task.

Conversion can be used by 3 types of data - string, number 
and boolean(true(1) or false(0))
*/


let value=10;
console.log(typeof String(value)); //"10"

let value1=String(12.10);
console.log(typeof value1);//"12.10"
console.log(String(10)===10); //false

let value2=true;
console.log(typeof String(value2));//"true"

console.log(String(undefined));//"undefined"

// Number
// Syntax => Number(Value to converted);
let subjectName=Number("JavaScript");

console.log(subjectName);

//false=0 true=1

console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number("4.5"))//4.5
console.log(Number("44,5"))//NaN

//Boolean
//Syntax = Boolean(value to be converted)

console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean('JavaScript'));//true
console.log(Boolean(' '));//true
console.log(Boolean(''));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

//!TASK
/*
take the value from prompt and return it's data type.
and conver it to string, Number and Boolean.
and then display it in the console of browser.
*/

// let value5=prompt("Enter your Value","Value");
// console.log( Boolean(value5));
// console.log( Number(value5));

// Coercion 

console.log('10'/2);//5
console.log(10*'3');//30
console.log('10'%2);//0
console.log(true*5);//5

console.log('12'+5+5+5)//125
console.log('10'+(5+true+1+false+3)+10);//101010
console.log(1+1+'2');//22
//number+number+boolean=number
//number+string=string

console.log(true+1);//2
console.log(5/false);//Infinity

/*
Function
block of code used to perform a specific task.
*/
function sum()
{
    //body
    console.log(10+20);
}

sum();

// parameter -- argument

function sumOf(value1, value2) // parameters
{
    return value1+value2;
}

console.log(sumOf(10,10));

let summ=function total()
{
    return 20;
}

console.log(summ());

//!TASK
/*
two variables num1, num2
take user input using prompt
another operator
using promt take an operator and perform the correct operation
based on the operator
num1/num2
num1*num2
*/
/*
function arithmaticOperations()
{
    let num1=prompt("Enter your first number:");
    let num2=prompt("Enter your second number:");
    let operator=prompt("Enter the Operator:");
    if(operator=='*')
        console.log(num1*num2);
    else if(operator=='+')
    console.log(Number(num1)+Number(num2))
}

arithmaticOperations();
*/
console.log(Number(Boolean("String"))); //1
console.log('3'+3+3+"5" + (3+3));
console.log("5"+5);
console.log(5-"5");

// Conditional Statements
//if, else if, else
//syntax
/*
if(condition)
    statement
else if(condition)
    statement
else if(condition)
    statement
else
    statement

------------------------------------
if(condition)
    statement
if(condition)
    statement
if(condition)
    statement
else
    statement
*/
let number=20;
if(number==20)
console.log("Number is 20");
if(number!=10)
console.log("Number is not equal to 10");
if(number==5)
console.log("Number is 5");

console.log("----------------------------------");

if(number==20)
console.log("Number is 20");
else if(number!=10)
console.log("Number is 10");
else if(number==5)
console.log("Number is 5");
/*
!Task

!You are given a variable marks. Your task is to print:

- AA if marks is greater than 90 .
- AB if marks is greater than 80 and less than or equal to 90 .
- BB if marks is greater than 75  and less than or equal to 80 .
- BC if marks is greater than 70  and less than or equal to 75 .
- CC if marks is greater than 65 and less than or equal to 70 .
- CD if marks is greater than 55 and less than or equal to 65 .
- DD if marks is greater than 50  and less than or equal to 55.
else it should display you are failed.
*/

/*
!TASK:
take an array for visa and passport
Write a JavaScript function that takes in two parameters:
age and income. The function should return a message based on the
 following conditions:
if person has UK passport or visa then it will check for age and income
    else it should display 'sorr you are not UK citizen'
If the person is younger than 18 and their income is less than $1000,
    return "Not eligible for employment."
If the person is younger than 18 and their income is $1000 or more,
    return "Part-time employment is possible."
If the person is 18 or older and their income is less than $1000,
    return "Full-time employment is possible."
If the person is 18 or older and their income is $1000 or more,
    return "Eligible for managerial positions."
*/
let rightOfWork={
    visa:true,
    passport:false
};
function eligible(age, income){
    if(rightOfWork.visa==true || rightOfWork.passport==true)
    {
        if(age<18)
        if(income<1000)
        {
            console.log("Not eligible for employment.");
        }
        else
        console.log("Part-time employment is possible.");

        else
        {
            if(income<1000)
            console.log("Full-time employment is possible.");
            else
            console.log("Eligible for managerial positions.");
        }
    }
    else
    console.log("Sorry you are not UK citizen");
}

eligible(18,900);

//Switch
// when to use switch
/*
switch(exprestion)
{
    case case1: statement;
    break;
    case case2: statement;
    default:
}
*/
/*
let operator=prompt("Enter your operator:");
switch(operator)
{
    case '*': console.log(10*5);
    break;
    case '/': console.log(10/5);
   break;
    default: console.log("Please enter correct operator");
}  
*/ 
//!TASK
/*
using prompt take a value from 1 to 7.
based on Number display relevant day name using switch.
*/
//String in JavaScript
//Writting string in JS
let subject1="JavaScript";
let subject2='JavaScript';
let subject3=`JavaScript`;
let lang="language!";

let value10="Hello \"ever\\yone";
let value11='Hello "Ever\tyone\\ \nit\'s';
let string="This is string value";
console.log(value11);
console.log(value10);
console.log(subject1+'is a programming '+lang);
console.log(`${subject1} is a " ' /progamming ${lang}`);
console.log(subject1.length);
console.log(subject1.toUpperCase());//JAVASCRIPT
console.log(subject1.toLowerCase());//javascript
console.log(subject1.indexOf('c'));
console.log(subject1.lastIndexOf('a'));
console.log(subject1.replace("Script","SCRIPT"));

//slice(startIndex, endIndex), substr, substring
console.log(subject1.slice(3,6));//startIndex is inclusive - endIndex is exclusive
console.log(subject1.slice(3));
// what if we want to extract text from end
console.log(string.slice(-5));

//substr(startIndex, lenght)// start index is inclusive
console.log(string.substr(3,6));

//substring
console.log(string.substring(2,6));
console.log(string.substring(-5));

let subjectName2='      JavaScript       ';
console.log(subjectName2.trim());
console.log(subjectName2.trimEnd());

//!TASK 
//remove extra space in the middel
let subject="        Java              Script";
console.log(subject);
console.log(subject.replaceAll(/\s/g,' '));