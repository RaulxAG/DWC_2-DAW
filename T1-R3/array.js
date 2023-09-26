function maxExtension(...Valores) {
    let m = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        if (valores[i]>m) m=valores[i];
    }

    valores.forEach(element => {
        if (element) m=element;
    });
}

function sumaArray(array1, array2) {
    let arrayConcatenado=[...array1,...array2];
    return arrayConcatenado;
}