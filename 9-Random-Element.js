function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ANSWER: O(1) – Constant time complexity. 
//
// EXPLANATION: The time it takes to find a random item in the array
// remains constant no matter how large the array is