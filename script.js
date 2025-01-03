//your JS code here. If required.
// The initial array
const numbers = [1, 2, 3, 4];

// Function that returns a promise resolving with the array after 3 seconds
function fetchNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);  // Resolve after 3 seconds
  });
}

// Function to filter even numbers
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Function to multiply numbers by 2
function multiplyByTwo(arr) {
  return arr.map((num) => num * 2);
}

// Start the promise chain when the script loads
fetchNumbers()
  .then((arr) => {
    // First operation: filter out odd numbers
    const evenNumbers = filterEvenNumbers(arr);
    setTimeout(() => {
      document.getElementById('output').textContent = `Even numbers: ${evenNumbers}`;
    }, 1000); // Print after 1 second

    // Second operation: multiply even numbers by 2
    const multipliedNumbers = multiplyByTwo(evenNumbers);
    setTimeout(() => {
      document.getElementById('output').textContent = `After multiplying by 2: ${multipliedNumbers}`;
    }, 2000); // Print after 2 seconds
  })
  .catch((error) => {
    document.getElementById('output').textContent = `Error: ${error}`;
  });
