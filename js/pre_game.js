document.querySelector("button#game_start").addEventListener("click" , () => {
    const nome = document.getElementById("username").value
    window.location.href = `../pages/perguntas.html?nome=${nome}`
})