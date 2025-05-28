fetch('news.json')
    .then(response => response.json())
    .then(data => {
        // 메인 뉴스 렌더링
        const newsList = document.getElementById('news-list');
        data.mainNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            `;
            newsList.appendChild(newsItem);
        });

        // 사이드바 추천 콘텐츠 렌더링
        const sidebarList = document.getElementById('sidebar-list');
        data.sidebar.forEach(item => {
            const sidebarItem = document.createElement('div');
            sidebarItem.classList.add('sidebar-item');
            sidebarItem.innerHTML = `
                <a href="${item.link}">${item.title}</a>
                <p>${item.description}</p>
            `;
            sidebarList.appendChild(sidebarItem);
        });
    })
    .catch(error => console.error('Error loading news:', error));
