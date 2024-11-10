const sidebar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.fa-bars');
const sidebarLinks = document.querySelectorAll('.side-bar-links a'); // Select all sidebar links

// Function to close the sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 30); // Matches the transition duration
}

// Toggle sidebar when the toggle button is clicked
toggleButton.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) {
    closeSidebar();
  } else {
    sidebar.style.display = 'block';
    setTimeout(() => {
      sidebar.classList.add('active');
    }, 2);
  }
});

// Close sidebar when any link inside it is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar();
  });
});