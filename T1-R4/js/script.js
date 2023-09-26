/*
Write a function called sum that can take in any number of 
arguments, and returns the sum of all of the arguments.
*/
function sum(...args) {

    document.write("Ejercicio 1<br>Se van a sumar los siguientes valores: " + args)
    var total = 0;
    args.forEach(element => {
        total = total+element;
        console.log(element);
    })
    console.log("total: " + total);
    return total;
}

/*
Write a function called addOnlyNums that can take in any number 
of arguments (including numbers or strings), and returns the sum 
of only the numbers.

addOnlyNums(1, 'cat', 3, 4); //8
*/
function addOnlyNums(...args) {
    document.write("<br><br>Ejercicio 2<br>Se va a extraer la suma de los numeros de " + args);
    let sum = 0;
  
    args.forEach(element => {
            if (!isNaN(element)) {
                sum = sum+parseFloat(element);
            }
        })
    return sum;
}

/* 
Write a function called countTheArgs that can take any number of 
arguments, and returns the number of arguments that are passed in.

countTheArgs('cat', 'dog'); //2
countTheArgs('cat', 'dog', 'frog', 'bear'); //4
*/
function countTheArgs(...args) {
    document.write("<br><br>Ejercicio 3<br>Se van a contar los elementos del siguiente array: " + args);
    console.log("Array: "+args+" Total:"+args.length);
    return args.length;
}

/*
Write a function called combineTwoArrays that takes in two arrays 
as arguments, and returns a single array that combines both (using 
the spread operator). 
*/
function combineTwoArrays(array1, array2) {
    document.write("<br><br>Ejercicio 4<br>Sumando los arrays...")
    let sumArray =[...array1,...array2];
    return sumArray;
}

/*
Write a function called sumEveryOther that takes in any amount of 
arguments, and returns the sum of every other argument.

sumEveryOther(5, 6, 3, 4, 1); //9
sumEveryOther(10, 2, 11); //21
*/
function sumEveryOther(...args) {
    document.write("<br><br>Ejercicio 5");
    var sum = 0;

    for (let i = 0; i < args.length; i+=2) {
        sum += args[i];
    }
    return sum;
}

/* 
Write a function called onlyUniques that can take in any number of 
arguments, and returns an array of only the unique arguments.

onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']
onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]
*/
function onlyUniques(...args) {
    document.write("<br><br>Ejercicio 6");
    const uniqueArray = [];
  
    for (const item of args) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
}

/*
Write a function called combineAllArrays that takes in any number 
of arrays as arguments and combines all of them into one array.
*/
function combineAllArrays(...args) {
    document.write("<br><br>Ejercicio 7");
    const combinedArray = [];
      
    for (const array of args) {
        combinedArray.push(...array);
    }
      
    return combinedArray;
}

/*
Write a function called squareAndSum that takes in any number of 
arguments, squares them, then sums all of the squares.

sumAndSquare(2, 4, 3); //29
sumAndSquare(1, 2); //5
*/
function squareAndSum() {
    document.write("<br><br>Ejercicio 8");
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
      const value = arguments[i];
      const squaredValue = value * value;
      sum += squaredValue;
    }
    
    return sum;
}