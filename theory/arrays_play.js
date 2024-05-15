let myArr = [1, 2, 6, 7, 20, 513, 3513,5325,734];
console.log("original array = ", myArr);


/*splice
        arr.splice(start[, deleteCount, elem1, ..., elemN])
returns deleted item */
//console.log("splicing = ", myArr.splice(2, 2, 3, 4));
//console.log("after splice array = ", myArr);
 

/*slice
        arr.slice([start], [end])
returns a new array containing items from start to end(not including)*/
// console.log("slicing = ", myArr.slice(5, 7));
// console.log("after slice array = ", myArr);


/*concat 
        arr.concat(arg1, arg2...)
returns new or resulting array*/
// let newArr = [];
// console.log("new array after concat = ", newArr.concat(myArr, 4, "test") );

/*forEach
        arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});
returns  underfined*/
// let multyArr = [];
// console.log("after forEach = ", myArr.forEach((el,i,arr) => multyArr.push(el * 2)));
// console.log(myArr);
// console.log(multyArr);


/*find
        arr.find(function(item, index, array) {
            //условие для соответствия элемента
});
returns the item that corresponds the condition OR underfined */
//console.log( " after find = ", myArr.find((el) => el%2==0));


/*filter
        arr.filter(function(item, index, array) {
     //условие для соответствия элементов
});
returns the array of items that corresponds the condition OR underfined */
//console.log( " after filter = ", myArr.filter((el) => el%2==0));


/* map
    arr.map(function(item, index, array) {
    // возвращается новое значение вместо элемента
    });
returns modified array */
//console.log(" array after map = ", myArr.map ((el, i) => i % 2 == 0 ? el * 2 : el));

/* sort 
  arr.sort(); - лексикографически
  arr.sort( (a, b) => a - b ); - по возрастанию.
  arr.sort( (a, b) => b - a ); - по убыванию
  arr.sort( (a, b) => a.localeCompare(b) ) - строки по алфавиту
returns modified array */
// console.log(" array after sort() = ", myArr.sort());
// console.log(" array after sort( (a, b) => a - b) = ", myArr.sort( (a, b) => a - b));
// console.log(" array after sort((a, b) => b - a) = ", myArr.sort((a, b) => b - a));
// let nameArr = ["Test", "angel", "Simon", "Angel", "Will"];
// console.log(" nameArr after sort((a, b) => a.localeCompare(b) ) = ", nameArr.sort((a, b) => a.localeCompare(b)));

/* reverse
   arr.reverse();
returns modified array; */
//console.log("array after reverse = ", myArr.reverse());

/* split
    string.split(delimiter);
returns an array out of string */
//let str = " test some test split func, and test with dif test delimiter";
// console.log("no delimiter = ", str.split(""));
// console.log("space delimiter = ", str.split(" "));
// console.log("comma delimiter = ", str.split(","));
// console.log("word test delimiter = ", str.split("test"));


/* join
    arr.join(delimiter);
returns a string out of array */
// let spArr = ["test", "delimiter", "joined", "string"];
// console.log("no delimiter = ", spArr.join(""));
// console.log("space delimiter = ", spArr.join(" "));
// console.log("comma delimiter = ", spArr.join(","));
// console.log("word test delimiter = ", spArr.join("test"));


/* reduce 
    arr.reduce(function(accumulator, item, index, array) {
    // ...
    }, [initial]);
returns the resutls of function inside reduce
    */
//console.log("result of reduce = ", myArr.reduce((sum, el) => sum+=el, 0));
let summa = myArr.reduce(function(acc, el) {
    return acc +=el;
})
console.log(summa);