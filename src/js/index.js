/* 
  OBJETIVO - ao clicar no botão, mostrar a imagem de fundo correspondente

  - passo 1 - encontrar uma forma de pegar o elemento HTML dos botões
  - passo 2 - dar um jeito de identificar o clique do usuário no botão
  - passo 3 - desmarcar o botão selecionado anteriormente
  - passo 4 - marcar o botão selecionado como se estivesse selecionado
  - passo 5 - esconder a imagem de fundo anterior
  - passo 6 - fazer aparecer a imagem de fundo correspondete ao botão clicado
*/

//- passo 1 - encontrar uma forma de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
console.log(botoesCarrossel);

const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar o botão selecionado anteriormente 
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão selecionado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        //passo 6 - fazer aparecer a imagem de fundo correspondete ao botão clicado
        mostrarImagemDeFundo(indice);
    });
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


//updates

var interval = 0;

var maxSlider = document.querySelectorAll('.imagem').length - 1;

acao ();

function acao(){

    let img = document.querySelectorAll('.imagem')

    setInterval(function(){
        img[interval].style.display = 'none';
        interval++;
        if (interval > maxSlider){
            interval = 0;
        }

        img[interval].style.display = 'block';

    },4500)
}