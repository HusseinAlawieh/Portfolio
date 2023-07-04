$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var navbar = $('.nav');
    
        if (scroll >= 20) {
          navbar.addClass('sticky');
        } else {
          navbar.removeClass('sticky');
        }
    });

        // Toggle menu/nav script
        $('.menu-btn').click(function() {
            $('.nav .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        })

         // Typing Animation. 
         var typed = new Typed(".typing__1", {
        strings: ["I'm a Software Engineer.", "I'm a Full-Stack Developer.", "Learning Enthusiast."],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true
    })

        // Typing Animation. 
        var typed = new Typed(".typing__2", {
        strings: ["I'm a Software Engineering Student", "Currently working as FullStack Developer at BIMPOS"],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true
    })    

    //image in about us section

    $(window).scroll(function() {
      var image = $(".fade-in-image");
      var imageTop = image.offset().top;
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var scrollBottom = scrollTop + windowHeight;
      var sectionTop = $(".about").offset().top;
      var sectionBottom = sectionTop + $(".about").height();
  
      if (scrollTop + windowHeight > imageTop && scrollTop < sectionBottom) {
        image.addClass("show");
        image.removeClass("hide");
      } else {
        image.addClass("hide");
        image.removeClass("show");
      }
    });

    //skills 
    $(window).on('scroll', function() {
      var bars = $('.bars');
      var barsPosition = bars.offset().top;
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
    
      if (barsPosition < windowHeight + scrollPosition) {
        bars.find('.html').addClass('filled');
        bars.find('.css').addClass('filled');
        bars.find('.js').addClass('filled');
        bars.find('.php').addClass('filled');
        bars.find('.java').addClass('filled');
        bars.find('.cpp').addClass('filled');
        bars.find('.android').addClass('filled');
        bars.find('.angular').addClass('filled');
        bars.find('.vue').addClass('filled');
        bars.find('.laravel').addClass('filled');
        bars.find('.mysql').addClass('filled');
        bars.find('.firebase').addClass('filled');
      } else {
        bars.find('.html').removeClass('filled');
        bars.find('.css').removeClass('filled');
        bars.find('.js').removeClass('filled');
        bars.find('.php').removeClass('filled');
        bars.find('.java').removeClass('filled');
        bars.find('.cpp').removeClass('filled');
        bars.find('.android').removeClass('filled');
        bars.find('.angular').removeClass('filled');
        bars.find('.vue').removeClass('filled');
        bars.find('.laravel').removeClass('filled');
        bars.find('.mysql').removeClass('filled');
        bars.find('.firebase').removeClass('filled');
      }
    });


});

