// Import crypto-js library for AES encryption
const AES = require('crypto-js/aes');
const enc = require('crypto-js/enc-utf8');

const simulatedDrive = {
    data: null,
    encrypted: false,
    encryptionKey: null,
};

function encryptData(data, encryptionKey) {
    return AES.encrypt(data, encryptionKey).toString();
}

function decryptData(ciphertext, encryptionKey) {
    return AES.decrypt(ciphertext, encryptionKey).toString(enc.Utf8);
}

function encryptDrive(drive, encryptionKey) {
    if (!drive.encrypted) {
        if (drive.data) {
            drive.data = encryptData(drive.data, encryptionKey);
            drive.encrypted = true;
            console.log('Simulated drive encrypted successfully!');
        } else {
            console.log('Simulated drive is empty. Nothing to encrypt.');
        }
    } else {
        console.log('Simulated drive is already encrypted.');
    }
}

function decryptDrive(drive, encryptionKey) {
    if (drive.encrypted) {
        if (drive.data) {
            drive.data = decryptData(drive.data, encryptionKey);
            drive.encrypted = false;
            console.log('Simulated drive decrypted successfully!');
        } else {
            console.log('Simulated drive is empty. Nothing to decrypt.');
        }
    } else {
        console.log('Simulated drive is not encrypted.');
    }
}

function main() {
    // Initialize simulated drive with data
    simulatedDrive.data = 'This is a sample data stored on the simulated drive';
    console.log('Original data:', simulatedDrive.data);

    const encryptionKey = 'This is a sample encryption key';
    encryptDrive(simulatedDrive, encryptionKey);
    console.log('Encrypted data:', simulatedDrive.data);

    decryptDrive(simulatedDrive, encryptionKey);
    console.log('Decrypted data:', simulatedDrive.data);
}

main();
