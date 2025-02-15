document.addEventListener('DOMContentLoaded', function() {
  const recordsContentContainer = document.getElementById('records-content');

  // Fetch records content data from the JSON file
  fetch('../data/records.json')
    .then(response => response.json())
    .then(data => {
      const records = data.records;
      renderRecords(records);
    })
    .catch(error => {
      console.error('Error loading records content:', error);
      recordsContentContainer.innerHTML = `
        <div class="error-message">
          <p>Unable to load records content. Please try again later.</p>
        </div>
      `;
    });

  function renderRecords(records) {
    recordsContentContainer.innerHTML = '';

    // If there are records, display them
    if (records.length > 0) {
      const recordsList = document.createElement('div');
      recordsList.classList.add('records-list');

      records.forEach(record => {
        const recordItem = document.createElement('div');
        recordItem.classList.add('record-item');

        recordItem.innerHTML = `
          <div class="record-item-header">
            <h3 class="record-name">${record.name}</h3>
            <p class="record-date">${record.date}</p>
          </div>
          <a href="${record.link}" target="_blank" class="record-link">Read Log</a>
        `;

        recordsList.appendChild(recordItem);
      });

      recordsContentContainer.appendChild(recordsList);
    } else {
      recordsContentContainer.innerHTML = `
        <div class="error-message">
          <p>No records found.</p>
        </div>
      `;
    }
  }
});
