//----------------------Модуль №7/Задаие №1√----------------------

// const count = document.querySelectorAll(".item").length;
// console.log(`В списке ${count} категорий`);

// const list = document.querySelectorAll("li.item");
// const lis = Array.from(list);

// lis.forEach(element => {
//   const h2 = element.querySelector("h2");
//   console.log(h2.textContent);
//   const ul = element.querySelector("ul");
//   const innerLis = ul.querySelectorAll("li");
//   console.log(innerLis.length);
// });
// console.log(Array.from(list));

// const items = document.querySelectorAll(".item");
// Array.prototype.forEach.call(items, element => {
//   const title = element.querySelector("h2").innerHTML;
//   const itemsLength = element.querySelectorAll("li").length;
//   console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });

//---------------------Модуль №7 Задание №2---------------------------
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// const ingridients = document.createElement("li");
// const list = document.querySelectorAll("li.item");
// const lis = Array.from(list);
// Array.prototype.forEach.call(list, element => {
//   const li = element.querySelector("h2");
//   console.log(li.textContent);
// });

// ----------------------- Модуль 7 Задание №3 -----------------

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
for (let el of images)
  document.querySelector("#gallery").insertAdjacentHTML("beforeEnd",
      `<li><img src="${el.url}" alt="${el.alt}"></li>`
    );
