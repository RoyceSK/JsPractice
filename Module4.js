//-------------------------- Модуль 4/Задаие №1√-------------------------- 
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']





//-------------------------- Модуль 4/Задаие №2√-------------------------- 
// const inventory = {
//   items: ['Монорельса', 'Фильтр'],
//   add(itemName) {
//     inventory.items.push(itemName);
//   },
//   remove(itemName) {
//     inventory.items = inventory.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryOperation = function(itemName, inventoryAction) {
//   console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
//   inventoryAction(itemName);
// };

// invokeInventoryOperation('Аптечка', inventory.add);
// // Invoking add opeartion on Аптечка

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryOperation('Фильтр', inventory.remove);
// // Invoking remove opeartion on Фильтр

// console.log(inventory.items); // ['Монорельса', 'Аптечка']
