function solution(balls, share) {
    if(balls === share) return 1;
    const numer = Array(balls).fill().map((_,i) => i+1).reduce((a,b)=>a*b);
    const denom = Array(balls-share).fill().map((_,i) => i+1).reduce((a,b)=>a*b) *
                 Array(share).fill().map((_,i) => i+1).reduce((a,b)=>a*b);
    return Math.round(numer/denom)
}