/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;

  this.sum = function () {
    const result = this.firstNumber + this.secondNumber;
    return result;
  };

  this.subtraction = function () {
    const result = this.firstNumber - this.secondNumber;
    return result;
  };

  this.multiplication = function () {
    const result = this.firstNumber * this.secondNumber;
    return result;
  };

  this.division = function () {
    const result = this.firstNumber / this.secondNumber;
    return result;
  };
}

const calculate = new Calculator(5, 10);
console.log(calculate.sum());
console.log(calculate.subtraction());
console.log(calculate.multiplication());
console.log(calculate.division());
