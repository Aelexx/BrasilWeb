/*
//1. DAY
var a = 2;
var b = 3;
const c = 'guy';
console.log(c.toUpperCase());
console.log(c.length);
const d = new String('Alex Matio');
const e = new String('3 + 3');
const f = '3 + 3';

console.log(a + b + ' ' + c + ' ' + d);
console.log(typeof d);
console.log(typeof c);
console.log(eval(e));
console.log(eval(f));
console.log(c[0]);
console.log(c[0] + 1);

//array
const os = ['windows', 'ios', 'Linux'];
console.log(os);
console.log(os[0]);

//function
function Mfunction(g, h) {
  return g * h * 12;
}
Mfunction(8, 9);

//JQuery
$(function () {
  $('#pHide').click(function () {
    $(this).hide();
  });
});
$(function () {
  //shorthand string of code
  $('#pJS').mouseover(function () {
    $(this).hide();
  });
});
$(function () {
  $('#pHide1').dblclick(function () {
    $(this).hide(1000);
  });
});
$(function () {
  $('#pHide2').mouseenter(function () {
    $(this).hide(2000);
  });
});
$(function () {
  $('#pHide3').mouseleave(function () {
    $(this).hide(3000);
  });
});
$(function () {
  $('#btnToggle').click(function () {
    $('#pToggle').toggle();
  });
});
$(function () {
  $('#btnFadeIn').click(function () {
    $('#dred').fadeTo(5000, 0.65);
    $('#dyellow').fadeIn(2000);
    $('#dpink').fadeIn(3000);
  });
});

//2. DAY
//If statment with HTML tags displaying
let h = 10;
if (new Date().getHours() < 14) {
  document.getElementById('pIf').innerHTML = 'Okay!';
}

//If variation:
//1. Pos/Neg num; 2. Even/Odd; 3. Division without remainder


//If variation 5. Perfect num;

const add = (a, b) => a + b;
console.log(add(5));

//7 primitives of JS
console.log(Boolean(Number));
console.log(Boolean(String));
console.log(Boolean(Boolean));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Symbol));
console.log(Boolean(BigInt));

//Quick way change string into number
const aa = '135';
const bb = +aa;
console.log(typeof aa);
console.log(typeof bb);

//Arrays
const nums = [1, 2, 3, 29, 123, 4, 7, 12];
const numss = (11, 22, 3, 29, 12); //List
const letters = ['a', 'd', 'j', 'x', 'e'];
console.log(nums.sort()); //for string only
console.log(letters.sort());
console.log(nums.length);
console.log(nums[0]);
console.log(nums.join());
console.log(letters.join(''));

letters.shift(); //pop last, shift first popped out
document.getElementById('pAr').innerHTML = letters;

nums.push(11);
document.getElementById('pAr1').innerHTML = nums;

console.log(nums.indexOf(2) + 1); //coz instead starts with 0
console.log(letters.includes('d'));
console.log(letters.reverse());

console.log(Math.max(10, 20, 31, 2));
console.log(Math.max(numss));

//ForEach in Array due HTML
let txt = '';
const foreach = [7, 2, 3];
foreach.forEach(mFunc);
document.getElementById('pForEach').innerHTML = txt;

function mFunc(value, index, array) {
  txt += value + '<br>';
}

//3. DAY
//Array prototype forEach
foreach.forEach((element) => console.log(element));

console.log(Array.isArray([1, 2, 3]));

//1. Make string from array
const ar = ['1', '2', '3', '4', '5'];
console.log(ar.toString());

//2. Sort array
const ra = [-5, 6, 1, -7, 34, 2];
console.log(ra.sort());

//3. Reverse
const rra = [1, 2, 3, 5];
console.log(rra.reverse());

//Strings simple operations
const str = 'The quick brown fox jumps over the lazy dog'; //pangram
console.log(str.length);
console.log(str.slice(23, 35));

//Count the words and spaces
const words = (str) => str.trim().split(/\s+/).length; //use regexp
const lenwords = str.length;
console.log(words(str));
console.log(lenwords);
console.log(words(str) - 1);

//Replace letters
console.log(str.replace('q', 'a'));

//String reverse
function revers(str) {
  return str.split('').reverse().join('');
}
console.log(revers(str));

//Slice string
console.log(str.slice(0, 3) + ' ' + str.slice(16, 19));

//Object
const book = {
  author: 'John',
  title: 'ABC',
  authorTitle: function () {
    return this.author + this.title;
  },
  ID: 123,
  pages: 244,
  genre: 'romance',
  greet: function () {
    console.log(`Hello ${this.author} it's me!`);
  },
};
book.age = 85;
book.rate = 10;
console.log(book);
console.log(book.title);
book.greet();

//Arrow func
let qiwi = (t, d) => t + d;
document.getElementById('arrowFunc').innerHTML = qiwi(1, 2);

//4. Day
//Callback func synch and high order func
function operation(value, callback) {
  const res = value + 3;
  console.log(`Here result = ${res}`);
  callback(res); //parameter saves value of another parameter
}

function result(data) {
  console.log(`Call = ${data}`);
}
operation(12, result); //"result" here invoke callback in operation func parameter -> parameter safes "res"

//Object prototype
const u = {};
console.log(u.toString()); //No error here, coz we found it in prototype

const uu = Object.create(null);
//console.log(uu.toString()); //not a func error

//Listeners
document.getElementById('btnListener').addEventListener('click', showDate);
function showDate() {
  document.getElementById('pListener').innerHTML = Date();
}

//Class and constructor
class Man {
  constructor(name, IDnum) {
    this.name = name;
    this.IDnum = IDnum;
  }
  introduce() {
    console.log(`Hey bro ${this.name} your ID is ${this.IDnum}`);
  }
}
const alex = new Man('Alex', 123);
alex.introduce();

//Asyn call function
function asyn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Got it!');
    }, 2000);
  });
}
async function asyncall() {
  console.log('Eve ma Call!');
  const resa = await asyn();
  console.log(resa);
}
asyncall();
*/
//T A S K
//1. Min and max element in array
const nums = [1, 5, 6, 2, 3];
const maxEl = Math.max(...nums);
console.log(maxEl);
const minEl = Math.min(...nums);
console.log(minEl);
const numsMore = [...nums, 7, 7, 7];
console.log(numsMore);

//2. For array shows
const numbers = [1, 5, 12, 12312, 2];
for (const i of numbers) {
  console.log(i);
}

//3. Sum numbers of array
const numbe = [2, 7, 88];
let sum = 0;
for (let i = 0; i < numbe.length; i++) {
  sum += numbe[i];
}
console.log(sum);

//4. Simple number
function simpleNum(x) {
  for (let i = 2; i <= x; i++) {
    if (x % 2 > 0) {
      console.log('OK! Simple num');
    }
    if (x == 2) {
      console.log('2 is most o small simple number');
    }
  }
}
simpleNum(3);

//5. All divisors of num and its sum;
function sumDivisors(k) {
  if (k <= 0) {
    console.log('This number have not divisors!');
  }
  let sum = 0;
  for (let i = 1; i < k; i++) {
    if (k % i == 0) {
      sum += i;
      console.log(i);
    }
  }
  return sum;
}
console.log(sumDivisors(28));

//6. Positive and odds/even numbers easiest ever task

//7. Take the args and back result
function sumfunc(g, h) {
  return g * h;
}
const ress = sumfunc(8, 9);
console.log(ress);

//8. Function scoping
function myName() {
  var name = 'Alex';
  function scope() {
    console.log(name);
  }
  scope();
}
myName();

//9. Recursion = Factorial
function factorial(m) {
  if (m === 0 || m === 1) {
    return 1;
  } else {
    return m * factorial(m - 1);
  }
}
const result = factorial(10);
console.log(result);

//10. Reverse string
var str = 'One or two';
function revers(str) {
  return str.split('').reverse().join('');
}
console.log(str);
console.log(revers(str));

//11. Reverse array
var arr = [2, 4, 5];
function rever(arr) {
  return arr.reverse();
}
console.log(rever(arr));

//12. Step of arr
function ars() {
  for (let j = 1; j < 100; j + 2) {
    console.log(j);
  }
}
console.log(ars());
