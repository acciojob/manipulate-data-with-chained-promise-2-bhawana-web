//your JS code here. If required.
// Function that returns a promise that resolves with an array after 3 seconds
function getArray() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolves with [1, 2, 3, 4] after 3 seconds
  });
}

// Function to update the output div with the array as text
function updateOutput(array) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = array.join(', ');
}

// Start the promise chain
getArray()
  .then(array => {
    // First promise: filter out odd numbers
    return new Promise(resolve => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        updateOutput(evenNumbers); // Update output after filtering
        resolve(evenNumbers); // Pass filtered array to next promise
      }, 1000); // Wait for 1 second before resolving
    });
  })
  .then(evenNumbers => {
    // Second promise: multiply each even number by 2
    return new Promise(resolve => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map(num => num * 2);
        updateOutput(doubledNumbers); // Update output after doubling
        resolve(doubledNumbers); // Pass result to next promise (if needed)
      }, 2000); // Wait for 2 seconds before resolving
    });
  });
