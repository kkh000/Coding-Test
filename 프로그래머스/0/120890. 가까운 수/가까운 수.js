function solution(array, n) {
   const idx =  [...array, n].sort((a,b)=>a-b).indexOf(n)
   const sortArr = array.sort((a,b)=>a-b)
   const ansArr = [sortArr[idx-1], sortArr[idx]]
   if(!ansArr[0]) return ansArr[1]
    if(!ansArr[1]) return ansArr[0]
     if(Math.abs(ansArr[0]-n)>Math.abs(ansArr[1]-n)) return ansArr[1]
     if(Math.abs(ansArr[0]-n)<=Math.abs(ansArr[1]-n)) return ansArr[0]
}