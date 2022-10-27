const h1_nome = document.querySelector("h1#name-pos-game")
const span_pontuacao = document.querySelector("span#pontuation-pos-game")

// Recuperar o nome do jogador atual, atraves da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const pontuacao = urlParams.get('pontuacao');

// Preparando jogador para ser adicionado ao localStorage
let jogador = {
    nome: nome,
    pontuacao: pontuacao
}


h1_nome.innerHTML = nome
span_pontuacao.innerHTML = pontuacao


addEntry()

function addEntry() {
    // Parse any JSON previously stored in allEntries
    var jogadores = JSON.parse(localStorage.getItem("jogadores"));
    if(jogadores == null) jogadores = [];
    let jogador = {
        "nome": nome,
        "pontuacao": pontuacao
    }
    localStorage.setItem("jogador", JSON.stringify(jogador));
    // Save allEntries back to local storage
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
};