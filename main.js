import './sass/main.scss'
AOS.init();



document.addEventListener('DOMContentLoaded', () => {
    let searchSwitcher = document.querySelector('.searchclick');
    let visibleIcon = document.querySelector('.searchclick-visible');
    let disabledIcon = document.querySelector('.searchclick-disabled');
    let searchInput = document.querySelector('.nav-search-form');

    searchSwitcher.addEventListener('click', () => {
        // Przełączanie widoczności ikon
        visibleIcon.classList.toggle('searchclick-visible');
        visibleIcon.classList.toggle('searchclick-disabled');
        disabledIcon.classList.toggle('searchclick-visible');
        disabledIcon.classList.toggle('searchclick-disabled');

        if (searchInput.classList.contains('input-disabled')) {
            searchInput.classList.remove('input-disabled');
            searchInput.classList.add('input-visible');
        } else {
            searchInput.classList.remove('input-visible');
            searchInput.classList.add('input-disabled');
        }
    });
});