// script.js - hamburger & Cancel
document.addEventListener('DOMContentLoaded', function () {
    const hamburgBtn = document.querySelector('.hamburg');
    const cancelBtn = document.querySelector('.cancel');
    const dropdown = document.getElementById('mobileDropdown');

    function openDropdown() {
        dropdown.classList.add('open');
        dropdown.setAttribute('aria-hidden', 'false');
    }
    function closeDropdown() {
        dropdown.classList.remove('open');
        dropdown.setAttribute('aria-hidden', 'true');
    }

    hamburgBtn && hamburgBtn.addEventListener('click', openDropdown);
    cancelBtn && cancelBtn.addEventListener('click', closeDropdown);

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !hamburgBtn.contains(e.target)) {
            closeDropdown();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDropdown();
    });

    const dropdownLinks = document.querySelectorAll('#mobileDropdown a');
    dropdownLinks.forEach(a => a.addEventListener('click', closeDropdown));
});
