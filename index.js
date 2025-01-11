"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
const deivingLicence = isLegal(90);
console.log(deivingLicence);
