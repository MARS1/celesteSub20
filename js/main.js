$(document).ready(function() {

//Lettering
  $('h2, .welcome h5, .welcome h3').lettering();
  $('.welcome h3 span')
              .css('display','block')
              .css('float','left');

//Scrollorama
 var scrollorama = $.scrollorama({ blocks:'.scrollblock', enablePin:false });

//welcome

    //header
    scrollorama.animate('header #logo-big',{ delay:600, duration:70, property:'top', end:-180});
    scrollorama.animate('header .logo-small',{ delay:600, duration:70, property:'top', start:-100, end:10 });

    //Fifa logo
    scrollorama.animate('.fifa', { duration:600, property:'top', start:120, end:90 });
    scrollorama.animate('.fifa', { duration:600, property:'zoom',start:0.9, end:1.7 });

    //h2+h3
    $('h2 span, .welcome h3 span, h5 span').each(function() {
        scrollorama.animate($(this),{ duration:400, property:'opacity', start:1, end:0 });
        scrollorama.animate($(this),{ duration:400, property:'top', end: Math.random()*120-180 });
        scrollorama.animate($(this),{ duration:300, property:'rotate', start:0, end: Math.random()*720-360 });
    });

    //arrow
    scrollorama.animate('.welcome .arrow',{ duration:400, property:'height', start:140, end:380 });

//muchachos

    //h5
    scrollorama.animate('.muchachos h5', { delay:20, duration:300, property:'bottom', start:-1000, end:-20 });
    scrollorama.animate('.muchachos h5', { delay:630, duration:700, property:'rotate', start:0, end:10 });

    //h5 arrow
    scrollorama.animate('#first-arrow', { delay:780, duration:480, property:'height', start:0, end:380 });

    //Player 1
    scrollorama.animate('#player1', { delay:500, duration:900, property:'zoom', start:0, end:1 });
    scrollorama.animate('#player1', { delay:500, duration:900, property:'top', start:1000 });
    scrollorama.animate('#player1', { delay:500, duration:900, property:'rotate', start:-25, end:0 });

      //arrow
      scrollorama.animate('#player1 .arrow', { delay:1100, duration: 700, property:'height', start:0, end:500 });
      scrollorama.animate('#player1 .arrow', { delay:1100, duration: 700, property:'zoom', start:0, end:1 });
      scrollorama.animate('#player1 .arrow', { delay:1100, duration: 700, property:'top', start:50, end:200 });

    //Player 2
    scrollorama.animate('#player2', { delay:1300, duration: 400, property:'zoom', start:0, end:1 });

      //arrow
      scrollorama.animate('#player2 .arrow', { delay:1600, duration: 900, property:'height', start:0, end:500 });
      scrollorama.animate('#player2 .arrow', { delay:1600, duration: 900, property:'zoom', start:0, end:1 });
      scrollorama.animate('#player2 .arrow', { delay:1600, duration: 900, property:'top', start:50, end:200 });

    //Player 3
    scrollorama.animate('#player3', { delay:2200, duration: 600, property:'zoom', start:0, end:1 });

      //arrow
      scrollorama.animate('#player3 .arrow', { delay:2400, duration: 1200, property:'height', start:0, end:500 });
      scrollorama.animate('#player3 .arrow', { delay:2400, duration: 1200, property:'zoom', start:0, end:1 });
      scrollorama.animate('#player3 .arrow', { delay:2400, duration: 1200, property:'top', start:50, end:200 });

    //Player 4
    scrollorama.animate('#player4', { delay:2900, duration: 600, property:'zoom', start:0, end:1 });

      //arrow
      scrollorama.animate('#player4 .arrow', { delay:3100, duration: 1400, property:'height', start:0, end:500 });
      scrollorama.animate('#player4 .arrow', { delay:3100, duration: 1400, property:'zoom', start:0, end:1 });
      scrollorama.animate('#player4 .arrow', { delay:3100, duration: 1400, property:'top', start:50, end:200 });

    //Player 5
        scrollorama.animate('#player5',{ delay: 4000, duration: 300, property:'zoom', start:0, end:1 });
        scrollorama.animate('#player5',{ delay: 4000, duration: 1000, property:'center', start:100, end:100, easing:'easeOutBounce' });



});
