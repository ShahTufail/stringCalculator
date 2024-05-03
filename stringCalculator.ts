export class StringCalculator {
    // implemented in ts but can be replicated in any stacj
    
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    const delimiters = this.getDelimiters(numbers);
    const numbersArray = numbers.split(new RegExp(delimiters.join('|')));

    this.checkForNegatives(numbersArray);

    return numbersArray.reduce((sum, current) => sum + parseInt(current), 0);
  }

  // writing private functions here to get delimeters and negative checking  
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
