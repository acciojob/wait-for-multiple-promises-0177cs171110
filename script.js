//your JS code here. If required.
// Generate a random delay between 1 and 3 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000; // Random delay between 1000ms (1s) and 3000ms (3s)
}

// Delay function using Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to add a row to the table with promise name and time taken
function addTableRow(promiseName, timeTaken) {
  const output = document.getElementById('output');
  const newRow = output.insertRow();
  newRow.innerHTML = `
    <td>${promiseName}</td>
    <td>${timeTaken.toFixed(3)}</td>
  `;
}

// Main function to handle promises and display results
async function main() {
  const promises = [
    delay(getRandomDelay()), // Random delay for Promise 1
    delay(getRandomDelay()), // Random delay for Promise 2
    delay(getRandomDelay()), // Random delay for Promise 3
  ];

  // Start timing the promises
  const startTimes = promises.map(() => Date.now());

  await Promise.all(promises);

  // Calculate time taken for each promise and add rows to the table
  promises.forEach((promise, index) => {
    const timeTaken = (Date.now() - startTimes[index]) / 1000; // Convert ms to seconds
    addTableRow(`Promise ${index + 1}`, timeTaken);
  });

  // Calculate total time taken for all promises
  const totalTimeTaken = (Date.now() - Math.min(...startTimes)) / 1000;
  addTableRow('Total', totalTimeTaken);
}

// Call main function when the document is loaded
document.addEventListener('DOMContentLoaded', main);
