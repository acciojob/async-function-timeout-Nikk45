async function showMessageWithDelay() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  if (text && !isNaN(delay)) {
    await delayInMilliseconds(delay);
    outputDiv.innerText = text;
  }
}

function delayInMilliseconds(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
