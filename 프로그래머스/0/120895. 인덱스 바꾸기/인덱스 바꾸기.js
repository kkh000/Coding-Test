function solution(my_string, num1, num2) {
    const el1 =[...my_string][num1]
    const el2 =[...my_string][num2]
    return [...my_string].map( (el,i) => {
        if(i===num1) return el2
        if(i===num2) return el1
        return el
    }).join('')
}