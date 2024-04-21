function hasOddNumber(array) {
    return array.some(function (val) {
        return val % 2 !== 0
    })

}

function hasAZero(num) {
    let stringNum = num.toString()
    let arrayNum = stringNum.split('')
    return arrayNum.some(function (val) {
        return val === '0'
    })
}

function hasOnlyOddNumbers(array) {
    return array.every(function (val) {
        return val % 2 !== 0
    })
}

function hasNoDuplicates(array) {
    return array.every(function (val) {
        return array.indexOf(val) === array.lastIndexOf(val)
    })
}

let arr = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: 'Matt', last: "Lane" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
]
function hasCertainKey(arrayOfObjects, key) {
    return arrayOfObjects.every(function (val, index) {
        return val[key] !== undefined
    })
}

function hasCertainValue(arrayOfObjects, key, value) {
    return arrayOfObjects.every(function (val, index) {
        return val[key] === value
    })
}