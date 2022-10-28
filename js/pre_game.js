
const form = document.querySelector("form.game-start")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
})
document.querySelector("input#game_start").addEventListener("click" , () => {

    const nome = document.getElementById("username").value
    console.log(nome)
    if (nome === "" || nome === null) {
         return
    } else {
        setTimeout(50000)
        console.log(nome)
        window.location.href = `../pages/perguntas.html?nome=${nome}`
    }

})

