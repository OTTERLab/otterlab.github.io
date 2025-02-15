// js/main.js
document.addEventListener("DOMContentLoaded", function() {
  // For the index page:
  if (document.body.classList.contains('index-page')) {
    if (typeof IndexPage !== 'undefined') {
      IndexPage.loadContent();
    }
  }
  
  // For the education page:
  if (document.body.classList.contains('education-page')) {
    if (typeof EducationPage !== 'undefined') {
      EducationPage.loadContent();
    }
  }
  
  // For the research page:
  if (document.body.classList.contains('research-page')) {
    if (typeof ResearchPage !== 'undefined') {
      ResearchPage.loadContent();
    }
  }
  
  // For the logging page:
  if (document.body.classList.contains('logging-page')) {
    if (typeof LoggingPage !== 'undefined') {
      LoggingPage.loadContent();
    }
  }
  
  // For the about page:
  if (document.body.classList.contains('about-page')) {
    if (typeof AboutPage !== 'undefined') {
      AboutPage.loadContent();
    }
  }
});
