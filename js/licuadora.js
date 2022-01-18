let estadoLicuadora = "apagada"
let licuadora = document.getElementById('blender')
let sonidoLicuadora = document.getElementById("blender-sound")
let botonLicuadora = document.getElementById("blender-button-sound")




function controlarLicuadora() {
    if (estadoLicuadora === "apagada") {
        estadoLicuadora = "prendida"
        licuadora.classList.add("active")
        licuadoraPrendida()
        

    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active")
        licuadoraPrendida()
        
    }
}

const licuadoraPrendida = () => {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
        sonidoLicuadora.currentTime = 0; 
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}




