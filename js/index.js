const questions = [
    {title: "Pergunta1",
    image: "../foda/imagem.jpg",
    options: ["a","b","c","d"],
    right_option: 0
    },
    {title: "Pergunta1",
    image: "../foda/imagem.jpg",
    options: ["a","b","c","d"],
    right_option: 0
    },
    {title: "Pergunta1",
    image: "../foda/imagem.jpg",
    options: ["a","b","c","d"],
    right_option: 0
    },
    {title: "Pergunta1",
    image: "../foda/imagem.jpg",
    options: ["a","b","c","d"],
    right_option: 0
    },
    {title: "Pergunta1",
    image: "../foda/imagem.jpg",
    options: ["a","b","c","d"],
    right_option: 0
    }

]

const question_image = document.querySelector("div#container-img");
const question_title = document.querySelector("div#container-title");
const options = document.querySelectorAll("button.option");
const button_quit = document.querySelector("button#sair")
const button_next_question = document.querySelector("button#proxima")


let current_question = Math.floor(Math.random() * 11); //ou usar questions.shuffle
let answered = false

let c = 0
for (let opt of options) {
    opt.id = c
    opt.innerHTML = 
    opt.addEventListener("click", () => {
        answered = true
        if (opt.id == options[current_question].right_option){
            
        }
    })
    c++
}


window.onload = () => {
    question_image.innerHTML = questions[current_question].image;
    let c = 0
    for (let opt of options) {
        opt.innerHTML = questions[current_question].options[c]
        c++
    }
} 
function gameOver() {

}

function nextQuestion(){

}