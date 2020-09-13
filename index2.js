
// ===============MODULE 1=============================

// ==============TASK 1===============

// const name = `Генератор защитного поля`;
// let price = 1000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

//==============TASK 2======================

// if order is: 20, 80 и 130.

// const total = 100;
// const ordered = 50;

// total < ordered ? console.log("На складе недостаточно твоаров!") : console.log("Заказ оформлен, с вами свяжется менеджер");


//==============TASK 3======================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let getPassword = prompt(`Введите пароль`);
// console.log(getPassword);


// if (getPassword === null) {
//     message = alert('Отменено пользователем!');
// } else if (getPassword == ADMIN_PASSWORD) {
//     message = alert('Добро пожаловать!');
// } else {
//     message = alert('Доступ запрещен, неверный пароль!');
// };

//==============TASK 4======================


// const credits = 23580;
// const pricePerDroid = 3000;
// let getCount = prompt(`Введите количество дроидов которое вы хотите купить`);
// let totalPrice = pricePerDroid * getCount;
// if (getCount === null ) {
//     alert('Отменено пользователем!');
// } else if (totalPrice > credits) {
//     alert('Недостаточно средств на счету!');
// } else {
//     alert(`Вы купили ${getCount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
// }


//==============TASK 5======================

// let getCuntry = prompt(`Введите страну доставки`);
// let cost = 0;
// getCuntry = getCuntry.toLowerCase();
// getCuntry = getCuntry[0].toUpperCase() + getCuntry.substring(1)
// switch (getCuntry) {
//     case `Китай`:
//     cost = 100;
//     alert(`Доставка в ${getCuntry} будет стоить ${cost} кредитов`)
//     break;
//     case `Чили`:
//     cost = 250 ;
//     alert(`Доставка в ${getCuntry} будет стоить ${cost} кредитов`)
//     break;
//     case `Австралия`:
//     cost = 170;
//     alert(`Доставка в ${getCuntry} будет стоить ${cost} кредитов`)
//     break;
//     case `Индия`:
//     cost = 80 ;
//     alert(`Доставка в ${getCuntry} будет стоить ${cost} кредитов`)
//     break;
//     case `Ямайка`:
//     cost = 120;
//     alert(`Доставка в ${getCuntry} будет стоить ${cost} кредитов`)
//     break;
//     default: 
//     alert('В вашей стране доставка не доступна');
// }

//==============TASK 6======================

// let input = prompt(`Введите число`);
// let total = 0;

// while (input !== null) {
//             total += +input
//             input = prompt(`Введите число`);
//         }
//     alert(`Общая сумма чисел равна ${total}`)


// =========================== task-2 ==============================================================//
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// const leapYear = "Год високосный";
// const noLeapYear = "Год не високосный";
// let getYear = prompt(`Enter year`);
//---------------------------------------
// // if (getYear % 4 == 0) {
// //     alert(leapYear);
// // } else {
// //     alert(noLeapYear);
// // }
//---------------------------------------------------------
// getYear % 4 == 0 ?  alert(leapYear) :  alert(noLeapYear);


// ================================== task-3 ======================================= //

// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

// let getNumber = prompt(`Введите число от 1 до 10`);
// let randNumber = Math.random() * (10 - 1) + 1;
// randNumber = Math.floor(randNumber)
// console.log(randNumber);
// getNumber == randNumber ? alert(`Вы проиграли! Загаданное число было ${randNumber}`) : alert(`Вы выиграли! Загаданное число было ${randNumber}`);

// ========================= task-10 ======================= //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екпані хто виграв

// let randNumb = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
// let getNumb = prompt("камень, ножницы, бумага");
// if (randNumb === 1) {
//     randNumb = "камень"
// } else if (randNumb === 2) {
//     randNumb = "ножницы"
// } else {
//     randNumb = "бумага"
// }
// if (randNumb === getNumb) {
//     alert(`ничья! Компьютер загадал ${randNumb}`)
// } else if (randNumb === "камень" && getNumb === "ножницы") {
//     alert(`проиграл! Компьютер загадал ${randNumb}`)
// } else if (randNumb === "ножницы" && getNumb === "бумага") {
//     alert(`проиграл! Компьютер загадал ${randNumb}`)
// } else if (randNumb === "бумага" && getNumb === "камень") {
//     alert(`проиграл! Компьютер загадал ${randNumb}`)
// } else {
//     alert(`победа! Компьютер загадал ${randNumb}`)
// }

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */


 // ========================= game ======================= //

// const sum = function() {
//     let total = 0;
  
//     for (const argument of arguments) {
//         console.log(arguments);
//       total += argument;
//     }
  
//     return total;
//   };
  
//   console.log(sum(1, 2, 3)); //  6
//   console.log(sum(1, 2, 3, 4)); //  10
//   console.log(sum(1, 2, 3, 4, 5)); //  15


// ===============MODULE 2=============================

  

// ========================= task-1======================= //

// const logItems = function(array) {
//     let numberInArray = 0;
//     for(let elem of array) {
//         numberInArray +=1
//         console.log(`${numberInArray} - ${elem}`);
//     }
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ========================= task-2======================= //

// const calculateEngravingPrice = function(message, pricePerWord) {
//     const array = message.split(` `);
//     return array.length*pricePerWord
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20))

// ========================= task-3======================= //
// const findLongestWord = function(string) {
//     const array = string.split(` `);
//     letWordToFind = ``;
//     for (let word of array) {
//         if (word.length > letWordToFind.length) {
//             letWordToFind = word;
//         }
//     }
//     return letWordToFind
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'


// ========================= task-4======================= //
// const formatString = function(string) {
//     const array = string.split(``);
//     if(array.length > 40) {
//         array.length = 40;
//         array.push(`...`)
//     }
//     return array.join(``)
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // вернется форматированная строка

// ========================= task-5======================= //

// const checkForSpam = function(message) {
//     message = message.toLowerCase();
//     return message.includes(`spam`) || message.includes(`sale`) ? true : false;
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ========================= task-6======================= //

// let input;
// const numbers = [];
// let total = 0;

// do {
//     input = prompt();
//     numbers.push(input);
// } while (input !== null)

// for (let number of numbers) {
//     total += +number
// }
// console.log(total);


// // =========================== task-1 ================================== //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// const FN = function(string) {
//     let capitalize = string.split(` `)
//     let bufferArr = [];
//     let newCapitalized = bufferArr.join(` `);
//     for (let word of capitalize){
//         word = word.toLowerCase();
//         word = word[0].toUpperCase() + word.substring(1)
//         bufferArr.push(word);
//     }
//    return console.log(newCapitalized);
// }

// FN('the quick brown fox')


// // =========================== task-1 module 3 ================================== //

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//   console.log(Object.keys(user));
//   console.log(user);

// // =========================== task-2 ================================== //

// const countProps = function(obj) {
//     let total = 0;
//     for (let key in obj) {
//         total += 1;
//     }
//     return total
//   };
  

//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// // =========================== task-5 ================================== //

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
//   const getAllPropValues = function(arr, prop) {
//       let result = [];
//     for (let elem of arr) {
//         result.push(elem[prop]);
//     }
//     return result
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []

// ==========================================Lohotron=======================================


// let bet = prompt(`Сделайте ставку`);
// let balance = 1000000000;
// const programm = [
//     { name: 'Чирва', price: 13},
//     { name: 'Треф', price: 27},
//     { name: 'Пика', price: 4},
//     { name: 'Бубна', price: 12},
//   ];

//   const start = function(arr,betCredits) {
//       let winConditionsArr = [];
//       let winConditionMultipliesArr = [];
//     for (let obj of arr){
//         console.log(obj);
//         winConditionsArr.push(obj.name)
//         winConditionMultipliesArr.push(obj.price)
//     }
//     console.log(winConditionsArr);
//     console.log(winConditionMultipliesArr);
//     let firstRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
//     let secondRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
//     let thirdRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
//     let theFirstRand = winConditionsArr[firstRand - 1]
//     console.log(firstRand);
//     let theFecondRand = winConditionsArr[secondRand - 1]
//     let theFhirdRand = winConditionsArr[thirdRand - 1]
//     if(theFirstRand === theFecondRand && theFirstRand === theFhirdRand) {
//         betCredits = Number(betCredits);
//         winCondition = winConditionMultipliesArr[firstRand - 1];
//         winCondition = Number(winCondition);
//         let win = betCredits * winCondition;
//         balance += win;
//         return balance, console.log(`Поздравляем! Ваш выиграш составляет ${win}. Текущий баланс равен ${balance}`)
//     } else {
//         balance -= betCredits;
//         return balance, console.log(`Вы проиграли. Текущий баланс равен ${balance}`)
//     }

//   }
//   start(programm,bet)
const FN = function(n , fnCB) {
    for ( let i = 0; i<n; i +=1)
    fnCB(i)

};

const callbackFN = function (toDoWith) {
    console.log(toDoWith);
};

FN(10, callbackFN);