import { sushiCashIntoSalary, potentialMonthlyIncome } from "./factories";
import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";

const potentialIncInput = document.querySelector('#potentialInc');
const dailyInc = document.querySelector('.daily-income');
const dailyIncomeBtn = document.querySelector('#dailyIncomeBtn');
const potentialIncTotal = document.querySelector('.potentialInc-total');
const startNewPeriod = document.querySelector('#new-period')

dailyIncomeBtn.addEventListener('click',()=>{
   calculatePotentialIncome()
})

startNewPeriod.addEventListener('click',()=>{
    removeFromLocalStorage('potential monthly income');
    potentialIncTotal.textContent = `Total: 0`
})

const onloadListener = () =>{
    window.addEventListener('load',()=>{
        let potentialTotal = getFromLocalStorage('potential monthly income');
        potentialIncTotal.textContent = `Total: ${potentialTotal.value}`
    })
}

const calculatePotentialIncome = () =>{
    let value = potentialIncInput.value;
    let use = sushiCashIntoSalary(value,'Nov 20');
    dailyInc.textContent = "Daily income: "
    dailyInc.textContent = `Daily income: ${use.dailySalary} `;
    potentialIncTotal.textContent = 'Total: '
    let total = potentialMonthlyIncome(use.dailySalary);
    potentialIncTotal.textContent = `Total: ${total.total}`;

    potentialIncInput.value = 0
}

export {calculatePotentialIncome,onloadListener}