let btnNext = document.querySelector("#next");
let btnTexto = document.querySelector("#texto");
let btnArt = document.querySelector("#arte");
let btnEnd = document.querySelector("#end")
let btnVoltar1 = document.querySelector("#voltar1");
let btnVoltar2 = document.querySelector("#voltar2");
let btnEnviar = document.querySelector("#enviar");


let screen0 = document.querySelector(".screen0");
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let text = document.querySelector(".text");
let art = document.querySelector(".art")

let alerta = document.querySelector("#alert-error")
let video = document.querySelector("#video")
let nome = document.querySelector('#nome')




    //Eventos
 btnEnviar.addEventListener('click', verificarNome)
 btnNext.addEventListener('click', proximo);
 btnTexto.addEventListener('click', texto);

 btnEnd.addEventListener('click', sair);

 btnVoltar1.addEventListener('click', voltar1);
 btnVoltar2.addEventListener('click', voltar2);

 btnArt.addEventListener('click', arte)
document.addEventListener('keydown', enter)
nome.addEventListener('click', Reset)



function proximo(){

    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    // Faz a rolagem para o topo
    window.scrollTo(0, 0);
}

function texto() {

    screen2.classList.add('hide')
    text.classList.remove('hide')
    window.scrollTo(0, 0);
}

function sair(){
    
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    /* antes era screen0 porem ele fica com um bug na qual
     quando eu clico no botão "Sair" e ao voltar para o screen0 (o formulário inicial)
     ele aparece todas as telas(como o screen1, screen2, onde ta o vídeo com a arte e onde ta o texto)
     quando desce a página do screen0. 
     Obs: não sei o porque e não sabia como arrumar na hora então apenas troquei ali em cima para screen2
     pois ele fica normal, porém para voltar ao formulário tem que atualizar a página*/

    //screen2.classList.toggle('hide')
    window.scrollTo(0, 0);
}

function voltar1(){
    text.classList.toggle('hide')
    screen2.classList.toggle('hide')
    window.scrollTo(0, 0);
}

function voltar2(){
    art.classList.toggle('hide')
    screen2.classList.toggle('hide')
    window.scrollTo(0, 0);
    video.pause();
}

function arte(){
    screen2.classList.toggle('hide')
    art.classList.toggle('hide')
    window.scrollTo(0, 0);

}

function enviar(){

    screen0.classList.add('hide')
    screen1.classList.remove('hide')
      window.scrollTo(0, 0);
}


function Reset(){  
  alerta.classList.remove('open')    
}

function enter(e){
    if(e.key == 'Enter'){
        verificarNome()
    
    }}



function verificarNome() {
    var nome = document.getElementById('nome').value;
    
    if (nome === 'Erick') {
      // Redirecionar para outra página
     enviar()
     alerta.classList.remove('open')
     nome.value = "";

    } else {
        alerta.classList.add('open')
       nome.value = "";
        
    }
  }





  
  
  

  
  