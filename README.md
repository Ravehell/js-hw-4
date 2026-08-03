# js-hw-4Задача 1. Кількість властивостей

Виконуй це завдання у файлі task-1.js

Напиши функцію countProperties(object), яка повертає кількість власних властивостей об'єкта.

Використай метод Object.keys().

Приклади
console.log(
  countProperties({
    name: "Alex",
    age: 20,
    city: "Kyiv",
  })
); // 3

console.log(
  countProperties({
    brand: "BMW",
  })
); // 1

console.log(
  countProperties({})
); // 0
Ментор перевірятиме
Оголошена функція countProperties(object).
Використовується Object.keys().
Повертається правильна кількість властивостей.
Задача 2. Загальна кількість товарів

Виконуй це завдання у файлі task-2.js

Напиши функцію countTotalProducts(products).

Параметр products — це об'єкт.

Ключ — назва товару.

Значення — його кількість.

Функція повинна повернути загальну кількість усіх товарів.

Для розв'язання використай Object.values().

Приклади
console.log(
  countTotalProducts({
    apples: 4,
    bananas: 6,
    oranges: 2,
  })
); // 12

console.log(
  countTotalProducts({
    milk: 3,
    bread: 5,
  })
); // 8

console.log(
  countTotalProducts({})
); // 0
Ментор перевірятиме
Використовується Object.values().
Повертається правильна сума.
Задача 3. Найбільший бал

Виконуй це завдання у файлі task-3.js

Напиши функцію findBestScore(scores).

Параметр:

{
  Alex: 85,
  Ivan: 97,
  Oleg: 74,
}

Функція повинна повернути найбільший бал.

Використай Object.values().

Приклади
console.log(
  findBestScore({
    Alex: 85,
    Ivan: 97,
    Oleg: 74,
  })
); //97

console.log(
  findBestScore({})
); //0
Задача 4. Список товарів

Виконуй це завдання у файлі task-4.js

Напиши функцію getProductNames(products).

Параметр — об'єкт.

Функція повинна повернути масив назв товарів.

Використай Object.keys().

Приклади
console.log(
  getProductNames({
    apples: 5,
    oranges: 8,
    bananas: 2,
  })
);

// ["apples","oranges","bananas"]
Задача 5 ⭐

Виконуй це завдання у файлі task-5.js

Напиши функцію calculateTotalSalary(salaries).

Параметр:

{
  Alex: 25000,
  Ivan: 31000,
  Oleg: 28000,
}

Функція повинна повернути суму всіх зарплат.

Використай Object.values().

Приклади
console.log(
  calculateTotalSalary({
    Alex: 25000,
    Ivan: 31000,
    Oleg: 28000,
  })
); //84000

console.log(
  calculateTotalSalary({})
); //0
Задача 6 ⭐⭐

Виконуй це завдання у файлі task-6.js

Напиши функцію hasProduct(products, productName).

Параметри:

products — об'єкт.
productName — рядок.

Функція повинна повернути:

true, якщо такий товар є.
false, якщо його немає.

Використай Object.keys().

Приклади
console.log(
  hasProduct(
    {
      apples: 5,
      bananas: 3,
      milk: 7,
    },
    "milk"
  )
); // true

console.log(
  hasProduct(
    {
      apples: 5,
      bananas: 3,
      milk: 7,
    },
    "bread"
  )
); // false
Задача 7 ⭐⭐⭐ (майже як домашка GoIT)

Виконуй це завдання у файлі task-7.js

Напиши функцію getAvailableProducts(products).

Параметр:

{
  apples: 0,
  bananas: 5,
  oranges: 2,
  milk: 0,
}

Функція повинна повернути масив назв лише тих товарів, кількість яких більша за нуль.

Можна використовувати Object.keys() або Object.entries().

Приклад
console.log(
  getAvailableProducts({
    apples: 0,
    bananas: 5,
    oranges: 2,
    milk: 0,
  })
);

// ["bananas","oranges"]