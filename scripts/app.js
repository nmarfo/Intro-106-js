/**
 *
 * Creat a hello function
 * the print your name on the concole'
 * call the function init
 *
 *
 */
function hello() {
  console.log("Nana Marfo");
}

function sum(a, b) {
  // this function sums two numbers which is represented by a and b.
  console.log(a + b);
  return a + b;
}
function exec1() {
  //Print numbers from  0 to 20
  //except 7
  for (let i = 0; i < 21; i++) {
    if (i != 7 && i != 13) {
      // i not 7 or 13
      console.log(i);
    }
    let name = "";
    //show an error if name if empty
    if (!name) {
      console.error(" Name id required");
    }
  }
}
function sayHello(name) {
  let lastName = "Marfo";
  console.log("Hello " + name + " " + lastName + "!!");
}
function exec2() {
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];

  // A - print every number in the array
  //B - sum all the numbers and the results
  //C - print every negative
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
    total = total + number;

    if (number < 0) {
      console.log("Is negative", number);
    }

    //add every number to the total
    total = total + numbers[i];
  }
  //print total
  console.log(total);
}

function init() {
  console.log("Introduction");

  hello();

  let myName = "Asiedu";
  sayHello(myName);

  let res = sum(23, 24); // console log 47
  console.log(res);

  exec1();
  exec2();
}

window.onload = init;
