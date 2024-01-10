const usernameInput = document.getElementById("user-name");
const distanceInput = document.getElementById("user-distance");
const ageInput = document.getElementById("user-age");
const printButton = document.getElementById("print-button");
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
    resultPrice.innerText = "Prezzo finale: " + youngPricePrint + " €";
  } else if (age == "over-65") {
    const seniorPrice = ticketPrice - seniorSale;
    const seniorPricePrint = seniorPrice.toFixed(2);
    console.log(seniorPrice);
    resultPrice.innerText = "Prezzo finale: " + seniorPricePrint + " €";
  } else {
    const ticketPricePrint = ticketPrice.toFixed(2);
    console.log(ticketPrice);
    resultPrice.innerText = "Prezzo finale: " + ticketPricePrint + " €";
  }
});
