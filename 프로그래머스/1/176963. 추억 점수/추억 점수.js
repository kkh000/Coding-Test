function solution(name, yearning, photo) {
    const arr = [];
    for (i of photo){
        let score = 0;
        for (j of i){
            const index = name.indexOf(j);
            if( index !== -1){
                score += yearning[index];
            }
        }
        arr.push(score)
    }
    return arr
}