function rollDice() {
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndex = Math.floor(Math.random() * 6);
  const dice = document.getElementById("dice");
  const result = document.getElementById("result");

  dice.textContent = diceFaces[randomIndex];
  result.textContent = `You rolled a ${randomIndex + 1}!`;
}
