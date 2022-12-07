// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [];
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//
// const user1 = new User(3, 'vika', 'golovko', 'ggg.gmail.com', 30680000010);
// const user2 = new User(4, 'vin', 'krun', 'khg.gmail.com', 30680000001);
// const user3 = new User(1, 'serge', 'ivanov', 'nng.gmail.com', 30680000002);
// const user4 = new User(2, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003);
// const user5 = new User(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004);
// const user6 = new User(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005);
// const user7 = new User(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006);
// const user8 = new User(10, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007);
// const user9 = new User(9, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008);
// const user10 = new User(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009);
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filrerUsers = users.filter(value => value.id % 2 === 0);
// console.log(filrerUsers);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const client1 = new Client(1, 'vika', 'golovko', 'ggg.gmail.com', 30680000010, [2, 66, 89, 85, 12, 55]);
// const client2 = new Client(2, 'vin', 'krun', 'khg.gmail.com', 30680000001, [5, 6, 98, 5]);
// const client3 = new Client(3, 'serge', 'ivanov', 'nng.gmail.com', 30680000002, [5, 6, 41]);
// const client4 = new Client(4, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003, [5, 0, 2]);
// const client5 = new Client(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004, [0, 3, 4, 5]);
// const client6 = new Client(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005, [1, 6, 2]);
// const client7 = new Client(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006, [6, 9, 666]);
// const client8 = new Client(9, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007, [6, 5, 88, 66]);
// const client9 = new Client(10, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008, [5, 6, 7, 8]);
// const client10 = new Client(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009, [5, 6, 9, 6, 8, 7, 9, 6, 4, 1, 2,]);
//
// clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientsSort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clientsSort);

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     this.info = function () {
//         for (const carElement in this) {
//             if (typeof this[carElement] !== 'function') {
//                 console.log(`${carElement} -- ${this[carElement]}`)
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.drive = driver
//     };
// }
//
// let myCar = new Car("Tesla", "USA", 2018, 260, 170);
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(60);
// myCar.info();
// myCar.changeYear(2022);
// myCar.info();
// myCar.addDriver('super user');
// myCar.info();
//
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars2 {
//     constructor(model, producer, year, maxspeed, engineVal) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info() {
//         for (const Key in this) {
//             console.log(`${Key}-${this[Key]}`)
//         }
//     };
//
//     newMaxSpeed(newSpeed) {
//         console.log(`їдемо з новою швидкістю ${this.maxspeed + newSpeed} на годину`);
//     }
//
//     changeYear(newValue) {
//         console.log(`новий рік випуску авто ${this.year = newValue}`)
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let addCar2 = new Cars2('Tesla', 'USA', 2000, 370, 3.0);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.changeYear(2021);
// addCar2.newMaxSpeed(50);
// addCar2.addDriver('Viktor')
// console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, size) {
        this.neme = name;
        this.age = age;
        this.size = size;
    }
}

class Popeluska {
    constructor(name, year, size) {
        this.neme = name;
        this.year = year;
        this.size = size;
    }

}

const prince = new Prince("Kola",52,39);

const cindirelles = [
    new Popeluska("vika",12,21),
    new Popeluska("ola",25,31),
    new Popeluska("liza",23,21),
    new Popeluska("ket",25,39),
    new Popeluska("olga",92,60),
    new Popeluska("lesa",30,27),
    new Popeluska("nika",45,42),
    new Popeluska("nika",45,46),
    new Popeluska("nasta",18,25),
    new Popeluska("mila",46,36),
]
for (const popeluska of cindirelles) {
    if (popeluska.size === prince.size) {
        console.log(popeluska)
    }

}