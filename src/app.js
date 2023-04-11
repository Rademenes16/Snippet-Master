// Code Snippet Manager app logic

// DOM Elements
const addSnippetBtn = document.getElementById('addSnippetBtn');
const snippetList = document.getElementById('snippetList');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const snippetForm = document.getElementById('snippetForm');
const closeBtn = document.querySelector('.close-btn');

// Snippet Data
const snippets = [];

// Event Listeners
addSnippetBtn.addEventListener('click', () => {
    openModal('Add Snippet', null);
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

snippetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveSnippet();
});

// Functions
function renderSnippet(snippet) {
    const snippetCard = document.createElement('div');
    snippetCard.classList.add('snippet-card');
    snippetCard.innerHTML = `
    <h3>${snippet.title}</h3>
    <p>${snippet.description}</p>
    <pre><code>${snippet.code}</code></pre>
    <p><strong>Tags:</strong> ${snippet.tags.join(', ')}</p>
    <div class="btn-group">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
    snippetList.appendChild(snippetCard);
}

function openModal(title, snippet) {
    modal.style.display = 'block';
    modalTitle.textContent = title;
    if (snippet) {
        document.getElementById('title').value = snippet.title;
        document.getElementById('description').value = snippet.description;
        document.getElementById('code').value = snippet.code;
        document.getElementById('tags').value = snippet.tags.join(', ');
    } else {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('code').value = '';
        document.getElementById('tags').value = '';
    }
}

function closeModal() {
    modal.style.display = 'none';
    snippetForm.reset();
}

// Save Snippet to Local Storage
function saveSnippet() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const code = document.getElementById('code').value;
    const tags = document.getElementById('tags').value.split(',');

    // Create snippet object
    const snippet = {
        title,
        description,
        code,
        tags
    };

    // Check if editing existing snippet or adding new snippet
    const editingSnippetIndex = snippets.findIndex(snip => snip.title === title);
    if (editingSnippetIndex !== -1) {
        // Editing existing snippet
        snippets[editingSnippetIndex] = snippet;
    } else {
        // Adding new snippet
        snippets.push(snippet);
    }

    renderSnippet(snippet);
    closeModal();
    saveToLocalStorage();
}

// Load Snippets from Local Storage
function loadSnippets() {
    const savedSnippets = localStorage.getItem('snippets');
    if (savedSnippets) {
        snippets.push(...JSON.parse(savedSnippets));
        snippets.forEach(snippet => renderSnippet(snippet));
    }
}

// Save Snippets to Local Storage
function saveToLocalStorage() {
    localStorage.setItem('snippets', JSON.stringify(snippets));
}
// Event Delegation for Edit and Delete Buttons
snippetList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const snippetCard = e.target.closest('.snippet-card');
        const title = snippetCard.querySelector('h3').textContent;
        const snippet = snippets.find(snip => snip.title === title);
        openModal('Edit Snippet', snippet);
    } else if (e.target.classList.contains('delete-btn')) {
        const snippetCard = e.target.closest('.snippet-card');
        const title = snippetCard.querySelector('h3').textContent;
        const snippetIndex = snippets.findIndex(snip => snip.title === title);
        snippetList.removeChild(snippetCard);
        snippets.splice(snippetIndex, 1);
        saveToLocalStorage();
    }
});
// Filter Snippets by Tags
function filterSnippets() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSnippets = snippets.filter(snippet => {
        return snippet.tags.some(tag => tag.toLowerCase().includes(searchInput));
    });

    renderSnippetList(filteredSnippets);
}

// Event Listener for Search Input
document.getElementById('search-input').addEventListener('input', filterSnippets);

// Confirm before Deleting Snippet
function confirmDeleteSnippet(snippetIndex) {
    const snippet = snippets[snippetIndex];
    const confirmDelete = confirm(`Are you sure you want to delete the snippet "${snippet.title}"?`);
    if (confirmDelete) {
        snippetList.removeChild(snippetList.childNodes[snippetIndex]);
        snippets.splice(snippetIndex, 1);
        saveToLocalStorage();
    }
}
// Sort Snippets
function sortSnippets() {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect.value;
    let sortedSnippets = [];

    if (sortValue === 'title') {
        sortedSnippets = snippets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'date') {
        sortedSnippets = snippets.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    renderSnippetList(sortedSnippets);
}

// Event Listener for Sort Select
document.getElementById('sort-select').addEventListener('change', sortSnippets);
// Copy Code to Clipboard
function copyCodeToClipboard(code) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
}
// Edit Snippet
function editSnippet(snippetIndex) {
    const snippet = snippets[snippetIndex];
    document.getElementById('snippet-form-title').textContent = 'Edit Snippet';
    document.getElementById('snippet-title').value = snippet.title;
    document.getElementById('snippet-language').value = snippet.language;
    document.getElementById('snippet-code').value = snippet.code;
    document.getElementById('snippet-tags').value = snippet.tags.join(', ');
    document.getElementById('snippet-form').classList.add('edit-mode');
    document.getElementById('snippet-form').dataset.snippetIndex = snippetIndex;
}

// Update Snippet
function updateSnippet(snippetIndex) {
    const snippet = snippets[snippetIndex];
    const titleInput = document.getElementById('snippet-title').value;
    const languageInput = document.getElementById('snippet-language').value;
    const codeInput = document.getElementById('snippet-code').value;
    const tagsInput = document.getElementById('snippet-tags').value.split(',').map(tag => tag.trim());

    snippet.title = titleInput;
    snippet.language = languageInput;
    snippet.code = codeInput;
    snippet.tags = tagsInput;
    snippet.dateModified = new Date().toISOString();

    saveToLocalStorage();
    resetSnippetForm();
    renderSnippetList(snippets);
}
// Confirm before Updating Snippet
function confirmUpdateSnippet(snippetIndex) {
    const snippet = snippets[snippetIndex];
    const confirmUpdate = confirm(`Are you sure you want to update the snippet "${snippet.title}"?`);
    if (confirmUpdate) {
        updateSnippet(snippetIndex);
    }
}
// Display Snippets by Page
function displaySnippetsByPage(page) {
    const snippetsPerPage = 5;
    const startIndex = (page - 1) * snippetsPerPage;
    const endIndex = startIndex + snippetsPerPage;
    const snippetsToDisplay = snippets.slice(startIndex, endIndex);
    renderSnippetList(snippetsToDisplay);
}

// Add Event Listener for Pagination Buttons
document.getElementById('pagination-prev').addEventListener('click', () => {
    currentPage--;
    displaySnippetsByPage(currentPage);
});

document.getElementById('pagination-next').addEventListener('click', () => {
    currentPage++;
    displaySnippetsByPage(currentPage);
});
// Export Snippets to JSON
function exportSnippetsToJson() {
    const snippetsJson = JSON.stringify(snippets);
    const blob = new Blob([snippetsJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'snippets.json';
    a.click();
}
