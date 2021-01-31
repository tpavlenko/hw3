// 3.	Создать массив размерностью n, где n вводится с клавиатуры.Заполнить случайными числами в диапазоне - 220 ... 435.
// Вывести в документ числа, которые состоят из двух цифр.

var n = +prompt('Enter number n'),
	min = -220,
	max = 435;
var a = [];

for (var i = 0, maxCount = n; i < maxCount; i++) {
	var random = Math.round(Math.random() * (max - min) + min);
	if (random >= 10 && random <= 99 || random <= -10 && random > -99)
		a[a.length] = random;
}

console.log(a);