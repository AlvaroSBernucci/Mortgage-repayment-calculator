export default function initResults(){
    
    

    
}

export function showResults(){
    const resultEmpty = document.querySelector('.result-empty');
    const resultPayment = document.querySelector('.result-payment');
    resultEmpty.classList.remove('ativo');
    resultPayment.classList.add('ativo');
    calculateResults();
}

function calculateResults(){
    const amount = +document.getElementById('amount').value;
    const term = +document.getElementById('term').value;
    const termMonth = term*12;
    const rate = +document.getElementById('rate').value;
    const rateMonth = rate/12/100;
    const formatador = new Intl.NumberFormat('de-DE', { style: 'decimal', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 })
    let monthPay = (amount*(rateMonth))/(1-(1+rateMonth)**-termMonth);
    let totalPay =  monthPay*termMonth;
    monthPay = formatador.format(monthPay);
    totalPay = formatador.format(totalPay);
    updateResults(monthPay,totalPay);
}

function updateResults(monthPay,totalPay){
    const monthPayText = document.getElementById('month-pay');
    const totalPayText = document.getElementById('total-pay');
    monthPayText.innerText = '£' + monthPay;
    totalPayText.innerText = '£' + totalPay;

}