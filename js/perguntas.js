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

// Objetos da tela a serem modificados conforme a questão
const number_question = document.querySelector("span#number-question");
number_question.innerHTML = question_count;
const total_questions = document.querySelector("span#total-questions");
total_questions.innerHTML = questions.length;
const question_image = document.querySelector("img#image-question");
const question_title = document.querySelector("p#current-question");
const options = document.querySelectorAll("button.button-option");
const button_quit = document.querySelector("button.sair-btn");

// Recuperar o nome do jogador atual, atraves da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');

// Criação do timer numerico
const timer = document.querySelector("span#timer");
let timer_seconds = 16;

// Variável que vai sortear a próxima pergunta
let current_question = Math.floor(Math.random() * 5);

// Variável para não repetir perguntas
let perguntas_respondidas = []

// Criação do botão de proxima questão
const button_next_question = document.querySelector("button.next-btn");
button_next_question.disabled = true;

let pontuacao = 0
let correta = 0
for (let opt of options) {
    opt.addEventListener("click", () => {
        for (let opt of options) {
            opt.disabled = true
            if (opt.innerHTML === questions[current_question].right_option) {
                correta = opt
            }
        }
        button_next_question.disabled = false;
        if (opt.innerHTML === questions[current_question].right_option){
            opt.classList.add("correct")
            pontuacao += 10
        } else {
            opt.classList.add("wrong")
            correta.classList.add("correct")
        }
    })
}

window.onload = () => {
    nextQuestion();
    countDown();

}

// Criando div para a animacao da barra de tempo
const bar = document.createElement("div");
bar.classList.add("base");
document.getElementById("timer-animation").appendChild(bar);

button_next_question.addEventListener("click", () => {
    timer.innerHTML = 15;
    timer_seconds = 16;
    bar.classList.remove("base");   // Removendo a class da animacao
    nextQuestion();
});

function nextQuestion(){
    console.log("nome: ", nome)
    if(question_count !== 5){
        question_count++;
    } else{
        question_count = 5;
    }

    number_question.innerHTML = question_count;
    if (perguntas_respondidas.length === questions.length) {
        gameOver()
    }
    while (perguntas_respondidas.includes(current_question)) {
        current_question = Math.floor(Math.random() * 5);
    }

    perguntas_respondidas.push(current_question)

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
    bar.classList.add("base");  // Adicionando novamente a class da barra de animacao
}

function gameOver() {
    window.location.href = `../pages/pos_jogo.html?nome=${nome}&pontuacao=${pontuacao}`;
    perguntas_respondidas = [];
    pontuacao = 0

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
