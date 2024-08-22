import { colorLime, colorSlate100, colorSlate700 , colorSlate900 } from "./variaveis.js";

export default function initInputColor(){
    
    const detailFlex = document.querySelectorAll('.detail-flex');

    
    function spanStyle(){
        const detailFlex = this;
        changeColor(colorLime,colorSlate900,detailFlex)
        outsideClick(this,(() => changeColor(colorSlate100,colorSlate700,detailFlex)))
    }
    
    detailFlex.forEach((input) => {
        input.addEventListener('click',spanStyle)
    })
    function outsideClick(element,callback){
        const html = document.documentElement;
        html.addEventListener('click',outsideHandleClick);
      
        function outsideHandleClick(event){
          if(!element.contains(event.target)){
            callback();
            html.removeEventListener('click',outsideHandleClick)
          }
        }
      }
}

    export function changeColor(backgroundColor,fontColor,element){
        const span = element.querySelector('span');
        span.style.backgroundColor = backgroundColor;
        span.style.color = fontColor
    }