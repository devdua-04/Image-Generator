

const accessKey = "D-89nLKZ5XNa1HN5jJKfyl3aT1Kj4c63L64De_ea3Ao";
let pageNo = 1,
    searchQuery = "";

const searchInput = document.getElementById('search'),
    searchButton = document.getElementById('search-button'),
    imageContainer = document.getElementById('image-container'),
    showMoreButton = document.getElementById('show'),
    searchForm = document.getElementById('search-form');

fetchImages = async () => {
        const apiUrl = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${searchQuery}&client_id=${accessKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const results = data.results;
        console.log(data);
        results.map((result) => {
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            image.style.width = "300px";
            image.style.height = "200px";
            const link = document.createElement('a');
            link.href = result.links.html;
            link.target = "_blank";
            link.appendChild(image);
            imageContainer.appendChild(link);
        });
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    imageContainer.innerHTML = "";
    console.log("search button clicked");
    searchQuery = searchInput.value;
    pageNo = 1;
    fetchImages();
});
showMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    pageNo++;
    fetchImages();
});








