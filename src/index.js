'use strict';

import './sass/main.scss';
import cardTpl from './templates/image-card.hbs';
import ApiService from './js/apiService.js';
import getRefs from './js/get-refs';

const refs = getRefs();
const apiService = new ApiService();

function onSearch(e) {
    e.preventDefault();

    apiService.query = e.target.value;

    if (apiService.query === '') {
        refs.loadMoreBtn.classList.add('visually-hidden');
        refs.galleryEl.innerHTML = '';
    } else {
        /* refs.galleryEl.innerHTML = ''; */
        apiService.resetPage();
        apiService.fetchPics()
            .then(renderPic)
            .catch(onFetchError)
            .finally()
        refs.loadMoreBtn.classList.remove('visually-hidden');
    }
}
    
function renderPic(pics) {
    refs.galleryEl.insertAdjacentHTML('beforeend', cardTpl(pics));
}

function onFetchError(error) {
    alert('Pictures are not found');
}

/* const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
}); */

/* function loadMorePics() {
    
    galleryEl.innerHTML = '';
    fetchPics(input.value)
    .then(renderImage)
    .catch(error)
    .finally()
} */

refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', loadMorePics);
