// #frist create a age checking funciton
function isLegal(age: number): boolean {
    if (age >= 18) {
        return true
    }
    return false
}

// #Cteate a functin which takes another function as argumnet

function runafter1S(func: () => void) {
    setTimeout(func, 1000);
}

const doSomething: (a: number) => void = (a) => {
    console.log("Hello");
    return a;
}

console.log(doSomething(12))