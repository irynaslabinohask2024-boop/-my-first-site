// script.js

// Плавна прокрутка до контактів
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#contacts').scrollIntoView({
        behavior: 'smooth'
    });
});

// Повідомлення після надсилання форми
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    alert('Повідомлення успішно надіслано!');
});