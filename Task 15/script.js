document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});  