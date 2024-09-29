export const textToBinary = (text) => {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0'); //todas las letras tienen su propio charcode y ese se convierte a binario
    }).join('');
}

export const binaryToText = (binary) => {
    let result = '';
    for (let i = 0; i < binary.length; i += 8) { //recorrer de binario de longitud 8
        let byte = binary.slice(i, i + 8);
        result += String.fromCharCode(parseInt(byte, 2)); //al tener su numero cada letra puedes volver a identificar que letra era mediante el charcode
    }
    return result;
}

export const encryptToBinary = (text, key) => {
    let binaryText = textToBinary(text);
    let binaryKey = textToBinary(key);
    let encrypted = '';

    for (let i = 0; i < binaryText.length; i++) {
        encrypted += binaryText[i] ^ binaryKey[i % binaryKey.length];
    }

    return encrypted;
}

export const decryptBinary = (encryptedBinary, key) => {
    const binaryKey = textToBinary(key);
    let decrypted = '';

    for (let i = 0; i < encryptedBinary.length; i++) {
        decrypted += encryptedBinary[i] ^ binaryKey[i % binaryKey.length];
    }
    return binaryToText(decrypted);
} 