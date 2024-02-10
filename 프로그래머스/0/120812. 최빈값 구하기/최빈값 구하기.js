function solution(array) {
    const MaxNumArr = Array.from({length : Math.max(...array)+1}, el => 0);
    for(let i of array){
        MaxNumArr[i] += 1
    }
    const mode = Math.max(...MaxNumArr);
    return MaxNumArr.filter(el => el == mode).length > 1 ? -1 : MaxNumArr.indexOf(mode)
    
}