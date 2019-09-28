//------------------------ Модуль 1/Задание №1√-------------------------- 

// let name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${(name)}`) 
// console.log(`цена за штуку ${(price)} кредитов`)





//------------------------ Модуль 1/Задание №2√-------------------------- 

// const total = 100;

// const ordered = prompt("Какое кол-во товаров");
//  if( ordered <= total){
//    alert('Заказ оформлен, с вами свяжется менеджер')
//  } else {
//    alert("На складе недостаточно твоаров!")
//  }





//------------------------ Модуль 1/Задание №3√-------------------------- 

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let status = prompt('Enter your password');
// let message; 
// if( status === ADMIN_PASSWORD){
//   alert('Добро пожаловать!')
// } else if(status === null){
// alert('Отменено пользователем!')} 
// else{
//   alert('Доступ запрещен, неверный пароль!')
// }





//------------------------ Модуль 1/Задание №4√-------------------------- 
// let credits = 23580;
// let pricePerDroid = 3000; 

// let totalPrice = prompt('Количество дроидов которые пользователь хочет купить', Number()); 
// let quantity = totalPrice;
// let leftCredits = credits-(pricePerDroid*quantity);

// if(totalPrice === null){
//   alert('Отменено пользователем!')}
  
// else if(totalPrice * pricePerDroid){
//   console.log(`Вы купили ${quantity} дроидов, на счету осталось ${leftCredits}`)
// }
//   else{
//     totalPrice < credits
//   alert('Недостаточно средств на счету!')
//     }





//------------------------ Модуль 1/Задание №5√-------------------------- 

//  let cost;
//  const delivery = prompt("Укажите страну доставки").toLowerCase()

// switch (delivery){
//   case "китай":
//     cost = 100;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`)
//     break;

//   case "чили":
//     cost = 250;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`)
//     break;

//   case "австралия":
//     cost = 170;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`)
//     break;

//   case "индия":
//     cost = 80;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`)
//     break;

//   case "ямайка":
//     cost = 120;
//     console.log(`Доставка в $${delivery} будет стоить ${cost} кредитов`)
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }
   




//------------------------ Модуль 1/Задание №6√-------------------------- 
//  let input;
//  let total = 0;

//  while (true){
//   input = prompt('Введите любое число');

//   if (input === null){ 
//   break;
// }
// input = Number(input);

//   if (input <= 0) {
//     break;
//   }

//   total += input;
// }

// alert(total);





//-----------------------Модуль 2/Задание №1 √-------------------------- 
// const logItems = array => {
//   array.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
//   });
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const calculateEngravingPrice = (string, price) => {
//   return string.split(" ").length * price;
// };





//---------------------- Модуль 2/Задание №2√-------------------------- 
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100





//----------------------- Модуль 2/Задание №3√-------------------------- 
// const findLongestWord = string => {
//   let longestWord = "";

//   const array = string.split(" ");

//   array.forEach(element => {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   });

//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'





//------------------------- Модуль 2/Задаие №4√-------------------------- 
// const formatString = string =>
//   string.length > 40 ? string.slice(0, 40) + "..." : string;

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );





//-------------------------- Модуль 2/Задаие №5√-------------------------- 
// const checkForSpam = string =>
//   string.toLowerCase().includes("spam") ||
//   string.toLowerCase().includes("sale");

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true





//-------------------------- Модуль 2/Задаие №6√-------------------------- 

// let input;
// const numbers = [];
// let total = 0;
//  while(true){
//     input = prompt("Enter a number");
//      if(input === "" || input === null){
//        alert('Отменено пользователем!')
//        break;
//      } else{
//       numbers.push(input)
//       total += +input;
//      }
//     }





//-------------------------- Модуль 3/Задаие №1√-------------------------- 
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby ="JavaScript";
// user.premium = false;

// const keys = Object.keys(user);
// for (const keys in user) {
//   console.log('Key: ', keys);}





//-------------------------- Модуль 3/Задаие №2√-------------------------- 
//  const countProps = {
//   name: 'Mango',
//   age: 2
//  }
 
 
//  countProp() = (() => {
//    counter = 0;
//    for (var key in countProps) {
//      counter++;
//  }
// })

 
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3





//-------------------------- Модуль 3/Задаие №3√-------------------------- 

// const findBestEmployee = function(stats){
//   let maxTask = 0;
//   let name;
  
//   const keys = Object.keys(stats); 
//   console.log(keys);

//   for (const key of keys) {
//     if (maxTask < stats[key]){
//       maxTask = stats[key]
//       name = key;
//     }
//   } 
//   return name;
// }
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux





//-------------------------- Модуль 3/Задаие №4√-------------------------- 

  // const countTotalSalary = function(stats) {
  //   let total = 0;
  //   let summ;
  //   for (const key in stats){
  //     //console.log(stats [key])
  
  //     total += stats[key]
  //   }
  //   console.log(total)
  // }

  // console.log(
  //   countTotalSalary({
  //     mango: 100,
  //     poly: 150,
  //     alfred: 80,
  //   }),
  // ); 
  
  // console.log(
  //   countTotalSalary({
  //     kiwi: 200,
  //     lux: 50,
  //     chelsy: 150,
  //   }),
  // ); 





//-------------------------- Модуль 3/Задаие №5√-------------------------- 
  
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const keys = Object.keys(products);
// const keys1 = Object.entries(products)

// getAllPropValues = function(){
//   'name' = products.name;
//   'quantity' = products.quantity;

// }

  
//console.log(keys1); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'name'));

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []





//----------------------Задаие unknown
// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27
//   },
//   {
//     guid: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39
//   }
// ];

// const getUserNames = users => users.map(user => user.name);

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// //console.log(getUserNames(getUsersWithEyeColor(users, "blue")));

// const getCountOfActiveUsers = (users = []) => {
//   let counter = 0;

//   users.forEach(user => {
//     if (!user.isActive) {
//       counter++;
//     }

//     // console.log(user);
//   });

//   //   console.log(counter);
// };

// getCountOfActiveUsers(users);

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender);
// };

// console.log(getUsersWithGender(users, "male"));
