const loadMoreBtn = document.querySelector('.load-btn');

const API_KEY = '22449475-57a9053ebf376971bfd59fb95';

export default class ApiServise {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchImages() {
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => { 
            if (data.total === 0) {
                loadMoreBtn.classList.add('is-hidden') 
                /* error({text: 'Ups, images is not found =('})  */               
            } else {
                return  data.hits;
            };
        });
    }

    get query() {
        return this.searchQuery
    }

    set query(newSearchQuery) {
        this.searchQuery = newSearchQuery; 
    }

    incrementPage() {
        this.page +=1
    }
    
    resetPage() {
        this.page = 1;
    }
}