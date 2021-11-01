import operate from '../operate';

it('makes basic math operations', () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const operators = ['+', '-', 'x', '÷'];
  function notInfinite(operator) {
    expect(operate(a, b, operator)).not.toBe(Infinity);
  }
  operators.forEach((operator) => {
    const result = operate(a, b, operator);
    switch (operator) {
      case '+':
        expect(result).toBe(`${a + b}`);
        notInfinite(operator);
        break;
      case '-':
        expect(result).toBe(`${a - b}`);
        notInfinite(operator);
        break;
      case 'x':
        expect(result).toBe(`${a * b}`);
        notInfinite(operator);
        break;
      case '÷':
        if (b === 0) {
          expect(result).toBe("Can't divide by 0.");
        } else {
          expect(`${parseFloat(result)}`).toBe(`${a / b}`);
          notInfinite(operator);
        }

        break;
      default:
        expect(result).toBe(0);
    }
  });
});

it('will crash if there is a division by 0', () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const by = '÷';
  const crash = operate(a, b, by);
  if (b === 0) {
    expect(crash).toBe("Can't divide by 0.");
  } else {
    const division = parseFloat(operate(a, b, by));
    expect(division).toBe((a / b));
  }
});
