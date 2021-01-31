// 4.	Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
// Найти максимальное число и минимальное число.
// Элементы массива между min -- max записать в массив B.

var n = +prompt('Enter number n'),
	min = 1,
	max = 50;
var a = [];

for (var i = 0, maxCount = n; i < maxCount; i++) {
	var random = Math.round(Math.random() * (max - min) + min);
	a[a.length] = random;
}

var maxValue = a[0],
	minValue = a[0],
	size = a.length;

for (var j = 1; j < size; j++) {
	if (a[j] >= maxValue) {
		maxValue = a[j];
	}

	if (a[j] <= minValue) {
		minValue = a[j];
	}
}

var posMin = a.indexOf(minValue),
	posMax = a.indexOf(maxValue);
var b = [];
b = a.slice(posMin + 1, posMax);

console.log(maxValue, 'maximum value');
console.log(minValue, 'minimum value');
console.log(a, 'array A');
console.log(b, 'array B');


// Это один из вариантов, который не получился
// for (var i = 0, j = 0, period; i > posMin, j < posMax; i++, j--) {
// 	period = i;
// 	period = j;
// 	b[b.length] = period;
// }