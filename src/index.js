import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from "./local-storage";
import { sushiCashIntoSalary, potentialMonthlyIncome } from "./factories";

let friday = sushiCashIntoSalary(20000);
let sunday = sushiCashIntoSalary(8000);


// I want to calculate potential salary incom
// I want to see my whole budget separatly in uah and dol
// To be able to see how much money people owe me
// keep track with my spendings
// planed or potential spendings