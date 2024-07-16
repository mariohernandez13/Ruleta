const ruleta = document.getElementById('ruleta');
const botonGirar = document.getElementById('girar');
const resultado = document.getElementById('resultado');

const segmentos = [
    { premio: 'Tira otra vez', probabilidad: 0.3 },
    { premio: 'Reto', probabilidad: 0.1 },
    { premio: 'Beso', probabilidad: 0.5 },
    { premio: 'Premio 4', probabilidad: 0.15 },
    { premio: 'Premio 5', probabilidad: 0.2 },
    { premio: 'Copa Gratis', probabilidad: 0 }
];
const numSegmentos = segmentos.length;
const anguloSegmento = 360 / numSegmentos;

function seleccionarPremio() {
    const random = Math.random();
    let acumulado = 0;

    for (let i = 0; i < segmentos.length; i++) {
        acumulado += segmentos[i].probabilidad;
        if (random < acumulado) {
            return i;
        }
    }
}

function girarRuleta() {
    const premioIndex = seleccionarPremio();
    const giroRandom = Math.floor(Math.random() * 360 + 360 * 3); // Entre 1080 y 1440 grados
    const anguloFinal = premioIndex * anguloSegmento + (anguloSegmento / 2);
    const giroTotal = giroRandom + anguloFinal;

    ruleta.style.transition = 'transform 4s ease-out';
    ruleta.style.transform = `rotate(${giroTotal}deg)`;

    setTimeout(() => {
        ruleta.style.transition = 'none';
        ruleta.style.transform = `rotate(${anguloFinal}deg)`;
        resultado.textContent = `¡Felicidades! Has ganado: ${segmentos[premioIndex].premio}`;
    }, 4000);
}

botonGirar.addEventListener('click', girarRuleta);
