import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";

const potentialMonthlyIncome = (dailySalary) => {
    let storageMonthlyData = getFromLocalStorage('potential monthly income');
    removeFromLocalStorage('potential monthly income')
    let total = 0;

    if (storageMonthlyData !== null) {
        total += storageMonthlyData.value;
    }

    total += dailySalary;

    addToLocalStorage('potential monthly income', total);
    return {
        total 
    }
}
const sushiCashIntoSalary = (cash,date) => {
    let dailySalary = Math.round(cash * 0.025 + 750);
    let thisDate = date
    // addToLocalStorage(`daily income ${thisDate}`,dailySalary)
    return {dailySalary}
}

const addIncome = (income,save,currency)=>{
    let storageIncome = getFromLocalStorage('UAH income');
    removeFromLocalStorage('UAH income');
    let total = 0;

    if (storageIncome !== null) {
        storageIncome.value = parseInt(storageIncome.value);
        total += storageIncome.value;
        console.log(typeof(storageIncome.value));
    }
    
    let incomeNumb = parseInt(income.value);
    console.log(typeof(incomeNumb));
    total += incomeNumb;
    

    save.textContent= `I have in ${currency}: ${total}`;

    addToLocalStorage(`${currency} income`, total);
}

export {sushiCashIntoSalary,potentialMonthlyIncome,addIncome}