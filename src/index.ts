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


// implenting interface in class so that we can have more sctict checking
interface Person {
    name: string,
    age: number,
    greet(phress: string): void;
}

class Studnet implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phress: string): void {
        console.log(`${phress} ${this.name}`)
    }
}

const s1 = new Studnet("ranjit", 12);
s1.greet("h1")
//


//Types

type GreetingType = number | string;

function greet1(name: GreetingType) {
    console.log(name);
}

type student = {
    name: string,
    age: number;
}

type teacher = {
    name: string,
    id: number,
}

type company = student & teacher;
const company1: company = {
    name: 'ranmjit',
    id: 1,
    age: 32,
}

//done

const prime: number[] = [2, 3, 5, 7, 11, 13];

console.log(prime)