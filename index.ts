function isLegal(age: number): boolean {
    if (age >= 18) {
        return true
    }
    return false
}

const deivingLicence: boolean = isLegal(90)
console.log(deivingLicence)