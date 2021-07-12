import './sass/main.scss';


/* var API_KEY = '22449475-57a9053ebf376971bfd59fb95';
var URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=1&per_page=12&key=твой_ключ"+API_KEY;
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
}); */

const galleryEl = document.querySelector('.js-gallery');
const loadMoreEl = document.querySelector('.load-btn');
const searchEl = document.querySelector('#search-form');



function picsFounder() {
    /* galleryEl.innerHTML = ''; */
    
    const data = searchEl.textContent;
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${data}&page=1&per_page=12&key=22449475-57a9053ebf376971bfd59fb95`)
        .then(response => {
            if (response.ok) {
                /* return response.json(); */
                console.log(response);
            }
            throw new Error(response.statusText);
        })
}
    
picsFounder();
searchEl.addEventListener('input', picsFounder())
// loadMoreEl.addEventListener('click', loadMorePics());
