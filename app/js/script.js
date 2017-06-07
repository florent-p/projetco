jQuery(document).ready(function($) {
    
    $('.navbar__menu', this).click(function() {
        
        // [MOBILE] Changement de background quand le menu est ouvert
        $(this).toggleClass('menu--active');
        
        var isMenuVisible = $('.nav__menu').is(":visible");
        if (isMenuVisible) {
            $('.nav__menu').stop().slideUp();
        } else {
            $('.nav__menu').stop().slideDown();
        }
        
        // ANIMATION ICONE BURGER
        $('.menu__icon').toggleClass('icon--active');
    
        
    });
    
    // [MOBILE] Changement de sens de la flèche de la sous-catégorie du menu quand celle-ci est ouverte
    $('.menu__sub', this).click(function() {
       
        $(this).toggleClass('cat--opened');
        
        var subLinks = $(this).find('.sub__links')
        var isSubMenuVisible = subLinks.is(":visible");
        if (isSubMenuVisible) {
            subLinks.stop().slideUp();
        } else {
            subLinks.stop().slideDown();
        }
        
    });
    
});


