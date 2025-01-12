"use strict";
const a = 12;
console.log(a);
function Greet(username) {
    console.log(`hello ${username}`);
}
function isAdult(age) {
    if (age > 12) {
        return true;
    }
    else {
        return false;
    }
}
function user(userdata) {
    console.log(userdata);
}
const user1 = user({
    name: "ranjit",
    age: 12,
    gay: true
});
class Studnet {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phress) {
        console.log(`${phress} ${this.name}`);
    }
}
const s1 = new Studnet("ranjit", 12);
s1.greet("h1");
