function solution(num_list) {
    const multiple = num_list.reduce((a,b)=>a*b)
    const sum = num_list.reduce((a,b)=>a+b)
    const ans = sum * sum
    return multiple > ans ? 0 : 1
}