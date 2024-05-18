/*The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
We need to traverse arr by using a for loop. If an element is an odd number, 
push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. 
Your work is to write a for loop.
*/

let arr = [1,2,3,4,5,6,7,8,9];
function pickIt(arr){
    var odd=[],even=[];
    for (el of arr){
        el % 2 == 0 ? even.push(el): odd.push(el)
    }
    return [odd,even];
  }

  console.log(pickIt(arr));


  /*The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
If the length of the key is equal to 5, then push the key to your array. 
Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array. */

function giveMeFive(obj){
    let arr = [];
    for(key in obj){
        if(key.length == 5){
            arr.push(key);
        }
        if (obj[key].length == 5){
            arr.push(obj[key])
        }
        }  
    return arr; 
  }

  let obj = {Our:"earth",is:"a",beautyful:"world"};

  console.log(giveMeFive(obj));