function solution(n) {
    let ans = 0;
    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                ans += i;
            }
        }
    } else if (n % 2 === 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                ans += i*i;
            }
        }
    }
    return ans;
}