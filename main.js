const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const initialNum = document.querySelector('.initial-number__value');


output.textContent = '$' + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = '$' + this.value;
}

let account = 1000;


function init() {
  console.log('game started');
  let randomNumber = (Math.floor(Math.random() * 100) + 1);
  console.log(randomNumber);
  initialNum.textContent = randomNumber;

}
// generate a random number in initial number display box


// on press get bet amount from output value

// store bet amount in variable and generate a random number

init();