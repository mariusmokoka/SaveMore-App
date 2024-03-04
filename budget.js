

// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

// SELECT BUTTONS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// INPUT BUTTON
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector("expense-title-input");
const expenseAmount = document.querySelector("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector("income-title-input");
const incomeAmount = document.querySelector("income-amount-input");

//VARIABLES
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit"

//EVENT LISTENERS
expenseBtn.addEventListener("click", function() {
    Show(expenseEl);
    hide( [incomeEl, allEl] );
    active( expenseBtn );
    inactive ( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function() {
    Show(incomeEl);
    hide( [expenseEl, allEl] );
    active( incomeBtn );
    inactive ( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function() {
    Show(allEl);
    hide( [incomeEl, expenseEl] );
    active( allBtn );
    inactive ( [incomeBtn, expenseBtn] );
})

// HELPERS

