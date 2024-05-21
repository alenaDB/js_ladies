/* Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
*/

// function sumMul(n,m){
//     let sum = 0;
//     let i = n;
//     if ( n > m || n <= 0 || m <= 0 ) {
//       return "INVALID"
//     }
//     else {
//        while (i < m) {
//         sum = sum + i;
//         i += n;
//         }
//     }
//     return sum
// }


/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/

// function persistence(num) {   
//     var times = 0;
//     num = num.toString();
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
// }

// console.log(persistence(999));

/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
*/

// function solution(string) {
//     return string.split("").map(el => el == el.toUpperCase() ? " " + el : el ).join("");
//   }
// console.log(solution("camelCasingTest"));


/* Write a function that accepts a string, and returns the same string with all even 
indexed characters in each word upper cased, and all odd indexed characters 
in each word lower cased. The indexing just explained is zero based,
 so the zero-ith index is even, therefore that character should be upper cased 
 and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
*/

 function toWeirdCase(string){
     return string.split(" ").map(el => el.split("").map((el, i) => i%2==0? el.toUpperCase() : el).join("")).join(" ");
}

console.log(toWeirdCase('This is a test'));

