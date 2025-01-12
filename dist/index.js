"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
function runafter1S(func) {
    setTimeout(func, 1000);
}
const doSomething = (a) => {
    console.log("Hello");
    return a;
};
function isLegalAnother(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function Greet(user) {
    console.log("Hello " + user.firstName);
}
Greet({
    firstName: 'ranjit',
    lastName: 'das',
    age: 12
});
console.log(isLegalAnother({
    firstname: 'ranjit',
    lastName: 'das',
    age: 12
}));
