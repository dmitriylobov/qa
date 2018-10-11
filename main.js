import style from './styles/main.scss';
import * as $ from 'jquery';
// slim scroll
$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 750);
    });

    $("#contactForm").submit(submitForm);

    function submitForm($event) {
        $event.preventDefault();
        const controls = {
            name: $('.form-group input[name="name"]'),
            lastName: $('.form-group input[name="lastname"]'),
            email: $('.form-group input[name="email"]'),
            phone: $('.form-group input[name="phone"]'),
            comment: $('.form-group textarea[name="comment"]')
        };

        Object.entries(controls).forEach(([key, value]) => console.log(`${key}=${value.val()}`));
        Object.entries(controls).forEach(([key, value]) => value.val(''));
    }
});

document.ready = function () {
    $('.carousel').carousel();
    style.use();
};

