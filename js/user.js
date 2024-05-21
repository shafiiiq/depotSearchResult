document.getElementById('search-input').addEventListener('click', function () {
    document.querySelector('.search-history').style.display = 'flex';
    document.querySelector('.search-overlay').style.display = 'flex';
    document.getElementById('search-input').style.border = '2px solid var(--accent-green)'
});

document.body.addEventListener('click', function (event) {
    var searchInput = document.getElementById('search-input');
    var searchHistory = document.querySelector('.search-history');
    var searchOverlay = document.querySelector('.search-overlay')

    // Check if the clicked element is not the search input
    if (event.target !== searchInput && !searchHistory.contains(event.target)) {
        searchHistory.style.display = 'none'; // Hide search history
        searchOverlay.style.display = 'none';
        document.getElementById('search-input').style.border = '2px solid #272a34' // Hide search overlay
    }
});

window.addEventListener('scroll', function () {
    document.querySelector('.search-overlay').style.display = 'none';
    document.querySelector('.search-history').style.display = 'none';
    document.getElementById('search-input').style.border = '2px solid #272a34'
});

document.getElementById('categories-drop-control').addEventListener('click', function() {
    var dropCategories = document.querySelector('.drop-categories');
    if (dropCategories.style.display === 'flex') {
        dropCategories.style.display = 'none';
        document.getElementById('categories-drop-control').innerHTML = 'keyboard_arrow_down'
    } else {
        dropCategories.style.display = 'flex';
        document.getElementById('categories-drop-control').innerHTML = 'keyboard_arrow_up'
    }
});

document.getElementById('gender-drop-control').addEventListener('click', function() {
    var dropCategories = document.querySelector('.drop-gender');
    if (dropCategories.style.display === 'flex') {
        dropCategories.style.display = 'none';
        document.getElementById('gender-drop-control').innerHTML = 'keyboard_arrow_down'
    } else {
        dropCategories.style.display = 'flex';
        document.getElementById('gender-drop-control').innerHTML = 'keyboard_arrow_up'
    }
});
