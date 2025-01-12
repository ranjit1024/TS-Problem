// providig type to veriable for strict checking
const a: number = 12;
console.log(a)
//done


//giving type to the arguments in functinon
function Greet(username: string) {
    console.log(`hello ${username}`)
}
//


//giving type to the return value of function
function isAdult(age: number): boolean {
    if (age > 12) {
        return true
    }
    else {
        return false;
    }
}
//done


//passing object in a fuction
interface User {
    name: string,
    age: number,
    gay: boolean
}

function user(userdata: User) {
    console.log(userdata);
}

const user1 = user({
    name: "ranjit",
    age: 12,
    gay: true
})


//done


