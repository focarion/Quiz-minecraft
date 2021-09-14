let i = 0;
window.onload = function (){
    let question = document.getElementById("question")
    let questions =
      [
        {
            question: "A tesoura pode ser usada para coletar qual desses blocos?",
            choices: ["Todas as alternativas abaixo", "Folhas", "Vinhas", "Teias de aranha"],
            answer: 0
        }


      ];
      let radio1 = document.getElementById("radioText1")
      let radio2 = document.getElementById("radioText2")
      let radio3 = document.getElementById("radioText3")
      let radio4 = document.getElementById("radioText4")
    question.textContent = questions[i].question
    let options = questions[i].choices
    let z = 1
    for(let opt of options){

        if(z == 1){
            radio1.innerHTML = opt
            z++
        }
        else if(z == 2){
            radio2.innerHTML = opt
            z++
        }
        else if(z == 3){
            radio3.innerHTML = opt
            z++
        }
        else if(z == 4){
            radio4.innerHTML = opt
            z++
        }
        else{
            z = 1
        }
    }

}
function radioChecked(radio) {
    let radioText1 = document.getElementById("optionContainer1")
    let radioText2 = document.getElementById("optionContainer2")
    let radioText3 = document.getElementById("optionContainer3")
    let radioText4 = document.getElementById("optionContainer4")
    let radio1 = document.getElementById("checkbox1")
    let radio2 = document.getElementById("checkbox2")
    let radio3 = document.getElementById("checkbox3")
    let radio4 = document.getElementById("checkbox4")
    const value = radio.value
    if(value == 1){
        radio1.classList.add("checked")
        radioText1.classList.add("labelChecked")
        radio2.classList.remove("checked")
        radioText2.classList.remove("labelChecked")
        radio3.classList.remove("checked")
        radioText3.classList.remove("labelChecked")
        radio4.classList.remove("checked")
        radioText4.classList.remove("labelChecked")
    }
    else if(value == 2){
        radio1.classList.remove("checked")
        radioText1.classList.remove("labelChecked")
        radio2.classList.add("checked")
        radioText2.classList.add("labelChecked")
        radio3.classList.remove("checked")
        radioText3.classList.remove("labelChecked")
        radio4.classList.remove("checked")
        radioText4.classList.remove("labelChecked")
    }
    else if(value == 3){
        radio1.classList.remove("checked")
        radioText1.classList.remove("labelChecked")
        radio2.classList.remove("checked")
        radioText2.classList.remove("labelChecked")
        radio3.classList.add("checked")
        radioText3.classList.add("labelChecked")
        radio4.classList.remove("checked")
        radioText4.classList.remove("labelChecked")
    }
    else if(value == 4){
        radio1.classList.remove("checked")
        radioText1.classList.remove("labelChecked")
        radio2.classList.remove("checked")
        radioText2.classList.remove("labelChecked")
        radio3.classList.remove("checked")
        radioText3.classList.remove("labelChecked")
        radio4.classList.add("checked")
        radioText4.classList.add("labelChecked")
    }
}
getNewQuestion = () => {
  const radio1 = document.getElementById("radioText1")
  const radio2 = document.getElementById("radioText2")
  const radio3 = document.getElementById("radioText3")
  const radio4 = document.getElementById("radioText4")
  const radioInput1 = document.getElementById("radio1")
  const radioInput2 = document.getElementById("radio2")
  const radioInput3 = document.getElementById("radio3")
  const radioInput4 = document.getElementById("radio4")
  let correct = false;
  const questions =
      [
        {
            question: "A tesoura pode ser usada para coletar qual desses blocos?",
            choices: ["Todas as alternativas abaixo", "Folhas", "Vinhas", "Teias de aranha"],
            answer: 0
        },

        {
            question: "Onde slimes nascem?",
            choices: ["Pantanos", "Cavernas", "Pantanos e Cavernas", "Nenhuma das alternativas acima"],
            answer: 2
        },
        {
          question: "Qual dos monstros abaixo não sobrevivem o amanhecer?",
          choices: ["Zumbi", "Aranha", "Creeper", "Morcego"],
          answer: 0
        },
        {
          question: "Qual das armaduras de cavalo abaixo não existe?",
          choices: ["Armadura de diamante para cavalo", "Armadura de ouro para cavalo", "Armadura de ferro para cavalo", "Armadura de madeira para cavalo"],
          answer: 3
        },
        {
          question: "Qual item você deve pegar primeiro?",
          choices: ["Madeira", "Terra", "Pedra", "Diamante"],
          answer: 0
        },
        {
          question: "Quantos olhos de ender se precisa para abrir o portal do End",
          choices: ["4", "8", "12", "16"],
          answer: 2
        },
        {
          question: "Quais desse não é comestivel?",
          choices: ["Trigo", "Carne podre", "maça", "Bife cru"],
          answer: 0
        },
        {
          question: "Qual desses mobs o creeper tem medo?",
          choices: ["Vaca", "Aranha", "Jaguatirica", "Enderman"],
          answer: 2
        },
        {
          question: "O que você pode equipar para previnir o enderman de te atacar se olhar?",
          choices: ["Batata", "Abóbora", "Repolho", "Melancia"],
          answer: 1
        },
        {
          question: "Como um creeper elétrico é criado?",
          choices: ["Quando o creeper pega uma bateria", "Quando o creeper se alimenta com redstone", "Quando um raio cai numa distancia de até 4 blocos do creeper", "Atráves de poções e magia"],
          answer: 2
        },


    ];
    const answer = [radioInput1, radioInput2, radioInput3, radioInput4]
  if(answer[questions[i].answer].checked){
    correct= !correct;
  }
  else{
    window.location='../fail/index.html'
  }
  if(correct && i < 9){
    i++
    console.log(i)
    correct = !correct;
    question.textContent = questions[i].question
    let options = questions[i].choices
    let z = 1
    for(let opt of options){

        if(z == 1){
            radio1.innerHTML = opt
            z++
        }
        else if(z == 2){
            radio2.innerHTML = opt
            z++
        }
        else if(z == 3){
            radio3.innerHTML = opt
            z++
        }
        else if(z == 4){
            radio4.innerHTML = opt
            z = 1
        }
        else{
            z = 1
        }
    }
  }
  else if(i >= 9){
    i = 0
    window.location='../end/index.html'
  }
}