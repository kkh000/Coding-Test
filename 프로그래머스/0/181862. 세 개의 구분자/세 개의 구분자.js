function solution(myStr) {
   const arr = [...myStr].map( el => {
       if (el === 'a' || el === 'b' || el === 'c') {
        return ' '; 
    } else {
        return el;
    }
   });

    const ans = arr.join("").split(' ').filter(el => el !== '');
    return ans.length !== 0 ? ans : ["EMPTY"]

}