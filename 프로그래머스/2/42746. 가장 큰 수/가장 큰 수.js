function solution(numbers) {
   
    numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);

 
    if (numbers[0] === 0) {
        return '0';
    }

  
    return numbers.join('');
}
