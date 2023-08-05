const Hello = (a , b) =>
{
    return a+b;
}

console.log(Hello(1,2));

const A =( a,b) => {
  return a+b
}
console.log(A(3,4));

function Login(username, pass){


    console.log(`${username}, Login Successfully`);
}
Login('John');

const login = (username) =>
{
    console.log(`${username}, Login Successfully`);
}
login('waseem');

//immediatetly invoked function expression

(function ()
{
    console.log("Immediate invoked");

}) ();

//Arrow 

const Log=() => {
    console.log("Login by Arrow");
}
Log();

//Call Back