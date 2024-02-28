function solution(n, arr1, arr2) {
    let newMap = [];
    let ans = [];
    const map1 = arr1.map(el=>el.toString(2).padStart(n,0).split(''))
    const map2 = arr2.map(el=>el.toString(2).padStart(n,0).split(''))
    for( let i = 0; i < n; i++){
        for( let j = 0; j < n; j++){
            newMap.push(map1[i][j]+map2[i][j])
        }
    }
    const changeArr = newMap.map(el => el === '00' ? ' ' : '#')
    for(let i = 1; i <= n; i++){
        ans.push(changeArr.splice(0,n).join(''))
    }
    return ans
}