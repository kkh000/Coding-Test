function solution(sizes) {
    const arr = sizes.map(el=> el.sort((a,b)=>b-a))
    let width = [];
    let height = [];
    for(let i = 0; i < arr.length; i++){
        width.push(arr[i][0])
        height.push(arr[i][1])
    }
    return Math.max(...width) * Math.max(...height)
}