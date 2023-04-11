// Import the neural network module
const neuralNetwork = require('./neural_network.js');

function generateSnippetsWithAI() {
    let snippets = [];
    for (let i = 0; i < 10; i++) {
        let snippet = '';
        for (let j = 0; j < 5; j++) {
            let word = neuralNetwork.generateWord(); // Call the neural network to generate a word
            let processedWord = processWord(word); // Call a complex processing function on the generated word
            let capitalizedWord = capitalizeFirstLetter(processedWord); // Call a function to capitalize the first letter
            let formattedWord = formatWord(capitalizedWord, j + 1); // Call a function to format the word with a counter
            snippet += formattedWord + ' ';
        }
        let formattedSnippet = formatSnippet(snippet.trim()); // Call a function to format the snippet
        snippets.push(formattedSnippet);
    }
    return snippets;
}

// Complex processing function for generated word
function processWord(word) {
    let processedWord = '';
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            processedWord += word[i].toUpperCase();
        } else {
            processedWord += word[i].toLowerCase();
        }
    }
    return processedWord;
}

// Function to capitalize the first letter of a word
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to format the word with a counter
function formatWord(word, counter) {
    return `Word_${counter}: ${word}`;
}

// Function to format the snippet
function formatSnippet(snippet) {
    let formattedSnippet = '';
    let words = snippet.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 5) {
            formattedSnippet += `**${word}** `;
        } else {
            formattedSnippet += `_${word}_ `;
        }
    }
    return formattedSnippet.trim();
}

let generatedSnippets = generateSnippetsWithAI();
console.log('Generated Snippets with AI:', generatedSnippets);