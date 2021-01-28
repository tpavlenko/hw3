// 4.	Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
// Найти максимальное число и минимальное число.
// Элементы массива между min -- max записать в массив B.

var n = +prompt('Enter number n'),
	min = 1,
	max = 5;

var a = [],
	b = [];

for (var i = 0, maxCount = n; i < maxCount; i++) {
	var random = Math.round(Math.random() * (max - min) + min);
	a[a.length] = random;
}

var maxValue = a[0],
	minValue = a[0];

for (var j = 1; j < a.length; j++) {
	if (a[j] >= maxValue) {
		maxValue = a[j];
	}

	if (a[j] <= minValue) {
		minValue = a[j];
	}

	if (a[j] != minValue && a[j] != maxValue) {
		b[b.length] = a[j];
	}
}

console.log(maxValue, 'maximum value');
console.log(minValue, 'minimum value');
console.log(a, 'array A');
console.log(b, 'array B');