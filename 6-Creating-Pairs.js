function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// ANSWER: O(n^2) – Polynomial time complexity
//
// EXPLANATION: The algorithm requires 2 levels of looping over an input