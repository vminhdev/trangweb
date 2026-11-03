const hearts = document.querySelectorAll(
    '.product-item__Evaluate-heart'
);

hearts.forEach(heart => {
    heart.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});