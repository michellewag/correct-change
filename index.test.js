var index = require('./index');

var correctChange = index.correctChange;

test('correctChange exists',() => {
  correctChange();
});

test ('Provides no change when the customer provided correct change', () => {
    var change = correctChange(1.00,1.00);
    expect(change).toEqual({ pennies: 0});
 });

test ('Provides one cent as change when the customer paid with one cent more than required', () => { 
    var change = correctChange(.99,1.00);
    expect(change).toEqual({ pennies: 1});
 });


