const amount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const totalPrice = document.getElementById("total-price");
const tipsArr = document.querySelectorAll(".calculator__tip-radio");

let selectedTip = 0;

tipsArr.forEach((element) => {
  element.addEventListener("change", () => {
    selectedTip = Number(element.value);
    calculateTotal();
  });
});
console.log(tipsArr.length);
console.log(selectedTip);

amount.addEventListener("input", calculateTotal);
numberOfPeople.addEventListener("input", calculateTotal);

function calculateTotal() {
  const totalPerPerson = Number(amount.value) / Number(numberOfPeople.value);
  if (Number(numberOfPeople.value) === 0) {
    totalPrice.innerText = `$0.00`;
  } else {
    let total = totalPerPerson + (totalPerPerson / 100) * selectedTip;
    totalPrice.innerText = `$${total.toFixed(2)}`;
  }
}
