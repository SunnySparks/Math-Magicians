import Big from 'big.js';
import operate from './operate';

it('makes basic math operations', () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const plus = '+';
  const minus = '-';
  const times = 'x';
  const by = '÷';
  const modulo = '%';
  const sum = operate(a, b, plus);
  expect(sum).toBe(`${a+b}`);
  const sub = operate(a, b, minus);
  expect(sub).toBe(`${a-b}`);
  const mult = operate(a, b, times);
  expect(mult).toBe(`${a*b}`);
  const division = parseFloat(operate(a, b, by));
  expect(division).toBe(parseFloat(a/b));
  const mod = operate(a, b, modulo);
  expect(mod).toBe(`${a%b}`);
})

it('will crash if there is a division by 0', () =>{
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const by = '÷';
  const crash = operate(a, b, by);
  if (a === 0) {
    expect(crash).toBe('can\'t divide by zero');
  }else {
    const division = parseFloat(operate(a, b, by));
    expect(division).toBe(parseFloat(a/b));
  }
  if (b === 0) {
    expect(crash).toBe('can\'t divide by zero');
  }
})