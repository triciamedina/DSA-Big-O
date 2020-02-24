function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// ANSWER: O(n) – Linear time complexity. 
//
// EXPLANATION: Even though you may find the matching item on the first try,
// you are potentially needing to check every single item in the array. So
// the running time will grow in direct proportion to the size of the input.