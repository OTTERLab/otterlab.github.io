document.addEventListener('DOMContentLoaded', function() {
  const researchContentContainer = document.getElementById('research-content');

  // Fetch research content data from the JSON file
  fetch('../data/research.json')
    .then(response => response.json())
    .then(data => {
      renderResearchContent(data);
    })
    .catch(error => {
      console.error('Error loading research content:', error);
      researchContentContainer.innerHTML = `
        <div class="error-message">
          <p>Unable to load research content. Please try again later.</p>
        </div>
      `;
    });

  function renderResearchContent(content) {
    researchContentContainer.innerHTML = '';

    content.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('research-card');

      card.innerHTML = `
        <div class="research-card-content">
          <h3 class="research-title">${item.name}</h3>
          <p class="research-bio">${item.bio}</p>
          <p class="research-date">${item.date}</p>
          <div class="research-link">
            <a href="${item.file}" target="_blank" class="research-link-button">
              Read Paper
            </a>
          </div>
          <p class="research-members">Members: ${item.members.join(", ")}</p>
        </div>
      `;

      researchContentContainer.appendChild(card);
    });

    if (content.length === 0) {
      researchContentContainer.innerHTML = `
        <div class="no-results">
          <p>No research content found.</p>
        </div>
      `;
    }
  }
});
