/* eslint-disable no-eval */
// I now eval can be harmful, but I'm sure how to test it in this case.

import calculate from './calculate';

describe('Testing all calculate possible operations', () => {
  const operations = ['+', '-', 'x', '÷'];
  const rand1 = `${Math.floor(Math.random() * 10)}`;
  const rand2 = `${Math.floor(Math.random() * 10)}`;
  let randomOperation = operations[Math.floor(Math.random() * operations.length)];

  it(`Test with random numbers and random operations, Num1: ${rand1}, Num2: ${rand2}, Operation: ${randomOperation}`, () => {
    let state = {
      total: 0,
      next: 0,
      operation: null,
    };

    const firstNum = calculate(state, rand1);
    state = firstNum;
    expect(firstNum.next).toBe(rand1);

    const operation = calculate(state, randomOperation);
    expect(operation.operation).toBe(randomOperation);
    expect(operation.total).toBe(firstNum.next);
    state = operation;
    switch (randomOperation) {
      case 'x':
        randomOperation = '*';
        break;
      case '÷':
        randomOperation = '/';
        break;
      default:
        break;
    }
    if (randomOperation === 'x') {
      randomOperation = '*'; // Shitch to actual multiplication for eval
    }

    const secondNum = calculate(state, rand2);
    expect(secondNum.next).toBe(rand2);
    state = secondNum;
    state = calculate(state, '=');

    if (secondNum.next === 0 && randomOperation === '/') {
      expect(state.total).toBe("Can't divide by 0.");
    } else {
      expect(state.total).toBe(`${eval(`${firstNum.next} ${randomOperation} ${secondNum.next}`)}`);
    }
  });
});
