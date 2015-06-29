$(function(){
        var stickyRibbonTop = $('#stickyribbon').offset().top;
          
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyRibbonTop ) {
                    $('#stickyribbon').css({position: 'fixed', bottom: '0px'});
                } else {
                    $('#stickyribbon').css({position: 'static', bottom: '0px'});
                }
        });
});
