/** 
 * @name filterNumbersGreaterThan 
 * @description Filtra los números de un array que sean mayor a cierto número 
x dejando solo los que sean menores a este 
 * 
 * @param {number[]} numbers - Array de números a filtrar 
 * @param {number} filter - Número a partir del cuál filtrar los demás número
s 
 * @returns {Number[]} - Array de números filtrados menores a {filter} 
 * 
 * @example 
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4] 
 */ 
 
function filterNumbersGreaterThan(numbers, filter) {
    var filterNumbers = [];

    numbers.forEach(element => {
        if (!(element>=filter)) {
            filterNumbers.push(element);
        }
    });

    return filterNumbers;
}
 
/** 
 * @name toHackerSpeak 
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que 
 * transformar las "a" en 4, las "e" en 3, las "i" 
 * en 1, las "o" en 0 y las "s" en 5 
 * 
 * @param {string} text  
 * @returns {String} - El texto convertido a "Hacker Speak" 
 *  
 * @example 
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w" 
 */ 
 
function toHackerSpeak(text) {
    var convertido = "";

    var caracteres = text.split('');

    caracteres.forEach(element => {
        switch (element) {
            case "a":
                convertido += "4";
                break;
            case "e":
                convertido += "3";
                break;
            case "i":
                convertido += "1";
                break;
            case "o":
                convertido += "0";
                break;
            case "s":
                convertido += "5";
                break;
            default:
                convertido += element;
                break;
        }
    });

    return convertido;
}

/** 
 * @name getFileExtension 
 * @description Obtiene la extensión de un archivo 
 * 
 * @param {string} file - El nombre del archivo a obtener la extensión  
 * @returns {String} - La extensión del archivo 
 *  
 * @example 
 *  getFileExtension("imagen.jpg") // returns "jpg" 
 */ 
 
function getFileExtension(file) {
    
    var separado = file.split('.');
    
    var extension = separado[1];

    return extension;
}

/** 
 * @name flatArray 
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los 
 * ítems  
 * 
 * @param {[][]} arr - Array 2D a "aplanar"  
 * @returns {[]} - El array "aplanado" 
 *  
 * @example 
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5] 
 */ 

function flatArray(arr) {
    var arrayAplanado = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arrayAplanado.push(arr[i][j]);
        }
    }

    return arrayAplanado;
}
 
/** 
 * @name removeDuplicates 
 * @description Remueve duplicados de un array  
 * 
 * @param {[]} arr - Array con duplicados a remover 
 * @returns {[]} - El array resultante sin duplicados 
 *  
 * @example 
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2] 
 */ 

function removeDuplicates(arr) {
    var arraySinDuplicados = [];

    arr.forEach(element => {
        if (!arraySinDuplicados.includes(element)) {
            arraySinDuplicados.push(element);
        }
    });

    return arraySinDuplicados;
}

/** 
 * @name countLetter 
 * @description Devuelve la cantidad de veces que una letra aparece en un str
ing  
 * 
 * @param {string} letter - Letra a contar 
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter} 
 * @returns {Number} - Número de veces que aparece {letter} en {text} 
 *  
 * @example 
 *  countLetter("a", "javascript") // returns 2 
 */ 
 
function countLetter(letter, text) {
    var textSeparado = text.split('');
    var cuenta = 0;

    textSeparado.forEach(element => {
        if (element==letter) {
            cuenta++;
        }
    });

    return cuenta;
}

/** 
 * @name removeWords 
 * @description Dado un string y un array de palabras a remover, devuelve el 
 * string sin las palabras removidas 
 * 
 * @param {string} str - Texto a recortar  
 * @param {string[]} words - Palabras a remover 
 * @returns {string} - Texto resultante con las palabras removidas 
 *  
 * @example 
 * removeWords("This is a really bad test", ["really", "bad"]) // returns 
 * "This is a test" 
 */

function removeWords(str, words) {
    var palabras = str.split(' ');

    var strRecortado = palabras.filter(function(word) {
        return !words.includes(word);
    }).join(' ');

    return strRecortado;
}