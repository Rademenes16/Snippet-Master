// Function to generate RSA key pair
function generateRSAKeyPair() {
    // Generate random prime numbers p and q
    const p = getRandomPrime();
    const q = getRandomPrime();

    // Calculate n and phi(n)
    const n = p * q;
    const phi = (p - 1) * (q - 1);

    // Choose a random number e such that 1 < e < phi and gcd(e, phi) = 1
    let e;
    do {
        e = getRandomInt(2, phi - 1);
    } while (gcd(e, phi) !== 1);

    // Calculate d, the modular multiplicative inverse of e modulo phi
    const d = modInverse(e, phi);

    // Return the public and private key pair
    return { publicKey: { n, e }, privateKey: { n, d } };
}

// Function to encrypt a message with RSA
function encryptRSA(message, publicKey) {
    const { n, e } = publicKey;
    const encryptedMessage = message.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return BigInt(charCode).modPow(BigInt(e), BigInt(n));
    });
    return encryptedMessage;
}

// Function to decrypt a message with RSA
function decryptRSA(encryptedMessage, privateKey) {
    const { n, d } = privateKey;
    const decryptedMessage = encryptedMessage.map(charCode => {
        const decryptedCharCode = charCode.modPow(BigInt(d), BigInt(n));
        return String.fromCharCode(Number(decryptedCharCode));
    });
    return decryptedMessage.join('');
}

// Helper function to generate a random prime number
function getRandomPrime() {
    // Generate a random number between 100 and 1000
    let num;
    do {
        num = getRandomInt(100, 1000);
    } while (!isPrime(num));
    return num;
}

// Helper function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Helper function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Helper function to calculate the modular multiplicative inverse of a modulo m
function modInverse(a, m) {
    let g = gcd(a, m);
    if (g !== 1) {
        throw new Error('Modular inverse does not exist');
    }
    return (a % m + m) % m;
}

// Function to encrypt a file with RSA
function encryptFile(filePath, publicKey) {
    const fileContents = readFile(filePath);
    const encryptedContents = encryptRSA(fileContents, publicKey);
    const encryptedFilePath = filePath + '.encrypted';
    writeFile(encryptedFilePath, encryptedContents.join(','));
    console.log(`File encrypted: ${encryptedFilePath}`);
}

// Function to decrypt a file with RSA
function decryptFile(encryptedFilePath, privateKey) {
    const encryptedContents = readFile(encryptedFilePath).split(',').map(BigInt);
    const decryptedContents = decryptRSA(encryptedContents, privateKey);
    const decryptedFilePath = encryptedFilePath.replace('.encrypted', '.decrypted');
    writeFile(decryptedFilePath, decryptedContents);
    console.log(`File decrypted: ${decryptedFilePath}`);
}


function main() {
    const { publicKey, privateKey } = generateRSAKeyPair();
    console.log('Generated RSA Key Pair:', publicKey, privateKey);
    const filePath = '/drive.js';
    encryptFile(filePath, publicKey);
    const encryptedFilePath = '/drive.js.encrypted';
    decryptFile(encryptedFilePath, privateKey);
}

main();