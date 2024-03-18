function solution(my_string) {
    let arr = [];
    const str = [...my_string]
    for (i of str){
        i === i.toLowerCase() ? arr.push(i.toUpperCase()) : arr.push(i.toLowerCase())
    }
    return arr.join('')
}