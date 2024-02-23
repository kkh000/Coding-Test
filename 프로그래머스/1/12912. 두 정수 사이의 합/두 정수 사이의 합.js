function solution(a, b) {
    if(a<=b){
        return Array.from({length:b-a}, (el,i) => i + a).reduce((x,y)=> x+y,b)
    } else {
        return Array.from({length:a-b}, (el,i) => i + b).reduce((x,y)=> x+y,a)
    }
    
}