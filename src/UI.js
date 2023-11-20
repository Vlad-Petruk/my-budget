import { sushiCashIntoSalary, potentialMonthlyIncome } from "./factories";
import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";

// Potential income
const potentialIncInput = document.querySelector('#potentialInc');
const dailyInc = document.querySelector('.daily-income');
const dailyIncomeBtn = document.querySelector('#dailyIncomeBtn');
const potentialIncTotal = document.querySelector('.potentialTwoWeek');
const startNewPeriod = document.querySelector('#new-period');

dailyIncomeBtn.addEventListener('click',()=>{
   calculatePotentialIncome()
})

startNewPeriod.addEventListener('click',()=>{
    removeFromLocalStorage('potential monthly income');
    potentialIncTotal.textContent = `Potential 2 week total: 0`
})

const onloadListener = () =>{
    window.addEventListener('load',()=>{
        let potentialTotal = getFromLocalStorage('potential monthly income');
        potentialIncTotal.textContent = `Potential 2 week total: ${potentialTotal.value}`
    })
}

const calculatePotentialIncome = () =>{
    let value = potentialIncInput.value;
    let use = sushiCashIntoSalary(value,'Nov 20');
    dailyInc.textContent = "Daily income: "
    dailyInc.textContent = `Daily income: ${use.dailySalary} `;
    potentialIncTotal.textContent = 'Potential 2 week total: '
    let total = potentialMonthlyIncome(use.dailySalary);
    potentialIncTotal.textContent = `Potential 2 week total: ${total.total}`;

    potentialIncInput.value = 0
}

// Actual income

const actualIncInput = document.querySelector('#actualInc');
const addIncomeBtn = document.querySelector('#addIncomeBtn');
const radioButtons = document.getElementsByName("options");
const totalUAH = document.querySelector('.totalUAH');
const totalUSD = document.querySelector('.totalUSD');
const totalAll = document.querySelector('.totalAll');

const addIncome = (income,save,currency)=>{
    save.textContent= `I have in ${currency}: ${income.value}`
    // income.value = 0;
}

const incomeHandler = () => {
    let selectedCurrency = '';
    
    radioButtons.forEach(function (radio) {
        if (radio.checked) {
            selectedCurrency = radio.value;
        }
    });

    if (selectedCurrency === 'USD') {
        addIncome(actualIncInput, totalUSD, 'USD');
    } else {
        addIncome(actualIncInput, totalUAH, 'UAH');
    }
};

// const incomeHandler = ()=>{
//     for (let i = 0; i < radioButtons.length; i++){
//         console.log( radioButtons[i].value)
//         if (radioButtons[i].value !== 'UAH'&&radioButtons[i].value === 'USD'&&radioButtons[i].checked){
//         addIncome(actualIncInput,totalUSD,'USD');
//         return;
//         } else if (radioButtons[i].value !== 'USD') {
//         addIncome(actualIncInput,totalUAH,'UAH');
//         }
//     };   
// }


addIncomeBtn.addEventListener('click',()=>{
    incomeHandler()
})

export {calculatePotentialIncome,onloadListener,incomeHandler}