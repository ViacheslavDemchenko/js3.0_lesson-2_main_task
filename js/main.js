//Задаем начальные переменные и записываем в них данные пользователя
let budget = +prompt('Ваш бюджет на месяц?'),//Переводим данные в числовой формат (+)
	shopName = prompt('Название вашего магазина?'),
	shopGoods = [],
	employers = {},
	mainList = {};
//Вносим пользовательские данные в объект
	mainList.budget = budget;
	mainList.shopName = shopName;
	mainList.shopGoods = shopGoods;
	mainList.employers = {};
	mainList.open = false;
// Создаем цикл для получения от пользователя типы товаров и вносим их в массив
for (let i = 0; i < 5; i++) {
	let newGoods = prompt('Какой тип товаров будем продавать?');
			
	if(typeof(newGoods) === 'string' && typeof(newGoods) != null && newGoods != '' 
			&& newGoods.length < 50) {
			console.log('Все верно!');
			shopGoods[i] = newGoods;
	} else {
			alert('Введите верные данные!');
			i--;
	}
}

// var i = 0;
// while (i < 5) {
// 	let newGoods = prompt('Какой тип товаров будем продавать?');
// 	if((typeof(newGoods)) === 'string' && (typeof(newGoods)) != null && newGoods != '' 
// 			&& newGoods.length < 50) {
// 			console.log('Все верно!');
// 			shopGoods[i] = newGoods;
// 			i++
// 	} else {
// 			alert('Введите верные данные!');
// 	}
// }

// let i = 0;
// do {
// 	let newGoods = prompt('Какой тип товаров будем продавать?');
// 	if((typeof(newGoods)) === 'string' && (typeof(newGoods)) != null && newGoods != '' 
// 			&& newGoods.length < 50) {
// 			console.log('Все верно!');
// 			shopGoods[i] = newGoods;
// 			i++;
// 	} else {
// 		alert('Введите верные данные!');
// 	}
// }
// while (i < 5);

//Выводим суточный бюджет
alert('Ваш бюджет на один день: ' + (budget / 30) );

