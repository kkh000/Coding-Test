function solution(s) {
    // if( s*0 === 0 && (s.length === 4 || s.length === 6 ) ) {
    //     return true
    // } else {
    //     return false
    // }
    
    const ans = [...s].map(el=>(el*0)+1).reduce((a,b)=>a+b);
    return ans === 4 || ans === 6 ? true : false;
}