// COUNTING SHEEP - ITERATIVE
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Since the algorithm creates a loop whose length is directly proportional 
// to the size of the input, the running time is directly proportional to the size

const countingSheep = function(sheepCount) {
    let str = ''
    for (let i = sheepCount; i >= 0; i--) {
        if (i > 0) {
            str += `\n ${i}: Another sheep jumps over the fence` ;
        } else {
            str += '\n All sheep jumped over the fence'
        }
    }
    return str
}

// let sheepCount = 3;
// console.log(countingSheep(sheepCount));


/////////////////////////


// POWER CALCULATOR – ITERATIVE
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0';
    };

    if (exponent === 0) {
        return 1
    };

    if (exponent > 0) {
        let count = 1;
        for (let i = 1; i <= exponent; i++) {
            count *= base
        }
        return count
    };
}

// let base = 3;
// let exponent = 1;
// console.log(powerCalculator(base, exponent));


/////////////////////////


// REVERSE STRING - ITERATIVE
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const reverseString = function(string) {    
    let newString = '';
    for (let i = (string.length - 1); i >= 0; i--) {
        newString += string.slice(i, i + 1)
    }
    return newString
}

// let string = 'goodbye'
// console.log(reverseString(string));


/////////////////////////


// NTH TRIANGULAR NUMBER - ITERATIVE
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const nthTriangularNumber = function(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        count += i;
    };

    return count;
}

// let n = 9
// console.log(nthTriangularNumber(n));


/////////////////////////


// STRING SPLITTER - Iterative version
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const stringSplitter = function(string, separator) {
    let arr = [];
    let newStr = ''
    for (let i = 0; i <= string.length; i++) {
        if (i < string.length) {
            if (string[i] !== separator) {
                newStr += string[i]
            } else if (string[i] === separator) {
                arr.push(newStr);
                newStr = ''
            }
        } else if (i === string.length) {
            arr.push(newStr)
        }
    }
    return arr
}

// let string = '02/20/2020';
// let separator = '/';
// console.log(stringSplitter(string, separator));


/////////////////////////


// FIBONACCI SEQUENCE - Iterative version
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const fibonacciSequence = function(number) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
        if (i <= 2) {
            arr.push(1)
        } else {
            arr.push((arr[i - 2]) + (arr[i - 3]))
        };
    };

    return arr[number - 1];
}

// let number = 7;
// console.log(fibonacciSequence(number));


/////////////////////////


// FACTORIAL - Iterative version
// BIG O:  O(n) — Linear time complexity
// EXPLANATION: Running time is directly proportional to the size

const factorial = function(number) {
    let total = 1;
    for (let i = 1; i <= number; i++) {
        total *= i;
    }
    return total;
}

let number = 5;
console.log(factorial(number));
