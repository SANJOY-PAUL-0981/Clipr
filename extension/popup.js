document.getElementById("shortenBtn").addEventListener("click", async () => {
    const longUrl = document.getElementById("urlInput").value;
    const results = document.getElementById("results");

    if (!longUrl) {
        results.textContent = "Please enter a URL.";
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/url/trim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ longUrl })
        });

        const data = await response.json();

        if (response.ok) {
            results.textContent = `Shortened URL: ${data.urlData.shortUrl}`;
        } else {
            results.textContent = `Error: ${data.message || 'Something went wrong'}`;
        }
    } catch (error) {
        console.error("Error:", error);
        results.textContent = "Failed to reach server.";
    }
});
