$(document).ready(function () {
  var tabsItem = $('.tabs-item:not(.tabs-item-bookmark)');
  tabsItem.on('click', function (event) {
    event.preventDefault();

    var activeContent = $(this).attr('href');
    $('.tabs-content-visible').toggleClass('tabs-content-visible');
    $(activeContent).toggleClass('tabs-content-visible');

    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  });

  var showMore = $('#more');
  showMore.on('click', function (event) { 
    event.preventDefault();
    $('html').animate({
      scrollTop: $(this.hash).offset().top
    }, 800, function () {
      // и зачем я сделал этот велосипед...
      window.location.hash = showMore[0].hash;
    });
  });

  var willWatch = $('#button-willwatch');
  willWatch.on('click', function () {
    this.innerText = 'Добавлено!';
  });
});