const diceElement = document.getElementById("dice");

const rollDice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceElement.innerText = randomNumber;
  diceElement.style.transform = `rotateX(${randomNumber * 360}deg)`;
};

// Display a random number on page load
rollDice();
