function solution(n) {
    arr=[];
    for( let i = 2; i<=n; i++){
        if( n%i === 0){
         arr.push(i)   
        }
    }
    const check = arr.map(el => {
        let count = 0;
        for(let i = 1; i<el; i++){
            if(el%i === 0){
                count++
            }
        }
        return count
    })
    return check.map((el,i)=> el === 1 ? arr[i] : 0).filter(el=>el!==0)
}