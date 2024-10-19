// popup.js

document.getElementById("check-url").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        let score = 0;

        const indicators = ["login", "urgent", "verify", "account", "password"];
        
        // Check URL for phishing indicators
        for (const indicator of indicators) {
            if (url.includes(indicator)) {
                score += 2;  // Increase score for each match
            }
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `URL: ${url}\nScore: ${score}`;

        if (score > 4) {
            resultDiv.innerText += "\nWarning: This URL may be a phishing attempt!";
        } else {
            resultDiv.innerText += "\nThis URL seems safe.";
        }
    });
});
