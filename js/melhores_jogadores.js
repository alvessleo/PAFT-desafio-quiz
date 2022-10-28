window.onload = () => {
    const container_table = document.querySelector("div.rank-table")
    const tr_primeiro_lugar = document.querySelector("tr#primeiro-lugar")

    let jogadores = JSON.parse(localStorage.getItem("jogadores"))

    console.log("jogadores ", jogadores)
    
    ordenados = jogadores.sort((a, b) => (a.pontuacao > b.pontuacao) ? -1 : 1)

    let c = 1
    for (let jogador of jogadores){
        let tr_teste = document.createElement("tr")
        tr_teste.setAttribute("id", `${c}lugar`)

        td_posicao_teste = document.createElement("td")
        td_posicao_teste.classList.add(`rank${c}`)
        td_posicao_teste.innerHTML = `${c}`

        td_pontuacao_teste = document.createElement("td")
        td_pontuacao_teste.innerHTML = `${jogador.pontuacao}`

        td_nome_teste = document.createElement("td")
        td_nome_teste.innerHTML = `${jogador.nome}`

        tr_teste.appendChild(td_posicao_teste)
        tr_teste.appendChild(td_pontuacao_teste)
        tr_teste.appendChild(td_nome_teste)

        console.log("teste: ", tr_teste)

        document.getElementById("rank").appendChild(tr_teste)
        c++
    }

}