function solution(x) {
    const num = x.toString().split('').reduce((a,b)=>Number(a)+Number(b));
    return x % num === 0 ? true : false;
}