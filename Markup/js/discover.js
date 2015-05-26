$('.more-toggle-btn').click(function(){
    $(this).prev('.more-toggle-wrapper').toggleClass('expand');
    $(this).html(function(){
        if($(this).prev('.more-toggle-wrapper').hasClass('expand')){
            $(this).html('Show Less');
        }
        else{
            $(this).html('Show All');
        }
    });
});

$('.ctrl-wr-asset').click(function(){
    $(this).toggleClass('selected');
});