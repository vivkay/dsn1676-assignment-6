var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-box-expand');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('slide-left');
});