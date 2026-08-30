const amount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const totalPrice = document.getElementById("total-price");
const totalTip = document.getElementById("total-tip");
const tipsArr = document.querySelectorAll(".calculator__tip-radio");
const resetBtn = document.getElementById("reset-btn");
const checkedRadioButton = document.querySelector(":checked");

let selectedTip = 0;

// changes selectedTip value based on the radio button pressed
tipsArr.forEach((element) => {
  element.addEventListener("change", () => {
    selectedTip = Number(element.value);
    calculateTotal();
  });
});

// Calculates total
function calculateTotal() {
  const totalPerPerson = Number(amount.value) / Number(numberOfPeople.value);
  if (Number(numberOfPeople.value) === 0) {
    totalPrice.innerText = `$0.00`;
    totalTip.innerText = `$0.00`;
  } else {
    let totalAmountTip = (totalPerPerson / 100) * selectedTip;
    let totalAmountToPay = totalPerPerson + totalAmountTip;

    totalPrice.innerText = `$${totalAmountToPay.toFixed(2)}`;
    totalTip.innerText = `$${totalAmountTip.toFixed(2)}`;
  }
}

// Reset button
resetBtn.addEventListener("click", () => {
  // reset bill input value
  amount.value = "";
  // reset people input value
  numberOfPeople.value = "";
  // uncheck the radio button
    checkedRadioButton.checked = false;
  // selected tip account
  selectedTip = 0;
  // update the screan
  totalPrice.innerText = `$0.00`;
  totalTip.innerText = `$0.00`;
});

amount.addEventListener("input", calculateTotal);
numberOfPeople.addEventListener("input", calculateTotal);
