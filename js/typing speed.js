let startTime, endTime;

function startTest() {
  const quote = document.getElementById('quote').textContent;
  document.getElementById('user-input').disabled = false;
  document.getElementById('result').textContent = '';

  startTime = new Date();
  document.getElementById('user-input').addEventListener('input', checkInput);

  function checkInput() {
    const userInput = document.getElementById('user-input').value;
    if (quote === userInput) {
      endTime = new Date();
      showResult();
    }
  }
}

function showResult() {
  const timeTaken = (endTime - startTime) / 1000; // in seconds
  const quote = document.getElementById('quote').textContent;
  const words = quote.split(' ');
  const wordCount = words.length;
  const userTyped = document.getElementById('user-input').value;
  const typedWords = userTyped.trim().split(' ').filter((word) => word !== '').length;
  const accuracy = calculateAccuracy(quote, userTyped);

  const wordsPerMinute = Math.floor((typedWords / timeTaken) * 60);
  const accuracyPercentage = (accuracy * 100).toFixed(2);

  const resultText = `Time taken: ${timeTaken.toFixed(2)} seconds\n`
    + `Words typed: ${typedWords}\n`
    + `Accuracy: ${accuracyPercentage}%\n`
    + `Speed: ${wordsPerMinute} words per minute`;

  document.getElementById('user-input').disabled = true;
  document.getElementById('result').textContent = resultText;
}

function calculateAccuracy(original, typed) {
  const originalWords = original.trim().split(' ');
  const typedWords = typed.trim().split(' ');

  let correctWords = 0;
  for (let i = 0; i < typedWords.length; i++) {
    if (originalWords[i] === typedWords[i]) {
      correctWords++;
    }
  }

  return correctWords / originalWords.length;
}