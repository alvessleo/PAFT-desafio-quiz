window.onload = () => {
    const container_table = document.querySelector("div.rank-table")
    //let table = document.getElementById("#rank")
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

    // let tr_create = document.createElement("tr");
    // tr_create.setAttribute("id", "primeirolugar");

    // document.getElementById("rank").prepend(tr_create)
    
    // let td_posicao_primeiro_lugar = document.createElement("td")
    // td_posicao_primeiro_lugar.classList.add("rank1")
    // td_posicao_primeiro_lugar.innerHTML = 1

    // let td_nome_primeiro_lugar = document.createElement("td")
    // td_nome_primeiro_lugar.setAttribute("id", "nome-primeiro-lugar")
    // td_nome_primeiro_lugar.innerHTML = jogadores[0].nome

    // let td_pont_primeiro_lugar = document.createElement("td")
    // td_pont_primeiro_lugar.setAttribute("id", "pont-primeiro-lugar")
    // td_pont_primeiro_lugar.innerHTML = jogadores[0].pontuacao

    // tr_create.appendChild(td_posicao_primeiro_lugar)
    // tr_create.appendChild(td_pont_primeiro_lugar)
    // tr_create.appendChild(td_nome_primeiro_lugar)

    // console.log(td_posicao_primeiro_lugar)
    // console.log(td_pont_primeiro_lugar)
    // console.log(td_nome_primeiro_lugar)

    // console.log("console tr primeiro lugar: ", tr_create)


}