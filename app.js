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

function saveSnippet() {
