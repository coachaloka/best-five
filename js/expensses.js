// calculate player expenses
function calculateExpense(){
    const expenses = getElementValueById('player-cost');
    const playerList = getTextValue('player-number');
    playerList.innerText = playerArr.length;
    const totalExpenses = expenses * playerList;
    
    // show in expenses text field; 
    setValuesById('player-expenses', totalExpenses);
}

// calculate total expenses
function totalExpensesCalculation(){
    const playerExpenses = getTextValue('player-expenses');
    const managersCost = getElementValueById('manager-cost');
    const coacherCost = getElementValueById('coacher-cost');
    
    // calculate total cost
    const totalCost = playerExpenses+managersCost+coacherCost;

    // set total cost to targeted field. 
    setValuesById('total-mgt-cost', totalCost);
}
// for calculating player expenses
document.getElementById('calculate-expenses').addEventListener('click', function(){
    calculateExpense();

});
// for total calculator 
document.getElementById('btn-total').addEventListener('click', function(){
    totalExpensesCalculation();
})
