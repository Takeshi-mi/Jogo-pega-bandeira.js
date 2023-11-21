const BANDEIRAS = 50
const TEMPO_INICIAL = 20
var pontos
var tempo

function iniciarJogo() {
    
    pontos = 0
    tempo = TEMPO_INICIAL
    var tela = document.getElementById("tela")
   /* tela.innerHTML = ""
    for(let i=0; i < BANDEIRAS; i++)
    {
        var bandeira = document.createElement("img")
        bandeira.src = "img/bandeirazul.png"
        bandeira.id = 'm' + i
        
        bandeira.onclick = function(){
            pegarBandeira(this);            
         

        }
        tela.appendChild(bandeira)
    }*/
    timer = setInterval(contarTempo, 1000);
}

/*function pegarBandeira(elemento){
    elemento.src = "img/bandeiravermelha.png"
    elemento.onclick = null
    pontos++
}*/

function contarTempo()
{
        tempo--
        document.getElementById("tempo").innerHTML = tempo
    
    if(tempo< 0){
        clearInterval(timer)
        alert("Parabéns você conseguiu fazer "+pontos+" pontos")
        iniciarJogo()
    }
}


function pegou(bandeira) {
    pontos++
    document.getElementById("pontos").innerHTML = pontos
    bandeira.style.position = 'absolute';
    bandeira.style.bottom = geraPosicao(10, 90);
    bandeira.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
