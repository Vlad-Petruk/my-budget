import { sushiCashIntoSalary, potentialMonthlyIncome,addIncome} from "./factories";
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
        if(potentialTotal !== null){
        potentialIncTotal.textContent = `Potential 2 week total: ${potentialTotal.value}`;
        }
        let UAHtotal = getFromLocalStorage('UAH income');
        let USDtotal = getFromLocalStorage('USD income');

        if(UAHtotal !== null&USDtotal !== null){
        totalUAH.textContent = `I have in UAH: ${UAHtotal.value}`;
        totalUSD.textContent = `I have in USD: ${USDtotal.value}`;
        }
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

// const addIncome = (income,save,currency)=>{
//     save.textContent= `I have in ${currency}: ${income.value}`;
//     addToLocalStorage(`${currency} income`, income.value)
// }

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

addIncomeBtn.addEventListener('click',()=>{
    incomeHandler()
})

export {calculatePotentialIncome,onloadListener,incomeHandler}