function solution(emergency) {
    const sort =[... emergency].sort((a,b)=>b-a)
    return emergency.map(el => {
        for(let i = 0; i<sort.length; i++){
            if( el === sort[i]){
                return i+1
            }
        }
    });
}