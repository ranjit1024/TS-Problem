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
console.log(doSomething(12));
