function fibonacci(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function printFibonacciSeries(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
    }
}

const n = 30; 
printFibonacciSeries(n);