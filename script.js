const menuItems = document.querySelectorAll('#sidebar li');
const sections = document.querySelectorAll('main section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all sections and menu items
    sections.forEach(sec => sec.classList.remove('active'));
    menuItems.forEach(i => i.classList.remove('active'));
    
    // Add active class to clicked menu item and corresponding section
    document.getElementById(item.dataset.section).classList.add('active');
    item.classList.add('active');
  });
});
