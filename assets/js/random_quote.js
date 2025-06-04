async function fetchQuotes() {
    try {
        const response = await fetch('/quotes.txt');
        if (!response.ok) {
            throw new Error('Could not fetch the quotes file');
        }
    return await response.text();
    } catch (error) {
        console.error('Error fetching quotes:', error.message);
        return ''; // Return an empty string or handle the error as needed
    }
}

async function getRandomQuote() {
    try {
        var lines = await fetchQuotes();
        var quotes = lines.trim().split('\n');

        if (quotes.length > 0) {
            var randomIndex = Math.floor(Math.random() * quotes.length);
            var randomQuote = quotes[randomIndex].trim();
            return randomQuote;
        }
    } catch (error) {
        console.error('Error getting random quote:', error.message);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    const quoteContainer = document.getElementById('random-quote');
    const randomQuote = await getRandomQuote();
    quoteContainer.innerHTML = randomQuote;
});
