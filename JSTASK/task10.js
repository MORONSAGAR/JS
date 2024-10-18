// Function to sort an array in descending order 
function sortArrayDescending(arr) {
    // Using the sort method with a custom comparator function
    return arr.sort((a, b) => b - a);
}

// Example usage
const myArray = [5, 2, 8, 1, 4];
const sortedArray = sortArrayDescending(myArray);

console.log(sortedArray); // Output: [8, 5, 4, 2, 1]
