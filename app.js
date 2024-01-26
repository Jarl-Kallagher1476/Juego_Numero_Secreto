let numSec = 0
let intentos = 0
let numSorteado = []
let numMax = 10

function asignarTxtElement(element, txt) {
    let elementHTML = document.querySelector(element)
    elementHTML.innerHTML = txt
}

function verificarIntento() {
    let numUser = parseInt(document.getElementById('valorUser').value)

    if (numUser === numSec) {
        asignarTxtElement('p', `Acertaste el número secreto es ${numSec} en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acerto
        if (numUser > numSec) {
            asignarTxtElement('p', 'El número secreto es menor')
        } else {
            asignarTxtElement('p', 'El número secreto es mayor')
        }
        intentos++
        cleanBox()
    }
}

function genNumSec() {
    let numGen = Math.floor(Math.random() * numMax) + 1
    console.log(numGen)
    console.log(numSorteado)
    //Si ya sorteamos TODOS los numeros
    if (numSorteado.length == numMax) {
        asignarTxtElement('p', 'Ya se sortearon TODOS los números posibles')
    } else {
        //Si el numero generado esta incluido en el array
        if (numSorteado.includes(numGen)) {
            return genNumSec()
        } else {
            numSorteado.push(numGen)
            return numGen
        }
    }
}

function cleanBox() {
    let valorBox = document.querySelector('#valorUser')
    valorBox.value = ''
}

function initialConditions() {
    asignarTxtElement('h1', 'Juego del numero secreto')
    asignarTxtElement('p', `Indica un numero entre 1 y ${numMax}`)
    numSec = genNumSec()
    intentos = 1
}

function reiniciarJuego(e) {
    //limpiar la caja
    cleanBox()

    //indicar mensaje de intervalo de numero
    //Generar numero aleatorio
    //Reinciar el numero de intentos    
    initialConditions()

    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

initialConditions()



