function correctChange(cost, cashProvided) {
    
var costAsInterger = cost * 100;
var cashAsInterger = cashProvided * 100;

var pennies = cashAsInteger - costAsInteger;

return {
    pennies: pennies,
  };
}

module.exports.correctChange = correctChange;
