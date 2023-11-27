import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";
import { totalAllCalculate } from "./UI";

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
    let storageIncome = getFromLocalStorage(`${currency} income`);
    removeFromLocalStorage(`${currency} income`);
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

const oweMeHandler = (money, save, operation)=>{
    let storageOwe = getFromLocalStorage(`Lent money`);
    removeFromLocalStorage(`Lent money`);
    let total = 0;

    let moneyNumb = parseInt(money.value);

    if(storageOwe !== null){
        if (operation === 'lent') {
            storageOwe.value = parseInt(storageOwe.value);
            total += storageOwe.value;
            total += moneyNumb;
        } else {
            storageOwe.value = parseInt(storageOwe.value);
            total += storageOwe.value;
            total -= moneyNumb;
        }
    }
    save.textContent= `People owe me: ${total}`;

    addToLocalStorage(`Lent money`, total);
}

export {
    sushiCashIntoSalary,
    potentialMonthlyIncome,
    addIncome,
    oweMeHandler
}