export class StringCalculator {
    add(numbers: string): number {
      const numbersArray = numbers.split(',');
      return numbersArray.reduce((sum, current) => sum + parseInt(current), 0);
    }
}
  
