"use strict"
// const callback = function () {

// };

// const every = function (array, call) {

// };

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)




const callbackFN = function (zaebal) {
    console.log(zaebal+10);
};

const tipoFN = function (callback) {
    const a = 5;
    callback(a)
};

tipoFN(callbackFN);


// // == task-3 == //
// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

// const compact = function (arr, callback) {
//     const totalArr = [];
//  for (let elem of arr) {
//      let checkedElem = elem ? totalArr.push(elem) : ``;
//  }
//  console.log(totalArr);
// };

// compact([1,0,'', null, 'Hello']) // [1,'Hello']



// const some = function (arr, callback) {
//     for (let elem of arr) {
//         if (elem > 10){
//             return callback(true)
//             break
//         } else {
//             return callback(false)
//         }
//       }      
// };
// function callback(elem) {
//    console.log(elem);
// }

// some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
// some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)

// // == task-1 == //
// Написати метод every який приймає масив і ф-ю callback
//(в якій ми будемо робити різні перевірки) Цей метод повертає true якщо
//кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один
//елемент не проходить перевірку то повертає false, callback приймає елемент масиву

// const every = function (arr, callback) {
//   console.log(callback(arr));
// }
// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// // every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)
// function callback(pizza) {
//   for (let elem of pizza) {
//     if (elem < 10) {
//       continue;
//     } else {
//       return false;
//     }
//   } return true
// }




// const every = function (arr, callback) {
//   let total = 0;
//   for (let obj of arr) {
//     obj < 10 ? (total += 1) : ``;
//   }
//   total == arr.length ? callback(true) : callback(false);
// };
// const callback = function (tern) {
//   console.log(tern);
// };

// every([1, 2, 3, 4, 5], callback); // true (перевіряємо чи елементи < 10)
// every([2, 45, 67, 34], callback); // false (перевіряємо чи елементи > 10)

// const chooseDish = function (callback) {
//     let dish = `Pizza`;
//     callback(dish);
// };

// const showDish = function (dish) {
//     console.log(dish);
// };
// chooseDish(showDish);

// for (let user of users) {
//     console.log(user);
// }

// let users = [`vova`, `sara`, `lena`];
// function updateUser(user) {
//     console.log(user.toUpperCase());
// }

// users.forEach(updateUser);

// let counter = function() {
//     let count = 0;
//     const onIncrement = function(n) {
//         count+=n;
//         console.log(count);
//     }
//     const onDecrement = function(n) {
//         count-=n;
//         console.log(count);
//     }
//     return {onIncrement, onDecrement}
// }

// let counter1 = counter();

// counter1.onIncrement(5);
// counter1.onIncrement(5);
// counter1.onIncrement(5);
// counter1.onIncrement(6);
// counter1.onDecrement(9);

// const filter = function(array, test) {
//     const employe = [];

//     for (let elem of array) {
//         const check = test(elem);
//         if (!check) {
//             employe.push(elem)
//         }
//     }
//     return employe;
// }

// const community = [
//     { name: `‘John’`, salary: 200, isActiveWorker: true },
//     { name: `‘Derek’`, salary: 150, isActiveWorker: false },
//     { name: `‘Anna’`, salary: 100, isActiveWorker: true },
//     { name: `‘Mariia’`, salary: 50, isActiveWorker: false },
//     { name: `‘Tony’`, salary: 100, isActiveWorker: true },
//   ];

//   const notFired = filter(community, worker => !worker.isActiveWorker && worker.salary > 100 );

//   console.log(notFired);

// const filter = function(array, test) {
//     const filteredElements = [];

//     for (const element of array) {
//       const passed = test(element);

//       if (passed) {
//         filteredElements.push(element);
//       }
//     }

//     return filteredElements;
//   };

//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas

//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithQuantity); // массив с объектами apples и grapes
//   const bananaFilter = filter(fruits, fruit => fruit.name == `bananas`);
//   console.log(bananaFilter);

// const printValue = function(value) {
//     console.log(value);
//   };

//   const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
//   };

//   const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };

//   repeat(3, printValue);
//   repeat(3, prettyPrint);

// const whileFN = function(n, str) {
//  for (let i = 1; i<=n; i += 1)
//  console.log(`${i} ${str}`);
// }

// whileFN(5,`Ramen at the sky`)

// const ticker = function (n, str) {
// for (let i = 0; i < n; i +=1) {
//     console.log(`${i} ${str}`);
// }
// };

// ticker(4,`Denis wanna pitsa`);

// ticker(5,`Valakas wanna pitsa`)

// const greeting = function (callback) {
// let name = `Valakas`;
// callback(name);
// };

// const sayHi = function (name) {
//     console.log(name);
// };
// greeting(sayHi)

// const setName = function (a) {
//     let name = `Valakas wanna pitsa`;
//     a(name)
// };

// const toDowithName = function (name) {
//     console.log(name);
// }

// setName(toDowithName)

//  ===============================================================================================

// function generateId() {
//   const randomNumber = Math.random();
//   return randomNumber.toString().slice(2);
// }
// const shop = {
//   name: "Shop #1",
//   address: "Kiev",
//   items: [
//     { id: "1", name: "bananes", price: 20, amount: 200, category: "fruits" },
//     { id: "2", name: "apples", price: 20, amount: 1, category: "fruits" },
//     {
//       id: "werwer2343",
//       name: "apples",
//       price: 20,
//       amount: 1,
//       category: "fruits",
//     },
//   ],
//   showItems() {
//       for (const key of shop.items) {
//         console.log(`(${key.id}) - ${key.name}: ${key.price}$, amount: ${key.amount}`);
//       }
//     // console.log(`(${id}) - ${name}: ${price}$, amount: ${amount}`);
//   },
//   addItem(name, price, amount, category) {
//     let a = { id: generateId(), name, price, amount, category };
//     return shop.items.push(a);
//     // console.log(shop.items);
//   },
//   removeItem(productName) {
//     for (let i of shop.items) {
//       let indexOfItem = shop.items.indexOf(i);
//     //   console.log(indexOfItem);
//       for (let key in i) {
//         if (i[key] == productName) {
//           return shop.items.splice(indexOfItem, 1)
//         }
//       }
//     }
//   },
//   updateItem(productName, newName) {
//     for (let i of shop.items) {
//       for (let key in i) {
//         if (i[key] === productName) {
//           return i[key] = newName;
//         }
//       }
//     }
//   },
// };

// shop.showItems();

// shop.updateItem("bananes", `питса`);
// console.log(shop.items);

// shop.addItem(`orange`, 15, 105, `fruits`);
// shop.removeItem("apples");
// console.log(shop.items);

//  ========================================================================================

// Есть массив уникальных чисел uniqueNumbers.
// Написать функцию, addUniqueNumbers(...),
// которая получает произвольное кол-во чисел как аргументы,
// и добавляет в массив uniqueNumbers только уникальные,
// а те которые в массиве уже есть игнорирует.

//   const uniqueNumbers = [8,6,5,1,265,8,84,84,56,65,11];
//   const addUniqueNumbers = function(...arr) {
//       for (let number of arr) {
//           if (!uniqueNumbers.includes(number)) {
//             uniqueNumbers.push(number);
//           }
//       }
//       return uniqueNumbers
//   };
//   console.log(addUniqueNumbers(11,11,5,5,7,8,9,3,2,4,6,2,1,56,9,8,4,1,5,8,9,5));

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// const str = `яблоко`;
// const arr = [`банан`, `яблоко`, `персик`];

//  const inArray = function(str, arr) {
//      for (let i of arr) {
//      const a = str == i ? true : false;
//      console.log(a);
//      }
//  }
//  inArray(str, arr);

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (...arr) => {
//     for (let num of arr) {
//         if (num > 0 && num < 10) {
//             console.log(num);
//         }
//     }
// };

// isNumberInRange(12,4,8,10,11,20,9);

// const getMeEven = (...args) => {

//     for (let num of args) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }
// }
// getMeEven(1,2,3,4,5,6,7,8,9);

// let arr = [
//     {a:1}, {a:2}, {a:3}
// ]

// let sum = 0;
// for(let el of arr) {
//     sum += el.a
// }
// console.log(sum);

// const abilities = {
//     ability: {
//         name: `liber`,
//         url: `dsgdsgdsggds`,
//         o: {
//             p:1
//         }
//     },
//     is_hidden: false,
//     slot: 1
// }

// const { ability: {name,url, o:{p}}, is_hidden, slot, pokemon = true} = abilities;
// console.log(url);

// const add = function(value, a, b, ...args) {
//     console.log(value);
//     console.log(args);
// }

// add(10,5,2,5,7,1)
// add(5,4)

// let obj1 = {
//     a: 1,
//     b: 2,
// }

// let obj2 = {
//     b:5,
//     c:7
// }

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// console.log(Object.entries(obj)[2][1])

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// let total = 0;
// for (let key in obj) {
//     console.log(`ключ- ${key}`);
//     console.log(`значение ключа ${key} : ${obj[key]}`);
//     total += obj[key];
// };
// console.log(total);

// const obj = {
//     defaultValue: 1,
//     add: function (n) {
//         return console.log( obj.defaultValue += n)
//     },
//     minus: function (n) {
//         return console.log( obj.defaultValue -= n)
//     },
//     multiply: function (n) {
//         return console.log( obj.defaultValue *= n)
//     },
//     divide: function (n) {
//         return console.log( obj.defaultValue /= n)
//     }
// }

// obj.add(5);
// obj.minus(5);
// obj.multiply(5);
// obj.divide(0);

// const testObj = {
//     test: 123,
// };
// console.log(testObj);
// // testObj.test = 'test';
// // console.log(testObj);
// // delete testObj.test;
// console.log(testObj.test);
// console.log(testObj['test']);

// obj.add();
// console.log(obj);
// obj.add();
// obj.add();
// console.log(obj);

// const VOWELS = `aeiouAEIOU`;

// const countVowels = function (string) {
//     // console.log(string);
//     let arr = string.split(``);
//     // console.log(arr);

//     // let a = [];   - через массив

//     let summOfVolwes = 0;
//     for (let latterOfString of arr) {
//         // console.log(latterOfString);
//         if (VOWELS.includes(latterOfString)) {
//             console.log(`OK, ${latterOfString}`);

//             summOfVolwes += 1;

//             // a.push(latterOfString); -   через массив

//             // console.log(a);
//         }
//     }
//     // return a.length -   через массив
//     return summOfVolwes
// }

// console.log(countVowels(`the quick brown fox`));

// const capitalize = function(newString) {
//     // return newString.toUpperCase();
//     let wordsMas = newString.split(` `);
//     let arr = [];
//     // console.log(wordsMas);
//     for (let word of wordsMas) {
//         // console.log(word);
//         // console.log(typeof word);
//         let wordToUpper = word[0].toUpperCase() + word.substring(1);
//         // console.log(wordToUpper);
//         arr.push(wordToUpper);
//     }
//     return arr.join(` `);
// }

// console.log(capitalize(`верни первую букву заглавной`));

// FUNCTION EXPRESSION

// const toShowName = function(firstName, secondName) {
//     console.log(`${firstName} ${secondName}`);
// }

// FUNCTON DECLARETION

// function toShowName(firstName, secondName) {
//     console.log(`${firstName} ${secondName}`);
// }

// ARROW FUNCTION

// const toShowName = (firsName, secndName) => console.log(`${firstName} ${secondName}`);
// toShowName(`Sasha`,`Volokh`);

// let result = 0;
// let avg = function (...args) {
//     // console.log(...args);
//     // console.log(args.length);
//     for(let i = 0; i<args.length; i += 1) {
//       result += args[i];
//     }
// //   console.log(result);
// //   console.log(result / args.length);
//   return Math.round(result / args.length)
// //   Math.round
// }

// console.log(avg(1,5,7,9));

// let result = "";
// const repeat = function (str,n) {
//     for(let i = 0; i<n ; i += 1) {
//         result +=str;
//     }
//     console.log(result);
// }

// repeat(`12`, 5)

// let result = ``;
// const add = function (str, n) {
//     for(let i = 0; i<n; i += 1) {
//         result += str;
//     }
//     console.log(result);
// }

// add(`o`, 3);

// const greating = function(name = `Guest`) {
// console.log(`Hello ${name}`);
// }

// greating(`Vito Papuchi`);

// const PIZZA = (cheese, size, sause, toping1, toping2) => `Your's order is ${size} pizza with ${cheese}, ${sause}, ${toping1} and ${toping2}.`;

// console.log(PIZZA(`chedarr`,`L`,`pelatti`,`sausages`,`ham`));

// const PIZZA = function(cheese, size, sause, toping1, toping2) {
//     return `Your's order is ${size} pizza with ${cheese}, ${sause}, ${toping1} and ${toping2}`
// }

// console.log(PIZZA(`chedarr`,`L`,`pelatti`,`sausages`,`ham`));

// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function (number) {

// const max = function (...args) {

//   console.log(args);
//   return Math.max(...args);
// };

// console.log(max(23,42,12));
// console.log(max(1, 2, 7, 8, 6, 7, 1, 5, 6, 9, 8, 4, 5, 6, 5,));

// const clients = ['джаз', 'блюз'];

// clients.splice(2, 0, 'рок-н-ролл');
// console.log(clients);
// clients.splice(1, 1, 'классика');
// console.log(clients);
// console.log(clients.splice(0, 1));
// clients.splice(0, 0, `рэп`, `регги`);
// console.log(clients);

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   let total = 0;

//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//     for (let j = 0; j < matrix[i].length; j += 1) {
//       console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }

//   console.log(total); // 45

// let day = prompt(`Введите день недели`);
//  switch (day) {
//     case "monday":
//     case "tuesday":
//     case "thirsday":
//     case "thursday":
//     case "friday":
//      console.log("Это будний день");
//      break;

//      case "saturday":
//      case "sunday":
//         console.log("Это выходной");
//         break;

//      default:
//          console.log("Enter valid day");
//  }

// if (day === "monday" ||day ==="tuesday" || day ==="thirsday" || day ==="thursday" || day ==="friday") {console.log("Это будний день")}
//  else if (day === "saturday" || day ==="sunday") {console.log("Это выходной")}
//  else {console.log("Enter valid day")};

// let b = prompt(`date`);
// let c = b%4;
// if (c===2) {
//     alert(`Высокостный год`);
// } else {
//     alert(`Не высокотный`)
// }

// let myAge = 25;
// let rightNeibor = 23 ;
// let result = myAge + rightNeibor;
// console.log(result);

// let circleRadius = 10;
// console.log(Math.PI*(Math.pow(circleRadius, 2)));

// let me = `Valerii`;
// let age = 25;
// let camp = `bootcamp №24`;
// console.log(`Меня зовут ${ me}, мне ${age} лет, я учусь в ${ camp}.`);

// for (let i = 0; i < 10; i++) {
//     i % 2 === 0 ? console.log(i) : '';
// }

// if (i % 2 === 0 && i !== 0) {
//     console.log(i);
//     break;
// }

// for(let i = 0; i<10; ) {
//      console.log(`i is:`, i++);
//  }

//  for(let A = 0; A<10; ) {
//     console.log(`A is:`, ++A);
// }
// let q;

// while (q !== null && q !== ``) {
//     q = prompt(`enter yours number: `);q
//     console.log(q);
// }

// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//     c = 4;
// }

// console.log(c);

// let PASSWORD = `qwerty`;

// let prompt1 = prompt(`Enter your name: `);

// if (prompt1) {
//     prompt1 === PASSWORD
//     ? alert(`Password accept`)
//     : alert(`Incorrect password`);
// } else {
//     alert(`Cancel`);
// };

// let vova = {
//     age : 18,
//     dad : "ne Valakas"
// }
// vova.age >= 18 || vova.dad === `Valakas`
// ?  alert(`Na pitsu` )
// : alert(`Ne dam pitsu! AHAHAHAH`);

// if(vova.age >= 18) {
//     alert(`Na pitsu`);
// } else if (vova.dad === `Valakas`) {
//     alert(`Na pitsu`);
// } else {
//     alert(`Ne dam pitsu! AHAHAHAH`);
// }

// if(vova.age >= 18 || vova.dad === `Valakas`) {
//     alert(`Na pitsu`);
// } else {
//     alert(`Ne dam pitsu! AHAHAHAH`);
// }

// const name = `Valeri`;
// let age = prompt(`Введите в возраст`);
// console.log(typeof age);
// console.log(age);
// // age = +age
// age = Number(age)
// console.log(typeof age);

// let answer = confirm(`Ты хочешь питсы?`);
// console.log(typeof answer);
// console.log(answer);
// let question = `Вы любите JS?`;
// let newAnswer = confirm(question);
// console.log(newAnswer);
// console.log(typeof newAnswer);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);
// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);
// let str = `Sasha`;
// let boolStr = Boolean(str);
// console.log(boolStr);
// str = ``;
// boolStr = Boolean(str);
// console.log(boolStr);
// str = ` `;
// boolStr = Boolean(str);
// console.log(boolStr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// const message = "Hello " + name;
// console.log(message);
// let newMassage = `My age is ${age}`;
// console.log(newMassage);

// age = 50;
// console.log(newMassage);
// console.log(age);
