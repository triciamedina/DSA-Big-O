function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// 0 is false
// 1 is false
// 2 is true
// 3 is true
// 4 is false
// 5 is true

console.log(isWhat(12))

// ANSWER: O(1) – Constant time complexity. 
//
// EXPLANATION: Even thought there is a loop in this algorithm,
// it exits the loop on the very first check against the condition
// So the runtime is constant no matter the size of the input