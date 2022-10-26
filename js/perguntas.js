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
let perguntas_respondidas = []


let correta = 0

let c = 0
for (let opt of options) {
    opt.addEventListener("click", () => {
        for (let opt of options) {
            opt.disabled = true
            if (opt.innerHTML === questions[current_question].right_option) {
                correta = opt
            }
        }
        button_next_question.disabled = false;
        console.log("button_next_question.disabled: ",button_next_question.disabled)
        if (opt.innerHTML === questions[current_question].right_option){
            opt.classList.add("correct")
            console.log("ACERTOU");
        } else {
            opt.classList.add("wrong")
            correta.classList.add("correct")
           console.log("ERROU");
           console.log("Correta: ", correta)
        }
    })
    c++
}

window.onload = nextQuestion()

button_next_question.addEventListener("click", nextQuestion)

function nextQuestion(){
    if (perguntas_respondidas.length === questions.length) {
        gameOver()
    }
    while (perguntas_respondidas.includes(current_question)) {
        current_question = Math.floor(Math.random() * 5);
    }

    perguntas_respondidas.push(current_question)
    console.log("respondidas: ", perguntas_respondidas)
    console.log("Current question nextQuestion(): ", current_question)

    question_image.src = questions[current_question].image;
    question_title.innerHTML = questions[current_question].title;

    let c = 0
    for (let opt of options) {
        opt.classList.remove("correct")
        opt.classList.remove("wrong")
        opt.innerHTML = questions[current_question].options[c]
        c++
        opt.disabled = false;
    }
    button_next_question.disabled = true
    
}

function gameOver() {
    window.location.href = "../pages/pos_jogo.html";
    console.log("ACABOU")
    perguntas_respondidas = [];

}

