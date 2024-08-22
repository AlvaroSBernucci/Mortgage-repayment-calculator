import {btnFlex,btnSubmit,inputRadio,inputNumber,forms,colorRed,colorWhite} from './variaveis.js'
import {changeColor} from "./inputcolor.js";
import { showResults } from './results.js';
export default function initValidation(){

// Submit button
    function submitEvent(){
        btnSubmit.click();
    }
    
    btnFlex.addEventListener('click',submitEvent);
// Submit button
  

// Input Validation
  function checkRequired(event){
    event.preventDefault();
    const radioArray = Array.from(inputRadio);
    const radioChecked = [];
    const radioErro = document.getElementById('radio-erro');
    inputNumber.forEach((input) => {
        const detailFlex = input.parentElement;
      if(!input.value ){  
        detailFlex.nextElementSibling.classList.add('ativo');
        changeColor(colorRed,colorWhite,detailFlex);
      } else{
        detailFlex.nextElementSibling.classList.remove('ativo');
      }
    })
    radioArray.forEach((input) => {
      radioChecked.push(input.checked);
    })
    if(!radioChecked.some(value => value === true)){
      radioErro.classList.add('ativo');
    } else{
      radioErro.classList.remove('ativo');
    }
    checkInputs();
  }
  

  function checkInputs(){
    const inputErro = document.querySelectorAll('.erro.ativo');
    if(!inputErro.length){
        showResults();
    }
}
  
  
  btnSubmit.addEventListener('click',checkRequired);
// Input Validation
}