const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Add click event listener to the button
btn.addEventListener('click', showMessage);

// Function to display the message after a delay
async function showMessage() {
  const text = textInput.value;
  const delay = parseInt(delayInput.value, 10);

  // Validate input
  if (text.trim() === '' || isNaN(delay) || delay <= 0) {
    outputDiv.textContent = 'Invalid input';
    return;
  }

  // Delay using a Promise
  function delayPromise(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Wait for the specified delay
  await delayPromise(delay);

  // Display the message
  outputDiv.textContent = text;
}