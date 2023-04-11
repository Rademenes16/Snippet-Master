const fs = require('fs'); // Import the Node.js file system module

// Function to read data from disk
function readDataFromDisk(filePath) {
    // Read data asynchronously from disk
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading data from disk: ${err.message}`);
                reject(err);
            } else {
                console.log(`Data read from disk: ${data}`);
                resolve(data.split(',').map(Number)); // Convert read data to array of numbers
            }
        });
    });
}
function generateData(dataPoints, min, max) {
    const Data = [];
    for (let i = 0; i < dataPoints; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        Data.push(randomNumber);
    }
    return Data;
}

// Function to calculate the mean of an array of numbers
function calculateMean(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    const mean = sum / data.length;
    return mean;
}

// Function to calculate the median of an array of numbers
function calculateMedian(data) {
    const sortedData = data.sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
        return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
        return sortedData[mid];
    }
}

// Function to calculate the mode of an array of numbers
function calculateMode(data) {
    const frequencyMap = new Map();
    let maxCount = 0;
    let mode = [];
    for (const num of data) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
        if (frequencyMap.get(num) > maxCount) {
            maxCount = frequencyMap.get(num);
            mode = [num];
        } else if (frequencyMap.get(num) === maxCount) {
            mode.push(num);
        }
    }
    return mode;
}

// Function to calculate the variance of an array of numbers
function calculateVariance(data) {
    const mean = calculateMean(data);
    const squaredDiffSum = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    const variance = squaredDiffSum / data.length;
    return variance;
}

// Function to calculate the standard deviation of an array of numbers
function calculateStandardDeviation(data) {
    const variance = calculateVariance(data);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

// Example usage
const dataPoints = 1000; // Number of data points to generate
const min = 1; // Minimum value for random data
const max = 100; // Maximum value for random data

// Generate data
const Data = generateData(dataPoints, min, max);

// Perform statistical calculations
const mean = calculateMean(Data);
const median = calculateMedian(Data);
const mode = calculateMode(Data);
const variance = calculateVariance(Data);
const standardDeviation = calculateStandardDeviation(Data);

// Log the generated data and statistical calculations
console.log('Generated Data:', Data);
console.log('Mean:', mean);
console.log('Median:', median);
console.log('Mode:', mode);
console.log('Variance:', variance);
console.log('Standard Deviation:', standardDeviation);
