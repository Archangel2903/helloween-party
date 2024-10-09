import '../scss/main.scss';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';

$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }
});

$(function () {
    // Указываем дату и время окончания
    const eventDate = new Date('2024-10-31T18:00:00').getTime();

    // Функция обратного отсчёта
    function countdownTimer() {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        // Вычисляем дни, часы и минуты
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        // Отображаем результат на странице
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;

        // Если время истекло
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
        }
    }

    // Запускаем обновление каждую минуту
    const countdownInterval = setInterval(countdownTimer, 1000);

    // Запускаем первый раз сразу
    countdownTimer();
});