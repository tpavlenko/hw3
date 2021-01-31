// 5.	Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1.
// Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив.

var a = [1, 5, 6, 2, 4];
var arrayLength = a.length,
	halfLength = arrayLength / 2;

for (var i = 0; i < halfLength; i++) {
	var start = a[i];
	a[i] = a[arrayLength - i - 1];
	a[arrayLength - i - 1] = start;
}

console.log(a);


/*var a = [1, 5, 6, 2, 4];
var arrayLength = a.length;

for (var i = 0; i < arrayLength - 1; i++) {
	a.splice(i, 0, a.pop());
}

console.log(a);*/

// С этой задачей сама не смогла справиться. 
// Посмотрела в интернете способы решения и выбрала те, которые мне были понятны.