//your JS code here. If required.

// unknoun

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, val] = cookie.split('=');
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}

// Function to apply preferences
function applyPreferences() {
  const fontsize = getCookie('fontsize') || '16';
  const fontcolor = getCookie('fontcolor') || '#000000';

  document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontcolor);

  // Update input values too
  document.getElementById('fontsize').value = fontsize;
  document.getElementById('fontcolor').value = fontcolor;
}

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontsize = document.getElementById('fontsize').value;
  const fontcolor = document.getElementById('fontcolor').value;

  // Save to cookies for 30 days
  setCookie('fontsize', fontsize, 30);
  setCookie('fontcolor', fontcolor, 30);

  // Apply changes immediately
  applyPreferences();
});



// Apply preferences on page load
window.onload = applyPreferences;
