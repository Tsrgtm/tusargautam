function convertToLower() {
  const inputText = document.getElementById("inputText").value;
  const outputTextElement = document.getElementById("outputText");

  if (!inputText) {
    alert("Please enter some text to convert.");
    return;
  }

  const convertedText = inputText.toLowerCase();
  outputTextElement.textContent = `${convertedText}`;
}

function convertToUpper() {
  const inputText = document.getElementById("inputText").value;
  const outputTextElement = document.getElementById("outputText");

  if (!inputText) {
    alert("Please enter some text to convert.");
    return;
  }

  const convertedText = inputText.toUpperCase();
  outputTextElement.textContent = `${convertedText}`;
}
