// Add hover effect for sizes
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title') || 'Default Title',
        price: params.get('price') || '$0.00',
        description: params.get('description') || 'No description available',
        image: params.get('image') || 'https://via.placeholder.com/500',
        reviews: params.get('reviews') || 'No reviews yet.',
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const { title, price, description, image, reviews } = getQueryParams();

    document.querySelector('.product-title').textContent = title;
    document.querySelector('.product-price').textContent = price;
    document.querySelector('.product-container img').src = image;
    document.querySelector('.description').textContent = description;
    document.querySelector('.reviews').textContent = reviews;
});

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('product-popup');
    const popupClose = document.getElementById('product-popup-close');
    const eCardButton = document.querySelector('.e-btn');
    const addToCartButton = document.querySelector('.btn-dark');
    const wishlistIcon = document.querySelector('.wishlist-icon');

    // Function to show popup
    function showPopup() {
        popup.classList.remove('hidden');
    }

    // Function to hide popup
    function hidePopup() {
        popup.classList.add('hidden');
    }

    // Add event listeners
    eCardButton.addEventListener('click', showPopup);
    addToCartButton.addEventListener('click', showPopup);
    wishlistIcon.addEventListener('click', showPopup);
    popupClose.addEventListener('click', hidePopup);

    // Close popup when clicking outside the content
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
});