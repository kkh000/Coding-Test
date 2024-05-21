function solution(routes) {
    let count = 0;
    let firstCaremra = -30001;
    const startPosition = routes.sort((a, b) => a[1] - b[1])
    
    console.log(startPosition)

    for (let route of startPosition) {

        if (firstCaremra  < route[0]) {
            count++;
            firstCaremra = route[1]
        }
    }

    return count
}