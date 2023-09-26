function maximo(argumentos) {

    var m = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < argumentos.length; i++) {
        if (argumentos[i]>m) {
            m = argumentos[i];
        }
    }

    return m;
}