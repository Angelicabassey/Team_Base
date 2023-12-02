'use strict';

const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')


//iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener('keyup', (e) => {
    //this code gets the current input element and stores it in the currentInput varaible
    //the next code gets the next sibling element of the current input element and stores it in the next element sibling
    //the last code gets the previous sibling element of the current input element and stores it in the next element sibling
    const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

    //if the value has more than one character then clear it
    if(currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    //if the next input is disabled and the current value is not empty, enable the next input and focus on it
    if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }


    //if the backspace key is pressed
    if(e.key === "Backspace") {
      //iterate over all inputs again
      inputs.forEach((input, index2) => {
        //if the index1 of the current input is less than or equal to the index2 of the input in the outer loop and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if(index1 <= index2 && prevInput) {
          input.setAttribute("disabled");
          currentInput.value = "";
          prevInput.focus();
        }
      })
    }


    //if the fourth input (which index number is 3) is not empty and has no disable attribute then add the active class if not then remove the active class
    if(!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  })
})


//focus on the first input which index is 0 on the window load
window.addEventListener('load', () => inputs[0].focus());