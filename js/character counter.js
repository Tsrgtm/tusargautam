const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

inputText.addEventListener('input', updateCharacterCount);

function updateCharacterCount() {
    const text = inputText.value;
    const count = text.length;
    charCount.textContent = `Character count: ${count}`;
}
