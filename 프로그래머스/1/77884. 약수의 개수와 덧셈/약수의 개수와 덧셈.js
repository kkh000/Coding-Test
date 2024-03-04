function solution(left, right) {
    let ans = [];
    const arr = Array.from({length: right-left+1},(el,i)=>i+left);
    console.log(arr)
    const plusMinus =  arr.map(el => {
        let count = 0;
        for (let i = 1; i<=el; i++){
            if(el%i === 0){
                count ++
            }
        }
        return count
    }).map(el => el%2 === 0 ? 1 : -1)
    console.log(plusMinus)
    for(let i = 0; i< arr.length; i++){
        ans.push(arr[i]*plusMinus[i])
    }
    return ans.reduce((a,b)=>(a+b))
}