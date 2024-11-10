document.addEventListener('DOMContentLoaded', function() {
    let allPublications = [];
    const publicationsContainer = document.getElementById('publications-container');

    // Fetch publications data
    fetch('../assets/data/publications.json')
        .then(response => response.json())
        .then(data => {
            allPublications = data.publications;
            
            // Initial render
            renderPublications(allPublications);
        })
        .catch(error => {
            console.error('Error loading publications:', error);
            publicationsContainer.innerHTML = `
                <div class="error-message">
                    <p>Unable to load publications. Please try again later.</p>
                </div>
            `;
        });

    function renderPublications(publications) {
        publicationsContainer.innerHTML = '';

        publications.forEach(pub => {
            const card = document.createElement('div');
            card.classList.add('publication-card');
            
            card.innerHTML = `
                <div class="publication-card-content">
                    <div class="publication-type-badge ${pub.type}">${pub.type}</div>
                    <h3 class="publication-title">${pub.title}</h3>
                    <p class="publication-authors">${pub.authors.join(', ')}</p>
                    <p class="publication-venue">
                        ${pub.venue} (${pub.year})
                        ${pub.doi ? `<span class="publication-doi">DOI: <a href="https://doi.org/${pub.doi}" target="_blank">${pub.doi}</a></span>` : ''}
                    </p>
                    <p class="publication-abstract">${pub.abstract}</p>
                    <div class="publication-keywords">
                        ${pub.keywords.map(keyword => `<span class="keyword-tag-pub">${keyword}</span>`).join('')}
                    </div>
                    <div class="publication-metrics">
                        <span class="citation-count">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18"></path>
                                <path d="M8 9h8"></path>
                                <path d="M8 15h8"></path>
                            </svg>
                            ${pub.citationCount} citations
                        </span>
                    </div>
                    <div class="publication-links">
                        ${pub.pdfUrl ? `
                            <a href="${pub.pdfUrl}" class="publication-link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="12" y1="18" x2="12" y2="12"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                </svg>
                                PDF
                            </a>
                        ` : ''}
                        ${pub.codeUrl ? `
                            <a href="${pub.codeUrl}" class="publication-link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M8 3v4a2 2 0 0 1-2 2H2m8-6h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2"></path>
                                    <path d="m10 17 4-4-4-4"></path>
                                </svg>
                                Code
                            </a>
                        ` : ''}
                        ${pub.projectUrl ? `
                            <a href="${pub.projectUrl}" class="publication-link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                Project
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
            
            publicationsContainer.appendChild(card);
        });

        if (publications.length === 0) {
            publicationsContainer.innerHTML = `
                <div class="no-results">
                    <p>No publications found.</p>
                </div>
            `;
        }
    }
});
