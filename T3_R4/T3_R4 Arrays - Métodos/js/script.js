/*
1) Write examples with Arrays to solve the next problems using only Array methods (like 
iterators, etc...): 
    • find largest number 
    • find longest string 
    • find even numbers 
    • find odd numbers 
    • find words that contain ‘is’ 
    • assert all numbers are divisible by three 
    • zip two arrays together 
    • sort joined array from smallest to largest 
    • remove the first word in the array 
    • place a new word at the start of the array 
    • replace some elements
*/

// find largest number
var numeros = [43, 12, 87, 54, 23, 65];

var numeroMasGrande = Math.max(...numeros);

console.log("El número más grande es:", numeroMasGrande);

// find longest string
const palabras = ["manzana", "plátano", "kiwi", "fresa", "arándano", 'amnistía'];

const cadenaMasLarga = palabras.reduce((masLarga, actual) => {
  if (actual.length > masLarga.length) {
    return actual;
  } else {
    return masLarga;
  }
}, palabras[0]);

console.log("La palabra más grande es:", cadenaMasLarga);

// find even numbers
const evenNumbers = (numeros) => numeros.filter(value => value % 2 === 0);

console.log("Numeros pares: " + evenNumbers(numeros));

// find odd numbers
const oddNumbers = (numeros) => numeros.filter(value => value % 2 === 1);

console.log("Numeros pares: " + oddNumbers(numeros));

// find words that contain 'is'
const containIs = (palabras) => palabras.filter(word => word.includes('is'));

console.log("Palabra que contiene 'is': " + containIs(palabras));

// assert all numbers are divisible by three
const divisibleBy3 = (numeros) => numeros.filter(value => value % 3 === 0);

console.log("Numeros divisibles entre 3: " + divisibleBy3(numeros));

// zip two arrays together


// sort joined array from smallest to largest


// remove the first word at the start of the array
const removeFirst = (palabras) => palabras.splice(0,1);

console.log("removiendo la primera palabra del array: " + removeFirst(palabras));
console.log("Array actual: " + palabras);

// place a new word at the start of the array
const newWord = (nuevaPalabra, palabras) => {
    palabras.splice(0, 0, nuevaPalabra);
    return nuevaPalabra;
}
console.log("Introduciendo en el array: " + newWord('zapato',palabras));
console.log("Array actual: " + palabras);

// replace some elements
const reemplazarElementos = (elementoReemplazar, reemplazo, palabras) => {
  palabras.splice(elementoReemplazar, 1, reemplazo);
  return palabras
}
console.log("Reemplazando el array: " + reemplazarElementos((palabras.length-1),'tacón',palabras));


/**
 2) Over an array with names, find all entries whose firstname starts with ‘J’, 
 create projection combined of only the initials of the name 
 and then sort alphabetically
*/
var nombres = ['maria patiño','alberto garcia','antonio flores','paula perez','lucia saez','juan foche','pepe viyueña','juana gomez'];

var jNames = nombres.filter(function(name) {
  return name.toLowerCase().startsWith('j');
});

var initials = jNames.map(function(name) {
  var words = name.split(' ');
  return words.map(function(word) {
    return word[0].toUpperCase();
  }).join('');
});
var sortedInitials = initials.sort();

console.log("Iniciales ordenadas: " + sortedInitials);