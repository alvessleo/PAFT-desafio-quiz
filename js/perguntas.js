// Questões
const questions = [

    {title: "Qual é o nome do martelo de Thor?",
    image: "../assets/perguntas/MarteloThor.jpg",
    options: ["Mjolnir","Vanir","Aesir","Norn"],
    right_option: "Mjolnir"
    },
    {title: "Qual nome falso Natasha usa quando conhece Tony?",
    image: "../assets/perguntas/FalsaNatasha.jpg",
    options: ["Natalie Rushman","Natalia Romanoff","Nicole Rohan","Naya Rabe"],
    right_option: "Natalie Rushman"
    },
    {title: "Do que é feito o escudo do Capitão América?",
    image: "../assets/perguntas/EscudoCapitao.jpg",
    options: ["Adamantium","Vibranium","Promécio","Carbonádio"],
    right_option: "Vibranium"
    },
    {title: "Quantas pedras infinitas existem?",
    image: "../assets/perguntas/PedrasInfinitas.png",
    options: ["4","6","5","3"],
    right_option: "6"
    },
    {title: "Qual desses personagens não é da Marvel?",
    image: "../assets/perguntas/PersonagemDC.jpg",
    options: ["Tocha Humana","Motoqueiro Fantasma","Homem de Ferro","Lanterna Verde"],
    right_option: "Lanterna Verde"
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
        button_next_question.disabled = false;
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

