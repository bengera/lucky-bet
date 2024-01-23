const slider = document.getElementById("myRange");
const output = document.getElementById("output");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value;
}