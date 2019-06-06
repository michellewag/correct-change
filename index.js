//costInt = cost as Integer
//cashInt = cash as Integer




function correctChange(cost, cashProvided) {
    
var costInt = cost * 100;
var cashInt = cashProvided * 100;

var change = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    dollars: 0,
    fives: 0,
    twenties: 0,
};

var changeRemaining = cashInt - costInt;

if (changeRemaining >= 2000) {
    change.twenties = Math.floor(changeRemaining / 2000);
    changeRemaining =  changeRemaining % 2000;
    
}

if (changeRemaining >= 500) {
    change.fives = Math.floor(changeRemaining / 500);
    changeRemaining =  changeRemaining % 500;
    
}


if (changeRemaining >= 100) {
    change.dollars = Math.floor(changeRemaining / 100);
    changeRemaining =  changeRemaining % 100;
}
 

if (changeRemaining >= 25) {
    change.quarters = Math.floor(changeRemaining / 25);
    changeRemaining =  changeRemaining % 25;
    
}

if (changeRemaining >= 10) {
    change.dimes = Math.floor(changeRemaining / 10);
    changeRemaining =  changeRemaining % 10;
    
}

if (changeRemaining >= 5) {
    change.nickels = 1;
    changeRemaining -= 5;
    
}

change.pennies = Math.round(changeRemaining); 

return change;
   
}

module.exports.correctChange = correctChange;
