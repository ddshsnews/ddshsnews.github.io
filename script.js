fetch('news.json')
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById('news-list');
        data.mainNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p class="summary">${news.summary}</p>
                <div class="full-content">${news.fullContent}</div>
            `;
            newsItem.addEventListener('click', () => {
                newsItem.classList.toggle('expanded');
            });
            newsList.appendChild(newsItem);
        });
    })
    .catch(error => console.error('Error loading news:', error));
