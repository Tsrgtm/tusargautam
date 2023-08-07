const morseCodeToText = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H",
    "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P",
    "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
    ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", ".-.-.-": ".", "--..--": ",",
    "..--..": "?", "-..-.": "/", "-.--.": "(", "-.--.-": ")", ".-...": "&", "---...": ":",
    "-.-.-.": ";", "-...-": "=", ".-.-.": "+", "-....-": "-", "..--.-": "_", ".-..-.": "\"",
    "...-..-": "$", ".--.-.": "@", "...---...": "SOS", "-.-.--": "!",
};

function textToMorseCode(text) {
    return text
        .toUpperCase()
        .split('')
        .map((char) => (morseCodeToText[char] || char) + ' ')
        .join('');
}

function morseCodeToTextFunction(morseCode) {
    return morseCode
        .trim()
        .split(' ')
        .map((code) => (Object.values(morseCodeToText).includes(code) ? Object.keys(morseCodeToText).find(key => morseCodeToText[key] === code) : code))
        .join('');
}

function translatecode() {
    const inputText = document.getElementById('inputText').value.trim();
    const outputText = document.getElementById('outputText');

    if (!inputText) {
        alert('Please enter some text or Morse code.');
        return;
    }

    if (inputText.includes('.') || inputText.includes('-')) {
        // Translate from Morse code to text
        const translatedText = morseCodeToTextFunction(inputText);
        outputText.value = translatedText;
    } else {
        // Translate from text to Morse code
        const morseCode = textToMorseCode(inputText);
        outputText.value = morseCode;
    }
}
