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



const team = {
    players: [
        { name: "Alex", score: 12 },
        { name: "Ivan", score: 18 },
    ],
    addPlayer(player) {
        this.players.push(player)
    },
    getTotalScore() {
        let total = 0;
        for (const player of this.players) {
            total += player.score
        }
        return total
    },
    getPlayers() {
        return this.players
    }

};


console.log(team.getPlayers());

team.addPlayer({
    name: "Anna",
    score: 20,
});

console.log(team.getPlayers());

console.log(team.getTotalScore()); // 50