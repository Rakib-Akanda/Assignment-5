function bannerBtnToPHpribahan() {
  const targetSection = document.getElementById("target-section");
  const selectButton = document.getElementById("btn-buy-ticket");
  selectButton.addEventListener("click", bannerBtnToPHpribahan);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
function clickOnSeat(){
    selectSeatButton();
}