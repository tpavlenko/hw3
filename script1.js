/*1.1 Организовать перебор чисел от 1 до 150. 
1.2 Посчитать сумму всех чисел 
1.3 Посчитать сумму чётных чисел*/

for (var i = 1, sum = 0, sumEven = 0; i <= 150; i++) {
	sum += i;
	if (i % 2 == 0)
		sumEven += i;
}

console.log(`Сумма всех чисел равна ${sum}`);
console.log(`Сумма четных чисел равна ${sumEven}`);