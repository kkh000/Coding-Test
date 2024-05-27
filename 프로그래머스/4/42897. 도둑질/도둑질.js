function solution(money) {
    const house = money.length;
    const first = Array(house).fill(0); 
    const second = Array(house).fill(0);
    
    first[0] = money[0];
    first[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < house - 1; i++) {
        first[i] = Math.max(first[i - 1], first[i - 2] + money[i]);
    }
    const maxMoney1 = first[house - 2];
    
    
    
    second[0] = 0;
    second[1] = money[1];
    for (let i = 2; i < house; i++) {
        second[i] = Math.max(second[i - 1], second[i - 2] + money[i]);
    }
    const maxMoney2 = second[house - 1];
    

    return Math.max(maxMoney1, maxMoney2);
}