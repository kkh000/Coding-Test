function solution(routes) {
    let count = 0;
    let camera= -30001;
    const startPosition = routes.sort((a, b) => a[1] - b[1])
    
    console.log(startPosition)

    for (let route of startPosition) {
        if (camera < route[0]) {
            count++;
           camera = route[1]
        }
    }

    return count
}