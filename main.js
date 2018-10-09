import style from './styles/main.scss';
import * as $ from 'jquery';

$(document).ready(function () {
    $('.carousel').carousel();
    style.use();
});

// slim scroll
$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 750);
    });
});