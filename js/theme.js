// Theme Management

const themeToggle = document.getElementById('theme-toggle');
const themeSelect = document.getElementById('theme-select');
const html = document.documentElement;
const body = document.body;

// Initialize theme on load
function initializeTheme() {
  // Check for saved theme preference or default to light mode
  const savedDarkMode = localStorage.getItem('darkMode');
  const savedColorTheme = localStorage.getItem('colorTheme') || 'romantic';

  if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    updateThemeToggleIcon();
  }

  // Set color theme
  body.classList.add(savedColorTheme);
  themeSelect.value = savedColorTheme;
}

// Dark/Light Mode Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  updateThemeToggleIcon();
  
  // Add visual feedback
  themeToggle.style.animation = 'spin 0.6s ease';
  setTimeout(() => {
    themeToggle.style.animation = '';
  }, 600);
});

// Update theme toggle icon
function updateThemeToggleIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    themeToggle.title = 'Switch to Light Mode';
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    themeToggle.title = 'Switch to Dark Mode';
  }
}

// Color Theme Selection
themeSelect.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  
  // Remove all color theme classes
  body.classList.remove('romantic', 'elegant', 'vintage', 'modern', 'sunset');
  
  // Add selected theme
  body.classList.add(selectedTheme);
  
  // Save preference
  localStorage.setItem('colorTheme', selectedTheme);
  
  // Visual feedback
  themeSelect.style.animation = 'pulse 0.6s ease';
  setTimeout(() => {
    themeSelect.style.animation = '';
  }, 600);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// System preference detection
if (window.matchMedia) {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  darkModeQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('darkMode')) {
      if (e.matches) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
      updateThemeToggleIcon();
    }
  });
}