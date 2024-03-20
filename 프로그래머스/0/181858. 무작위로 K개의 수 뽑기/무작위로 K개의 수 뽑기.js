function solution(arr, k) {
    const set = new Set(arr);
    const setArr = Array.from(set)
    if( setArr.length > k){
        return setArr.splice(0,k)
    } else if (setArr.length === k){
        return setArr
    } else {
        return [...setArr,...Array(k-setArr.length).fill(-1)] 
    }
    
}