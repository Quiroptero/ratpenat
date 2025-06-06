async function fetchBats() {
    try {
        const response = await fetch('/bats.txt');
        if (!response.ok) {
        throw new Error('Could not fetch the bats file');
    }
        return await response.text();
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return ''; // Return an empty string or handle the error as needed
    }
}

async function getRandomBat() {
    try {
        var posts = await fetchBats();
        var links = posts.trim().split('\n');

        // Ensure there are links available
        if (links.length > 0) {
        // Get a random link
        var randomIndex = Math.floor(Math.random() * links.length);
        var randomLinkURL = links[randomIndex].trim();

        // Open the random link
        window.open(randomLinkURL, "_self");
    }
    } catch (error) {
        console.error('Error getting random link:', error.message);
    }
}

document.getElementById('random-bat').addEventListener('click', function(event) {
    getRandomBat();
});
