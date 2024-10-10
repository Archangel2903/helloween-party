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
    $(window).on('resize', function (e) {
        console.log(e.target.innerWidth);

        if (e.target.innerWidth >= 1024) {
            $('body').removeClass('overflow-hidden');
            $('.header-content__burger').removeClass('active');
            $('.header-content-inside').removeClass('active');
        }
    });
    $('.header-content__burger').on('click', function () {
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
});