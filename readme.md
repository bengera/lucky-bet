# Lucky betting app

This readme file is a of my progress making a betting project using vanilla JavaScript.
The game is simple: you start with $1000 and are given a random number between 1 and 100. You need to guess whether the next randomly generated number will be higher or lower than the previous one. You also place a bet. If you guess correctly, you’ll get a message saying that you won and the amount you bet will be added to your account. If you guess wrong, you’ll lose the money you bet. The game logic is not perfect and it’s not meant to be an actual gambling game. The point of creating this game was to make something incredibly simple and build on it over time while also increasing complexity.
```
🧠 Concept learned  
💭 Thoughts  
🛠 Things to fix
👽 New Feature  
🟣 Things to add / improve
🔴 Concept not understood  
```
🟣 Add a game over message when the player has no money left, or a 'loan' button. ✅ (31/01)     
🟣 Fix range bar for Chrome and Edge.  
🟣 Add background  
🟣 Add leveling system  
🟣 Add animation  


## 29/01 ##
I've got the basic features of the project working. You can choose higher or lower, bet, win and lose money.

🧠 Adding sounds via JS.
```JS
let audioWin = new Audio('win-sound.wav') audioWin.play();;
```
🧠 Disabling buttons
```JS
betButton.disabled = true; 
```
🧠 Basic timeout functions
```JS
 setTimeout(function(){
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    initialNum.textContent = randomNumber;
    messageBox.textContent = 'Higher or Lower?';
    targetNum.textContent = '-';
        
}, 3000);
```
## 31/01 ##
👽 Added a losing condition if the user has $0 in their account. Made the mistake of putting it outside of the win / lose statements. So the losing message would display but then the reset function would run. The return stops the final reset from running.
```JS
      if (account <= 0) {
    for (const button of buttons) {
      button.disabled = true;
    }
    betButton.disabled = true;
    messageBox.textContent = 'You have lost all your money. Refresh browser to play again.';
    return;
   
  }
    
```







