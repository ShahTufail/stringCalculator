import { StringCalculator } from './stringCalculator';

// have used TDD approach to write test cases and include features in the code after failing and test case and then writing code to pass the test case.
// tried to follow as per tdd appraoch given in the link,

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('it should return the single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
  });

  it('should add multiple numbers separated by comma', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2')).toBe(3);
  });
  
  it('should add multiple numbers separated by newlines', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2')).toBe(3);
  });

  it('should support custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception/error for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1')).toThrowError('Negative numbers not allowed: -1');
  });
  
  it('should handle numbers larger than max safe integer', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('9007199254740991')).toBe(9007199254740991); // Max safe integer in JS
  });

});
