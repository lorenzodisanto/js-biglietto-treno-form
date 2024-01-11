const usernameInput = document.getElementById("user-name");
const distanceInput = document.getElementById("user-distance");
const ageInput = document.getElementById("user-age");
const printButton = document.getElementById("print-button");

const cardTicket = document.querySelector(".d-none");
const nameTicket = document.getElementById("ticket-name");
const offerTicket = document.getElementById("offer");
const coachTicket = document.getElementById("coach");
const codeTicket = document.getElementById("code-cp");
const resultPrice = document.getElementById("price");

printButton.addEventListener("click", function () {
  const username = usernameInput.value;
  const distance = parseInt(distanceInput.value);
  const age = ageInput.value;

  console.log(username);
  console.log(distance);
  console.log(age);

  const ticketPrice = distance * 0.21;
  console.log(ticketPrice);

  const youngSale = ticketPrice * 0.2;
  const seniorSale = ticketPrice * 0.4;

  if (age == "under-18") {
    const youngPrice = ticketPrice - youngSale;
    const youngPricePrint = youngPrice.toFixed(2);
    console.log(youngPrice);
    cardTicket.className = ".d-block";
    nameTicket.innerText = username;
    offerTicket.innerText = "Biglietto under 18";
    coachTicket.innerText = 5;
    codeTicket.innerText = 32454;
    resultPrice.innerText = youngPricePrint + " €";
  } else if (age == "over-65") {
    const seniorPrice = ticketPrice - seniorSale;
    const seniorPricePrint = seniorPrice.toFixed(2);
    console.log(seniorPrice);
    cardTicket.className = ".d-block";
    nameTicket.innerText = username;
    offerTicket.innerText = "Biglietto over 65";
    coachTicket.innerText = 7;
    codeTicket.innerText = 32154;
    resultPrice.innerText = seniorPricePrint + " €";
  } else {
    const ticketPricePrint = ticketPrice.toFixed(2);
    console.log(ticketPrice);
    cardTicket.className = ".d-block";
    nameTicket.innerText = username;
    offerTicket.innerText = "Biglietto standard";
    coachTicket.innerText = 2;
    codeTicket.innerText = 38764;
    resultPrice.innerText = ticketPricePrint + " €";
  }
});
