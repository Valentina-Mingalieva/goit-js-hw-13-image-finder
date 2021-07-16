'use strict';

import './sass/main.scss';
import cardTpl from './templates/image-card.hbs';

import ApiService from './js/apiService.js';
const api = new ApiService();

import getRefs from './js/get-refs';
const refs = getRefs();

function onSearch(e) {
    e.preventDefault();

    api.query = e.currentTarget.elements.query.value;
    if (api.query === '') {
        alert('Try once again');
        clearList();
        refs.loadMoreBtn.classList.add('visually-hidden');
    } else {
        clearList();
        api.resetPage();
        createList();
        refs.loadMoreBtn.classList.remove('visually-hidden');
    }
}

function createList() {
    api.fetchUrl()
    .then(hits => {
        api.nextPage();
        renderImageCard(hits);
    })
}
    
function renderImageCard(hits) {
    refs.galleryEl.insertAdjacentHTML('afterbegin', cardTpl(hits));
};

function clearList() {
    refs.galleryEl.innerHTML = '';
}

function onLoadMore() {
    createList();
    onScroll();
}

function onScroll() {
    refs.galleryEl.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });   
}

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);