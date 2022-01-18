window.addEventListener('load', () => {
    /**Al cargar el documento que escuche y cargue la calculadora */
    const display = document.querySelector('.calculadora-display');

    const keypadButtons = document.getElementsByClassName('keypad-button');


    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display)
        })
    })

})

const calculadora = (button, display) => {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;
        case '=':
            calcular(display)
            break
        default:
            actualizar(display, button)
            break;
    }


}

const calcular = (display) => {
    display.innerHTML = eval(display.innerHTML)
}

const actualizar = (display, button) => {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

const borrar = (display) => {
    display.innerHTML = 0;
}

