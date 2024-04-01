//<----------BLOCK------------>
/*------------->>
// USE CASE: Block used where js expects just one statement at a time 
{ 
    //Compound Statement (Block is used to combine multiple js statement into one group)
    var a =10
    console.log(a);
}
//  if(true) Uncaught SyntaxError: Unexpected end of input (at index.js:10:1) --> Without valid statemet for if
//  if(true) true; single js statement

// Multiple statemet inside a block where js is expects only a single block.
if(true) {
    var b =20;
    console.log(b);
}

---------------->>*/
/*---------------------------------------------------------------------------------------------*/

//<---------BLOCK SCOPE------------>

// What are all the variables and functions we can access inside a block are called as block scope

// let var const inside block
/*------------->>
{
    var i = 10;
 let and const are block scoped as they are store in a seperate memory that are reserved for this block (refrence image 1.2)
    let j =20; 
    const k =30;
    // ---inside the block scope---
    console.log(i); 
    console.log(j);
    console.log(k);
}
// ---outside the block scope---
console.log(i); //--> var can be access in and out of the block scope because it is hoisted globally

 Variables using let and const can be accessed only inside the block but cannot acces from outside the block scope throws error: index.js:38 Uncaught ReferenceError: j is not defined 
console.log(j);
console.log(k);
---------------->>*/

/*---------------------------------------------------------------------------------------------*/
/*------------->>
//<---------SHADOWING------------>

  var x =100;          //--->   The global x is shadowed by the x which is inside the block scope in case of var because they points to the same memory location
  let y =20;          //-->  "Stored in Script in a seperate memory". In case if the variable which is in let has stored in Script memory  which is outside the block scope 
  const z=30;        //-->similar to let

  function s(){ //--> shadowing is similar also when we use a function
    var x=200;
    let y=300;  //--> y is stored inside the block memory 
    const z=400;
    console.log(x);  //--> displayes the shadowed value which is inside the block
    console.log(y);  //-->Shadowed by the value which is inside of the block scope with different memory location
    console.log(z);  //--> In case of const it is very similar to let
  }
  s();
console.log(x);  //-->Again displayes the shadowed value which is inside the block
console.log(y);  //--> The is value of y is printed which is outside of the scope i.e, which is placed in sperate memory i.e, the Script and it shadowed the value which is inside the scope
console.log(z);  //--> similar to let
                                          

//<---------ILLEGAL SHADOWING------------>
/*------------->>
Example 1: // We cannot shadow a let using a var and all the conditions related to let are also applicable to const
let a=10;
{
    var a=20; index.js:69 Uncaught SyntaxError: Identifier 'a' has already been declared (at index.js:69:9)  --> Reasons: var is a function scope it should be inside the boundary
}
Example1.2:// Insted we can use function 
// let a =10;
// function x(){ -> Now the var inside the function scope will not interfere the values outside the functional scope 
//     var a=20;
// }


//Insted  We cannot shadow a var using a let
var a=10;
{
    let a=20; 
    console.log(a);
}
console.log(a);

    ------------->>*/

//<---------LEXICAL SCOPE------------>
//Lexical means one scope inside another scope
// Each and every block has its own lexical scope and allocates memory accordingly in sperate block
/*------------->>
const a =10 //--> Memory allocated in the script block
{
    const a=20;
    {
            const a=30;
            console.log(a); //  Prints the nearest a within the block i.e, a=30;
    }
    console.log(a); //Prints a=20
}
console.log(a); //Prints a=10
                 ------------->>*/

                 
// ---**NOTE**---
//All the scope rules which are applicable to the normal function are also applicable to the arrow function i.e., function a(){scope rules}  ==  var a() = () =>{scope rules}


