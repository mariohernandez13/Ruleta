// Opciones de la ruleta y sus probabilidades
const opciones = [
    { name: 'Opción 1', probability: 0.5 },
    { name: 'Opción 2', probability: 0.3 },
    { name: 'Opción 3', probability: 0.2 },
    { name: 'Opción 4', probability: 0 }
];

// Referencias a elementos del DOM
const ruleta = document.getElementById('ruleta');
const girarBtn = document.getElementById('girarBtn');
const resultado = document.getElementById('resultado');

// Función para seleccionar una opción basada en probabilidades
function seleccionarOpcion(opciones) {
    const random = Math.random();
    let acumulado = 0;

    for (let i = 0; i < opciones.length; i++) {
        acumulado += opciones[i].probability;
        if (random < acumulado) {
            return opciones[i].name;
        }
    }
}

// Evento para girar la ruleta
girarBtn.addEventListener('click', () => {
    // Aquí puedes agregar animación si lo deseas
    const opcionSeleccionada = seleccionarOpcion(opciones);
    resultado.textContent = `¡La ruleta ha elegido: ${opcionSeleccionada}!`;
});
