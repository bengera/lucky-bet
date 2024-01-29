let account = 2000;

const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const initialNum = document.querySelector('.initial-number__value');
const messageBox = document.querySelector('.message');

//Update the slider value based on account number
const accountValueEl = document.querySelector('.account__value');
accountValueEl.textContent = '$ ' + account;
const accountValue = accountValueEl.textContent;
const accountValueAmount = Number(accountValue.replace('$',''));
slider.max = accountValueAmount;

output.textContent = '$' + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = '$' + this.value;
}


function init() {
  console.log('game started');
  messageBox.textContent = 'Higher or Lower?'
  let randomNumber = (Math.floor(Math.random() * 100) + 1);
  initialNum.textContent = randomNumber;

}


init();