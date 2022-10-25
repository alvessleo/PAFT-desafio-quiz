// Questões
const questions = [

    {title: "Thor martelo?",
    image: "../assets/perguntas/MarteloThor.jpg",
    options: ["Mjolnir","Martelao","H","KK"],
    right_option: "Mjolnir"
    },
    {title: "Pergunta2",
    image: "../assets/perguntas/FalsaNatasha.jpg",
    options: ["a","b","c","d"],
    right_option: "a"
    },
    {title: "Pergunta3",
    image: "../assets/perguntas/EscudoCapitao.jpg",
    options: ["a","b","c","d"],
    right_option: "b"
    },
    {title: "Pergunta4",
    image: "../assets/perguntas/PedrasInfinitas.png",
    options: ["a","b","c","d"],
    right_option: "b"
    },
    {title: "Pergunta5",
    image: "../assets/perguntas/PersonagemDC.jpg",
    options: ["a","b","c","d"],
    right_option: "c"
    }

]

// Objetos da tela a serem modificados conforme a questão
const question_image = document.querySelector("img#image-question");
const question_title = document.querySelector("p#current-question");
const options = document.querySelectorAll("button.button-option");
const button_quit = document.querySelector("button.sair-btn")
const button_next_question = document.querySelector("button.next-btn")
button_next_question.disabled = true

// Variável que vai sortear a próxima pergunta
let current_question = Math.floor(Math.random() * 5);

// Variável para não repetir perguntas
const perguntas_respondidas = []

let c = 0

for (let opt of options) {
    opt.addEventListener("click", () => {
        button_next_question.disabled = false
        console.log("button_next_question.disabled: ",button_next_question.disabled)
        if (opt.innerHTML === questions[current_question].right_option){
            opt.classList.add("correct")
            console.log("ACERTOU");
        } else {
           console.log("ERROU");
        }
    })
    c++
}

window.onload = nextQuestion()

button_next_question.addEventListener("click", nextQuestion)

function nextQuestion(){
    current_question = Math.floor(Math.random() * 5);
    console.log("Current question nextQuestion(): ", current_question)
    question_image.src = questions[current_question].image;
    question_title.innerHTML = questions[current_question].title;
    let c = 0
    for (let opt of options) {
        opt.classList.remove("correct")
        opt.innerHTML = questions[current_question].options[c]
        c++
    }
    button_next_question.disabled = true
}

function gameOver() {

}

