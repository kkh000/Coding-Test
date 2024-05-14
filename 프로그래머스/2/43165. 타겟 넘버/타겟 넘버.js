function solution(numbers, target) {
      let count = 0;
    let stack = [{ index: 0, sum: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();
        if (current.index === numbers.length) {
            if (current.sum === target) {
                count++;
            }
        } else {
            stack.push({ index: current.index + 1, sum: current.sum + numbers[current.index] });
            stack.push({ index: current.index + 1, sum: current.sum - numbers[current.index] });
        }
    }

    return count;
}