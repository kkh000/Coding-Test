function solution(id_pw, db) {
    const dbID = Array.from(db, el => el[0]);
    const dbPW = Array.from(db, el => el[1]);
    
    const emailIdx =  dbID.indexOf(id_pw[0]);
    console.log(dbID)
    return  emailIdx === -1 ? "fail" : 
            (id_pw[1] === dbPW[emailIdx] ? "login" : "wrong pw") ;
    
}

