async function fetchBuildLog() {
    try {
        const response = await fetch('/build.log');
        if (!response.ok) {
            throw new Error('Could not fetch the build log');
        }
    return await response.text();
    } catch (error) {
        console.error('Error fetching build log:', error.message);
        return '';
    }
}

async function readLog() {
    try {
        var lines = await fetchBuildLog();
        var log = lines.trim().split('\n');
        return log;
    } catch (error) {
        console.error('Error when reading log file:', error.message);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    const buildStatsSizeContainer = document.getElementById('build-stats-size');
    const buildStatsTimeContainer = document.getElementById('build-stats-time');
    const buildStatsDateContainer = document.getElementById('build-stats-date');
    const parsedLog = await readLog();
    buildStatsSizeContainer.innerHTML = parsedLog[0].trim();
    buildStatsTimeContainer.innerHTML = parsedLog[1].trim();
    buildStatsDateContainer.innerHTML = parsedLog[2].trim();
});
