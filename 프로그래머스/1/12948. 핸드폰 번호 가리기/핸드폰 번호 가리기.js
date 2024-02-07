function solution(phone_number) {
    const lastArr = phone_number.length-4;
    const num = phone_number.slice(phone_number.length-4);
   return Array(lastArr).fill('*').join('')+num

}