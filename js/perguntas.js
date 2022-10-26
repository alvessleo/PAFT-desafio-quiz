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

let question_count = 0;
const number_question = document.querySelector("span#number-question");
number_question.innerHTML = question_count;

// Objetos da tela a serem modificados conforme a questão
const question_image = document.querySelector("img#image-question");
const question_title = document.querySelector("p#current-question");
const options = document.querySelectorAll("button.button-option");
const button_quit = document.querySelector("button.sair-btn");

const timer = document.querySelector("span#timer");
let timer_seconds = 16;

const button_next_question = document.querySelector("button.next-btn");
button_next_question.disabled = true;

// TENTATIVA DE PEGAR O AFTER DA PROGRESS BAR
/*const progress_bar = window.getComputedStyle(
    document.querySelector(".base"), "::after"
).getPropertyValue("max-width");*/

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

window.onload = () => {
    nextQuestion();
    countDown();
}

button_next_question.addEventListener("click", () => {
    timer.innerHTML = 15;
    timer_seconds = 16;
    nextQuestion();
});

function nextQuestion(){
    if(question_count !== 5){
        question_count++;
    } else{
        question_count = 5;
    }

    number_question.innerHTML = question_count;
    console.log(question_count)
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

function countDown(){
    timer_seconds--
    timer.innerHTML = timer_seconds;
    if (timer_seconds > 0) {
		setTimeout(countDown, 1000);
	} else if(timer_seconds === 0){
        nextQuestion();
        timer.innerHTML = 15;
        timer_seconds = 16;
        countDown();
    }

    // TENTATIVA DE REALIZAR COUNTDOWN PROGRESS BAR
    /*let animation_bar = setInterval(() => {
        let progress_width = timer_seconds / 10 * 100;

        if (timer_seconds > 0){
            progress_bar.style.width = progress_width + "%";
        } else{
            clearInterval(animation_bar);
            progress_bar.style.width = progress_bar = "0%";
        }
    }, 1000);*/


}
