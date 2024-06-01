

#  have used TDD approach to write test cases and include features in the code after failing and test case and then writing code to pass the test case.
#  tried to follow as per tdd appraoch given in the link,

#  importing rSpec

require 'rspec'
require_relative 'string_calculator'

RSpec.describe StringCalculator do
  it 'returns 0 for an empty string' do
    calculator = StringCalculator.new
    expect(calculator.add('')).to eq(0)
  end

  it 'returns the single number' do
    calculator = StringCalculator.new
    expect(calculator.add('1')).to eq(1)
  end

  it 'adds multiple numbers separated by comma' do
    calculator = StringCalculator.new
    expect(calculator.add('1,2')).to eq(3)
  end

  it 'adds multiple numbers separated by newlines' do
    calculator = StringCalculator.new
    expect(calculator.add('1\n2')).to eq(3)
  end

  it 'supports custom delimiters' do
    calculator = StringCalculator.new
    expect(calculator.add('//;\n1;2')).to eq(3)
  end

  it 'throws an exception for negative numbers' do
    calculator = StringCalculator.new
    expect { calculator.add('-1') }.to raise_error('Negative numbers not allowed: -1')
  end

  it 'handles numbers larger than max safe integer' do
    calculator = StringCalculator.new
    expect(calculator.add('9007199254740991')).to eq(9007199254740991) # Max safe integer in JS
  end

  it 'ignores numbers after exceeding max safe integer' do
    calculator = StringCalculator.new
    expect(calculator.add('1,9007199254740991,2')).to eq(9007199254740993) # Ignores the last number
  end

  it 'throws an exception for empty string after custom delimiters definition' do
    calculator = StringCalculator.new
    expect { calculator.add('//;') }.to raise_error('Numbers are required')
  end
end
