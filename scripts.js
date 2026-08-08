let fundo = document.querySelector(".circulo");
let imagem = document.querySelector(".copo");

function trocaImagem(endereco) {
    imagem.src = endereco;
}
function trocarACor(cor) {
    circulo.style.background = cor
}

function trocaFundo(cor) {
    fundo.style.background = cor
}