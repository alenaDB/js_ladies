/*
https://www.codewars.com/kata/602db3215c22df000e8544f0
Your job is to write a function, which takes three integers a, b, and c as arguments,
 and returns True if exactly two of the three integers are positive numbers (greater than zero), 
 and False - otherwise.*/

 function twoArePositive(a, b, c) {
    if( ((a > 0 && b > 0) && c <= 0 )|| ((a > 0 && c > 0) && b <= 0 )|| ((b > 0 && c > 0) && a <= 0 )) {
        return true;
    }
    else {
        return false;
    }
  }

console.log(twoArePositive ( 4, 6, 10));