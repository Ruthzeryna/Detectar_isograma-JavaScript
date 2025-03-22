/**
 * --- Programita diseñado por Ruthzeryna ---
 * Propósito: Determinar si una palabra es un isograma.
 * Definicion de isograma: Es una palabra en la que no hay letras repetidas.
 * Se ignoran:
 * - Los espacios iniciales y finales.
 * - Mayúsculas y minúsculas.
 * - Acentos.
 * Ejemplo: "Cama" no es un Isograma, porque la letra 'a' se repite.
 * Ejemplo: "Cena" es un Isograma, porque no hay letras repetidas.
 * Ejemplo: "Cómo" no es un Isograma, porque la letra 'o' se repite.
 */

const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function esIsograma(palabra) {

    palabra = palabra.trim();
    
    if (palabra.includes(" ")) {
        return `"${palabra}": No es isograma | Razón: contiene espacios`;
    }
    
    const palabraNormalizada = eliminarAcentos(palabra.toLowerCase());
    
    const letrasUnicas = new Set();
    
    for (let i = 0; i < palabraNormalizada.length; i++) {
        const letra = palabraNormalizada[i];
        
        if (letrasUnicas.has(letra)) {
            return `"${palabra}": No es isograma | Razón: la letra '${letra}' está repetida`;
        }
        
        letrasUnicas.add(letra);
    }
    
    return `"${palabra}": Si es isograma | Todas las letras son únicas`;
}

function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function preguntar() {
    interfaz.question("¿Será isograma? Indique su palabra: ", (palabra) => {
        console.log(esIsograma(palabra));
        preguntarContinuar();
    });
}

function preguntarContinuar() {
    interfaz.question("¿Quieres continuar? (s/n): ", (respuesta) => {
        respuesta = respuesta.trim().toLowerCase();
        
        if (respuesta === "s" || respuesta === "y") {
            preguntar();
        } else if (respuesta === "n") {
            console.log("Saliendo...");
            interfaz.close();
        } else {
            console.log("Por favor indica 's' ó 'y' para sí, 'n' para no");
            preguntarContinuar();
        }
    });
}

console.log("== ¿Es isograma? ==");
console.log("Un isograma es una palabra sin letras repetidas\n");
preguntar();