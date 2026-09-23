function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// تحديد الجداول
const tables = document.querySelectorAll('.month-table');

// إضافة تأثير التحويم لكل جدول
tables.forEach(table => {
    const cells = table.getElementsByTagName('td');

    table.addEventListener('mouseover', () => {
        for (let cell of cells) {
            if (!cell.classList.contains('highlight') && cell.textContent.trim() !== "") {
                cell.classList.add('marked');
            }
        }
    });

    table.addEventListener('mouseout', () => {
        for (let cell of cells) {
            if (!cell.classList.contains('highlight')) {
                cell.classList.remove('marked');
            }
        }
    });
});