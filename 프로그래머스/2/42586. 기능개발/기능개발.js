function solution(progresses, speeds) {
    let count = 0;
    let day = [];
    let ans = [[]];
    for( let i = 0; i<speeds.length; i++){
        let sum =  progresses[i] += speeds[i];
        if(sum < 100){
            count ++
           i--
        } else {
            count ++
            day.push(count)
            count = 0            
        }
    }
    console.log(day)
    
   ans[0].push(day[0]);
    
    console.log(ans)

    for (let i = 1; i < day.length; i++) {
        if (ans[ans.length - 1][0] >= day[i]) {
            ans[ans.length - 1].push(day[i]);
        } else {
            ans.push([day[i]]);
        }
        console.log(ans)
    }

    return ans.map(el=>el.length);
}