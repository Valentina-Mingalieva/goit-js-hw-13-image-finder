const BASE = 'https://pixabay.com/api/';
const API_KEY = '22449475-57a9053ebf376971bfd59fb95';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    };
    
    fetchUrl() {
        return fetch(`${BASE}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })                
            .then(data => {
                this.nextPage();
                return data.hits;
            });
    };

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };
    
    nextPage() {
        this.page += 1;
    };

    resetPage() {
        this.page = 1;
    }
}