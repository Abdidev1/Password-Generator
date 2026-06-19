const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy');

const charSets = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+{}[]|:;<>,.?/~`=-'
};

function generatePassword() {
    const length = parseInt(lengthEl.value);
    let availableChars = '';
    let guaranteedChars = [];

if (uppercaseEl.checked) {
    availableChars += charSets.upper;
    guaranteedChars.push(getRandomChar(charSets.upper));
}

if (lowercaseEl.checked) {
    availableChars += charSets.lower;
    guaranteedChars.push(getRandomChar(charSets.lower));
}

if (numbersEl.checked) {
    availableChars += charSets.number;
    guaranteedChars.push(getRandomChar(charSets.number));
}

if (symbolsEl.checked) {
    availableChars += charSets.symbol;
    guaranteedChars.push(getRandomChar(charSets.symbol));
}

if (availableChars.length === 0) {
    passwordDisplay.value = 'Select an option!';
    return;
}

let generatedPassword = [...guaranteedChars];

for (let i = generatedPassword.length; i < length; i++) {
    generatedPassword.push(getRandomChar(availableChars));
}

generatedPassword = shuffleArray(generatedPassword).join('');

passwordDisplay.value = generatedPassword.slice(0,length);
}

function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

async function copyToClipboard() {
    const password = passwordDisplay.value;
    if (!password || password === 'Select an option!') return;

    try {
        await navigator.clipboard.writeText(password);
        alert('Password copied to Clipboard');
    }   catch (err) {
        console.error('Failed to copy text: ', err)
    }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);