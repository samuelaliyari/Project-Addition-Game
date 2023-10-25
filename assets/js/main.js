
const firstNumber = document.body.querySelector("#numOne");
const secondNumber = document.body.querySelector("#numTwo");
const answer = document.body.querySelector("#answer");

const resultCorrect = document.body.querySelector("h3")
const resultInCorrect = document.body.querySelector("h4")


const getRandomInt = () => Math.floor(Math.random() * 100)

firstNumber.value = getRandomInt();
secondNumber.value = getRandomInt();

const checkAnswer = () => {
    event.preventDefault()
    const numberAnswer = Number(answer.value)
    const correct = Number(firstNumber.value) + Number(secondNumber.value)
    if (correct === numberAnswer) {
        resultCorrect.textContent = "Das Stimmt"
    } else {
        resultInCorrect.textContent = "Das ist leider Falsch"
    }
}