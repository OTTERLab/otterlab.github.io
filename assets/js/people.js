document.addEventListener('DOMContentLoaded', function() {
    fetch('../assets/data/people.json')
        .then(response => response.json())
        .then(data => {
            const teamCardsContainer = document.getElementById('team-cards-container');
            
            data.forEach(person => {
                // Create a new card for each person
                const card = document.createElement('div');
                card.classList.add('position-card');
                
                // Create the card content with all available information
                card.innerHTML = `
                    <div class="position-card-content">
                        <div class="position-card-header">
                            ${person.image ? 
                                `<img src="${person.image}" alt="${person.name}" class="position-card-image">` 
                                : ''}
                            <h3 class="position-card-title">${person.name}</h3>
                            <div class="position-card-subtitle">${person.title}</div>
                        </div>
                        
                        <div class="position-card-details">
                            <div class="position-card-info">
                                <span class="info-label">Department</span>
                                <span class="info-value">${person.department}</span>
                            </div>
                            <div class="position-card-info">
                                <span class="info-label">Major</span>
                                <span class="info-value">${person.major}</span>
                            </div>
                        </div>

                        <div class="position-card-bio">
                            <p>${person.bio}</p>
                        </div>

                        <div class="position-card-links">
                            <a href="mailto:${person.email}" class="position-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                Email
                            </a>
                            <a href="${person.website}" class="position-link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="2" y1="12" x2="22" y2="12"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                                Website
                            </a>
                            <a href="${person.github}" class="position-link" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                `;
                
                // Append the card to the container
                teamCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading people data:', error);
            const teamCardsContainer = document.getElementById('team-cards-container');
            teamCardsContainer.innerHTML = `
                <div class="error-message">
                    <p>Unable to load team data. Please try again later.</p>
                </div>
            `;
        });
});