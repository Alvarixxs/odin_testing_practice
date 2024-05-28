export const capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function createCalculator() {
    return {
        sum: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => (b!==0) ? (a / b): undefined,
    }
}

export function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetU = 'ABCDEFGHIJKLMNOPQRSUVWXYZ'
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = alphabet.indexOf(char);
        if (index === -1) {
            index = alphabetU.indexOf(char)
            if (index === -1) {
                result += char;
            } else {
                let newIndex = (index + shift) % alphabetU.length;
                if (newIndex < 0) {
                    // Handle negative shifts
                    newIndex += alphabetU.length;
                }
                result += alphabetU[newIndex];
            }
        }
        else {
            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) {
                // Handle negative shifts
                newIndex += alphabet.length;
            }
            result += alphabet[newIndex];
        }
    }

    return result;
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((prev, curr) => prev + curr, 0)/arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}