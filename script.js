document.addEventListener('DOMContentLoaded', () => {
    fetch('news.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const newsList = document.getElementById('news-list');
            if (!newsList) throw new Error('News list element not found');
            
            data.mainNews.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <p class="summary">${news.summary}</p>
                    <div class="full-content">${news.fullContent}</div>
                `;
                newsItem.addEventListener('click', () => {
                    console.log('Clicked:', news.title); // 디버깅 로그
                    newsItem.classList.toggle('expanded');
                });
                newsList.appendChild(newsItem);
            });
            console.log('News items loaded successfully');
        })
        .catch(error => console.error('Error loading news:', error));
});
