// Function to generate Fibonacci series up to 'n' terms

function generateFibonacciSeries(n){
    let fibonacciSeries = [];
    let a = 1, b = 1; // Initialize first two numbers of Fibonacci series
    for(let i=0; i<n; i++){
        fibonacciSeries.push(a);  // Append current number 'a' to the series
        let nextNumber = a + b; // Calculate next number in the series
        a = b; // Update 'a' with 'b'
        b=nextNumber; // Update 'b' with the calculated next number.
    }
    return fibonacciSeries; // Return the complete Fibonacci series.
}

// Function to reverse and display Fibonacci series
function  displayFibonacciInReverse(n){
    const fibonacciSeries = generateFibonacciSeries(n); // Generate the Fibonacci series.
    const reversedSeries = fibonacciSeries.reverse(); // Reverse the Fibonaccci series.
    //log the reversed Fibonacci series to the console.
    console.log('reversed Fibonacci series');
    console.log(reversedSeries.join(", "));
}
// Number of terms to generate in the Fibonacci series.
const numberofterms = 10; // Number of terms to generate in the Fibonacci series.
displayFibonacciInReverse(numberofterms);

