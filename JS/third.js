// What is Coersion -- type of conversion happen automatically - ('4'/2);
//How to convert String/Boolean to Number, number to string and boolean?
//String(), Number(), Boolean()

// Loop
//for, while, do while
/*
loop over a code for set number of time
syntax
for(initialization;condition;final expression)
{
    statement
}
While loop
While(condition)
{
statement
}

do while loop
do{
    statement
}
while(condition)
*/

for(let i=0; i<=10;i++)
{
console.log(i);
}

//While
let i=1;
while(i<1)
{
    console.log(i);
    i++;
}

// Do While loop
do{
    console.log(i);
    i++;
}
while(i<1)

//!TASK
/*
have a variable stores string value and then 
check if a string is a palindrome or not.
Mom-mom
java-avaj
*/

function checkPalindrome(value)
{
let min=0;
let max=value.length-1;
let value1=value.toLowerCase();
while(max>=0)
{
    if(value1[max]==value1[min])
    {
        min++;
        max--;
    }
    else{
        return `${value} is not palindrom word`;;
    }
}
return `${value} is palindrom word`;
}
console.log(checkPalindrome("Mom"));
//!TASK
/*
Write a JS code to print a pattern using for loop
   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8
*/

let value=7;
for(let i=0;i<=value; i++)
{
    let pattern="";
    for(let j=1; j<=i; j++)
    {
        pattern+=j+" ";
    }
    console.log(pattern);
}

// for loop
// for in -- for of

let person={
    firstName:"Zak",
    lastName:"Pardis",
    age:25
};

for(let i in person)
{
    console.log(`${i}: ${person[i]}`);
}
let subjectName=`JavaScript`;
for (let i in subjectName)
console.log(subjectName[i]);

//!TASK
/*
let numbers=[10,4,30,48,209,48];
display the highest value of array
*/
let numbers=[10,4,30,48,209,48];
let maxValue=numbers[0];
for(let i=0; i<numbers.length;i++)
{
if(numbers[i]>maxValue)
maxValue=numbers[i];
}
console.log(maxValue);