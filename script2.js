/*Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
Заменить каждый элемент массива с нечетным индексом на ноль.*/

var min = 1,
	max = 5;
var a = [];

for (var i = 0, maxCount = 10; i < maxCount; i++) {
	var random = Math.round(Math.random() * (max - min) + min);
	if (i % 2 != 0) {
		random = 0;
	}
	a[a.length] = random;
}

console.log(a);