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
    },
    {title: "Quem o Thanos sacrifica para adquirir a Pedra da Alma?",
    image: "../assets/perguntas/ThanosGamora.jpg",
    options: ["Nebulosa","Natasha","Homem de Ferro","Gamora"],
    right_option: "Gamora"
    },
    {title: "O que Thor quer quando está na lanchonete?",
    image: "../assets/perguntas/ThorCafe.jpg",
    options: ["Uma fatia de torta","Uma caneca de cerveja","Uma pilha de panquecas","Um copo de café"],
    right_option: "Um copo de café"
    },
    {title: "Antes de se tornar Vision, qual é o nome do mordomo de IA do Homem de Ferro?",
    image: "../assets/perguntas/Visao.jpg",
    options: ["HOMER","JARVIS","ALFRED","MARVIN"],
    right_option: "JARVIS"
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
// Gerenciando o pop up da pagina
const pop = document.querySelector("div.pop-up");

button_quit.addEventListener("click", () => {
    pop.style.display="flex";
});

const stay_playing = document.querySelector("button#continuar-jogando-popup");

stay_playing.addEventListener("click", () => {
    pop.style.display="none";
});

// Recuperar o nome do jogador atual, atraves da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');

// Criação do timer numerico
const timer = document.querySelector("span#timer");
let timer_seconds = 16;

// Variável que vai sortear a próxima pergunta
let current_question = Math.floor(Math.random() * 8);

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

// Criando div para a animacao da barra de tempo
const bar = document.createElement("div");
bar.classList.add("base");
document.getElementById("timer-animation").appendChild(bar);

window.onload = () => {
    nextQuestion();
    countDown();
}

button_next_question.addEventListener("click", () => {
    timer.innerHTML = 15;
    timer_seconds = 16;
    bar.classList.remove("base");   // Removendo a class da animacao
    nextQuestion();
});

function nextQuestion(){
    if(question_count !== 8){
        question_count++;
    } else{
        question_count = 8;
    }

    number_question.innerHTML = question_count;
    if (perguntas_respondidas.length === questions.length) {
        gameOver()
    }
    while (perguntas_respondidas.includes(current_question)) {
        current_question = Math.floor(Math.random() * 8);
    }

    perguntas_respondidas.push(current_question)

    question_image.src = questions[current_question].image;
    question_title.innerHTML = questions[current_question].title;

    let newOrder = questions[current_question].options;
    shuffle(newOrder);

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
        bar.classList.remove("base");
        nextQuestion();
        timer.innerHTML = 15;
        timer_seconds = 16;
        countDown();
    }

}

function shuffle(optionsOrdered) {
    let currentIndex = 4,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [optionsOrdered[currentIndex], optionsOrdered[randomIndex]] = [
        optionsOrdered[randomIndex], optionsOrdered[currentIndex]];
    }
  
    return optionsOrdered;
  }
  
  // Randomizar as opcoes da primeira questao
  let current_options = questions[current_question].options;
  shuffle(current_options);