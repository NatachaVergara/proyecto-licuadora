
const timerH = document.querySelector('.clock');
const btnSubmit = document.querySelector('.submit')
const btErased = document.querySelector('.erased')


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let timer = Number(document.querySelector('#timer').value);
    let runTimer = timer
    if (timerH.innerHTML.length === 0) {
        alert('Dont leave the field')
        location.reload();
    }


    /**Funcion cuenta regresiva */
    const countDown = setInterval(() => {
        runTimer--
       
        timerH.innerHTML = ` ${runTimer} Seconds`
        //Muestro el contador en el title de mi documento
        document.title = timerH.innerHTML
        

        if (runTimer <= 0 || runTimer < 1) {
            timerH.innerHTML = `TIME OUT`
            document.title = timerH.innerHTML
            clearInterval(countDown)
           
           
        }

    }, 1000)




})

btErased.addEventListener('click', () => {
    location.reload();
})





