let account = 1000;
let userChoice;
let audioWin = new Audio('win-sound.wav');
let audioLose = new Audio('lose-sound.wav');

const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const initialNum = document.querySelector('.initial-number__value');
const targetNum = document.querySelector('.target-number__value');
const messageBox = document.querySelector('.message');
const messageUpdate = document.querySelector('.message-update');
const buttons = document.querySelectorAll('.btn');
const betButton = document.querySelector('.btn-bet');

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
  let randomNumber = (Math.floor(Math.random() * 100));
  initialNum.textContent = randomNumber;
  betButton.disabled = true; 

}

// on click change style of button
for (const button of buttons) {
  
  button.addEventListener('click',() => {

    if(button)

    for (const btn of buttons) {
      btn.classList.remove('btn-toggle');
    }
    button.classList.toggle('btn-toggle');

    if (button.classList.contains('btn-toggle')) { 
      betButton.disabled = false; 
      // Update the message based on which button was clicked
      if (button.classList.contains('btn-high')) {
        userChoice = 'higher';
        messageBox.textContent = 'You have chosen higher and bet ' + output.textContent + '. Click "Bet" to confirm';
      } else if (button.classList.contains('btn-low')) {
        userChoice = 'lower';
        messageBox.textContent = 'You have chosen lower and bet ' + output.textContent + '. Click "Bet" to confirm';
      } else {
        messageBox.textContent = 'Higher or Lower?';
      }
    }
  })
}

// Betting - Comparison and result
betButton.addEventListener('click',() => {
  console.log('bet placed');
  let randomNumber = (Math.floor(Math.random() * 100) + 1);
  targetNum.textContent = randomNumber;
  let initialNumVal = parseInt(initialNum.textContent);
  let targetNumVal = parseInt(targetNum.textContent);
  // check && conditions first
  if ((userChoice === 'higher' && initialNumVal < targetNumVal) || (userChoice === 'lower' && initialNumVal > targetNumVal)) {
    audioWin.play();
    messageBox.textContent = 'You win! Wait 3 seconds for next round!';
    account += parseInt(output.textContent.replace('$', ''));
    accountValueEl.textContent = '$' + account;
    reset();
   
  } else {
    audioLose.play();
    messageBox.textContent = 'You lose! Wait 3 seconds for next round!';
    account -= parseInt(output.textContent.replace('$', ''));
    accountValueEl.textContent = '$' + account;
    reset();
  }

  slider.max = account;
  // slider.value = Math.min(slider.value, account);
  output.textContent = '$' + slider.value;
})


//reset
function reset() {
  for (const btn of buttons) {
    btn.classList.remove('btn-toggle');
    betButton.disabled = true; 
  }
  setTimeout(function(){
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    initialNum.textContent = randomNumber;
    messageBox.textContent = 'Higher or Lower?';
    targetNum.textContent = '-';
    
    
}, 3000);
}


init();