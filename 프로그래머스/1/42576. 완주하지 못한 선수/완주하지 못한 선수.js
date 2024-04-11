function solution(participant, completion) {
    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}




//  let object = {}
//     for (let i = 0; i < participant.length; i++) { 
//         object[participant[i]] = null 
//     }
    
//     for (let i = 0; i < completion.length; i++) {
//         if (object.hasOwnProperty(completion[i])) {
//             object[completion[i]] = completion[i]
//         }
//     }
//     return Object.keys(object).filter(key => object[key] === null).join()

// 중복값제거가 안됨




// hasOwnProperty 메서드는 객체가 특정 속성(키)을 직접 소유하고 있는지를 나타내는 불리언 값을 반환하는 자바스크립트 메서드입니다. 이 메서드는 객체 자체에 직접 정의된 속성에 대해서만 true를 반환하고, 프로토타입 체인 상에서 상속된 속성에 대해서는 false를 반환