function solution(n) {
    let ans = 1;
    let count = 0;
   for(let i = 1; i<=10; i++){
       ans *= i;
       count ++
       if(n < ans){
           break;
       }
   }
    return count === 10 ? count : count-1
}