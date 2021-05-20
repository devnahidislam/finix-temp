$(document).ready(function () {
  $('#owl-one').owlCarousel({
    loop: true,
    margin: 90,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed:2000,
    dots: false,
    
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4,
        margin: 10,
      },
      993: {
        items: 5
      }
    }
  });

  $('#owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 5
      },
      1000: {
        items: 6
      }
    }
  });
  $('#owl-three').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    cloned:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  $('#owl-four').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

});