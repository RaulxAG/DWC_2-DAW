function a0(array) {
    array.forEach((element, index) => {
        array[index]=0;
    });

    document.write("<br>Establecido a 0: " + array);
}

function add1(array) {
    array.forEach((element, index) => {
        array[index]++;
    });
    document.write("<br><br>Establecido a 1: " + array);
}

function separados(array) {
    document.write("<br><br>Separados por espacios: " + array.join(' '));
}