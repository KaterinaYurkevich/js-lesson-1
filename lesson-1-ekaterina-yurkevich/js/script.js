// 1)
alert('Привет, это работа Юркевич Екатерины');
// 2)
let planetName = 'Марс';
console.log(planetName);
let myAge = 34;
console.log(myAge);
let brokenCar = 'Porsche';
console.log(brokenCar);
let headerColor = 'red';
console.log(headerColor);
let isAdmin = confirm('Вы администратор?');
console.log(isAdmin);
// 3)
let myName = 'Екатерина';
let mySurname = 'Юркевич';
console.log(`Привет, меня зовут ${myName} ${mySurname}, мне ${myAge} года`);
// 4)
let userName = prompt('Введите Ваше имя', 'User');
console.log(`Мою работу проверяет ${userName}`);
// 5)
let str = 'String';
let num = 2000;
let testSkiped = false;
let month = undefined;
let data = null;
console.log(str, typeof(str));
console.log(num, typeof(num));
console.log(testSkiped, typeof(testSkiped));
console.log(month, typeof(month));
console.log(data, typeof(data));
// 6)
console.log('Переменная newStr');
let newStr = '37';
console.log(newStr, typeof(newStr));
newStr = Number(newStr);
console.log(newStr, typeof(newStr));
newStr = Boolean(newStr);
console.log(newStr, typeof(newStr));
console.log('Переменная newValue');
let newValue = true;
console.log(newValue, typeof(newValue));
newValue = String(newValue);
console.log(newValue, typeof(newValue));
newValue = Number(newValue);
console.log(newValue, typeof(newValue));
console.log('Переменная newNum');
let newNum = 2007;
console.log(newNum, typeof(newNum));
newNum = String(newNum);
console.log(newNum, typeof(newNum));
newNum = Boolean(newNum);
console.log(newNum, typeof(newNum));
// 7)
let name = 'Ivan';
let surname = name;
console.log(surname);