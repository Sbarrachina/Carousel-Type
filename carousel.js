

// carousel init
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, options);
  });

    let options = {
    indicator: true,
    numVisible: 5,
    padding: 15
  }
