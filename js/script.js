var a = $(".welcome").offset().top;
var color = '#ff9966';
var maxParticles = 120;

$(document).scroll(function() {
    if ($(this).scrollTop() > a) {
        $(".navbar-nav>li>a").addClass("dark");
        $(".navbar").css("transition", ".8s");
        $(".navbar-menu").css("background-color", "#212121");
    } else {
        $(".navbar-nav>li>a").removeClass("dark");
        $(".navbar").css("transition", ".6s");
        $(".navbar-menu").css("background-color", "rgba(0, 0, 0, 0.3)").css("box-shadow", "none");
    }
});

Particles.init({
  selector: '#particles-js',
  color: color,
  maxParticles: maxParticles,
  connectParticles: true,
  speed: 0.5
});

jQuery(document).ready(function($) {
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top - 90
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
}(jQuery));
