function solution(people, limit) {
    let count = 0;
    const sort = people.sort((a,b)=> a-b)
    for(let i = 0; i <people.length; i++){
        if( sort[i] + sort[sort.length-1-i] <= limit){
            count++
            sort.pop(sort[i])
            sort.shift(sort[sort.length-1-i])
            i--
        
        } else {
            count++
            sort.pop(sort[i])
   
            i--
        }
    }
    return count
}