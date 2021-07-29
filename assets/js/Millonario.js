// Quien quiere ser millonario
// Inicializar Variables
let btnStart = document.getElementById("btnStart");
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let btnC = document.getElementById("btnC");
let btnD = document.getElementById("btnD");
let pregunta = document.getElementById("pregunta");
let btnfin = document.getElementById("btnfin");
let btndinero = document.getElementById("btndinero");

let habilitar = 0;
let habilitarBotones = 0;
let numeroActual = 0; 
let dinero = 0;
let dinerotemporal = 0;

let preguntas = [    
    "¿ Si 2+2 =4, Cual es la masa del Sol? ",
    "¿ Que pasaria si pinocho dice: me va a crecer la nariz? ",
    "¿ Si Zeus lucha contra Odin, que pasa ? ",
    "¿ Capital de Colombia? ",
    "¿ te esta gustando este juego ? ",
    " Hay un terremoto, necesitas guardar la informacion ",
    " Bonus: 1 + 1 ",
    "¿ Cuantos oceanos hay en la Tierra ? ",
    "¿ Como es la comunidad de LOL ? ",
    " En colombia que significa *melo*",
    "¿ Cual el rio mas largo del mundo? ",
    "¿ Cuál es la nación más pequeña del mundo? ",
]

let respuestas = [
    ["A. 1.989 × 10^30 kg", "B. 1.349 × 10^30 kg", "C. 2.24 × 10^30 kg ", "D. 1.656 × 10^30 kg" ],
    ["A. La nariz le crece", "B. La respuesta esta en tu corazon", "C. La nariz no le crece", "D. La nariz explota" ],
    ["A. LLega Thor ", "B. Zeus derrota a Odin", "C. Goku les gana", "D. Odin derrota a Zeus" ],
    ["A. Medellin 3", "B. Bogota ", "C. Cali", "D. Cartagena" ],
    ["A .Es la C ", "B. Recordar mas tarde", "C. Si, me encanta", "D. No, es aburrido" ],
    ["A. git (fetch pull commit)", "B. git (add log commit)", "C. git (push commit pull)", "D. git (add commit push)" ],
    ["A. 2 ", "B. Esta no es", "C. Tampoco esta", "D. Es la A" ],
    ["A. 4 Oceanos ", "B. 5 Oceanos ", "C. 6 Oceanos ", "D. 7 Oceanos " ],
    ["A. Alegre ", "B. Amistosa ", "C. Colaboradora", "D. Toxica " ],
    ["A. Morenito", "B. Amargado", "C. Chevere ", "D. Triste d" ],
    ["A. Rio Yangtsé", "B. Rio Amazonas", "C. Rio Nilo", "D. Rio Danubio" ],
    ["A. Vaticano ", "B. Japon ", "C. Corea del Norte ", "D. Andarro " ]
]


let Correctas = [
    1,
    2,
    3,
    2,
    3,
    4,
    1,
    2,
    4,
    3,
    2,
    1,
]


// Funciones

const nuevaPregunta = () => {
    let numero = generateRandom(0,11);
    habilitarBotones = 1;
    numeroActual = numero; 
    pregunta.innerHTML = preguntas[numero];
    btnA.innerHTML = respuestas[numero][0];
    btnB.innerHTML = respuestas[numero][1];
    btnC.innerHTML = respuestas[numero][2];
    btnD.innerHTML = respuestas[numero][3];
    }

const generateRandom = (min, max) => {
return Math.round(Math.random()*(1+max-min)+min)
}


const activar = (opcion) => {
    if (Correctas[numeroActual] == opcion+1) {
        dinero += 10000;
        alert("Correcto, dinero en bolsa : $" + dinero + " pesos ")
        btndinero.innerHTML = dinero
        nuevaPregunta();
    } else {
        alert(" Perdiste todo el dinero ")   
        pregunta.innerHTML = " ¿Quieres reintentar? ";
        btnA.innerHTML = "<= dale en el click";
        btnB.innerHTML = " talvez ";
        btnC.innerHTML = " no ";
        btnD.innerHTML = " si ";
        habilitarBotones = 0;
    }
}


// Eventos 

btnA.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(0);
    }    
}
btnB.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(1);
    }    
}
btnC.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(2);
    }    
}
btnD.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(3);
    }    
}
btnStart.onclick = function (){
    habilitar = 1;
    alert("La prueba comienza ahora!")
    nuevaPregunta();
}
btnfin.onclick = function (){
    habilitar = 0;
    habilitarBotones = 0;
    alert("Te has retirado, dinero en bolsa : $" + dinero + " pesos ")
    dinero = 0;
}





