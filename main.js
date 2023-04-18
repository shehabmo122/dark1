const darkModeBtn = document.querySelector('#dark-mode-btn');
const body = document.querySelector('body');

// Check if dark mode is enabled in local storage
if (localStorage.getItem('isDarkMode') === 'true') {
  body.classList.add('dark-mode');
}

darkModeBtn.addEventListener('click', () => {
  // Toggle the dark mode class on the body element
  body.classList.toggle('dark-mode');
  
  // Update local storage with the new dark mode state
  localStorage.setItem('isDarkMode', body.classList.contains('dark-mode'));
});