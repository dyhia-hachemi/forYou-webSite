// admin.js or responsive.js

document.addEventListener('DOMContentLoaded', () => {
    const sidemenu = document.getElementById('sidemenu');
    const openIcon = document.querySelector('.icon.open');
    const closeIcon = document.querySelector('.icon.close');

    if (openIcon) {
        openIcon.addEventListener('click', () => {
            sidemenu.classList.add('open');
        });
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            sidemenu.classList.remove('open');
        });
    }
});
