function solution(brown, yellow) {
    let possibleBrown = [];
    const sum = (brown/2)-2
    
    for(let i = 1; i<sum; i++){
        possibleBrown.push([i,sum-i])
    }
    console.log(possibleBrown)
    const find = possibleBrown.map(el=>el.reduce((a,b)=>a*b)).indexOf(yellow)
    console.log(find)
    const y = possibleBrown[find].sort((a,b)=>b-a)
    console.log(y)
    return [y[0]+2,y[1]+2]

    
    // x * y = yellow
    // 2(x+y+2) = brown
}