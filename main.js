// VARIABLES

const listaColores = ["aqua",
    "red","orange",
    "green",
    "magenta"]

let contador = 1

// FUNCIONES

function cambioColor() {
    const cuadrado = document.getElementById('cuadrado1')
    cuadrado.style.backgroundColor = listaColores[contador]
    contador = contador + 1
    if (contador > 4) {
        contador = 0
    }
}

function resetColor() {
    const cuadrado = document.getElementById('cuadrado1')
    cuadrado.style.backgroundColor = listaColores[0]
}

// EVENTOS

const boton1 = document.getElementById('boton1')
boton1.onclick = cambioColor

const boton2 = document.getElementById('boton2')
boton2.onclick = resetColor

