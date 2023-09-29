function trigonometria(angulo) {
    const anguloRadianes = angulo * (Math.PI / 180);
    return "seno: " + Math.sin(anguloRadianes) + " coseno: " + Math.cos(anguloRadianes) + " tangente: " + Math.tan(anguloRadianes);
}