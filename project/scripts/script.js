// Navigation Toggle
const navbutton = document.getElementById('navBtp');
const navItems = document.querySelectorAll('nav ul li');
    
navbutton.addEventListener('click', () => {
    navItems.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
            navbutton.textContent = '<>';
        } else {
            item.style.display = 'block';
            navbutton.textContent = 'X';
        }
    });
});


