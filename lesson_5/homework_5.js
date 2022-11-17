// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const area = (a,b) => a*b;
// console.log(area(52,50));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// const areaRound = (r) => Math.PI * Math.pow(r, 2)
// console.log(areaRound(10));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cylinder = (h,r) => Math.PI*Math.pow(r,2)*h;
// console.log(cylinder(5, 5));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [45, 65, 89, 8, 9, 6, 4, 1, 2, 3, 6, 9, 8, 8, 7, 7, 77];
// function foo(errs) {
//     for (const err of errs) {
//         console.log(err)
//     }
// }
// foo(mas);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
//     document.write(`<p>${text}</p>`);
// }
// foo('good');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<ul>
//                    <li>${text}</li>
//                    <li>${text}</li>
//                    <li>${text}</li>
//                    </ul>`)
// }
// foo('good');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     (`</ul>`)
// }
//
// foo('GOOOOOOOOD', 50);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [true,562,'good',5953,8,8,9,9,9,6,4,8];
// function iter(argument) {
//     document.write(`<ul>`);
//     for (const ma of mas) {
//         document.write(`<li>${ma}</li>`);
//     }
//     document.write(`</ul>`);
// }
// iter(mas);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const user = [
//     {
//         id:25,
//         name:'Ivan',
//         age:28,
//     },
//     {
//         id:26,
//         name:'Jule',
//         age:30,
//     },
//     {
//         id:21,
//         name:'Serge',
//         age:12,
//     }
// ];
// function foo(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>id ${arrElement.age}, ${arrElement.name}, ${arrElement.age}</div>`)
//     }
// }
// foo (user);


// // - створити функцію яка повертає найменьше число з масиву
// const mas = [2, 5, 6, 6, 55, 66, -99, -52, -659, 659, 632];
//
// const minItm = function (err) {
//     let min = err[0];
//     for (const item of err) {
//         if (item < min) {
//         min = item;
//     }
// }
//     return min;
// }
// console.log(minItm(mas));


// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const mas = [2, 5, 6, 6, 55, 66, 99, 52, 659, 659, 632];
//
// function foo(err) {
//     let sum = 0;
//     for (const item of err) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(foo(mas));