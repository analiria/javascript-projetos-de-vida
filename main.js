const botoes= document.querySelectorAll(."botao");
const botoes= document.querySelectorAll(".aba-conteudo");

for(let i = 0; i<botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; i < botoes;length; j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new date("2025-10-05t00:00:00");
const tempoObjetivo2 = new date("2025-12-05t00:00:00");
const tempoObjetivo3 = new date("2025-12-05t00:00:00");
const tempoObjetivo4 = new date("2025-02-05t00:00:00");
contadores[0].textContent = tenpoObjetivo1 - tempoAtual;

function calculatempo(tempoObjetivo){
let   tempoAtual = new date();
let tempofinal = tempoObjetivo - tempoAtual;
let segundo =Math.floor(tempofinal/1000);
let minutos =Math.floor(segundo /60);
let horas =Math.floor(minutos /60);
let dias =Math.floor(horas /24);

   segundo %= 60;
   minutos %=60;
   horas %=24;
   if (tempofinal > 0 ){   
   return dias +" dias " + horas + "horas" + minutos + "minutos " + segundos + "segundos"
   }else{
    return "prazo finalizado";
}
}

function atualizacronometro(){
    for (let i = 0; i < contadores.length; i+++){
        contadores[i].textContent = calculatempo(tempos[i]);
    }
}

function comecacronometro(){
    atualizacronometro(); 
    setInterval(atualizacronometro , 1000);
}
comecacronometro();




