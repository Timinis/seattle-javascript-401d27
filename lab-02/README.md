In our class List we have a few methods:

List.push(takes in any value) has 1 airty, return the length of the list, creates new property in association to current length and assign the parameter as its value.
List.map(takes in a call back) has 1 airty, return a brand new list, creates a new array with a for loop that iterates each numbered properties, and assign the properties with the return value of the callback on the previous array
List.pop() has 0 airty, returns the length of the list, and removes the last item of the array
List.filter(takes in a callback) has 1 airty, return a brand new array with by iterating a for loop over each of its numbered properties and applying the callback on each element. If the return of the callback is true then put it to a new array.
List.split(startPoint,endPoint) has 2 airty, takes in 2 int as parameters and return a brand new array by taking the startPoint as a starting point for the for loop and the endPoint as the condition stopper. And return any value of the properties iterated by the loop and return it as a new array.
List.reduce(takes in a callback, initial) has 2 airty and return a value associated with the callback. It runs the callback through each value of the list and take the result and run apply it onto the callback and on and on.
