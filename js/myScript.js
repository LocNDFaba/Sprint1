$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
    })

    $('.submenu').click(function(){
        $(this).toggleClass('show');
        $(this).find('.dropdown-menu').toggleClass('show');
    })

    //click outside nav-menu will close menu on mobile
    const $menu = $("header");
    $(document).click(function (e) {
        if($('.collapse.show').length) {
            console.log("expanded menu");

            if (!$menu.is(e.target) // if the target of the click isn't the container...
                && $menu.has(e.target).length === 0) // ... nor a descendant of the container
            {
                //console.log("outside menu");
                $('.collapse.show').removeClass('collapse show');
                setTimeout(function () {
                    $('.navbar-collapse.show').addClass('collapsing');
                },600)
                $('.navbar-collapse.show').removeClass('collapsing show');
                $('.navbar-collapse').addClass('collapse');
                $('.toggle').toggleClass('active');
            }
        }
    });




    //sticky menu javascript
    window.onscroll = function() {stickyMenu()};

    var navbar = document.querySelector("header");
    var sticky = navbar.offsetTop;

    function stickyMenu()
    {
        console.log(sticky);
        if (window.pageYOffset - 220 > sticky)
        {
            navbar.classList.add("navbar-fixed")
        }
        else
        {
            navbar.classList.remove("navbar-fixed");
        }
    }

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    });



    $('.nav-pills .nav-item .nav-link').click(function(){
        $('.nav-pills .nav-item .nav-link.active').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane.fade.active.show').fadeOut(300);
        $('.tab-pane.fade.active.show').css("display","none");
        $('.tab-pane.fade.active.show').removeClass('show active');
        var idStr = $(this).attr("href");
        $(idStr).fadeIn(300);
        $(idStr).addClass('show active');
        $(idStr).css("display","block");
    });


    new WOW().init();
})