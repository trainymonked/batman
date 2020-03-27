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

  var bookmarkAdded = $('.tabs-item-bookmark');
  bookmarkAdded.on('click', function (event) {
    event.preventDefault();
    // заменить на всплывашку по центру
    alert('Уже добавлено в закладки!');
  });
});