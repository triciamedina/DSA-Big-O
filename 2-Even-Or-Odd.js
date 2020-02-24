function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// ANSWER: O(1) Constant time complexity
// 
// EXPLANATION: No matter what the size of the number is
// it will take the same amount of time to compute whether it is even or odd