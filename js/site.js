$(document).ready(function(){

  var images = [
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-3.jpg',
    '/images/img-4.jpg',
    '/images/img-5.jpg',
    '/images/img-6.jpg',
  ];

  var i = 0;

  console.log(window.screen.width);

  if(window.screen.width >= 380) {
    setInterval(function() {
      $('.image img').fadeOut(1000, function(){
        $('.image img').attr('src', images[i]).fadeIn(1200);
      });
      i++;
      if (i == images.length) { i = 0 };
    }, 6000);
  };

});
