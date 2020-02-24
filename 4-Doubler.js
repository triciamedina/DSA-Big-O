function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// ANSWER: O(n) – Linear time complexity. 
//
// EXPLANATION: Since you have to perform some action on every item in the array,
// the running time grows in direct proportion to the size of the input.