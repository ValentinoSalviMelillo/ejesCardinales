function porcentajeN() {
    let vol = obtenerPuntoCardinal();

    let contador = 0;
    for(let i=0;i<=vol.length;i++){
        if(vol[i]=="N"){
            contador++;
        }
    }

    const porcentaje = (contador / vol.length) * 100;

    alert(`Porcentaje de veces que se recorrió 'N': ${porcentaje}%`);
}