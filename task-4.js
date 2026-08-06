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


// function getPropertiesCount(obj) {
//     return Object.keys(obj).length
// }

// function getAllKeys(obj) {
//     return Object.keys(obj)
// }


// function getAllValues(obj) {
//     return Object.values(obj)
// }


// function getTotal(object) {
//     let total = 0;
//     for (const obj of Object.values(object)) {
//         total += obj
//     }
//     return total
// }


// function getMaxValue(object) {
//     return Math.max(...Object.values(object))

// }


// function getMinValue(obj) {
//     return Math.min(...Object.values(obj))
// }



// function joinKeys(obj) {
//     return Object.keys(obj).join(", ")
// }


// function joinValues(obj) {
//     return Object.values(obj).join("-")
// }


// function doubleValues(object) {
//     const result = {};
//     for (const key of Object.keys(object)) {
//         result[key] = object[key] * 2
//     }
//     return result
// }


// function addBonus(salaries) {
//     const result = {};
//     for (const key of Object.keys(salaries)) {
//         result[key] = salaries[key] + 100
//     }
//     return result
// }


// function discountProducts(products, discount) {
//     const result = {};
//     for (const key of Object.keys(products)) {
//         result[key] = products[key] - discount
//     }
//     return result
// }


// function countExpensiveProducts(products) {
//     let count = 0;
//     for (const value of Object.values(products)) {
//         if (value > 100) {
//             count++
//         }
//     }
//     return count
// }


// function countEvenNumbers(numbers) {
//     let count = 0;
//     for (const value of Object.values(numbers)) {
//         if (value % 2 === 0) {
//             count++
//         }
//     }
//     return count
// }


// function isEnoughCapacity(products, containerSize) {
//     let result = 0;
//     for (const product in products) {
//         result += products[product]
//     }
//     return result <= containerSize
// }


// console.log(
//     isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//     isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//     isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//     isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


// function calcAverageCalories(days) {
//     if (days.length === 0) {
//         return 0
//     }

//     let result = 0;
//     for (const day of days) {
//         result += day.calories
//     }
//     return result / days.length
// }


// console.log(
//     calcAverageCalories([
//         { day: "monday", calories: 3010 },
//         { day: "tuesday", calories: 3200 },
//         { day: "wednesday", calories: 3120 },
//         { day: "thursday", calories: 2900 },
//         { day: "friday", calories: 3450 },
//         { day: "saturday", calories: 3280 },
//         { day: "sunday", calories: 3300 }
//     ])
// ); // 3180

// console.log(
//     calcAverageCalories([
//         { day: "monday", calories: 2040 },
//         { day: "tuesday", calories: 2270 },
//         { day: "wednesday", calories: 2420 },
//         { day: "thursday", calories: 1900 },
//         { day: "friday", calories: 2370 },
//         { day: "saturday", calories: 2280 },
//         { day: "sunday", calories: 2610 }
//     ])
// ); // 2270

// console.log(
//     calcAverageCalories([])
// ); // 0


// const profile = {
//     username: "Jacob",
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} in hours!`
//     }
// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


// function calculateTotalPrice(scores) {
//     let total = 0;
//     for (const score in scores) {
//         total += scores[score]
//     }
//     return total
// }


// console.log(
//     calculateTotalPrice({
//         apple: 20,
//         banana: 15,
//         orange: 30,
//     })
// ); // 65

// console.log(
//     calculateTotalPrice({
//         bread: 35,
//         milk: 40,
//         cheese: 120,
//     })
// ); // 195

// console.log(
//     calculateTotalPrice({})
// ); // 0


// function countExpensiveProducts(products, minPrice) {
//     let total = 0;
//     for (const product in products) {
//         if (products[product] > minPrice)
//             total++
//     }
//     return total
// }

// console.log(
//     countExpensiveProducts(
//         {
//             apple: 20,
//             banana: 15,
//             orange: 30,
//             kiwi: 50,
//         },
//         25
//     )
// ); // 2

// console.log(
//     countExpensiveProducts(
//         {
//             milk: 40,
//             bread: 30,
//             water: 20,
//         },
//         35
//     )
// ); // 1

// console.log(
//     countExpensiveProducts({}, 50)
// ); // 0

// function getMaxValue(numbers) {
//     return Math.max(...Object.values(numbers))
// }


// function getAverageScore(scores) {
//     let total = 0;
//     for (const score in scores) {
//         total += scores[score]
//     }
//     return total / Object.keys(scores).length
// }


// console.log(
//     getAverageScore({
//         math: 100,
//         english: 80,
//         history: 70,
//     })
// ); // 83.33333333333333

// console.log(
//     getAverageScore({
//         math: 90,
//         english: 90,
//     })
// ); // 90



// function getTotalCalories(days) {
//     if (days.length === 0) {
//         return 0
//     }

//     let total = 0;
//     for (const day of days) {
//         total += day.calories
//     }
//     return total
// }


// console.log(
//     getTotalCalories([
//         { day: "Monday", calories: 3000 },
//         { day: "Tuesday", calories: 2500 },
//         { day: "Wednesday", calories: 2800 },
//     ])
// ); // 8300

// console.log(
//     getTotalCalories([])
// ); // 0


// const team = {
//     players: [],
//     addPlayer(player) {
//         this.players.push(player)
//     },
//     getPlayers() {
//         return this.players
//     },
//     getPlayersCount() {
//         return this.players.length
//     },
//     getTotalScore() {
//         let total = 0;
//         for (const player of this.players) {
//             total += player.score
//         }
//         return total
//     }

// };


// team.addPlayer({
//     name: "Alex",
//     score: 15,
// });

// team.addPlayer({
//     name: "Ivan",
//     score: 20,
// });

// team.addPlayer({
//     name: "Oleg",
//     score: 18,
// });

// console.log(team.getPlayers());
// // [
// //   { name: "Alex", score: 15 },
// //   { name: "Ivan", score: 20 },
// //   { name: "Oleg", score: 18 }
// // ]

// console.log(team.getPlayersCount());
// // 3



const bank = {
    clients: [],
    addClient(client) {
        this.clients.push(client)
    },
    getClients() {
        return this.clients
    },
    getClientsCount() {
        return this.clients.length
    },
    getTotalMoney() {
        let total = 0;
        for (const client of this.clients) {
            total += client.money
        }
        return total
    },
    findPlayer(name) {
        for (const client of this.clients) {
            if (client.name === name)
                return client
        }
        return null
    }
};