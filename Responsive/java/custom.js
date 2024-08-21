

$(function (){
    'use strict';
    $('.info-list li').click(function() {
        $(this).addClass('selected').siblings('li').removeClass('selected')
        window.console.log($(this).data('class'));
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn()
    })
})
