function rolldice() {
    const max = 6;
    const min = 1;
    const numberValue = Number(document.getElementById("diceNumber").value);
    const array = [];
    const displayDices = document.querySelector(".display-dices");
    displayDices.innerHTML = "";
    const displayResult = document.querySelector(".display-result");
  
    for (let i = 0; i < numberValue; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      array.push(randomNumber);
      displayDices.innerHTML += `<img class="dices" style="width: 20%; margin: 5px;" src="assets/img/${randomNumber}.png" alt="Dados">`;
    }

   
    if (numberValue <= 0) {
      displayResult.innerHTML = `<p id="result"> Digite um numero valido! </p>`;   
    } else {
      const sum = array.reduce((acumulador, element) => {
        return acumulador + element;
      });
      displayResult.innerHTML = `<p id="result"> Resultado: ${sum} </p>`;
    }
  
    document.getElementById("diceNumber").value = "";
  }
  