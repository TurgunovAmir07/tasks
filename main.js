// 1. Задачка про кошку:
// Создайте объект "кошка" со свойствами "имя" и "возраст". Затем выведите в консоль информацию о кошке.
let cat = {
    catName: "Вася",
    age: "1 год"
}
console.log(cat);


// 2. Задачка про автомобиль:
// Создайте объект "автомобиль" со свойствами "марка" и "год выпуска". Затем измените значение свойства "год выпуска" на новое значение и выведите информацию об автомобиле.
let car = {
    CarBrand: "audi",
    year: "1899г" 
}
let carRaw = JSON.stringify(car)
let car2 = JSON.parse(carRaw)
car.year = "1909г"
console.log(car)


// 3. Задачка про книгу:
// Создайте объект "книга" со свойствами "название", "автор" и "год издания". Затем добавьте новое свойство "жанр" и выведите информацию о книге.
let book = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: "1887-1907г"
};

book.genre = "Детективный рассказ";

console.log(book);


// 4. Задачка про студента:
// Создайте объект "студент" со свойствами "имя", "возраст" и "средний балл". Затем измените значение свойства "средний балл" на новое значение и выведите информацию о студенте.
let students = {
    name: "Петя",
    age: "17 лет",
    GPA: 4.5
}
let studentsRaw = JSON.stringify(students)
let students2 = JSON.parse(studentsRaw)
students.GPA = "5"
console.log(students)



let fruit = {
    fruitName: "apple",
    fruitColor: "green",
    fruitTaste: "sour"
}
fruit.fruitQuantity = "5kg"
console.log(fruit)