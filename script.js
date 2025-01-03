function rolldice() 
{
const max = 6;
const min = 1;
const numberValue = document.getElementById('dataNumber').value;
const array = [];
const displayDices = document.querySelector('.display-dices');
displayDices.innerHTML = "";
const displayResult = document.querySelector('.display-result');

for (let i = 0; i < numberValue ; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    array.push(randomNumber);
    displayDices.innerHTML += `<img class="dices" src="assets/img/${randomNumber}.png" alt="Dados">`;
}

const sum = array.reduce(  (acumulador, element) => {
   return acumulador + element;
});

displayResult.innerHTML = `<p id="result"> Resultado: ${sum} </p>`;
document.getElementById('dataNumber').value = "";
}