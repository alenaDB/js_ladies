/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b 
и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/
// let array1 = [ 3,5,6,8,17,28];

// const filterRange = function(arr, a, b){
//     return arr.filter(el => el >=a && el <= b);
// }
// console.log(filterRange(array1, 3, 9));


/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]*/
function filterRangeInPlace(arr, a, b){
    arr.map(el => (el >= a && el <=b) );
}
let array2 = [5, 3, 8, 1]
filterRangeInPlace(array2, 1, 4);
console.log(array2);