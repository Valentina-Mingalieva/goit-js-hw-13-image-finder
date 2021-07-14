'use strict';

import './sass/main.scss';
import cardTpl from './templates/image-card.hbs';

import ApiService from './js/apiService.js';

const galleryEl = document.querySelector('.js-gallery');
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const input = document.querySelector('input');
const loadMoreBtn = document.querySelector('.load-btn');

const apiService = new ApiService();

function onSearch(e) {
    e.preventDefault();

    /* galleryEl.innerHTML = ''; */

    const form = e.currentTarget;
    
    const searchQuery = form.elements.query.value;
    fetchPics(searchQuery)
        .then(renderImage)
        .catch(error)
        .finally()
}
    
function renderImage(pic) {
    galleryEl.insertAdjacentHTML('beforeend', cardTpl(pic));
}

searchForm.addEventListener('submit', onSearch);

/* function loadMorePics() {
    galleryEl.innerHTML = '';
    fetchPics(input.value)
        .then(renderImage)
        .catch(error)
        .finally()
}

loadMoreBtn.addEventListener('click', loadMorePics); */
