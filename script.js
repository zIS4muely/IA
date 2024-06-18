const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual é o maior planeta do Sistema Solar?",
        alternativas: ["Júpiter",//certa
            "Marte"
        ]

    },
    {
        enunciado: "Qual destes é um mamífero marinho?",
        alternativas: ["Golfinho ", //certa
            "Tubarão"
        ]

    },
    {
        enunciado: "Qual é a capital da Austrália?",
        alternativas: ["Sydney",
            "Canberra" //certa
        ]

    },
    {
        enunciado: "Qual destes é um planeta anão?",
        alternativas: ["Marte",
            "Plutão" //certa
        ]

    },
    {
        enunciado: "Qual é o maior mamífero terrestre atualmente?",
        alternativas: ["Elefante africano", //certa
            "Urso polar"
        ]

    } // fecha objeto de pergunta
]; //fecha lista de perguntas

let atual= 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
 caixaPerguntas.textContent=perguntaAtual.enunciado;
}
mostraPergunta();