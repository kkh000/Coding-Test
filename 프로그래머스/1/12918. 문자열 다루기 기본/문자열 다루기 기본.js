function solution(s) {
    const ans = [...s].map(el=>(el*0)+1).reduce((a,b)=>a+b);
    return ans === 4 || ans === 6 ? true : false;
}