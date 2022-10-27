window.onload = () => {
    const container_table = document.querySelector("div.rank-table")
    const table = document.querySelector("table#rank")
    const tr_primeiro_lugar = document.querySelector("tr#primeiro-lugar")
    console.log(tr_primeiro_lugar)


    let jogadores = JSON.parse(localStorage.getItem("jogadores"))

    console.log(jogadores)

    let maior_pontuacao = -99
    let melhor_jogador = {nome: "a", pontuacao: -999}
    for (let jogador of jogadores) {
        if (jogador.pontuacao > maior_pontuacao) {
            maior_pontuacao = jogador.pontuacao
            melhor_jogador.nome = jogador.nome
            melhor_jogador.pontuacao = jogador.pontuacao
        }     
    }

    container_table.innerHTML += `Melhor jogador ${melhor_jogador.nome}. Pontuação ${melhor_jogador.pontuacao}`


    let td_posicao_primeiro_lugar = document.createElement("td")
    td_posicao_primeiro_lugar.classList.add("rank1")
    td_posicao_primeiro_lugar.innerHTML = 1

    let td_nome_primeiro_lugar = document.createElement("td")
    td_nome_primeiro_lugar.setAttribute("id", "nome-primeiro-lugar")
    td_nome_primeiro_lugar.textContent = melhor_jogador.nome

    let td_pont_primeiro_lugar = document.createElement("td")
    td_pont_primeiro_lugar.setAttribute("id", "pont-primeiro-lugar")
    td_pont_primeiro_lugar.textContent = melhor_jogador.pontuacao

    tr_primeiro_lugar.appendChild(td_posicao_primeiro_lugar)
    tr_primeiro_lugar.appendChild(td_pont_primeiro_lugar)
    tr_primeiro_lugar.appendChild(td_nome_primeiro_lugar)

    console.log(td_posicao_primeiro_lugar)
    console.log(td_pont_primeiro_lugar)
    console.log(td_nome_primeiro_lugar)

    console.log(tr_primeiro_lugar)

    table.appendChild(tr_primeiro_lugar)
    
}