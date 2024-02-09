function solution(n) {
    let ans = 0;
    for( let i = 0; i <= n; i++){
        ans += n % i === 0 ? 1 : 0
    }
    return ans
}