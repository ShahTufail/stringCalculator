

#  have used TDD approach to write test cases and include features in the code after failing and test case and then writing code to pass the test case.
#  tried to follow as per tdd appraoch given in the link,

#  importing rSpec

require 'rspec'
require_relative 'string_calculator'
# initialse and start with empty string test case
 RSpec.describe StringCalculator do
  it 'returns 0 for an empty string' do
    calculator = StringCalculator.new
    expect(calculator.add('')).to eq(0)
  end
# test cases on delimiter and single digit
  it 'returns the single number' do
    calculator = StringCalculator.new
    expect(calculator.add('1')).to eq(1)
  end

  it 'adds multiple numbers separated by comma' do
    calculator = StringCalculator.new
    expect(calculator.add('1,2')).to eq(3)
  end
 end
