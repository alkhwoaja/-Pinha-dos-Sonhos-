// مؤقت العد التنازلي
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// تاريخ انتهاء العرض (5 أيام من الآن)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 5); // إضافة 5 أيام إلى التاريخ الحالي

function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "<h2>انتهى العرض!</h2>";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// تحديث المؤقت كل ثانية
const interval = setInterval(updateCountdown, 1000);

// تفعيل وإلغاء تفعيل القائمة الجانبية
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');

    // إغلاق القائمة إذا تم النقر خارجها
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// تغيير وضع الضوء/الوضع الداكن
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

// إضافة الحدث لزر القائمة الهامبرغر
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);