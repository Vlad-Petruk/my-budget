import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";

const potentialMonthlyIncome = (dailySalary) => {
    let storageMonthlyData = getFromLocalStorage('potential monthly income');
    removeFromLocalStorage('potential monthly income')
    let total = 0;

    if (storageMonthlyData !== null) {
        total += storageMonthlyData.value;
    }

    total += dailySalary;
    console.log(total)

    addToLocalStorage('potential monthly income', total);
    return {
        total 
    }
}

const sushiCashIntoSalary = (cash) => {
    let dailySalary = cash * 0.025 + 750;
    addToLocalStorage(`daily income ${new Date()}`,dailySalary)
    return {dailySalary}
}

export {sushiCashIntoSalary,potentialMonthlyIncome}