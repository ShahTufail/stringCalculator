import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return the single number', () => {
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

  it('should throw an exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1')).toThrowError('Negative numbers not allowed: -1');
  });

  // Add test for throwing exception with all negative numbers (if applicable)
});
