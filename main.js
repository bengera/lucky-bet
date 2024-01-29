let account = 1000;
const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const initialNum = document.querySelector('.initial-number__value');
const messageBox = document.querySelector('.message');
const messageUpdate = document.querySelector('.message-update');
const buttons = document.querySelectorAll('.btn');

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
  // messageUpdate.textContent = 'You are betting ' + output.textContent;
}

function init() {
  console.log('game started');
  messageBox.textContent = 'Higher or Lower?'
  let randomNumber = (Math.floor(Math.random() * 100) + 1);
  initialNum.textContent = randomNumber;

}

// on click change style of button
for (const button of buttons) {
  
  button.addEventListener('click',() => {
    
    for (const btn of buttons) {
      btn.classList.remove('btn-toggle');
    }
    button.classList.toggle('btn-toggle');

    if (button.classList.contains('btn-toggle')) { 
      // Update the message based on which button was clicked
      if (button.classList.contains('btn-high')) {
        messageBox.textContent = 'You have chosen higher and bet ' + output.textContent + '. Click "Bet" to confirm';
      } else if (button.classList.contains('btn-low')) {
        messageBox.textContent = 'You have chosen lower and bet ' + output.textContent + '. Click "Bet" to confirm';
      } else {
        messageBox.textContent = 'Higher or Lower?';
      }
    }
  })
}


// Locking in bet

// add higher or lower to choice variable if active


init();