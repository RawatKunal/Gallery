document.addEventListener('DOMContentLoaded', function() {
    const featured = document.getElementById('featured');
    const thumbnailsContainer = document.getElementById('thumbnails');
    const imageInfo = document.querySelector('figcaption');

    const images = [
        {
            src: 'images/flowers-yellow-large.jpg',
            thumb: 'images/flowers-yellow-small.jpg',
            caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-purple-large.jpg',
            thumb: 'images/flowers-purple-small.jpg',
            caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-red-large.jpg',
            thumb: 'images/flowers-red-small.jpg',
            caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
        },
        {
            src: 'images/flowers-white-large.jpg',
            thumb: 'images/flowers-white-small.jpg',
            caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-pink-large.jpg',
            thumb: 'images/flowers-pink-small.jpg',
            caption: 'Market in Münster, North Rhine-Westphalia, Germany'
        }
    ];

    images.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.thumb;
        img.alt = image.caption;
        img.width = 240;
        img.height = 160;
        if (index !== 0) img.classList.add('grayscale');
        li.appendChild(img);
        thumbnailsContainer.appendChild(li);

        img.addEventListener('click', function() {
            featured.src = image.src;
            imageInfo.textContent = image.caption;

            document.querySelectorAll('#thumbnails img').forEach(thumb => thumb.classList.add('grayscale'));
            this.classList.remove('grayscale');
        });
    });
});
