function solution(bridge_length, weight, truck_weights) {
    let time = 0
    let total = 0
    let bridge = Array(bridge_length).fill(0)

    while (bridge.length > 0) {
        time++

        total = total - bridge.shift();

        if (truck_weights.length > 0) {
            if (total + truck_weights[0] <= weight) {
                const next = truck_weights.shift()
                bridge.push(next)
                total = total + next
            } else { 
                bridge.push(0)
            }
        }
    }
    return time;
}
    
