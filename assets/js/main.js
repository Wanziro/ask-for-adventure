$("#multiSlider").carousel({
  //   interval: 5000,
});

// $("#recipeCarousel").carousel({
//   interval: 10000,
// });

$(".multi-caraousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

$(document).ready(function () {
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 500) {
      $("#header").addClass("header-bg");
    } else {
      $("#header").removeClass("header-bg");
    }
  });
});
