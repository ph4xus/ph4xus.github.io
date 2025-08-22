document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");

  let games = [];

  fetch("../json/list.json")
    .then(res => res.json())
    .then(data => {
      games = data;
    });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (query.length === 0) {
      resultsContainer.style.display = "none";
      return;
    }

    const filtered = games.filter(game =>
      game.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      resultsContainer.style.display = "none";
      return;
    }

    resultsContainer.style.display = "block";

    filtered.forEach(game => {
      const card = document.createElement("div");
      card.className = "search-game-card";
      card.innerHTML = `
        <a href="${game.linksrc}">
          <img src="${game.imgsrc}" alt="${game.name}">
          <h3>${game.name}</h3>
        </a>
      `;
      resultsContainer.appendChild(card);
    });
  });

  document.addEventListener("click", (e) => {
    if (!document.querySelector(".search-wrapper").contains(e.target)) {
      resultsContainer.style.display = "none";
    }
  });
});