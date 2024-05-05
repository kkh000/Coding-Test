function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const correct = [0, 0, 0];
    
    answers.forEach((ans, i) => {
        if (ans === one[i % one.length]) {
            correct[0]++;
        }
        if (ans === two[i % two.length]) {
            correct[1]++;
        }
        if (ans === three[i % three.length]) {
            correct[2]++;
        }
    });
    
    const max = Math.max(...correct)
    if(correct.filter(el => el === max ).length === 1) {
        return [correct.findIndex(el=>el===max)+1]
    } else {
        return correct.map((el,i)=> el === max ? i+1 : 0).filter(el=>el !==0)
    }
    
}