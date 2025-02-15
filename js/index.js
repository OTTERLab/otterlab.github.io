// js/index.js
var IndexPage = (function() {
  function loadContent() {
    fetch('data/index.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Update Slogan Section
        var sloganEl = document.querySelector('.slogan h1');
        if (sloganEl && data.slogan) {
          sloganEl.textContent = data.slogan;
        }

        // Update Info Section Boxes
        var infoBoxes = document.querySelectorAll('.info-section .info-box');
        if (infoBoxes.length >= 3 && data.infoSection) {
          // Who We Are Box
          if (data.infoSection.whoWeAre) {
            infoBoxes[0].querySelector('h2').textContent = data.infoSection.whoWeAre.heading;
            infoBoxes[0].querySelector('p').textContent = data.infoSection.whoWeAre.content;
          }
          // What We Do Box
          if (data.infoSection.whatWeDo) {
            infoBoxes[1].querySelector('h2').textContent = data.infoSection.whatWeDo.heading;
            infoBoxes[1].querySelector('p').textContent = data.infoSection.whatWeDo.content;
          }
          // Latest Work Box
          if (data.infoSection.latestWork) {
            infoBoxes[2].querySelector('h2').textContent = data.infoSection.latestWork.heading;
            infoBoxes[2].querySelector('p').textContent = data.infoSection.latestWork.content;
          }
        }

        // Update Join Us Section
        var joinUsEl = document.querySelector('.join-us');
        if (joinUsEl && data.joinUs) {
          joinUsEl.querySelector('h2').textContent = data.joinUs.heading;
          joinUsEl.querySelector('p').textContent = data.joinUs.content;
        }
      })
      .catch(function(error) {
        console.error("Error loading index.json:", error);
      });
  }

  return {
    loadContent: loadContent
  };
})();
