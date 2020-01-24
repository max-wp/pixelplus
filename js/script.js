var link = document.querySelector('.button-feedback');
var popup = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-close');
var overlay = document.querySelector('.modal-overlay');

// Отображение модального окна входа
link.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.remove('visually-hidden');

});

// Сокрытие модального окна входа
close.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.add('visually-hidden');
    console.log('О май гад');
});

window.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            overlay.classList.add('visually-hidden');
        }
    }
});