function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function nextButtonEnable(){
    document.addEventListener('click', function(){
        const inputField = document.getElementById('phone-number-id');
        const nextButton = document.getElementById('next-btn');
        inputField.addEventListener('input', function(){
            if(inputField.value.length >= 10){
                nextButton.disabled = false;
            }
            if(inputField.value.length > 15){
                nextButton.disabled = true;
            };
        });
    });
}

function selectSeatButton(){
    // left and add seat
    const getLeftSeat = getElementTextById('left-seat');
    const getAddSeat = getElementTextById('add-seat');
    const getLeftSeatNumber = parseInt(getLeftSeat);
    const getAddSeatNumber = parseInt(getAddSeat);
    const leftSeat = getLeftSeatNumber - 1;
    const addSeat = getAddSeatNumber + 1;
    if(leftSeat >= 0 ){
        setTextElementById('left-seat', leftSeat);
    };
    if(addSeat >=0 && addSeat <=8 ){
        setTextElementById('add-seat', addSeat);
    };
}