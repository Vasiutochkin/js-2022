// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length,'lorem ipsum'.length,'javascript is cool'.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('\'hello world\', \'lorem ipsum\', \'javascript is cool\''.toUpperCase());

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let toLow = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
// console.log(toLow.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// // let str = 'Ревуть воли як ясла понів';// // - Напифункціюшіть  stringToarray(str), яка перетворює рядок на масив слів.
// // let arr = stringToarray(str);['Ревуть', 'воли', 'як', 'ясла', 'повні']
//  const stringToarray = (str) => {
//     return str.split(' ');
//  }
//  let str = 'Ревуть воли як ясла повні';
//  let arr = stringToarray(str);
//  console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

// let arrMap = arr.map(function (arr.toString))
// console.log(arrMap)


// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// // за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let a = (arr) => {
//     let newAree = [];
//     for (const item of arr) {
//         newAree.push(item)
//     }
//     return newAree.map(value => value.toString())
// }
// console.log(a(arr))
//
// let newArr = arr.map(value => value.toString());
// console.log(newArr);

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// // або навпаки в залежності від значення аргументу direction.
// // let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending')return  arr.sort((a, b) => a - b);
//     if (direction === 'descending')return  arr.sort((a, b) => b - a);
// }
// console.log(sortNums([3,11,21], 'descending'));

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
//
// // -- відсортувати його за спаданням за monthDuration
// const sort = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
// console.log(sort);

// // описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// const suits = [
//     {cardSuit: 'spade', color: 'black'},
//     {cardSuit: 'diamond', color: 'red'},
//     {cardSuit: 'heart', color: 'red'},
//     {cardSuit: 'clubs', color: 'black'},
// ]
// const cardsNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// const deck = [];
// for (const suit of suits) {
//     for (const cardsName of cardsNames) {
//         const card = {
//             cardSuit: suit.cardSuit,
//             value: cardsName,
//             color: suit.color
//         }
//         deck.push(card)
//     }
// }
// console.log(deck);

// - знайти піковий туз
let deckOfCards = [
    {cardSuit: 'spade', value: 2, color: 'black'},
    {cardSuit: 'spade', value: 3, color: 'black'},
    {cardSuit: 'spade', value: 4, color: 'black'},
    {cardSuit: 'spade', value: 5, color: 'black'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 2, color: 'red'},
    {cardSuit: 'diamond', value: 3, color: 'red'},
    {cardSuit: 'diamond', value: 4, color: 'red'},
    {cardSuit: 'diamond', value: 5, color: 'red'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 2, color: 'red'},
    {cardSuit: 'heart', value: 3, color: 'red'},
    {cardSuit: 'heart', value: 4, color: 'red'},
    {cardSuit: 'heart', value: 5, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

let filter_1 = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(filter_1);
//
// // - всі шістки
// let filter_2 = deckOfCards.filter(value => value.value === 6);
// console.log(filter_2);
//
// // - всі червоні карти
// let filter_3 = deckOfCards.filter(value => value.color === 'red');
// console.log(filter_3);
//
// // - всі буби
// let filrer_4 = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(filrer_4);

// // - всі трефи від 9 та більше
// let filter_5 = deckOfCards.filter(value =>
//     (value.cardSuit === 'clubs' && value.value >=9) ||
//     (value.cardSuit === 'clubs' && typeof value.value ==='string'));
// console.log(filter_5);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let rebuce = deckOfCards.reduce((accum, value) => {
        if (value.cardSuit === 'spade') {
            accum.spades.push(value)
        } else if (value.cardSuit === 'clubs') {
            accum.clubs.push(value)
        } else if (value.cardSuit === 'diamonds') {
            accum.diamonds.push(value)
        } else if (value.cardSuit === 'hearts') {
            accum.hearts.push(value)
        }
        return accum;

    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
)
console.log(rebuce);