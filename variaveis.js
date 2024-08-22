let inputNumber;
let inputRadio;
let colorWhite;
let colorRed;
let colorLime;
let colorSlate100;
let colorSlate700;
let colorSlate900;
let forms;
let btnSubmit;
let btnFlex;
export default function initVariaveis(){
    inputNumber = document.querySelectorAll('input[type="number"]');
    inputRadio = document.querySelectorAll('input[name="mortage-type"]');
    colorWhite = getComputedStyle(document.documentElement).getPropertyValue('--white');
    colorRed = getComputedStyle(document.documentElement).getPropertyValue('--red');
    colorLime = getComputedStyle(document.documentElement).getPropertyValue('--lime');
    colorSlate100 = getComputedStyle(document.documentElement).getPropertyValue('--slate-100');
    colorSlate700 = getComputedStyle(document.documentElement).getPropertyValue('--slate-700');
    colorSlate900 = getComputedStyle(document.documentElement).getPropertyValue('--slate-900');
    forms = document.getElementById('form');
    btnFlex = document.querySelector('.btn-flex');
    btnSubmit = document.querySelector('#btn-submit');
}
export {inputNumber,inputRadio,colorWhite,colorRed,colorLime,colorSlate100,colorSlate700,colorSlate900,forms,btnSubmit,btnFlex};