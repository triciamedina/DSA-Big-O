function compute(num) {
    let result = [];
    let ticks = 0;
    for (let i = 1; i <= num; i++) {
        ticks++;
        if (i === 1) {
            ticks++
            result.push(0);
        }
        else if (i == 2) {
            ticks++
            result.push(1);
        }
        else {
            ticks++
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

console.log(compute(3))

// This algorithm takes a number as an input and creates an array with length equal to num
// The first two items if length is greater than or equal to 2 will be [0, 1]
// Every item after 2 will be the sum of the preceding two items
//
// ANSWER: O(n) – Linear time complexity. 
//
// EXPLANATION: Since the algorithm creates a loop whose length is directly proportional 
// to the size of the input, the running time is directly proportional to the size