// function calculateWarehouseItems(products) {
//     let total = 0;
//     for (const product in products) {
//         total += products[product]
//     }
//     return total
// }


// console.log(
//     calculateWarehouseItems({
//         apples: 10,
//         oranges: 8,
//         bananas: 5,
//     })
// ); // 23

// console.log(
//     calculateWarehouseItems({
//         phones: 4,
//         laptops: 7,
//         tablets: 2,
//     })
// ); // 13

// console.log(
//     calculateWarehouseItems({})
// ); // 0



// function calcAverageTemperature(days) {
//     if (days.length === 0) {
//         return 0
//     }

//     let total = 0;
//     for (const day of days) {
//         total += day.temperature
//     }
//     return total / days.length

// }


// console.log(
//     calcAverageTemperature([
//         { day: "Monday", temperature: 20 },
//         { day: "Tuesday", temperature: 24 },
//         { day: "Wednesday", temperature: 22 },
//         { day: "Thursday", temperature: 26 },
//         { day: "Friday", temperature: 23 },
//     ])
// ); // 23

// console.log(
//     calcAverageTemperature([
//         { day: "Monday", temperature: 15 },
//         { day: "Tuesday", temperature: 18 },
//     ])
// ); // 16.5

// console.log(
//     calcAverageTemperature([])
// ); // 0





// const account = {
//     owner: "Anna",
//     balance: 1500,
//     deposit(amount) {
//         this.balance += amount
//     },
//     withdraw(amount) {
//         this.balance -= amount
//     },
//     getInfo() {
//         return `${this.owner} has ${this.balance} UAH`
//     }
// };


// console.log(account.getInfo());
// // "Anna has 1500 UAH"

// account.deposit(500);
// console.log(account.getInfo());
// // "Anna has 2000 UAH"

// account.withdraw(300);
// console.log(account.getInfo());
// // "Anna has 1700 UAH"


// function getTotalItems(products) {
//     let total = 0;
//     for (const product of products) {
//         total += product.quantity
//     }
//     return total

// }


// console.log(
//     getTotalItems([
//         { name: "Apple", quantity: 10 },
//         { name: "Orange", quantity: 8 },
//         { name: "Banana", quantity: 5 },
//     ])
// ); // 23

// console.log(
//     getTotalItems([
//         { name: "Phone", quantity: 3 },
//         { name: "Laptop", quantity: 7 },
//         { name: "Tablet", quantity: 2 },
//     ])
// ); // 12

// console.log(
//     getTotalItems([])
// ); // 0



// const team = {
//     players: [
//         { name: "Alex", score: 12 },
//         { name: "Ivan", score: 18 },
//     ],
//     addPlayer(player) {
//         this.players.push(player)
//     },
//     getTotalScore() {
//         let total = 0;
//         for (const player of this.players) {
//             total += player.score
//         }
//         return total
//     },
//     getPlayers() {
//         return this.players
//     }

// };


// console.log(team.getPlayers());

// team.addPlayer({
//     name: "Anna",
//     score: 20,
// });

// console.log(team.getPlayers());

// console.log(team.getTotalScore()); // 50


// function checkWarehouseCapacity(goods, maxCapacity) {
//     let total = 0;
//     for (const good in goods) {
//         total += goods[good]

//     }
//     return total <= maxCapacity
// }



// console.log(
//     checkWarehouseCapacity(
//         { milk: 10, bread: 5, eggs: 20 },
//         40
//     )
// ); // true

// console.log(
//     checkWarehouseCapacity(
//         { milk: 15, bread: 10, eggs: 30 },
//         50
//     )
// ); // false

// console.log(
//     checkWarehouseCapacity(
//         { apples: 5, oranges: 7, bananas: 8 },
//         20
//     )
// ); // true

// console.log(
//     checkWarehouseCapacity(
//         { apples: 12, oranges: 10, bananas: 9 },
//         25
//     )
// ); // false



// function calculateTotalPrice(products) {
//     let total = 0;
//     for (const product of products) {
//         total += product.price * product.quantity
//     }
//     return total
// }



// console.log(
//     calculateTotalPrice([
//         { name: "Apple", price: 20, quantity: 5 },
//         { name: "Banana", price: 15, quantity: 4 },
//     ])
// ); // 160

// console.log(
//     calculateTotalPrice([
//         { name: "Milk", price: 40, quantity: 2 },
//         { name: "Bread", price: 25, quantity: 3 },
//     ])
// ); // 155

// console.log(calculateTotalPrice([])); // 0



// const car = {
//     brand: "Toyota",
//     mileage: 120000,
//     changeBrand(newBrand) {
//         this.brand = newBrand
//     },
//     drive(distance) {
//         this.mileage += distance
//     },
//     getInfo() {
//         return `${this.brand} has ${this.mileage} km millage`
//     }

// };


// console.log(car.getInfo());

// car.changeBrand("BMW");

// car.drive(500);

// console.log(car.getInfo());



// const bank = {
//     clients: [],
//     addClient(client) {
//         this.clients.push(client)
//     },
//     getClients() {
//         return this.clients
//     },
//     getClientsCount() {
//         return this.clients.length
//     }
// };

// bank.addClient({
//     name: "Alex",
//     money: 500,
// });

// bank.addClient({
//     name: "Ivan",
//     money: 700,
// });

// bank.addClient({
//     name: "Oleg",
//     money: 1200,
// });

// console.log(bank.getClientsCount());
// // 3

// console.log(bank.getClients());