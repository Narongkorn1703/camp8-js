// var firstName = 'Wissanu';

// let lastName;
// const age = 27;
// age = 37;

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// var firstName;
// console.log(firstName);
// firstName = 'Wissanu';

// console.log(firstName);
// var firstName = 'Wissanu';
// // let lastName = 'KonjunD';
// // console.log(firstName);

// {
//   var firstName = 'Wissanu';
//   let lastName = 'KonjunD';
// }
// console.log(firstName)
// console.log(lastName)

// const my_home = '119';
// const myhome = '120';
// const MYHOME = '121';

// const myHome = '122';

// let human, name;
// name = 'Earth';
// human = name;
// alert(human);

// const age = 27;
// const Age = 37;

// console.log(age);
// console.log(Age);

// const firstName = 'Wissanu'
// const lastName = "KonjunD";
// const nickname = `Tle`;

// const fullname = `${firstName} ${lastName}`;

// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);
// console.log('${firstName} ${lastName}');

// const a = true;
// const b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// let user = null;

// console.log(typeof null);
// console.log(typeof(fullname));
// let price = 10;
// let quantity = 15;
// const total = price * quantity;

// console.log(total)
// console.log(`${price * quantity} Baht`)
// console.log(price * quantity)

// const name = 'Earth';
// const age = 27;
// const address = '188 Mint Tower';

// console.log(`My name is ${name}. I'm ${age} years old. I live at ${address}.`)

// const a = String(undefined); // 'undefined'
// const b = String(null); // 'null'
// const c = String(true); // 'true'

// const d = '' + age;
// const e = `${age}`;
// const f = age.toString();
// const g = JSON.stringify(age)

// console.log(a, b, c, typeof a, typeof b, typeof c);

// const value = '250';
// console.log(Number(value), typeof Number(value));
// const  str = '100';
// const a = Number(str);
// const b = +str;
// const c = str * 1;

// console.log(Number(undefined))
// console.log(Number(null));
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number('  2 0 0   '))

// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean('   '));
// console.log(Boolean('0'));

// console.log('1'+4+7);
// console.log(1+4+'7');

// let age = prompt('Enter your age');
// alert(typeof age);

// const numPen = 1000;
// let increasePen = +prompt('Enter your new pen');

// const newNumPen = numPen + increasePen*1;
// const newNumPen = numPen + +increasePen;
// const newNumPen = numPen + Number(increasePen);

// console.log(21 % 5);
// console.log(11 ** '2');

// console.log(0.2 + 0.1)
// console.log(0.2 + 0.5)

// let i = 0;
// i = i+1;

// i++;
// i += 5;
// i--;

// let j = 10;
// j += 6; // j = j + 6; 16
// j -= 2; // j = j - 2; 14
// j *= 3; // j = j * 3; 42
// console.log(j);

// let i = 0;
// const x = i++; // x = 0, i = 1
// const y = ++i; // y = 2, i = 2

// let a = 1; // a = 1
// let b = 2; // b = 2
// let c = a++; // c = 1 a = 2
// let d = ++c; // d = 2 c = 2
// let e = ++d // d = 3; 3 
// + d++ // d = 4; 3 + 3
// + d; // d = 4; 3 + 3 + 4

// console.log('A' < 'Z'); // true
// console.log('A' < 'a'); // true
// console.log('coco' < 'code'); // true
// console.log('10' < '2'); // true
// console.log('Be' < 'Bee'); // true

// console.log('3' < 5); // true
// console.log('01' == 1); // true

// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// const x = 10;

// if (x > 5) {
//   console.log('Is Greater');
// }

// const age = prompt('Enter your age');

// if (age > 18) { // ('15' > 18) => (15 > 18) ?
//   console.log('More than 18');
// } else {
//   console.log('Less than 18');
// }

// สร้าง prompt รับ ปีเกิด ถ้า อายุ มากกว่า 20 alert('More than 20') น้อยกว่าหรือเท่ากับ 20
// alert('Less than or equal 20)

// const birthYear = prompt('Enter your birth year'); // '1991'

// const age = 2021 - birthYear; // 2021 - '1991' => 30
// if (age > 20) {
//   alert(`Age: ${age}, More than 20`)
// } else if (age === 20) {
//   alert(`Age: ${age}, you're 20`) 
// } else {
//   alert(`Age: ${age}, Less than 20`)
// }
// let message;
// if (age < 18) {
//   message = 'Unauthorized';
// } else {
//   message = 'Go go go';
// }

// let message = age < 18 ? 'Unauthorized' : 'Go go go';

// let message = age > 20 ? 'More than 20' : age === 20 ? 'you\'re 20' : 'Less than 20'

// const score = prompt('Enter your score');

// if (score >= 80) {
//   alert('A');  
// } else if (score >= 70) {
//   alert('B');
// } else if (score >= 60) {
//   alert('C');
// } else if (score >= 50) {
//   alert('D');
// } else {
//   alert('F');
// }

// if (!score) alert('You don\'t enter score');
// else if (score > 100 || score < 0) alert('Score must less than or equal 100 and greater than 0');
// else if (score >= 80) alert('A');
// else if (score >= 70) alert('B');
// else if (score >= 60) alert('C');
// else if (score >= 50) alert('D');
// else alert('F');

// const x = 1;
// const y = 'undefined';
// const z = 55;
// const isXGreaterThanY = x > y;

// const w = x || y || z; // w = z = 55
// const a = x && y && z; // a = 55

// (x===1) && alert('true');


// function max(a, b) {
  
//   // return a>b ? a : b;
// }
  
// const isMax = max(5, 7);
// console.log(isMax)
  
// const username = prompt('Enter your username');
// const isFilled = !!username; Boolean(username)

// alert( alert(1) && alert(2) );

// 1 alert(1) => alert(undefined && alert(2))
// 2 alert(undefined)

// let username = prompt('Enter username');

// while (username === '') {
//   alert('กรุณากรอก username')
//   username = prompt('Enter username');
// }

// if (username) {
//   if (username === 'Admin') {    
//     if (prompt('Enter password') === 'codecamp#8') {
//       alert('ยินดีต้อนรับ')
//     } else {
//       alert('Wrong password')
//     }
//   } else {
//     alert('ผมไม่รู้จักคุณ')
//   }
// } else {
//   alert('ยกเลิก')
// }

// let i = 11;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 11;

// do {
//   console.log(j);
//   j++;
// } while (j <= 10)

// for (begin;condition;step) {
//   body
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// iteration 1 ; i = 1 check i <= 10 => true execute code in body
// log 1 => i = 2

// iteration 2 ; i = 2 check i <= 10 ? => true execute code in body
// log 2 ; increase i by 1 => i = 3

// .
// .
// .

// iteration 10; i = 10 check i <= 10 ? => true execute code in body
// log 10 ; increase i by 1 => i = 11

// iteration 11; i = 11 check i <= 10 ? => fales not execute code in body
// end for loop
// let i = 1;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i)
//   console.log()
// }

// alert(i)

// let i = 0;
// while (i++ < 5) alert( i );

// #1 check i++<5 => check 0<5 => i = 1; alert(i) => alert 1
// #2 check i++<5 => check 1<5 => i = 2; alert(i) => alert 2
// #3 check i++<5 => check 2<5 => i = 3; alert(i) => alert 3
// #4 check i++<5 => check 3<5 => i = 4; alert(i) => alert 4
// #5 check i++<5 => check 4<5 => i = 5; alert(i) => alert 5
// #6 check i++<5 => check 5<5 => i = 6; end loop

// let i = 0;
// while (++i < 5) alert( i );
// #1 check ++i<5 => check 1<5 => i = 1; alert(i) => alert 1
// #2 check ++i<5 => check 2<5 => i = 2; alert(i) => alert 2
// #3 check ++i<5 => check 3<5 => i = 3; alert(i) => alert 3
// #4 check ++i<5 => check 4<5 => i = 4; alert(i) => alert 4
// #5 check ++i<5 => check 5<5 => i = 5; end loop

// let answer;

// while (1) {
//   const answer = prompt('Enter correct number'); // 20
//   if (guestNumber > 100 || guestNumber < 0) {
//     alert('Invalid number');
//     continue;
//   }
//   break;
// }

// while (1) {
//   const guestNumber = prompt('Enter your number'); // 101
  
//   if (guestNumber > 100 || guestNumber < 0) {
//     alert('Invalid number');
//     continue;
//   }

//   if (guestNumber === answer) {
//     alert('Correct')
//     break;
//   }
  
//   guestNumber > answer ? alert('มากไป') : alert('น้อยไป')

  // if (guestNumber > answer) {
  //   alert('มากไป');
  //   continue;
  // }
  
  // if (guestNumber < answer) {
  //   alert('น้อยไป');   
  // }  
// }
// const strToConvert = '20';
// Number(strToConvert)
// +strToConvert
// strToConvert*1

// const answer = +prompt('Enter correct number');
// let guestNumber = +prompt('Enter your number');

// while (answer !== guestNumber) {
//   guestNumber = +prompt('Enter your number');
//   if (guestNumber > answer) {
//     alert('ค่ามันมากไปนะ')
//   } else {
//     alert('ค่ามันน้อยไปนะ')
//   }
// }

// alert('Correct')

// let a = 2;

// switch(a) {
//   case 1:
//     alert(1)
//     break;
//   case 2:
//     alert(2)
//     break;
//   case 3:
//     alert(3)
//     break;
//   case 4:
//     alert(4)
//     break;
//   default:
//     alert('Other')
// }

// if (a === 1) {
//   alert(1)
// } else if (a ===2) {
//   alert(2)
// } else {
//   alert('Other')
// }

// const word = prompt('Enter anything'); // '1'

// switch(word) {
//   case 'apple':    
//   case 'orange':
//     alert('fruit')
//     break;
//   case 'dog':    
//   case 'cat':
//     alert('animal')
//     break;
//   default:
//     alert('Not categorized')
// }

// if (word === 'apple') {
//   alert ('fruit');
// } else if (word==='orange') {
//   alert('fruit')
// } else if (word==='cat') {
//   alert('animal')
// }else if (word==='dog') {
//   alert('animal')
// } else {
//   alert('Not categorized')
// }

// function calcCircleArea

// const radius1 = 10;
// const radius2 = 5;
// const radius3 = 20;

// const area1 = 3.141728 * radius1 ** 2;
// const area2 = 3.141728 * radius2 ** 2;
// const area3 = 3.141728 * radius3 ** 2;

// function calculateCircleArea(radius) { // radius = 10
//   if (Number(radius)) {
//     if (Number(radius) > 0) {
//       return 3.141728 * radius ** 2
//     } else {
//       return 'Raduis must greater than zero';
//     }
//   }

//   return 'Radius must be numeric';
//   // function body
// }

// function showTextInconsole(name) { //name = 'Beer'
//   console.log(`Hello ${name}`) // (2)
  // return 'Hello World From Return' // (3)
// }

// const result = showTextInconsole('Sun'); // (1) (3) return undefined => result 
// console.log(result) // (4)

// let value = 20;

// function testValueScope(sendValue) {
//   const newSend = sendValue; 
//   newSend = 30;
//   console.log('481' + newSend);
// }

// console.log('484'+value);
// testValueScope()
// console.log('486'+value);

// function testValue2() {
//   value = 26;
// }

// value = 15

// console.log('line 484 : ' + value); // value #477
// testValueScope(value) // value #477 => sendValue = 20
// console.log('line 486 : ' + value); // value #477

// function min(a, b) {
//   let result;
//   if (a > b) {
//     result = b;
//   } else {
//     result = a;
//   }
//   return result;
// }

// min(); // a = undefined, b=undefined return undefined
// min(1); // a=1, b=undefined
// min(1,5); // a = 1, b = 5

// const minVal = min(1,5);

// เขียนฟังก์ชันคำนวณ พื้นที่สี่เหลี่ยม ด้านกว้าง (w) ด้านยาว (L)
// W = 2, L = 6

// function alertName(name = 'Guest') {
//   alert(`Hello ${name}`);
// }

// function alertName(name) {
//   let showAlertMessage = name || 'Guest';  
//   alert(`Hello ${showAlertMessage}`)
// }

// alertName('Tle')
// alertName();

function draw(n) {
  let star = '';
  // for (let i = 1; i <= n; i++) {
  //   star = star + '*';
  // }
  // #1 i=1; 1<=4; star=''+'*' => '*'; i++ => 2
  // #2 i=2; 2<=4; star='*'+'*' => '**'; i++ => 3
  // #3 i=3; 3<=4; star='**'+'*' => '***'; i++ => 4
  // #4 i=4; 4<=4; star='***'+'*' => '****'; i++ => 5  
  
  for(let i=1;i<=n;i++) {
    for(let j=1;j<=n;j++) {
      star = star + j;
    }
    star = star + '\n';
  }

  // #1 j=1;i=1; star = '' + '*' => '*'
  // #2 j=2;i=1; star = '*' + '*' => '**'
  // #3 j=3;i=1; star = '**' + '*' => '***'
  // End Inner Loop star = '***' + '\n' => '***\n'
  // #4 j=1;i=2; star = '***\n' + '*' => '***\n*'
  // #5 j=2;i=2; star = '***\n*' + '*' => '***\n**'
  // #6 j=3;i=2; star = '***\n**' + '*' => '***\n***'
  // End Inner Loop star = '***\n***' + '\n' => '***\n***\n'
  // #7 j=1;i=3; star = '***\n***\n' + '*' => '***\n***\n*'
  // #8 j=2;i=3; star = '***\n***\n*' + '*' => '***\n***\n**'
  // #9 j=3;i=3; star = '***\n***\n**' + '*' => '***\n***\n***'
  // End Inner Loop star = '***\n***\n***' + '\n' => '***\n***\n***\n'

  console.log(star) 
}

draw(4) 