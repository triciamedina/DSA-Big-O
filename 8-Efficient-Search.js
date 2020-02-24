function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// ANSWER: O(log(n)) – Logarithmic time complexity
//
// EXPLANATION: This algorithm checks the middle index first 
// to see if it matches the item or is less than or greater than the item
// Since this array is assumed to be sorted, the algorithm is able to cut the array in half