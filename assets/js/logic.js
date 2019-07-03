function debounce(func, wait = 35, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        var element = document.getElementById("lightDarkSection");
        element.classList.remove('old-class');
        element.classList.add("new-class");
        sliderImage.classList.add('scale-up-hor-left');
      } 
    //   else {
    //     var element = document.getElementById("lightDarkSection");
    //     element.classList.remove('new-class');
    //     element.classList.add("old-class");        
    //     sliderImage.classList.remove('scale-up-hor-left');
    //   }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));