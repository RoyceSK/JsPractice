//-------------------------- Модуль 5/Задаие №1√-------------------------- 
// const Account = function(login, email){
//   this.login = login
//   this.email = email
// };

// Account.prototype.getInfo = function(){
//   console.log(`name: ${this.login}, room: ${this.email}`)
// };

// console.log(Account.prototype.getInfo);
// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com





//-------------------------- Модуль 5/Задаие №2√-------------------------- 

// class User {
//   constructor({name, age, followers}) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
// }
// getFullInfo(){ 
//  console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers.`);
//   }
// }
 

  
//   const mango = new User({ name: 'Mango', age: 2, followers: 20 });
//   mango.getFullInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({ name: 'Poly', age: 3, followers: 17 });
//   poly.getFullInfo(); // User Poly is 3 years old and has 17 followers





// class Storage {
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){
//     return this
//   }
//   addItem(item){
//     storage.items.push(item)
//   } 
//   removeItem(item){
//     storage.items.splice(1,1 ) 
    
// }}


// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



