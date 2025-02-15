document.addEventListener('DOMContentLoaded', function() {
  const educationContentContainer = document.getElementById('education-content');

  // Fetch education content data from the JSON file
  fetch('../data/education.json')
    .then(response => response.json())
    .then(data => {
      const content = data.education_content;
      renderEducationContent(content);
    })
    .catch(error => {
      console.error('Error loading education content:', error);
      educationContentContainer.innerHTML = `
        <div class="error-message">
          <p>Unable to load education content. Please try again later.</p>
        </div>
      `;
    });

  function renderEducationContent(content) {
    educationContentContainer.innerHTML = '';

    content.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('education-card');

      card.innerHTML = `
        <div class="education-card-content">
          <h3 class="education-title">${item.title}</h3>
          <p class="education-summary">${item.summary}</p>
          <p class="education-date">${item.date}</p>
          <div class="education-link">
            <a href="${item.link}" target="_blank" class="education-link-button">
              ${item.type === 'youtube' ? 'Watch Video' : 'Read Article'}
            </a>
          </div>
        </div>
      `;

      educationContentContainer.appendChild(card);
    });

    if (content.length === 0) {
      educationContentContainer.innerHTML = `
        <div class="no-results">
          <p>No educational content found.</p>
        </div>
      `;
    }
  }
});
