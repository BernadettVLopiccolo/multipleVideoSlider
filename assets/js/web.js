// $('.responsive').slick({
//   dots: true,
// 	prevArrow: $('.prev'),
// 	nextArrow: $('.next'),
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
//   ]
// });

// $('.multi-item-carousel').carousel({
//   interval: false
// });

// // for every slide in carousel, copy the next slide's item in the slide.
// // Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   } else {
//     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });