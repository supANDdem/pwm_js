console.log("Hello, World!");

// this is a comment in js

// variables
console.log("varibles in JS");
let this_is_varibles = "i am variable";
console.log(this_is_varibles);

console.log("Data types in JS");
let this_is_string = "I am string";
let this_is_number = 36;
let this_is_boolean = true;
let this_is_undefined = undefined;
let this_is_null = null;
console.log("The primitive types are:");
console.log(this_is_string);
console.log("I am a " + this_is_number);
console.log("I am a " + this_is_boolean);
console.log("I am an " + this_is_undefined);
console.log("I am a " + this_is_null);

console.log("Reference types are:")
console.log("First is object");
const akainu = {
  group: "Marines",
  title: "Fleet Admiral",
  powers: "Devil Fruit",
};
console.log(akainu);
console.log("one of the key of akainu object is " + 
            akainu["title"] + ".");

console.log("Second is an array");
let marines = [
  "Akainu", "Grap", "Sengoku",
];
console.log(marines);
console.log("The hero of the marines is " + marines[1] + ".");
console.log("Newely appointed admirals is are:");
marines[3] = "Fujitora";
marines[4] = "Greenbull";
console.log("The updated marines array is " + marines);

console.log("Third is a function");
function wish_happy_birthday() {
  console.log("I am function, wishing happy birthday to you");
}
wish_happy_birthday();

function guess_name_and_power(name, power){
  let answer = "My name is " + name + " and, " + "my power is " + power;
  return answer;
}

let function_answer = guess_name_and_power("shanks", "Haki");
console.log(function_answer);











