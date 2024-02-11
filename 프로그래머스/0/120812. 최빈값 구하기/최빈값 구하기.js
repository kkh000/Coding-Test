function solution(array) {
    const MaxNumArr = Array.from({length : Math.max(...array)+1}, el => 0);
    for(let i of array){
        MaxNumArr[i] += 1
    }
    const mode = Math.max(...MaxNumArr);
    return MaxNumArr.filter(el => el == mode).length > 1 ? -1 : MaxNumArr.indexOf(mode)
    
}








// function solution(array) {
//     let m = new Map();	//(1)
//     for (let n of array) m.set(n, (m.get(n) || 0)+1);	//(2)
//     m = [...m].sort((a,b)=>b[1]-a[1]);	//(3)
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }