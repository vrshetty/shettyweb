(function($){
  "use strict";
  
  // Calling verticalpage_scroll 
  $(".main").onepage_scroll({
    sectionContainer: "section", 
    easing: "ease", 
    animationTime: 1000, 
    pagination: true, 
    updateURL: true, 
    beforeMove: function(index) {}, 
    afterMove: function(index) {},
    loop: false, 
    keyboard: true, 
    responsiveFallback: 767, 
    direction: "vertical"
  });

  $('a.slide-down').click(function() {
    $(".main").moveDown();
  });
  
  $('a.contact-scroll').click(function() {
    $(".main").moveTo(7);
  });

  var $title      = $('.content-wrapper-inner-title'), 
  $innerTitle = $('.inner-title');

  /*enquire.register("screen and (min-width: 768px)", {
      match : function() { */
        // Circular Slider code
        var slider = $('#slider').CircularSlider({
          radius: 220,
          innerCircleRatio: '.5',
          handleDist: 60,
          min: 0,
          max: 359,
          value: 0,
          clockwise: true,
          labelSuffix: "",
          labelPrefix: "",
          shape: "Circle",
          touch: true,
          animate: true,
          animateDuration : 360,
          selectable: false,
          slide: function(ui, value) {
            var newUi   = ui,
                color   = 'factoid-color', 
                content = '.factoid-content',
                info    = '#factoid-content-',
                title   = '.ft';
            newUi = $('#factoid');
            
            var showContent = function (contentNumber, direction) {
              newUi.find(info + contentNumber)
                .show('slide', { direction: direction }, 300);
              newUi.find('.fact-title-' + contentNumber).addClass(color) 
                .css('opacity', '1').removeClass('pulse' + contentNumber);
            }

            var hideContent = function (contentNumber, title, direction) {
              newUi.find(info + contentNumber)
                .hide('slide', { direction: direction });
              newUi.find('.fact-title-' + contentNumber).removeClass(color)
                .css('opacity', '.2'); // .addClass('pulse' + contentNumber) if we want the pulsing to cont
            }

            if (value > 15 && value < 45)  {
              showContent(1, 'left') 
            } else {
              hideContent(1, title, 'left') 
            }
            if (value > 70 && value < 100)  { 
              showContent(2, 'left')
            } else {
              hideContent(2, title, 'left')
            }
            if (value > 129 && value < 160) { 
              showContent(3, 'left') 
            } else {
              hideContent(3, title, 'left')
            }
            if (value > 160 && value < 190) { 
              showContent(4, 'up') 
            } else {
              hideContent(4, title, 'up')
            }
            if (value > 215 && value < 235) { 
              showContent(5, 'right') 
            } else {
              hideContent(5, title, 'right')
            }
            if (value > 270 && value < 300) { 
              showContent(6, 'right') 
            } else {
              hideContent(6, title, 'right')
            }
            if (value > 315 && value < 335) { 
              showContent(7, 'right') 
            } else {
              hideContent(7, title, 'right')
            }
            if (value >= 0) {
              newUi.find('.jcs-indicator').css({
                transform: 'rotate(' + value + 'deg)'
              })
            }
          },
          formLabel: undefined
        });
        var valueArray = [0, 25, 80, 130, 178, 230, 290, 330]
        function setValueCallback(i){
          return function(){
            slider.setValue(i);
          }
        };
        for(var i = 0; i < valueArray.length; i++) {
          $('#factoid-info-' + i).hover(setValueCallback(valueArray[i]));
        }
      /*},  
      unmatch : function() {
        var valueArray = [0, 25, 80, 130, 178, 230, 290, 330]
        function setValueCallback(i){
          return function(){
            slider.setValue(i);
          }
        };
        for(var i = 0; i < valueArray.length; i++) {
          $('#factoid-info-' + i).unbind('hover');
        }
      }
  }); /**/

  // Products
  var applBlurb    = $('.appliance-content .prod-content-fadein').hide(),
      threatBlurb  = $('.threatlist-content .prod-content-fadein').hide(), 
      intelBlurb   = $('.intelligence-service-content .prod-content-fadein'), 
      prodCol      = $('#products .products-col'),
      cancel       = false;
  $(".appliance").hover(function() {
    prodCol.removeClass('active');
    cancel = (cancel) ? false : true;
    if (!cancel) {
      applBlurb.fadeOut(200);
    } else if (cancel) {
      applBlurb.fadeIn(200);
    }
  });
  $(".intelligence-service").hover(function() {
    prodCol.removeClass('active');
    cancel = (cancel) ? false : true;
    if (!cancel) {
      intelBlurb.fadeOut(200);
    } else if (cancel) {
      intelBlurb.fadeIn(200);
    }
  });
  $(".threatlist").hover(function() {
    prodCol.removeClass('active');
    cancel = (cancel) ? false : true;
    if (!cancel) {
      threatBlurb.fadeOut(200);
    } else if (cancel) {
      threatBlurb.fadeIn(200);
    }
  });
  $('.products-col').click(function() {
    var prodLink = $(this).find('.product-btn').attr('href');
    window.location = prodLink;
  });

  // Solutions 
  var cancel     = false,
      techBlurb  = $('.tech-sector-content .solution-content-fadein').hide(),
      finBlurb   = $('.financial-sector-content .solution-content-fadein').hide(), 
      govBlurb   = $('.gov-sector-content .solution-content-fadein').hide(); 
  
  $(".technology-sector").hover(function() {
    cancel = (cancel) ? false : true;
    if (!cancel) {
      techBlurb.fadeOut(200);
    } else if (cancel) {
      techBlurb.fadeIn(200);
    }
  });
  $(".financial-sector").hover(function() {
    cancel = (cancel) ? false : true;
    if (!cancel) {
      finBlurb.fadeOut(200);
    } else if (cancel) {
      finBlurb.fadeIn(200);
    }
  });
  $(".government-sector").hover(function() {
    cancel = (cancel) ? false : true;
    if (!cancel) {
      govBlurb.fadeOut(200);
    } else if (cancel) {
      govBlurb.fadeIn(200);
    }
  });
  $('.solution').click(function() {
    var solutionLink = $(this).find('.solutions-btn a').attr('href');
    window.location = solutionLink;
  });

  $('#blog-feed').rss('http://darkmatters.norsecorp.com/feed/', {
    limit: 6,
    tokens: {
      articleImage: function(entry, tokens) { 
        var image = entry.mediaGroups,
        imageURL = image[0]['contents'][0]['url'];
        return imageURL; 
      }
    },
    layoutTemplate: '<div class="blog-items">{entries}</div>',
    entryTemplate:'<div class="media"><div class="media-left"><a href="{url}"><img class="media-object" src="{articleImage}" /></a></div><div class="media-body"><p><a href="{url}">{title}</a></p></div></div>',
  });
  
}(jQuery));