var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-box-expand');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('slide-left');
});

$btnCollapseExpand.on('click', function () {
    $panel.toggleClass('expand');
});

$btnBounce.on('click', function () {
    $circle.addClass('bounce-in');
});

$circle.on('animationend', function () {
    $circle.removeClass('bounce-in');
});

$btnAppend.on('click', function () {
    var $li = $('<li>').html('New List Item'); 
    
    $list.append($li);
    $list.addClass('pull-down');
});

