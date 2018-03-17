//Deck
const suites = ["Clubs", "Diamonds", "Hearts", "Spades"];
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

const cardValue = (card) => {
  console.log(card);
  if (card.includes("J") || card.includes("Q") || card.includes("K") || card.includes("10")) {
    return 10;
  } else if (card.includes("A")) {
    return 11;
  } else if (card.includes("2")) {
    return 2;
  } else if (card.includes("3")) {
    return  3;
  } else if (card.includes("4")) {
    return 4;
  } else if (card.includes("5")) {
    return 5;
  } else if (card.includes("6")) {
    return 6;
  } else if (card.includes("7")) {
    return 7;
  } else if (card.includes("8")) {
    return 8;
  } else if (card.includes("9")) {
    return 9;
  } 
}

//Player
const playerCard1 = () => {
  let card1 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite1 = suites[Math.floor(Math.random() * suites.length)];
  let playercard1 = card1 + " " + suite1;
  document.querySelector("#playerCard1").textContent = playercard1;
  let pc1Value = cardValue(playercard1);
  document.querySelector("#playerCard1").value = pc1Value;
}

const playerCard2 = () => {
  let card2 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite2 = suites[Math.floor(Math.random() * suites.length)];
  let playercard2 = card2 + " " + suite2;
  document.querySelector("#playerCard2").textContent = playercard2;
  let pc2Value = cardValue(playercard2);
  document.querySelector("#playerCard2").value = pc2Value;
}

const playerCard3 = () => {
  let card3 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite3 = suites[Math.floor(Math.random() * suites.length)];
  let playercard3 = card3 + " " + suite3;
  document.querySelector("#playerCard3").textContent = playercard3;
  let pc3Value = cardValue(playercard3);
  document.querySelector("#playerCard3").value = pc3Value;
}

const playerCard4 = () => {
  let card4 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite4 = suites[Math.floor(Math.random() * suites.length)];
  let playercard4 = card4 + " " + suite4;
  document.querySelector("#playerCard4").textContent = playercard4;
  let pc4Value = cardValue(playercard4);
  document.querySelector("#playerCard4").value = pc4Value;
}

const playerCard5 = () => {
  let card5 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite5 = suites[Math.floor(Math.random() * suites.length)];
  let playercard5 = card5 + " " + suite5;
  document.querySelector("#playerCard5").textContent = playercard5;
  let pc5Value = cardValue(playercard5);
  document.querySelector("#playerCard5").value = pc5Value;
}

//House
const houseCard1 = () => {
  let card1 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite1 = suites[Math.floor(Math.random() * suites.length)];
  let housecard1 = card1 + " " + suite1;
  document.querySelector("#houseCard1").textContent = housecard1;
  let hc1Value = cardValue(housecard1);
  document.querySelector("#houseCard1").value = hc1Value;
}

const houseCard2 = () => {
  let card2 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite2 = suites[Math.floor(Math.random() * suites.length)];
  let housecard2 = card2 + " " + suite2;
  document.querySelector("#houseCard2").textContent = housecard2;
  let hc2Value = cardValue(housecard2);
  document.querySelector("#houseCard2").value = hc2Value;
}

const houseCard3 = () => {
  let card3 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite3 = suites[Math.floor(Math.random() * suites.length)];
  let housecard3 = card3 + " " + suite3;
  document.querySelector("#houseCard3").textContent = housecard3;
  let hc3Value = cardValue(housecard3);
  document.querySelector("#houseCard3").value = hc3Value;
}

const houseCard4 = () => {
  let card4 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite4 = suites[Math.floor(Math.random() * suites.length)];
  let housecard4 = card4 + " " + suite4;
  document.querySelector("#houseCard4").textContent = housecard4;
  let hc4Value = cardValue(housecard4);
  document.querySelector("#houseCard4").value = hc4Value;
}

const houseCard5 = () => {
  let card5 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite5 = suites[Math.floor(Math.random() * suites.length)];
  let housecard5 = card5 + " " + suite5;
  document.querySelector("#houseCard5").textContent = housecard5;
  let hc5Value = cardValue(housecard5);
  document.querySelector("#houseCard5").value = hc5Value;
}

const dealPlayerHand = () => {
  let pc1 = playerCard1();
  let pc2 = playerCard2();
  let pc1Value = document.querySelector("#playerCard1").value;
  let pc2Value = document.querySelector("#playerCard2").value;
  if (pc1Value + pc2Value > 21) {
    window.alert("Sorry, but you have LOST!");
  } else if (pc1Value + pc2Value === 21) {
    window.alert("You WIN!!");
  }
  document.querySelector("#playerButton").disabled = true;
  document.querySelector("#houseButton").disabled = false;
  document.querySelector("#hitButton").disabled = false;
}

//Player Hit Button
const addPlayerCard = () => {
  let pc1 = document.querySelector("#playerCard1").textContent;
  let pc2 = document.querySelector("#playerCard2").textContent;
  let pc3 = document.querySelector("#playerCard3").textContent;
  let pc4 = document.querySelector("#playerCard4").textContent;
  let pc5 = document.querySelector("#playerCard5").textContent;
  if (pc3 === "") {
    pc3 = playerCard3();
  } else if (pc3 !== "" && pc4 === "") {
    pc4 = playerCard4();
  } else if (pc3 !== "" && pc4 !== "" && pc5 === "") {
    pc5 = playerCard5();
  }
  playerCheck();
}

//Check Player for Bust or 21
const playerCheck = () => {
  let pc1Value = document.querySelector("#playerCard1").value;
  let pc2Value = document.querySelector("#playerCard2").value;
  let pc3Value = document.querySelector("#playerCard3").value;
  let pc4Value = document.querySelector("#playerCard4").value;
  let pc5Value = document.querySelector("#playerCard5").value;
  if (pc1Value + pc2Value + pc3Value > 21) {
    window.alert("You LOSE!!");
  } else if (pc1Value + pc2Value + pc3Value === 21) {
    window.alert("You WIN!!");
  } else if (pc1Value + pc2Value + pc3Value + pc4Value > 21) {
    window.alert("You LOSE!!");
  } else if (pc1Value + pc2Value + pc3Value + pc4Value === 21) {
    window.alert("You WIN!!");
  } else if (pc1Value + pc2Value + pc3Value + pc4Value + pc5Value > 21) {
    window.alert("You LOSE!!");
  } else if (pc1Value + pc2Value + pc3Value + pc4Value + pc5Value === 21) {
    window.alert("You WIN!!");
  }
}

const dealHouseHand = () =>{
  let hc1 = houseCard1();
  let hc2 = houseCard2();
  houseCheck();
  determineWinner();
  let hc1Value = document.querySelector("#houseCard1").value;
  let hc2Value = document.querySelector("#houseCard2").value;
  if (hc1Value + hc2Value < 18) {
    houseCard3();
    houseCheck();
    determineWinner();
  } 
  let hc3Value = document.querySelector("#houseCard3").value;
  if (hc1Value + hc2Value + hc3Value < 18) {
    houseCard4();
    houseCheck();
    determineWinner();
  }
  let hc4Value = document.querySelector("#houseCard4").value;
  if (hc1Value + hc2Value + hc3Value + hc4Value < 18) {
    houseCard5();
    houseCheck();
    determineWinner();
  }
  determineWinner();
  document.querySelector("#houseButton").disabled = true;
}

const houseCheck = () => {
  let hc1Value = document.querySelector("#houseCard1").value;
  let hc2Value = document.querySelector("#houseCard2").value;
  let hc3Value = document.querySelector("#houseCard3").value;
  let hc4Value = document.querySelector("#houseCard4").value;
  let hc5Value = document.querySelector("#houseCard5").value;
  if (hc1Value + hc2Value > 21) {
    window.alert("House Busts, you WIN!");
  } else if (hc1Value + hc2Value === 21) {
    window.alert("House WINS, you LOSE!");
  } else if (hc1Value + hc2Value + hc3Value > 21) {
    window.alert("House Busts, you WIN!");
  } else if (hc1Value + hc2Value + hc3Value === 21) {
    window.alert("House WINS, you LOSE!");
  } else if (hc1Value + hc2Value + hc3Value + hc4Value > 21) {
    window.alert("House Busts, you WIN!");
  } else if (hc1Value + hc2Value + hc3Value + hc4Value === 21) {
    window.alert("House WINS, you LOSE!");
  } else if (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value > 21) {
    window.alert("House Busts, you WIN!");
  } else if (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value === 21) {
    window.alert("House WINS, you LOSE!");
  }
}


const determineWinner = () => {
  let pc1Value = document.querySelector("#playerCard1").value;
  let pc2Value = document.querySelector("#playerCard2").value;
  let pc3Value = document.querySelector("#playerCard3").value;
  let pc4Value = document.querySelector("#playerCard4").value;
  let pc5Value = document.querySelector("#playerCard5").value;
  let hc1Value = document.querySelector("#houseCard1").value;
  let hc2Value = document.querySelector("#houseCard2").value;
  let hc3Value = document.querySelector("#houseCard3").value;
  let hc4Value = document.querySelector("#houseCard4").value;
  let hc5Value = document.querySelector("#houseCard5").value;
  if (pc3Value === "undefined" && hc3Value === "undefined") {
    if ((pc1Value + pc2Value) > (hc1Value + hc2Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value) < (hc1Value + hc2Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value) === (hc1Value + hc2Value)) {
      window.alert("TIE!");
    }
  } else if (pc3Value === "undefined" && hc4Value === "undefined") {
    if ((pc1Value + pc2Value) > (hc1Value + hc2Value + hc3Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value) < (hc1Value + hc2Value + hc3Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value) === (hc1Value + hc2Value + hc3Value)) {
      window.alert("TIE!");
    }
  } else if (pc4Value === "undefined" && hc3Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value) > (hc1Value + hc2Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value) < (hc1Value + hc2Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value) === (hc1Value + hc2Value)) {
      window.alert("TIE!");
    }
  } else if (pc4Value === "undefined" && hc4Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value) > (hc1Value + hc2Value + hc3Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value) < (hc1Value + hc2Value + hc3Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value) === (hc1Value + hc2Value + hc3Value)) {
      window.alert("TIE!");
    }
  } else if (pc4Value === "undefined" && hc5Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value) > (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value) < (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value) === (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value === "undefined" && hc4Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value) > (hc1Value + hc2Value + hc3Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) < (hc1Value + hc2Value + hc3Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) === (hc1Value + hc2Value + hc3Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value === "undefined" && hc5Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value) > (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) < (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) === (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value === "undefined" && hc5Value !== "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value) > (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) < (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) === (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value !== "undefined" && hc5Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) > (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value  + pc5Value) < (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) === (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value !== "undefined" && hc5Value !== "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) > (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value  + pc5Value) < (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) === (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("TIE!");
    }
  } else if (pc3Value === "undefined" && hc5Value === "undefined") {
    if ((pc1Value + pc2Value) > (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value) < (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value) === (hc1Value + hc2Value + hc3Value + hc4Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value === "undefined" && hc3Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value) > (hc1Value + hc2Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) < (hc1Value + hc2Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value) === (hc1Value + hc2Value)) {
      window.alert("TIE!");
    }
  } else if (pc3Value === "undefined" && hc5Value !== "undefined") {
    if ((pc1Value + pc2Value) > (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value) < (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value) === (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("TIE!");
    }
  } else if  (pc5Value === "undefined" && hc3Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) > (hc1Value + hc2Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) < (hc1Value + hc2Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) === (hc1Value + hc2Value)) {
      window.alert("TIE!");
    }
  } else if (pc4Value === "undefined" && hc5Value !== "undefined") {
    if ((pc1Value + pc2Value + pc3Value) > (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value) < (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value) === (hc1Value + hc2Value + hc3Value + hc4Value + hc5Value)) {
      window.alert("TIE!");
    }
  } else if (pc5Value !== "undefined" && hc4Value === "undefined") {
    if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) > (hc1Value + hc2Value + hc3Value)) {
      window.alert("You WIN!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) < (hc1Value + hc2Value + hc3Value)) {
      window.alert("You LOSE!");
    } else if ((pc1Value + pc2Value + pc3Value + pc4Value + pc5Value) === (hc1Value + hc2Value + hc3Value)) {
      window.alert("TIE!");
    }
  }
}

const reset = () => {
  // document.querySelector("#playerCard1").textContent = "1st Card"
  // document.querySelector("#playerCard2").textContent = "2nd Card"
  // document.querySelector("#playerCard3").textContent = ""
  // document.querySelector("#playerCard4").textContent = ""
  // document.querySelector("#playerCard5").textContent = ""
  // document.querySelector("#houseCard1").textContent = "1st Card"
  // document.querySelector("#houseCard2").textContent = "2nd Card"
  // document.querySelector("#houseCard3").textContent = ""
  // document.querySelector("#houseCard4").textContent = ""
  // document.querySelector("#houseCard5").textContent = ""
  location.reload(forcedReload = true);
}