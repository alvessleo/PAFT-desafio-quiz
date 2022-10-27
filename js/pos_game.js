const h1_nome = document.querySelector("h1#name-pos-game")
const span_pontuacao = document.querySelector("span#pontuation-pos-game")

// Recuperar o nome do jogador atual, atraves da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const pontuacao = urlParams.get('pontuacao');

h1_nome.innerHTML = nome
span_pontuacao.innerHTML = pontuacao
