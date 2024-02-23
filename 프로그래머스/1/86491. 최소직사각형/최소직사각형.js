function solution(sizes) {
    const arr = sizes.map(el=> el.sort((a,b)=>b-a))
    let Big = [];
    let Small = [];
    for(let i = 0; i < arr.length; i++){
        Big.push(arr[i][0])
        Small.push(arr[i][1])
    }
    return Math.max(...Big) * Math.max(...Small)
}