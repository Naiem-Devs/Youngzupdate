(function($) {
  "use strict";
  
              // owlCarousel
              $(".slider_sec").owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                navText: [
                '<p>לכה גצה</p> ',
                '<p>הדובע ואצמ</p>'
                ],
                nav: true,
                dots: false,
                responsive: {
                0: {
                    items: 1,
                    margin: 300
                },
                450: {
                    items: 2,
                    margin: 300
                },
                550: {
                    items: 2,
                    margin: 200
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                }
                }
            });
  
 
})(jQuery);
