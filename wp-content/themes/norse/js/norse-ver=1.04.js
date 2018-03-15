(function ($) {
	
	"use strict";

	$(document).ready(function() {

		// Comments
		$(".commentlist li").addClass("panel panel-default");
		$(".comment-reply-link").addClass("btn btn-default");
	
		// Forms
		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');
	    
		// Master color
		var mc = $('input[name=global_master_color]').val(),
		    mclt = ColorLuminance(mc, 0.25),
		    mclt2x = ColorLuminance(mc, 0.5),
		    mclt3x = ColorLuminance(mc, 0.75);
		$('h2, h5, .master-color').css('color',mc);
		$('.master-color.lighter').css('color',mclt);
		$('.master-color.lighter2x').css('color',mclt2x);
		$('.master-color.lighter3x').css('color',mclt3x);
		$('.fc-simple-list li').css('border-left-color',mc);
		$('.master-color-bg, .fc-icon-list').css('background-color',mc);

		// Init Bootstrap popovers
		$.fn.extend({
		    popoverClosable: function (options) {
		        var defaults = {
			        template: '<div class="popover team-bio"><div class="arrow"></div><button type="button" class="close" data-dismiss="popover" aria-hidden="true">&times;</button><h4 class="popover-title"></h4><p class="popover-content"></p></div>'
		        };
		        options = $.extend({}, defaults, options);
		        var $popover_togglers = this;
		        $popover_togglers.popover(options);
		        $popover_togglers.on('click', function (e) {
		            e.preventDefault();
		            $popover_togglers.not(this).popover('hide');
		        });
		        $('html').on('click', '[data-dismiss="popover"]', function (e) {
		            $popover_togglers.popover('hide');
		        });
		    }
		});

	    $('[data-toggle="popover"]').popoverClosable();

		
		// Init localScroll
		$.localScroll({
			duration: 500,
			hash: true
		});


		/*
		Isotope Init
		*/
		  $(function () {
		  	var hashID = "." + window.location.hash.substring(1);
		    var $container = $('#isotope'),
		      filters = {};
		    $container.isotope({
		      itemSelector: '.item'
		    });

		    $(window).load(function(){
			    $container.imagesLoaded(function(){
			        $container.isotope({
			            itemSelector: ".item",
			            filter: hashID, // the variable filter hack
			        });             
			    });
			});

		    $('select').change(function () {
		      var $this = $(this),
		        selectGroup = $this.attr('data-filter-group');
		      console.log("data-filter-group: " + selectGroup);
		      filters[selectGroup] =
		        $this.find(':selected').attr('data-filter-value');

		      var isoFilters = [];
		      for (var prop in filters) {
		        isoFilters.push( filters[ prop ] );
		      }
		      
		      var selector = isoFilters.join('');
		      console.log("data-filter-value: " + selector);
		      $container.isotope({ filter: selector });
		      return false;
		    });

		    $('.filter-item').click(function() {
		      var $this = $(this), 
		          contentTypeGroup = $this.parent().attr('data-filter-group');
		      console.log("data-filter-group: " + contentTypeGroup);
		      filters[ contentTypeGroup ] = $this.attr('data-filter-value');
		      
		      var isoFilters = [];
		      for ( var prop in filters ) {
		        isoFilters.push(filters[prop]);
		      }
		      
		      var selector = isoFilters.join('');
		      console.log("data-filter-value: " + selector);
		      $container.isotope({ filter: selector });
		      return false; 
		    });
		      
		});

  $('.filters li a').on('click', function() {
    $('li a.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });


	});
/*
Main Search Field
*/
	var searchSpan = $( '#search-nav .search-button span' ),
	    searchField = $('#search-nav .search-field'),
	    searchButton = $('#search-nav .search-button'),
	    searchButtonIcon = $('#search-nav .search-button i'),
	    searchInput = $('input#global-search'),
	    isOpen = false;
	searchButton.click(
	    function() {
	      if (isOpen === false) {
	      	searchButtonIcon.removeClass('glyphicon-search').addClass('glyphicon-remove-circle');
	        searchField.addClass('expanded');
	        searchSpan.addClass('fadeout');
	        searchInput.focus();
	        console.log('hello')
	        isOpen = true;
	      } else {
	
	      	searchButtonIcon.removeClass('glyphicon-remove-circle').addClass('glyphicon-search');
	        searchField.removeClass('expanded')
	        searchSpan.removeClass('fadeout');
	        searchInput.focusout();
	        isOpen = false;
	      };
	    }
	);
    
	// searchInput.focusout(
	// 	function() {
	// 		if (isOpen === true) {
	// 	      	searchButtonIcon.removeClass('glyphicon-remove-circle').addClass('glyphicon-search');
	// 	        searchField.removeClass('expanded');
	// 	        searchSpan.removeClass('fadeout');
	// 	        isOpen = false;
	// 		};
	// 	}
	// );	      	


	function ColorLuminance(hex, lum) {

		// validate hex string
	//	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	//	if (hex.length < 6) {
	//		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	//	}
	//	lum = lum || 0;

	
		// convert to decimal and change luminosity
	//	var rgb = "#", c, i;
	//	for (i = 0; i < 3; i++) {
	//		c = parseInt(hex.substr(i*2,2), 16);
	//		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
	//		rgb += ("00"+c).substr(c.length);
	//	}

	//	return rgb;
	}

}(jQuery));
