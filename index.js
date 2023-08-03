let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");
let isPlayerAlive = false;
let hasBlackJack = false;
let message = "";
let card1 = randomNumber();
let card2 = randomNumber();
let cards = [card1, card2];
let sum = card1 + card2;
let player = {
  name: "AWS",
  money: 250,
};
playerEl.textContent = player.name + ": $" + player.money;

function startGame() {
  isPlayerAlive = true;
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congrats! you've won the blackjack";
    hasBlackJack = true;
  } else {
    message = "Try again! you've lost the game";
    isPlayerAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function randomNumber() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    return 13;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}
function newCard() {
  if (isPlayerAlive === true && hasBlackJack === false) {
    let card3 = randomNumber();
    cards.push(card3);
    sum += card3;
    renderGame();
  }
}
function tryAgain() {
  if (sum > 21 || hasBlackJack === true) {
    location.reload();
  }
}
