import getRefs from './get-refs';

const refs = getRefs();

const API_KEY = '22449475-57a9053ebf376971bfd59fb95';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    };
    
    fetchPics() {
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => { 
            if (data.total === 0) {
                refs.loadMoreBtn.classList.add('visually-hidden');
            } else {
                refs.loadMoreBtn.classList.remove('visually-hidden');
                return data;
            };
        });
    };

    get query() {
        return this.searchQuery;
    };

    set query(newSearchQuery) {
        this.searchQuery = newSearchQuery; 
    };

    nextPage() {
        this.page += 1;
    };
    
    resetPage() {
        this.page = 1;
    };
};