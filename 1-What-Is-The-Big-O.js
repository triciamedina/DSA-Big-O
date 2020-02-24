// 1) Determine the Big O for the following algorithm: 
//
//  You are sitting in a room with 15 people. 
//  You want to find a playmate for your dog, preferably of the same breed. 
//  So you want to know if anyone out of the 15 people have the same breed as your dog. 
//  You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
//  Someone yells - "I do, be happy to bring him over"

// ANSWER: O(1) – Constant time complexity. 
//
// EXPLANATION: No matter how many dogs are in the room,
// it will still take the same amount of time to find a match

// 2) Determine the Big O for the following algorithm: 
//
// You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. 
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You start with the first person and ask him if he has a golden retriever. 
// He says no, then you ask the next person, and the next, 
// and the next until you find someone who has a golden or there is no one else to ask.

// ANSWER: O(n) – Linear time complexity. 
//
// EXPLANATION: Since you have to check with each owner one by one,
// the time it will take to find a match will grow in proportion to how many people
// are in the room