//costInt = cost as Integer
//cashInt = cash as Integer

function correctChange(cost, cashProvided) {
    
var costInt = cost * 100;
var cashInt = cashProvided * 100;

var change = {
    pennies: 0,
    nickels: 0,
};

var changeRemaining = cashInt - costInt;

if (changeRemaining >= 5) {
    change.nickels = 1;
    changeRemaining -= 5;
    
}

change.pennies = changeRemaining; 

return change;
   
}

module.exports.correctChange = correctChange;
