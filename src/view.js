// Define the example code snippets
const snippets = [
    'function add(a, b) { return a + b; }',
    'const greet = (name) => { return `Hello, ${name}!`; }',
    'console.log("Hello, World!");',
    'for (let i = 0; i < 10; i++) { console.log(i); }',
    'const fruits = ["apple", "banana", "cherry"];',
];

// Function to generate 2D view of code snippets
function generate2DView(snippets) {
    const view = [];
    const maxHeight = snippets.length;

    snippets.forEach((snippet, idx) => {
        const snippetLines = snippet.split('\n');
        for (let i = 0; i < maxHeight; i++) {
            view[i] = view[i] || [];
            view[i][idx] = snippetLines[i] || '';
        }
    });

    return view;
}

// Function to calculate statistics based on 2D view
function calculateStatistics(view) {
    const statistics = {
        snippetWithMostLines: '',
        snippetWithLeastLines: '',
        totalLines: 0,
        averageLinesPerSnippet: 0,
    };

    const numSnippets = view[0].length;
    const numLinesPerSnippet = view.length;

    let maxLines = 0;
    let minLines = Infinity;
    let totalLines = 0;

    for (let i = 0; i < numSnippets; i++) {
        let snippetLines = 0;
        for (let j = 0; j < numLinesPerSnippet; j++) {
            snippetLines += view[j][i].length ? 1 : 0;
        }

        if (snippetLines > maxLines) {
            maxLines = snippetLines;
            statistics.snippetWithMostLines = snippets[i];
        }

        if (snippetLines < minLines) {
            minLines = snippetLines;
            statistics.snippetWithLeastLines = snippets[i];
        }

        totalLines += snippetLines;
    }

    statistics.totalLines = totalLines;
    statistics.averageLinesPerSnippet = totalLines / numSnippets;

    return statistics;
}

// Generate 2D view of code snippets
const view = generate2DView(snippets);

// Calculate statistics based on the generated view
const statistics = calculateStatistics(view);

// Log the generated view and calculated statistics
console.log('Generated 2D View:', view);
console.log('Statistics:', statistics);
