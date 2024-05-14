const accId = 111212
let accEmail = "test@gmail.com"
var accPass = "12345"
accCity = "Bhilai"
let accstate;

// accId = 2 // not allowed

accEmail =  "test2@gmail.com"
accPass = "33345"
accCity = "Raipur"

/* Prefer not to use (Var)  
because of issue in block scope and functional scope*/
console.log(accId);
console.table([accId, accEmail, accPass, accCity, accstate]);
