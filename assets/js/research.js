document.addEventListener('DOMContentLoaded', function() {
    let allResearchUpdates = [];
    const researchUpdatesContainer = document.getElementById('research-updates-container');

    // Fetch research updates data
    fetch('../assets/data/research.json')
        .then(response => response.json())
        .then(data => {
            allResearchUpdates = data.research_updates;
            
            // Initial render
            renderResearchUpdates(allResearchUpdates);
        })
        .catch(error => {
            console.error('Error loading research updates:', error);
            researchUpdatesContainer.innerHTML = `
                <div class="error-message">
                    <p>Unable to load research updates. Please try again later.</p>
                </div>
            `;
        });

    function renderResearchUpdates(updates) {
        researchUpdatesContainer.innerHTML = '';

        updates.forEach(update => {
            const card = document.createElement('div');
            card.classList.add('research-update-card');
            
            card.innerHTML = `
                <div class="research-update-card-content">
                    <h3 class="research-update-title">${update.title}</h3>
                    <p class="research-update-authors">${update.authors.join(', ')}</p>
                    <p class="research-update-venue">${update.year} - ${update.type}</p>
                    <p class="research-update-abstract">${update.abstract}</p>
                    <div class="research-update-keywords">
                        ${update.keywords.map(keyword => `<span class="keyword-tag-r">${keyword}</span>`).join('')}
                    </div>
                    <div class="research-update-links">
                        <a href="${update.pdfUrl}" class="research-update-link" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                            PDF
                        </a>
                    </div>
                </div>
            `;
            
            researchUpdatesContainer.appendChild(card);
        });

        if (updates.length === 0) {
            researchUpdatesContainer.innerHTML = `
                <div class="no-results">
                    <p>No research updates found.</p>
                </div>
            `;
        }
    }
});
