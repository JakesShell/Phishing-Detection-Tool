// content.js

function analyzeContent() {
    const url = window.location.href;
    const indicators = ["login", "urgent", "verify", "account", "password"];
    let score = 0;

    // Check URL for common phishing terms
    for (const indicator of indicators) {
        if (url.includes(indicator)) {
            score += 2;  // Increase score for each match
        }
    }

    // Show alert based on score
    if (score > 4) {
        alert("Warning: This page may be a phishing attempt!");
    }
}

// Run the analysis when the page loads
window.addEventListener("load", analyzeContent);
