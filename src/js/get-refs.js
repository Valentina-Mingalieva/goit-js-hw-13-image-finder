export default function getRefs() {
    return {
        galleryEl: document.querySelector('.js-gallery'),
        searchBtn: document.querySelector('.search-btn'),
        searchForm: document.querySelector('.search-form'),
        input: document.querySelector('input'),
        loadMoreBtn: document.querySelector('.load-btn'),
    }
}