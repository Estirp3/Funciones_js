// CÓDIGO ORIGINAL
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

const   ele = document.getElementById("ele1");
ele.style.display = 'flex'
ele.style.justifyContent = 'center'


// Variable para alternar el estado
let estadoOriginal = true;

ele.addEventListener("click", () => {
        if (estadoOriginal) {
            // Cambiar a estado modificado
            pintar(ele, 'yellow');
            cambiarTexto(ele, 'Te dije que cambiaba');
        } else {
            // Volver a estado original
            pintar(ele, 'white')
            cambiarTexto(ele, 'Soy un Texto que cambia ');
        }
        // Alternar el estado
        estadoOriginal = !estadoOriginal;
    });

function pintar(ele, color = 'green'){
        ele.style.backgroundColor = color
}

// Función para cambiar el texto
function cambiarTexto(elemento, nuevoTexto) {
        ele.textContent = nuevoTexto; // Cambia el texto del elemento
}