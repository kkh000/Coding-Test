function solution(my_string) {
    const regex = /[^a-zA-z]+/
    return my_string.split('').map(el => regex.test(el)? el : ' ').join('').split(' ').reduce((a,b)=>Number(a)+Number(b),0)
}