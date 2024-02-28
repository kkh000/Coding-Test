function solution(rny_string) {
    return [...rny_string].map(el => {
        if (el === 'm'){
            return ['rn']
        } else {
            return el
        }
    }).join('')
}