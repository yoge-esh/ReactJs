let score = 0;
const startGame = (e) => {
    score++;
    document.getElementById("score").innerHTML = score;
}


// global variable(scope) 
var name = 'react is good for frontend';
if (name)
{
  // local scope
  // var can change global value too 
  var name = 'react is good for backend too';
  console.log('local scope: ', name)
}
console.log('global scope: ', name)


// global variable / scope
let topic = 'ReactJs';
if (topic){
  // local variable / scope 
  // let doesnot allow to change the value globally,
  let topic = 'React';
  console.log('local: ', topic);
}
console.log('global: ', topic)


// const: it's variabe cant e change but its regrence can be modified 
const obj = {name : 'yogesh'}
obj.name = 'mahesh';
console.log(obj);

// // const: refrence is not allowe ro modified 
const demo = object.freeze({name: 'yogesh'});
deom.name = 'mahesh';
console.log(demo);


// asyncronic function 
function f1()
{
  console.log('f1');
}
function f2()
{
  console.log('f2');
}
function main()
{
  console.log('main');

  setTimeout(f1(), 0); // it act as a syncronous function 

  f2();
}
main()


// asynchronous function 
const f1 =() =>
{
    console.log('hello')
}
const f2 =() =>
{
    console.log('yogesh')
}
const f3 =() =>
{
    console.log('is')
}

// calling of asynchronous function 
f1();
setTimeout(() => {
    f2();
}, 3000);
f3()


// synchronous :- line by line execution, it block the code because js is single threated language... and to not a block we use asyncronic function
console.log('hello')
console.log('this is ')
console.log('React Developer')

// var declarations are globally scopes 
// let and const are block scope
// var variables can be update and re declare within the scope
// let variable can update but not redeclare 
// const variables can nither be updates nor re-declare

// example of let 
let x = "John Doe";
let x = 0;

// SyntaxError: 'x' has already been declared

// example of var 
var x = "John Doe";
var x = 0;

// example of const
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error 
