$(function(){
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });

    $('.gnb>li').hover(function(){
        $(this).find('.lnb').slideToggle(1000);
    });

    $('.mobile-nav-box>li').click(function(){        
        if($(this).find('.fa-solid').hasClass('fa-angle-down')){
            $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
        }else{
            $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
        $(this).find('.mobile-lnb').slideToggle();
    });

    $('.menu').click(function(){
        $('.wrapper').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }).animate({
            left: '-70%'
        }, 500);

        $('.fadeblack').css({
            display:'block',
            top:0,
            left: '100%'
        }).animate({
            left: 0
        }, 500);

        $('.xclose').click(function(){
            $('.wrapper').animate({
                left: 0
            }, 500, function(){
                $('.wrapper').css('position',
                'relative');
            });
            $('.fadeblack').animate({
                left: '100%'
            }, 500, function(){
                $('.fadeblack').css('display','none');
            })
        })
    });

});