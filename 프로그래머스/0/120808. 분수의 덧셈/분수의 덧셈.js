function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    let gcd = 0;

    for (let i=1; i<=Math.min(numer, denom); i++) {
        if (numer % i === 0 && denom % i === 0) {
            gcd = i;
        }
    }

    answer.push(numer / gcd);
    answer.push(denom / gcd);

    return answer;
}