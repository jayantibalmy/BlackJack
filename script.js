let hasBlackJack = false;
let isAlive = true;
let message = "";
message = "we're logging out";

function startGame() {
    let firstCard = Math.floor(Math.random() * 10) + 2;
    let seconCard = Math.floor(Math.random() * 10) + 2;
    document.getElementById("cards").textContent = firstCard + " , " + seconCard;
    let sum = firstCard + seconCard;
    document.getElementById("sum").textContent = sum;
    gameLogic(sum);
}

function gameLogic(sum) {
    if (sum <= 20)
        message = "You still have chance, want to go for another round?😀";
    else if (sum === 21) {
        message = "Woah!! you won. You've got BLACKJACK 😮";
        hasBlackJack = true;
    }
    else if (sum > 21) {
        message = "lmao go off, you lost!😭";
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
}

function newCard() {
    let newCard = Math.floor(Math.random() * 10) + 2;
    let currentSumstr = document.getElementById("sum").textContent;
    let currentSum = Number(currentSumstr);
    let sum = currentSum + newCard;
    document.getElementById("sum").textContent = sum;
    document.getElementById("cards").textContent += " , " + newCard;
    gameLogic(sum);
}
