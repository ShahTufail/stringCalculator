export class StringCalculator {
  private readonly MAX_SAFE_INTEGER = 9007199254740991;

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    const delimiters = this.getDelimiters(numbers);
    const numbersArray = numbers.split(new RegExp(delimiters.join('|')));

    this.checkForNegatives(numbersArray);

    return numbersArray.reduce((sum, current) => {
      const num = parseInt(current);
      if (num > this.MAX_SAFE_INTEGER) {
        return sum; // Ignore numbers exceeding max safe integer
      }
      return sum + num;
    }, 0);
  }

  private getDelimiters(numbers: string): string[] {
    const customDelimiterMatch = numbers.match(/\/\/(.*)\n/);
    return customDelimiterMatch ? customDelimiterMatch[1].split('') : [',', '\n'];
  }

  private checkForNegatives(numbers: string[]): void {
    const negativeNumbers = numbers.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  }
}
