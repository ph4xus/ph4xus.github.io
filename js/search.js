const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q')?.toLowerCase() || '';

const resultsContainer = document.getElementById('search-results');

if (searchQuery) {
    fetch('../json/list.json')
        .then(response => response.json())
        .then(data => {
            const matches = data.filter(gxme => gxme.name.toLowerCase().includes(searchQuery));

            if (matches.length > 0) {
                matches.forEach(gxme => {
                    const card = document.createElement('div');
                    card.classList.add('gxme-card');
                    card.innerHTML = `
                        <img src="${gxme.imgsrc}" alt="${gxme.name}">
                        <h3>${gxme.name}</h3>
                        <a href="/gxmes/${gxme.foldername}">Play Now</a>
                    `;
                    resultsContainer.appendChild(card);
                });
            } else {
                resultsContainer.innerHTML = `<p>No gxmes found matching "${searchQuery}".</p>`;
            }
        })
        .catch(error => {
            console.error('Error loading gxme list:', error);
            resultsContainer.innerHTML = `<p>Failed to load gxmes.</p>`;
        });
} else {
    alert("No search query provided")
    window.location.replace("/");

}
