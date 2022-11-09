// // - Є змінна х, якій ви надаєте довільне числове значення.
// // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('веди число від -3 до 1');
// if (a !== 0) {
//     document.write('вірно')
// } else {
//     document.write('не вірно')}


// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю чи четверту частину години).
// let time = +prompt('число від 1 до 59');
// if (time > 0 && time <= 15) {
//     document.write('це перша четверть години')
// } else if (time > 15 && time <= 30) {
//     document.write('це друга четверть години')
// } else if (time > 30 && time <= 45) {
//     document.write('це третя четверть години')
// } else if (time > 45 && time <= 59) {
//     document.write('це четверта четверть години')
// }

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('веди число від 1 до 31');
// day > 0 && day <= 10 ? document.write('перша половина') : day > 10 && day <= 20 ? document.write('друга пловина')
//     : day > 20 && day <= 31 ? document.write('третя половина') : document.write('eror');


// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// // інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let x = +prompt('веди день тижня');
// switch (x) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday ');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday  ');
//         break;
//     case 5:
//         alert('Friday ');
//         break;
//     case 6:
//         alert('Saturday  ');
//         break;
//     case 7:
//         alert('Sunday ');
//         break;
//     default:
//         break;
// }


// // - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.
// let numberOne = +prompt('namber1');
// let numberTwo = +prompt('namber2');
//
// if (numberOne > numberTwo ){
//     document.write(numberOne)
// } else if(numberOne < numberTwo){
//     document.write(numberTwo)
// }else if(numberOne === numberTwo){
//     document.write('числа одинакові')
// }


// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// // за допомоги  оператора || буде присвоювати змінній х значення "default"
// // якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = +prompt() || 'default';
// document.write(x)


