$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar')
        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled') 
        
        //       This Code Have Some Problem
        
        // if ($(window).scrollTop() >= navbar.height()) {
        //     navbar.addClass('navbar-fixed-top');
        // }
    })
    // Tabs
    $(".tab-switch li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $('.tabs-section .tabs-content > div').hide();
        $($(this).data('class')).show();
        window.console.log($(this).data('class'));
    })
})