const main = () => {
 
}
document.addEventListener('DOMContentLoaded', main)


const suites = ["Clubs", "Diamonds", "Hearts", "Spades"];
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]



const playerCard1 = () => {
  console.log("runningPC1");
  let card1 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite1 = suites[Math.floor(Math.random() * suites.length)];
  let playercard1 = card1 + " " + suite1;
  return playercard1;
}

const playerCard2 = () => {
  console.log("runningPC2");
  let card2 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite2 = suites[Math.floor(Math.random() * suites.length)];
  let playercard2 = card2 + " " + suite2;
  return playercard2;
}
const dealPlayerHand = () => {
  let pc1 = playerCard1();
  let pc2 = playerCard2();
  if (pc1 === pc2){
    pc2 = playerCard2();
  }
  document.querySelector("#playerCard1").textContent = pc1;
  document.querySelector("#playerCard2").textContent = pc2;
  document.querySelector("#playerButton").disabled = true;
  document.querySelector("#houseButton").disabled = false;
}

const houseCard1 = () => {
  console.log("runningHC1");
  let card1 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite1 = suites[Math.floor(Math.random() * suites.length)];
  let housecard1 = card1 + " " + suite1;
  return housecard1;
}

const houseCard2 = () => {
  console.log("runningHC2");
  let card2 = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let suite2 = suites[Math.floor(Math.random() * suites.length)];
  let housecard2 = card2 + " " + suite2;
  return housecard2;
}

const dealHouseHand = () =>{
  let hc1 = houseCard1();
  let hc2 = houseCard2();
  if (hc1 === hc2){
    hc2 = houseCard2();
  }
  document.querySelector("#houseCard1").textContent = hc1;
  document.querySelector("#houseCard2").textContent = hc2;
  document.querySelector("#houseButton").disabled = true;
}

const determineWinner = () =>{

}