function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
  });
}

preload([
  'images/shadow.png',
  'images/mount-center.png',
  'images/houses.png',
  'images/windows-light.png',
  'images/windows-dark.png',
  'images/rink.png',
  'images/rink-front.png',
  'images/tree.png',
  'images/general-light.png',
]);

$(window).load(function() {

  $('#start').addClass('active');

  function playCard(){
    $('.card').removeClass('active').addClass('inactive');
    $('#replay').removeClass('active');
    setTimeout(function(){
      $('.card').removeClass('inactive').addClass('active')
    }, 50);
    $('audio')[0].play();
    setTimeout(function(){
      $('#replay').addClass('active');
    }, 15000);
  }

  $('body').on('click', '#start.active', function(){
    $('#start').removeClass('active');
    playCard();
  });

  $('body').on('click', '#replay.active', function(){
    playCard();
  });

});