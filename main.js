let tarjetasDestapadas = 0
let tarjeta = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let timer = 30
let timerInicial = timer
let mostrarTiempo = document.getElementById("t-restante")
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let mostrarMovimientos = document.getElementById("movimientos")
let mostrarAciertos = document.getElementById("aciertos")
let temporizador = false

numbers = numbers.sort(()=> {
    return Math.random() -0.5});

function destapar(id){

    if(temporizador == false){
        contarTiempo()
        temporizador = true
    }

    tarjetasDestapadas++;

    if(tarjetasDestapadas === 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = numbers[id]
        tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt ="">`

        tarjeta1.disabled = true
    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numbers[id]
        tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt ="">`

        tarjeta2.disabled = true

        movimientos++
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0
            aciertos++
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            if(aciertos == 8){
                clearInterval(tiempoRegresivo)
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😲`
                mostrarTiempo.innerHTML = `Muy bien, Tardaste: ${timerInicial - timer} segundos`
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤑`
            }
        }else{
            setTimeout(()=> {
                tarjeta1.innerHTML = " "
                tarjeta2.innerHTML = " "
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjetasDestapadas = 0
            }, 500)
        }
    }
}

function contarTiempo(){
    tiempoRegresivo = setInterval(()=> {
        timer--
        mostrarTiempo.innerHTML =  `Tiempo: ${timer} segundos`
        if (timer == 0){
            clearInterval(tiempoRegresivo)
            bloquearTarjetas()
        }
    }, 1000)
}

function bloquearTarjetas(){
    for (let i = 0; i<= 15; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = `<img src="./img/${numbers [i]}.png" alt ="">`
        tarjetaBloqueada.disabled = true
    }
}