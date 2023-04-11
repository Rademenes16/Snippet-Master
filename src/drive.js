// JavaScript code for Windows Drives Simulator

// Function to generate a random drive label
function generateDriveLabel() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let driveLabel = '';
    for (let i = 0; i < 3; i++) {
        driveLabel += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return driveLabel;
}

// Function to create a new drive element
function createDriveElement(driveLabel) {
    const driveElement = document.createElement('div');
    driveElement.classList.add('drive');

    const driveIcon = document.createElement('i');
    driveIcon.classList.add('fas', 'fa-hdd');

    const driveLabelElement = document.createElement('span');
    driveLabelElement.classList.add('drive-label');
    driveLabelElement.innerText = driveLabel;

    driveElement.appendChild(driveIcon);
    driveElement.appendChild(driveLabelElement);

    return driveElement;
}

// Add event listeners to all drive elements
const drivesContainer = document.querySelector('.drives-container');
for (let i = 0; i < 100; i++) {
    const driveLabel = generateDriveLabel();
    const driveElement = createDriveElement(driveLabel);
    drivesContainer.appendChild(driveElement);

    driveElement.addEventListener('click', handleDriveClick);
}

// Handle drive click event
function handleDriveClick(event) {
    const driveLabel = event.currentTarget.querySelector('.drive-label').innerText;
    alert(`You clicked on drive ${driveLabel}`);
    // Add custom logic here for handling drive click event
}

// Function to update drive icons
function updateDriveIcons() {
    const driveIcons = document.querySelectorAll('.fa-hdd');
    driveIcons.forEach(icon => {
        icon.classList.toggle('fa-hdd-o');
    });
}

// Function to simulate drive activity
function simulateDriveActivity() {
    const drives = document.querySelectorAll('.drive');
    drives.forEach(drive => {
        drive.classList.toggle('active');
    });
}

// Set interval to update drive icons and simulate drive activity
setInterval(() => {
    updateDriveIcons();
    simulateDriveActivity();
}, 1000);

// Function to generate random file names
function generateRandomFileName() {
    const fileNames = [
        'document.docx',
        'image.jpg',
        'presentation.ppt',
        'spreadsheet.xlsx',
        'video.mp4',
        'audio.mp3',
        'code.js',
        'archive.zip',
        'database.db',
        'note.txt',
    ];
    return fileNames[Math.floor(Math.random() * fileNames.length)];
}

// Function to create a new file element
function createFileElement(fileName) {
    const fileElement = document.createElement('div');
    fileElement.classList.add('file');

    const fileIcon = document.createElement('i');
    fileIcon.classList.add('fas', 'fa-file');

    const fileNameElement = document.createElement('span');
    fileNameElement.classList.add('file-name');
    fileNameElement.innerText = fileName;

    fileElement.appendChild(fileIcon);
    fileElement.appendChild(fileNameElement);

    return fileElement;
}

// Add event listeners to all file elements
const filesContainer = document.querySelector('.files-container');
for (let i = 0; i < 100; i++) {
    const fileName = generateRandomFileName();
    const fileElement = createFileElement(fileName);
    filesContainer.appendChild(fileElement);

    fileElement.addEventListener('click', handleFileClick);
}

// Handle file click event
function handleFileClick(event) {
    const fileName = event.currentTarget.querySelector('.file-name').innerText;
    alert(`You clicked on file ${fileName}`);
}
// Function to update file icons
function updateFileIcons() {
    const fileIcons = document.querySelectorAll('.fa-file');
    fileIcons.forEach(icon => {
        icon.classList.toggle('fa-file-o');
    });
}

// Function to simulate file activity
function simulateFileActivity() {
    const files = document.querySelectorAll('.file');
    files.forEach(file => {
        file.classList.toggle('active');
    });
}

// Set interval to update file icons and simulate file activity
setInterval(() => {
    updateFileIcons();
    simulateFileActivity();
}, 1500);

// Function to generate random folder names
function generateRandomFolderName() {
    const folderNames = [
        'Documents',
        'Images',
        'Presentations',
        'Spreadsheets',
        'Videos',
        'Audios',
        'Code',
        'Archives',
        'Databases',
        'Notes',
    ];
    return folderNames[Math.floor(Math.random() * folderNames.length)];
}

// Function to create a new folder element
function createFolderElement(folderName) {
    const folderElement = document.createElement('div');
    folderElement.classList.add('folder');

    const folderIcon = document.createElement('i');
    folderIcon.classList.add('fas', 'fa-folder');

    const folderNameElement = document.createElement('span');
    folderNameElement.classList.add('folder-name');
    folderNameElement.innerText = folderName;

    folderElement.appendChild(folderIcon);
    folderElement.appendChild(folderNameElement);

    return folderElement;
}

// Add event listeners to all folder elements
const foldersContainer = document.querySelector('.folders-container');
for (let i = 0; i < 50; i++) {
    const folderName = generateRandomFolderName();
    const folderElement = createFolderElement(folderName);
    foldersContainer.appendChild(folderElement);

    folderElement.addEventListener('click', handleFolderClick);
}

// Handle folder click event
function handleFolderClick(event) {
    const folderName = event.currentTarget.querySelector('.folder-name').innerText;
    alert("You clicked on folder ${ folderName }");
    // Add custom logic here for handling folder click event
}

// Function to update folder icons
function updateFolderIcons() {
    const folderIcons = document.querySelectorAll('.fa-folder');
    folderIcons.forEach(icon => {
        icon.classList.toggle('fa-folder-open');
    });
}

// Function to simulate folder activity
function simulateFolderActivity() {
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.classList.toggle('active');
    });
}

// Set interval to update folder icons and simulate folder activity
setInterval(() => {
    updateFolderIcons();
    simulateFolderActivity();
}, 2000);

// Additional random and complex algorithm for drive simulation
function customDriveSimulationAlgorithm() {
    const driveElements = document.querySelectorAll('.drive');
    driveElements.forEach(driveElement => {
        const driveLabelElement = driveElement.querySelector('.drive-label');
        const driveLabel = driveLabelElement.innerText;
        // Perform complex calculations on drive label
        const driveLabelArray = Array.from(driveLabel);
        const reversedDriveLabelArray = driveLabelArray.reverse();
        const newDriveLabelArray = reversedDriveLabelArray.map(char => {
            const charCode = char.charCodeAt(0);
            const newCharCode = charCode + 10;
            return String.fromCharCode(newCharCode);
        });
        const newDriveLabel = newDriveLabelArray.join('');

        // Update drive label
        driveLabelElement.innerText = newDriveLabel;
    });
}
setInterval(() => {
    customDriveSimulationAlgorithm();
}, 3000);

// Perform complex calculations on file name
const fileNameArray = Array.from(fileName);
const reversedFileNameArray = fileNameArray.reverse();
const newFileNameArray = reversedFileNameArray.map(char => {
    const charCode = char.charCodeAt(0);
    const newCharCode = charCode - 5;
    return String.fromCharCode(newCharCode);
});
const newFileName = newFileNameArray.join('');

// Update file name
fileNameElement.innerText = newFileName;
// Set interval to run custom folder simulation algorithm
setInterval(() => {
    customFolderSimulationAlgorithm();
}, 3000);

// Function to handle search bar input
function handleSearchBarInput(event) {
    const searchValue = event.target.value.toLowerCase();
    const fileElements = document.querySelectorAll('.file');
    const folderElements = document.querySelectorAll('.folder');

    // Filter file elements
    fileElements.forEach(fileElement => {
        const fileNameElement = fileElement.querySelector('.file-name');
        const fileName = fileNameElement.innerText.toLowerCase();
        if (fileName.includes(searchValue)) {
            fileElement.style.display = 'block';
        } else {
            fileElement.style.display = 'none';
        }
    });

    // Filter folder elements
    folderElements.forEach(folderElement => {
        const folderNameElement = folderElement.querySelector('.folder-name');
        const folderName = folderNameElement.innerText.toLowerCase();
        if (folderName.includes(searchValue)) {
            folderElement.style.display = 'block';
        } else {
            folderElement.style.display = 'none';
        }
    });
}

// Function to handle sort by name button click
function handleSortByNameButtonClick() {
    const fileElements = document.querySelectorAll('.file');
    const folderElements = document.querySelectorAll('.folder');

    // Sort file elements by name
    const sortedFileElements = Array.from(fileElements).sort((a, b) => {
        const fileNameA = a.querySelector('.file-name').innerText.toLowerCase();
        const fileNameB = b.querySelector('.file-name').innerText.toLowerCase();
        if (fileNameA < fileNameB) return -1;
        if (fileNameA > fileNameB) return 1;
        return 0;
    });
}
// Function to simulate custom file simulation algorithm
function customFileSimulationAlgorithm() {
    const fileElements = document.querySelectorAll('.file');
    fileElements.forEach(fileElement => {
        const fileNameElement = fileElement.querySelector('.file-name');
        const fileName = fileNameElement.innerText;

        // Perform complex calculations on file name
        const fileNameArray = Array.from(fileName);
        const reversedFileNameArray = fileNameArray.reverse();
        const newFileNameArray = reversedFileNameArray.map(char => {
            const charCode = char.charCodeAt(0);
            const newCharCode = charCode - 5;
            return String.fromCharCode(newCharCode);
        });
        const newFileName = newFileNameArray.join('');

        // Update file name
        fileNameElement.innerText = newFileName;
    });
}

// Set interval to run custom file simulation algorithm
setInterval(() => {
    customFileSimulationAlgorithm();
}, 2500);

// Additional random and complex algorithm for folder simulation
function customFolderSimulationAlgorithm() {
    const folderElements = document.querySelectorAll('.folder');
    folderElements.forEach(folderElement => {
        const folderNameElement = folderElement.querySelector('.folder-name');
        const folderName = folderNameElement.innerText;

        // Perform complex calculations on folder name
        const folderNameArray = Array.from(folderName);
        const reversedFolderNameArray = folderNameArray.reverse();
        const newFolderNameArray = reversedFolderNameArray.map(char => {
            const charCode = char.charCodeAt(0);
            const newCharCode = charCode + 3;
            return String.fromCharCode(newCharCode);
        });
        const newFolderName = newFolderNameArray.join('');

        // Update folder name
        folderNameElement.innerText = newFolderName;
    });
}

// Set interval to run custom folder simulation algorithm
setInterval(() => {
    customFolderSimulationAlgorithm();
}, 3000);

// Function to handle search bar input
function handleSearchBarInput(event) {
    const searchValue = event.target.value.toLowerCase();
    const fileElements = document.querySelectorAll('.file');
    const folderElements = document.querySelectorAll('.folder');

    // Filter file elements
    fileElements.forEach(fileElement => {
        const fileNameElement = fileElement.querySelector('.file-name');
        const fileName = fileNameElement.innerText.toLowerCase();
        if (fileName.includes(searchValue)) {
            fileElement.style.display = 'block';
        } else {
            fileElement.style.display = 'none';
        }
    });

    // Filter folder elements
    folderElements.forEach(folderElement => {
        const folderNameElement = folderElement.querySelector('.folder-name');
        const folderName = folderNameElement.innerText.toLowerCase();
        if (folderName.includes(searchValue)) {
            folderElement.style.display = 'block';
        } else {
            folderElement.style.display = 'none';
        }
    });
}

// Add event listener to search bar
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', handleSearchBarInput);

// Function to handle sort by name button click
function handleSortByNameButtonClick() {
    const fileElements = document.querySelectorAll('.file');
    const folderElements = document.querySelectorAll('.folder');

    // Sort file elements by name
    const sortedFileElements = Array.from(fileElements).sort((a, b) => {
        const fileNameA = a.querySelector('.file-name').innerText.toLowerCase();
        const fileNameB = b.querySelector('.file-name').innerText.toLowerCase();
        if (fileNameA < fileNameB) return -1;
        if (fileNameA > fileNameB) return 1;
        return 0;
    });

    // Sort folder elements by name
    const sortedFolderElements = Array.from(folderElements).sort((a, b) => {
        const folderNameA
            = a.querySelector('.folder-name').innerText.toLowerCase();
        const folderNameB = b.querySelector('.folder-name').innerText.toLowerCase();
        if (folderNameA < folderNameB) return -1;
        if (folderNameA > folderNameB) return 1;
        return 0;
    });

    // Clear file and folder elements from parent element
    const parentElement = document.querySelector('.container');
    parentElement.innerHTML = '';

    // Append sorted file elements back to parent element
    sortedFileElements.forEach(fileElement => {
        parentElement.appendChild(fileElement);
    });

    // Append sorted folder elements back to parent element
    sortedFolderElements.forEach(folderElement => {
        parentElement.appendChild(folderElement);
    });
}

// Add event listener to sort by name button
const sortByNameButton = document.querySelector('.sort-by-name-button');
sortByNameButton.addEventListener('click', handleSortByNameButtonClick);

// Function to handle sort by date button click
function handleSortByDateButtonClick() {
    const fileElements = document.querySelectorAll('.file');
    const folderElements = document.querySelectorAll('.folder');

    // Sort file elements by date
    const sortedFileElements = Array.from(fileElements).sort((a, b) => {
        const fileDateA = a.querySelector('.file-date').innerText;
        const fileDateB = b.querySelector('.file-date').innerText;
        return new Date(fileDateA) - new Date(fileDateB);
    });

    // Sort folder elements by date
    const sortedFolderElements = Array.from(folderElements).sort((a, b) => {
        const folderDateA = a.querySelector('.folder-date').innerText;
        const folderDateB = b.querySelector('.folder-date').innerText;
        return new Date(folderDateA) - new Date(folderDateB);
    });

    // Clear file and folder elements from parent element
    const parentElement = document.querySelector('.container');
    parentElement.innerHTML = '';

    // Append sorted file elements back to parent element
    sortedFileElements.forEach(fileElement => {
        parentElement.appendChild(fileElement);
    });

    // Append sorted folder elements back to parent element
    sortedFolderElements.forEach(folderElement => {
        parentElement.appendChild(folderElement);
    });
}

// Add event listener to sort by date button
const sortByDateButton = document.querySelector('.sort-by-date-button');
sortByDateButton.addEventListener('click', handleSortByDateButtonClick);

// Function to handle Windows snippet integration
function handleSnippetIntegration(event) {
    const selectedText = window.getSelection().toString();
    const snippetContainer = document.querySelector('.snippet-container');

    // Update snippet container with selected text
    snippetContainer.innerText = selectedText;
}
// Script for Windows Drives Simulation

// Code snippet object
class CodeSnippet {
    constructor(title, code) {
        this.title = title;
        this.code = code;
    }
}

// Array to hold code snippets
const codeSnippets = [];

// Function to add code snippet
function addCodeSnippet(title, code) {
    const snippet = new CodeSnippet(title, code);
    codeSnippets.push(snippet);
}

// Function to display code snippets
function displayCodeSnippets() {
    console.log("Code Snippets:");
    for (let i = 0; i < codeSnippets.length; i++) {
        console.log(`Title: ${codeSnippets[i].title}`);
        console.log(`Code: ${codeSnippets[i].code}`);
        console.log("-----------------------------");
    }
}

// Function to compress code snippets using a zip algorithm
function compressCodeSnippets() {
    console.log("Compressing code snippets...");
    for (let i = 0; i < codeSnippets.length; i++) {
        const compressedCode = zipAlgorithm(codeSnippets[i].code);
        codeSnippets[i].code = compressedCode;
    }
    console.log("Code snippets compressed successfully!");
}

// Function for zip algorithm (placeholder implementation)
function zipAlgorithm(code) {
    // Placeholder implementation for zip algorithm
    // Replace this with actual implementation
    return `ZIP[${code}]ZIP`;
}

// Add sample code snippets
addCodeSnippet("Snippet 1", "console.log('Hello, World!');");
addCodeSnippet("Snippet 2", "const sum = (a, b) => a + b;");
addCodeSnippet("Snippet 3", "for (let i = 0; i < 10; i++) { console.log(i); }");

// Display original code snippets
console.log("Original Code Snippets:");
displayCodeSnippets();

// Compress code snippets
compressCodeSnippets();

// Display compressed code snippets
console.log("Compressed Code Snippets:");
displayCodeSnippets();
