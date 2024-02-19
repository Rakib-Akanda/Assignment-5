function bannerBtnToPHpribahan() {
  const targetSection = document.getElementById("target-section");
  const selectButton = document.getElementById("btn-buy-ticket");
  selectButton.addEventListener("click", bannerBtnToPHpribahan);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
// set all button function
const allSeat = document.querySelectorAll('.seat-common');
for (const singleSeat of allSeat) {
    singleSeat.onclick = clickOnSeat;
}

function clickOnSeat(){
    selectSeatButton();

}