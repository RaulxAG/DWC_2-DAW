function letraDNI(dni) {
    const letras = ("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
    
    if (isNaN(dni)) {
        return "-";
    }else{
        return letras[dni % 23];
    }
}