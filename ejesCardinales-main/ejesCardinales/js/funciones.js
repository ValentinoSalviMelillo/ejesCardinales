function obtenerPuntoCardinal() {
    let grados = document.getElementById("frase").value;
    const puntosCardinales = [];

    const gradosArray = grados.split('-').map(Number);

    gradosArray.forEach(grado => {
        if ((grado >= 0 && grado <= 45) || (grado > 315 && grado <= 360)) {
            puntosCardinales.push('E');
        } else if (grado > 45 && grado <= 135) {
            puntosCardinales.push('N');
        } else if (grado > 135 && grado <= 225) {
            puntosCardinales.push('O');
        } else if (grado > 225 && grado <= 315) {
            puntosCardinales.push('S');
        }
    });
    alert(puntosCardinales.join(' '));
    return puntosCardinales;
}