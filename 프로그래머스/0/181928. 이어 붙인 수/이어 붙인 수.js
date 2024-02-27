function solution(num_list) {
    const even = num_list.filter(el => el%2 === 0)
    const odd = num_list.filter(el => el%2 !== 0)
    return  Number(odd.join('')) + Number(even.join('')) 
}