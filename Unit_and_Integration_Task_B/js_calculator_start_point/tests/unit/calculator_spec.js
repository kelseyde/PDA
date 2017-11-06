var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add 1 and 4 and return 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(5, calculator.runningTotal);
  });

  it("should be able to subtract 7 and 4 and get 3", function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("should be able to multiple 5 and 3 and get 15", function() {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(15, calculator.runningTotal);
  });

  it("should be able to divide 21 by 7 and get 3", function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("should concatenate multiple number button clicks", function() {
    calculator.numberClick(4);
    calculator.numberClick(3);
    assert.strictEqual(43, calculator.runningTotal);
  });

  it("should chain multiple operations together", function() {
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.strictEqual(6, calculator.runningTotal);
  });

  it("should clear the running total without affecting the calculation", function() {
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.clearClick();
    assert.strictEqual(4, calculator.previousTotal);
  });


});
