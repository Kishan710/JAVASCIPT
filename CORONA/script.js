const container = document.getElementById("news-container");

async function loadIndiaCovidNews() {
    const apiUrl = "https://coronavirus-smartable.p.rapidapi.com/news/v1/IN/";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "d26ad10914msh1fe6a248c63b485p147e6djsn02a2d5b9a27e",
            "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        const articles = result.news;

        articles.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("news-card");

            const title = document.createElement("div");
            title.className = "news-title";
            title.textContent = item.title;

            const image = document.createElement("img");
            if (item.images && item.images.length > 0) {
                image.src = item.images[0].url;
                image.alt = "News Image";
            }

            const topic = document.createElement("div");
            topic.className = "news-topic";
            topic.textContent = `Category: ${item.topics?.[0] || "General"}`;

            const date = document.createElement("div");
            date.className = "news-date";
            date.textContent = `Published At: ${new Date(item.publishedDateTime).toLocaleString()}`;

            const summary = document.createElement("div");
            summary.className = "news-summary";
            summary.textContent = item.excerpt;

            const source = document.createElement("div");
            source.className = "news-source";
            source.innerHTML = `Source: <strong>${item.provider.name}</strong> (${item.provider.domain})`;

            
            card.append(title, image, topic, date, summary, source);
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Failed", error);
        container.innerHTML = `<p style="color:red;"></p>`;
    }
}

loadIndiaCovidNews();
