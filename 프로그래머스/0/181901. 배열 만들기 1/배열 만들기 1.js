function solution(n, k) {
    ans=[];
    for(let i = 1; i<=n; i++){
        if(i%k===0){
            ans.push(i)
        }
    }
    return ans
}