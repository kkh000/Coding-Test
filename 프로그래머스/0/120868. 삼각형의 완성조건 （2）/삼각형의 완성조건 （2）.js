function solution(sides) {
    sides.sort((a,b)=>b-a)
   const sumSides = sides[0]+sides[1];
    const subSides = sides[0]-sides[1];
    return Array.from({length : sumSides-subSides-1}).length
}







/*
    
function solution(sides) {
    return Math.min(...sides)*2-1
}













function solution(sides) {

    sides.sort((a,b) => b - a);

    return sides[1] + sides[1] -1;
}


*/
