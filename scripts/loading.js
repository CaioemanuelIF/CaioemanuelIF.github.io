$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(10).fadeOut('slow'); 
    $('body').delay(80).css({'overflow': 'visible'});
  })
