// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// Union | (OR)

// Using the | we are saying our parameter is a string or number:


// let x = string | number;

// x = 10;

// x = true;


// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:


// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'
// }



// function combine(n1:number | string, n2:number | string){
//   // return n1 + n2                            //will show error
//   let result;
//   if(typeof n1 === 'number' && typeof n2 === 'number'){
//     result = n1 + n2;
//   }else{
//     result = n1.toString() + n2.toString();
//   }
//   return result
// }
// console.log(combine(10,"10"));      //1010
// console.log(combine(20,30));        //30

// now .. n1==number, n2==number  so result == number >>  we want to chage the type in to string and viceversa
//1010 of string >> number
//30 of number >> string





// string Literal
// resultConversion >> 'as-number' or 'as-string
//  function combine(n1: number | string, n2:number | string, resultConversion:'as-number' | 'as-string'){
//   let result;
//   if(typeof n1 === "number" && typeof n2 === "number"){
//     result = n1 + n2;
//   }else{
//     result = n1.toString() + n2.toString()
//   }
//   if(resultConversion === 'as-number'){
//     result = +result;
//   }else{
//     result = result.toString()
//   }
//   return result;
//  }

// console.log(combine(10,"10",'as-number'));      //1010 >> number
// console.log(combine(20,30, 'as-string'));        //30 >> string


//this is called literal data type and the exampl,e s of union of literal data tyep

// instade of usung every time string | number we can create type like as follow
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';
function combine(n1: Combinable, n2:Combinable, resultConversion:ConversionDescriptor){
  let result;
  if(typeof n1 === "number" && typeof n2 === "number"){
    result = n1 + n2;
  }else{
    result = n1.toString() + n2.toString()
  }
  if(resultConversion === 'as-number'){
    result = +result;
  }else{
    result = result.toString()
  }
  return result;
 }

console.log(combine(10,"10",'as-number'));      //1010 >> number
console.log(combine(20,30, 'as-string'));        //30 >> string