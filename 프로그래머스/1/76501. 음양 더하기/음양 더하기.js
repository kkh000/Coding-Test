function solution(absolutes, signs) {
    const signArr = signs.map(el=> el === true ? 1 : -1);
    return absolutes.map((el,i)=> absolutes[i]*signArr[i]).reduce((a,b)=>a+b)
}