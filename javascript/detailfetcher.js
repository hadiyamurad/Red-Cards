document.getElementById('cards-container').addEventListener('click', function (event) {
    const card = event.target.closest('.product-card');
    if (card) {
        const title = card.querySelector('h3').textContent;
        const price = card.querySelector('p').textContent;
        const description = card.querySelector('.description').textContent;
        const image = card.querySelector('img').src;
        const reviews = card.querySelector('.rating').textContent;

        window.location.href = `../product.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}&reviews=${encodeURIComponent(reviews)}`;
    }
});


      