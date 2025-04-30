// Load saved name from localStorage
window.onload = function () {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      document.getElementById('usernameDisplay').textContent = savedName;
    }
  };
  
  // Saving user name to localStorage
  document.getElementById('saveBtn').addEventListener('click', function () {
    const name = document.getElementById('username').value;
    if (name.trim()) {
      localStorage.setItem('username', name);
      document.getElementById('usernameDisplay').textContent = name;
    }
  });
  
  // Animation on button click
  document.getElementById('animateBtn').addEventListener('click', function (e) {
    e.target.classList.remove('bounce'); // Reset if it was already applied
    void e.target.offsetWidth; 
    e.target.classList.add('bounce');
  });

  
